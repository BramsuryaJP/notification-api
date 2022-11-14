'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class WorkMajor extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	WorkMajor.init(
		{
			name: {
				type: DataTypes.STRING,
        allowNull: false
			},
		},
		{
			sequelize,
      tableName: 'work_majors',
			modelName: 'WorkMajor',
		}
	)
	return WorkMajor
}
