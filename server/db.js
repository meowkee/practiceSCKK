const {Sequelize} = require('sequelize');

module.exports = new Sequelize({
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE
});