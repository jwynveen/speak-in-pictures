'use strict';

module.exports = {
  tableName: 'meaning_image',

  attributes: {
    meaning: { model: 'meaning' },
    url: 'string',
    createdBy: { model: 'user' },
    isDeleted: 'boolean',
  },
};
