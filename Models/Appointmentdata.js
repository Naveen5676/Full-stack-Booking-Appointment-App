const Sequelize = require('sequelize');

const sequelize = require('../Util/database');

const Appointmentdata = sequelize.define('appointmentdata',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    phoneno:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = Appointmentdata;