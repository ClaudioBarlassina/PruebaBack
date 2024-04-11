const { Users } = require("../db"); // "Users" debe ser el nombre de la tabla

const createUsers = async (userData) => {
  

  // console.log(parametro)
  const NewUsers = await Users.create(userData);
  return NewUsers;
};

module.exports = createUsers;
