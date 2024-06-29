const { Sequelize } = require('sequelize');
const sequelize = require("../database");

module.exports = sequelize.define(("customers"),{
    id: {
        field: "id",
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    email: {
        field: "email",
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        field: "password",
        type: Sequelize.STRING,
        allowNull: false,
    }
},
    {
        timestamps: false
    }
)
