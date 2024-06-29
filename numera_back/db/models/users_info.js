const { Sequelize } = require('sequelize');
const sequelize = require("../database");

module.exports = sequelize.define(("customer_info"),{
    id: {
        field: "customer_id",
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        field: "first_name",
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        field: "last_namee",
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        field: "address",
        type: Sequelize.STRING,
        allowNull: false,
    },
},
    { 
        tableName: 'customer_info',
        timestamps: false
    }
)