const pool = require('../../db');

const getUsers = async (req, res) => {
  //   res.send('getting users');
  //   console.log('getting users');

  pool.query('select * from usuario', (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });

  //   try {
  //     const resp = await pool.query('select * from usuario');
  //     console.log(res.rows);
  //     res.send(resp.rows);
  //   } catch (e) {
  //     console.log(e);
  //   }
};

module.exports = {
  getUsers,
};
