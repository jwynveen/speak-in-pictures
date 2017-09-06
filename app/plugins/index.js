'use strict';

const ejs = require('./ejs');
const waterlinePostgres = require('./waterline-postgres');
const librato = require('./librato');

module.exports = {
  startup: (app) => {
    return Promise.all([
      ejs.startup(app),
      waterlinePostgres.startup(app),
      librato.startup(app),
    ]);
  },
  shutdown: () => {
    return Promise.all([
      librato.shutdown(),
    ]);
  },
};
