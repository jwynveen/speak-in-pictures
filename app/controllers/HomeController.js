'use strict';

module.exports = {
  async index(context) {
    await context.render();
    /*const users = await DB.User.find();
    await context.render({
      items: users,
    });*/
  },

  async modernBrowser(context) {
    await context.render();
  },

  async kitchenSink(context) {
    await context.render();
  },
};
