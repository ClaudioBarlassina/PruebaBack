const { USUARIOS } = require("../db")

const updateUsers = async(usersID) => {
    const users = await USUARIOS.findById(3);
    return users;
}

module.exports = updateUsers;