'use strict';
const moment  = require('moment');
const { sequelize, Sequelize } = require('../config/db');

const Role = sequelize.define('account', {
  role: Sequelize.STRING
},{
	timestamps: true
});

module.exports = Role;