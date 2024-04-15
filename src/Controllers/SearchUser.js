const { USUARIOS } = require("../db")

const SearchUser = async (userId) => {
    const search = USUARIOS.findById(userId)
    return search;
}

module.exports = SearchUser;