const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Appointment = sequelize.define('Appointment', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Appointment;