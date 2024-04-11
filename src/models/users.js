const { DataTypes } = require("sequelize")


module.exports = sequelize => {
    sequelize.define("Users", {
        
        Nombre: {
            type: DataTypes.STRING,
            
        }
    })
}
// module.exports = sequelize => {
//     sequelize.define("Nombre_del_modelo", {
//         ID: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             primaryKey:true,
//         }
//     })
// }