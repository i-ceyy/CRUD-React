import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Users = db.define('users', {
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
    email:{
        type: DataTypes.STRING,
        allowNullL: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNullL: false,
        validate:{
            notEmpty: true,
        }
    },
    role:{
        type: DataTypes.STRING,
        allowNullL: false,
        validate:{
            notEmpty: true,
        }
    }
}, {
    freezeTableName: true
});

export default Users;