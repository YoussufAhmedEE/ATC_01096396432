const {DataTypes} = require('sequelize');
const {db} = require('../config/database'); 

const Category = db.define('Category',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        // unique: true
    },
},
{
    timestamps: true,
    
    indexes: [
        {
            unique: true,
            fields: ['name']
        }
    ]
},);

module.exports={Category};