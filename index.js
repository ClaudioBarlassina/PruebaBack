// const server = require("./src/server.js")
const sequelize = require("./sequelize.js")
const {conn} = require("./src/db.js")
const PORT = 3500;


//-----------------------------------------------------------------------------------------------------

conn.sync().then(() => {

    sequelize.sync()
  .then(() => {
    console.log('Database synced successfully');
    // Tu lógica de aplicación aquí
  })
    
    // server.listen(PORT, () => {
    //     console.log(`server listening on port ${PORT}`)   //` ` COMILLAS ALT+96
    // })
})