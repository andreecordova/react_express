'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
			father_lastname: {
        type: Sequelize.STRING
      },
      mother_lastname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
			address: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.TINYINT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};