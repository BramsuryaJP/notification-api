'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class WorkOccupation extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	WorkOccupation.init(
		{
			unit_group_id: DataTypes.INTEGER,
			code: DataTypes.INTEGER,
			name: DataTypes.STRING,
		},
		{
			sequelize,
			tableName: 'work_occupations',
			modelName: 'WorkOccupation',
		}
	)
	return WorkOccupation
}
