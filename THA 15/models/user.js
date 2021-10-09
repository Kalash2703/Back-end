const { Database }=require('sequelize');
const sequelize = require('../database');


const User = sequelize.define('User',{
    fullName:{
        type: DataTypes.STRING,
        allowNull: falsse
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    password: {
        typr: DataTypes.STRING,
        allowNull: false
    }
});

module.exports=User