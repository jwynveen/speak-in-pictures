'use strict';

module.exports = {
  async index(context) {
    await context.render({
      query: context.query.q,
    });
  },
};
