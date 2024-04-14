const { USUARIOS } = require("../db")

const updateUsers = (UsersID , UsersData) => {
    const users = USUARIOS.findByPk(UsersID)
    return users;
}

module.exports = updateUsers;