const { USUARIOS } = require("../db")

const updateUsers = async(usersID) => {
    const users = await USUARIOS.findByPk(usersID);
    return users;
}

module.exports = updateUsers;