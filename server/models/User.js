'use strict';
const moment  = require('moment');
const { sequelize, Sequelize } = require('../config/db');
const Role = require('./Role');

var User = sequelize.define('user', {
  name: Sequelize.STRING,
	mother_lastname: Sequelize.STRING,
	father_lastname: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.BIGINT,
  role_id: Sequelize.INTEGER,
  status: Sequelize.TINYINT,
}, {
	timestamps: false,
	getterMethods: {
		fullname() {
			return this.name + (this.father_lastname ? ' ' + this.father_lastname : '') + (this.mother_lastname ? ' ' + this.mother_lastname : '');
		},
	}
});

User.belongsTo(Role, { foreignKey: 'role_id' });

module.exports = User;