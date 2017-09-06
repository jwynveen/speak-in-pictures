'use strict';

module.exports = {
  port: 1339,

  datastores: {
    default: {
      adapter: 'waterline-postgresql',
      connection: {
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
};
