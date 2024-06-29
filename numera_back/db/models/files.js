const { Sequelize } = require('sequelize');
const sequelize = require("../database");

module.exports = sequelize.define(("files"),{
    userId: {
        field: "customer_id",
        type: Sequelize.UUID,
        allowNull: false,
    },
    file_id: {
        field: "file_id",
        type: Sequelize.UUID,
        allowNull: false,
    },
},
    {
        timestamps: false
    }
)
