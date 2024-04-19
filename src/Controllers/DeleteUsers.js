
const { USUARIOS } = require("../db")

const DeleteUsers = async (userID) => {
    const user = await USUARIOS.findByPk(userID);

    if (!user) {
        throw new Error("Usuario no Encontrado")
    }

    const userToDelete = {
        id: user.id,
        nombre: user.nombre,
        correo: user.correo
    }
    const confirmacion = await askConfirmacio("Estas Seguto que deseas eliminar este usuario?")

    if (confirmacion.toLowerCase() === "s") {
        await user.destroy()
        return userToDelete
    } else {
        console.log("Eliminacion cancelada")
        return null 
    }


}


module.exports = DeleteUsers;