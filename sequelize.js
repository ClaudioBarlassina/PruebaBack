const { Sequelize } = require("sequelize");

const { DATABASE_URL } = process.env;
const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Solo necesario si Render requiere SSL para la conexión
      }
    }
  });
  
  module.exports = sequelize;