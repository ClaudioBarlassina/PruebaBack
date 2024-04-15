const { USUARIOS } = require("../db")

const updateUsers = async (userData, usersID) => {
    
    const users = await USUARIOS.findByPk(usersID);
    
   const New = await users.update(userData)
    return userData;
}

module.exports = updateUsers;