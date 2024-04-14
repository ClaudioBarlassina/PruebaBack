const { USUARIOS } = require("../db")

const updateUsers = (UsersID , UsersData) => {
    const users = USUARIOS.findByID(UsersID)
    return users;
}

module.exports = updateUsers;