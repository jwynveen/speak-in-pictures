'use strict';

module.exports = {
  async index(context) {
    await context.render();
    /*const pool = new Pool({
     // user: 'dbuser',
     host: 'localhost',
     port: 5432,
     database: 'speak-in-pictures',
     // password: 'secretpassword',
     });

     const results = await pool.query('SELECT * from test_spike');
     const rows = results.rows;

     pool.end();*/

    await context.render({
      // items: rows,
      items: [{ name: 'fake' }],
    });
  },

  async modernBrowser(context) {
    await context.render();
  },
};
