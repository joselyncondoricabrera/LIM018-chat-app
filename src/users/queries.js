const getUsers = 'select * from usuario';
const getUsersById = 'select * from usuario where idusuario = $1';
const checkEmailExits =
  'select persona from usuario persona where persona.correo = $1';
const addUser =
  'insert into usuario (nombre,correo,contraseña) VALUES($1,$2,$3)';

const removeUser = 'delete from usuario where idusuario=$1';

const updateUser = 'update usuario set nombre = $1 where idusuario = $2';

module.exports = {
  getUsers,
  getUsersById,
  checkEmailExits,
  addUser,
  removeUser,
  updateUser,
};
