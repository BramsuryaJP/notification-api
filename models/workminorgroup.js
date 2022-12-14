'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class WorkMinorGroup extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	WorkMinorGroup.init(
		{
			sub_major_id: {
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
			tableName: 'work_minor_groups',
			modelName: 'WorkMinorGroup',
		}
	)
	return WorkMinorGroup
}
