'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, DataTypes) {
		await queryInterface.createTable('notifications', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			uuid: {
				allowNull: false,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			user_id: {
				allowNull: true,
				type: DataTypes.INTEGER,
			},
			type: {
				allowNull: true,
				type: DataTypes.STRING,
			},
			subject: {
				allowNull: true,
				type: DataTypes.STRING,
			},
			message: {
				allowNull: true,
				type: DataTypes.TEXT,
			},
			deletedAt: {
				allowNull: true,
				type: DataTypes.DATE,
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		})
	},
	async down(queryInterface, DataTypes) {
		await queryInterface.dropTable('notifications')
	},
}
