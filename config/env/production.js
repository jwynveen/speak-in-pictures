'use strict';

const winston = require('winston');

module.exports = {
  port: 80,

  datastores: {
    default: {
      adapter: 'waterline-postgresql',
      connection: process.env.DATABASE_URL || {
        database: process.env.DATABASE_NAME || 'speak-in-pictures',
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER || 'speak_in_pictures',
        password: process.env.DATABASE_PASSWORD,
        port: process.env.DATABASE_PORT || 5432,
        ssl: false,
      },
      pool: {
        min: 2,
        max: 20,
      },
    },
  },

  librato: {
    email: process.env.LIBRATO_EMAIL,
    token: process.env.LIBRATO_TOKEN,
    prefix: 'production.',
  },

  log: {
    logger: new winston.Logger({
      level: 'info',
      exitOnError: false,
      transports: [
        new winston.transports.Console({
          timestamp: true,
        }),
      ],
    }),
  },
};
