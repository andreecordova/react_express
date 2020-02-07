require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME   || 'root',
    password: process.env.DB_PASSWORD   || 'root',
    database: process.env.DB_DATABASE   || 'test',
    host: process.env.DB_WRITE_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    "define": {
      "charset": "utf8mb4",
      "collate": "utf8mb4_general_ci",
    }
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql'
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql'
  }
}
