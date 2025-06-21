
import { DataTypes } from "sequelize";
import { sequilize } from "../db/dbConnection.js";

const User = sequilize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fatherName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mobile: {
        type: DataTypes.STRING(15),
        allowNull: true,
        unique: true
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'users',
    timestamps: true
});

export default User