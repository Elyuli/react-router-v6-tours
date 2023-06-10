const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnection");

const Tours = sequelize.define(
	"tours",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			unique: true,
		},
		info: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},
	{
		tableName: "tours",
		timestamps: false,
	}
);

module.exports = { Tours };
