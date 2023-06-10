const {Sequelize} = require('sequelize');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '.env')});

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PWD, {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  dialect:process.env.POSTGRES_DIALECT
})

module.exports = {sequelize}