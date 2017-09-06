'use strict';

const _ = require('lodash');
const fs = require('mz/fs');
const path = require('path');
const Waterline = require('waterline');
const postgresAdapter = require('waterline-postgresql');
const logService = require('../../services/logService');

module.exports = {
  startup: async function waterlinePostgresPluginStartup() {
    const modelsPath = path.join(__dirname, '../../models');
    try {
      if (KoaConfig.datastores) {
        const waterline = new Waterline();
        const files = await fs.readdir(modelsPath);
        for (const file of files) {
          if (/.js$/ig.test(file)) {
            const fileBasename = path.basename(file, '.js');
            /* eslint-disable global-require, import/no-dynamic-require */
            const schema = require(`${modelsPath}/${fileBasename}`);
            /* eslint-enable global-require, import/no-dynamic-require */

            const model = _.merge({
              identity: fileBasename.toLowerCase(),
              globalId: fileBasename,
              tableName: fileBasename.toLowerCase(),
              connection: 'default',
              migrate: process.env.NODE_ENV === 'development' ? 'alter' : 'safe',
              dynamicFinders: false,
            }, schema);

            waterline.loadCollection(Waterline.Collection.extend(model));
          }
        }

        const waterlineConfig = {
          adapters: {
            'waterline-postgresql': postgresAdapter,
          },
          connections: KoaConfig.datastores,
        };

        global.DB = {};

        await new Promise((resolve, reject) => {
          waterline.initialize(waterlineConfig, (err, orm) => {
            if (err) {
              return reject(err);
            }

            _.each(orm.collections, (model) => {
              global.DB[model.globalId || 'unknown'] = model;
            });

            return resolve();
          });
        });
      }
    } catch (ex) {
      logService.error(ex);
      logService.warn(`No waterline models detected in ${modelsPath}`);
    }
  },
};
