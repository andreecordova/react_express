'use strict';
const moment  = require('moment');
const { sequelize, Sequelize } = require('../config/db');

var User = sequelize.define('user', {
  name: Sequelize.STRING,
  father_lastname: Sequelize.STRING,
  mother_lastname: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.BIGINT,
  status: Sequelize.TINYINT
}, {
	timestamps: false,
	getterMethods: {
		fullname() {
			return this.name + (this.father_lastname ? ' ' + this.father_lastname : '') + (this.mother_lastname ? ' ' + this.mother_lastname : '');
		},
	}
});

module.exports = User;