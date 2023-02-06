const pool = require('../../db');
const queries = require('./queries');

const getUsers = (req, res) => {
  //   res.send('getting users');
  //   console.log('getting users');

  pool.query(queries.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  pool.query(queries.getUsersById, [parseInt(id, 10)], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addUsers = (req, res) => {
  const { nombre, correo, contraseña } = req.body;
  // const { correo } = req.body;

  // verificar si el correo existe
  pool.query(queries.checkEmailExits, [correo], (error, results) => {
    if (results.rows.length) {
      res.send('email exits');
    }
  });

  // añadir nuevo usuario a db
  pool.query(
    queries.addUser,
    [nombre, correo, contraseña],
    // eslint-disable-next-line no-unused-vars
    (error, results) => {
      if (error) throw error;
      res.status(201).send('user created successfully!!');
    }
  );
};

const removeUsers = (req, res) => {
  const { id } = req.params;

  // eslint-disable-next-line no-unused-vars
  pool.query(queries.getUsersById, [parseInt(id, 10)], (error, results) => {
    const noUserFound = !results.rows.length;

    if (noUserFound) {
      res.send('Users does not exits in the database');
    }

    // eslint-disable-next-line no-unused-vars
    pool.query(queries.removeUser, [parseInt(id, 10)], (err, result) => {
      if (err) throw err;
      res.status(200).send('user updated successfully!!');
    });
  });
};

const putUsers = (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;

  // eslint-disable-next-line no-unused-vars
  pool.query(queries.getUsersById, [parseInt(id, 10)], (error, results) => {
    const noUserFound = !results.rows.length;

    if (noUserFound) {
      res.send('Users does not exits in the database');
    }

    pool.query(
      queries.updateUser,
      [nombre, parseInt(id, 10)],
      // eslint-disable-next-line no-unused-vars
      (err, result) => {
        if (err) throw error;
        res.status(200).send('user updated successfully!!');
      }
    );
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUsers,
  removeUsers,
  putUsers,
};
