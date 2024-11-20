const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Expenses = sequelize.define('Expense', {
    exAmount: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Expenses;