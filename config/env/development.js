'use strict';

module.exports = {
  port: 1339,

  datastores: {
    default: {
      /**
       * This 'connection' object could also be a connection string
       * e.g. 'postgresql://user:password@localhost:5432/databaseName?ssl=false'
       */
      adapter: 'waterline-postgresql',
      connection: process.env.DATABASE_URL || {
        database: process.env.DATABASE_NAME || 'speak-in-pictures',
        host: process.env.DATABASE_HOST || 'localhostfoo',
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

  views: {
    cache: false,
  },

  librato: {
    simulate: true,
    prefix: 'development.',
  },
};
