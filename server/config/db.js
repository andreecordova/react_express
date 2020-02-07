require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.DB_DATABASE   || 'test',
    process.env.DB_USERNAME   || 'root',
    process.env.DB_PASSWORD   || 'root',
    {
    host: process.env.DB_WRITE_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    operatorsAliases: false,
    define: {
        charset: 'utf8mb4',
        timestamps: true,
        dialectOptions: {
            collate: 'utf8mb4_general_ci'
        }
    },
    logging:(process.env.NODE_ENV !== 'production' ? console.log : null),
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true
    },
    timezone: '-05:00'
});

sequelize.authenticate()
  .then(() => {
    // console.log('Connection has been established successfully.');
  })
  .catch(err => {
    if (err) throw err;
  });

module.exports = { sequelize, Sequelize};
