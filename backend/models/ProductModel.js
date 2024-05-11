import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Products = db.define('product', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNullL: false,
        validate:{
            notEmpty: true
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNullL: false,
        validate:{
            notEmpty: true,
            len: [3, 100] // min is 3 and max is 100 characters
        }
    },    
    price:{
        type: DataTypes.INTEGER,
        allowNullL: false,
        validate:{
            notEmpty: true,
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNullL: false,
        validate:{
            notEmpty: true,
        }
    }
}, {
    freezeTableName: true
});


//Specifying the relations between User and product
Users.hasMany(Products); 
Products.belongsTo(Users, {foreignKey: 'userId'});

export default Products;