'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class WorkUnitGroup extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	WorkUnitGroup.init(
		{
			minor_group_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			code: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: 'work_unit_groups',
			modelName: 'WorkUnitGroup',
		}
	)
	return WorkUnitGroup
}
