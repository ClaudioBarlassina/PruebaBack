const { Users } = require("../db")  // "Users" debe ser el nombre de la tabla 

const getAllUsers = async () => {

    const Allusers = await Users.findAll();
    return Allusers;
   
}

module.exports = getAllUsers