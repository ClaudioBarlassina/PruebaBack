const { USUARIOS } = require("../db")

const updateUsers = async(usersID) => {
    const users = await USUARIOS.findById(usersID)
    return users;
}

module.exports = updateUsers;