const { USUARIOS } = require("../db")

const updateUsers = async (userData, usersID) => {
    
    const users = await USUARIOS.findByPk(usersID);
    
   const New = await users.Update(userData)
    return New;
}

module.exports = updateUsers;