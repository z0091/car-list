const Sequelize = require('sequelize');
const models = require('./models');
const config = require('../config/config');

const dbConfig = config.get('db');

// Create db connection
const sequelize = new Sequelize(dbConfig.dbname, dbConfig.dbuser, dbConfig.dbpass, dbConfig.dpoptions);

module.exports = models(sequelize);
module.exports.sequelize = sequelize;
