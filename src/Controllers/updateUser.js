const { USUARIOS } = require("../db")

const updateUsers = async(UsersID , UsersData) => {
    const users = await USUARIOS.findByPk(UsersID)
    return users;
}

module.exports = updateUsers;