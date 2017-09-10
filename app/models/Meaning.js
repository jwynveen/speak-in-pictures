'use strict';

module.exports = {
  tableName: 'meaning',

  attributes: {
    name: 'string',
    description: 'string',
    tags: 'array',
    images: {
      collection: 'meaningImage',
      via: 'meaning',
    },
  },
};
