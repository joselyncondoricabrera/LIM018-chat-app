const { Pool } = require('pg');

const config = {
  user: 'postgres',
  host: 'localhost',
  password: 'postgres',
  database: 'postgres',
  port: 5432,
};
const pool = new Pool(config);

// const getUser = async () => {
//   try {
//     const res = await pool.query('select * from usuario');
//     console.log(res.rows);
//   } catch (e) {
//     console.log(e);
//   }
// };

// const insertUser = async () => {
//   try {
//     const text =
//       'INSERT INTO usuario(idusuario,nombre,correo,contraseña) VALUES($1, $2, $3, $4)';
//     const values = [2, 'Jackelin', 'jacki@gmail.com', '123456'];

//     const res = pool.query(text, values);
//     console.log(res);
//   } catch (e) {
//     console.log(e);
//   }
// };

// insertUser();
// getUser();

module.exports = pool;
