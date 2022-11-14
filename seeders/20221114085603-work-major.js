'use strict'

const csvtojson = require('csvtojson')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const majorWorkCsv = __dirname + '/csv/01_wokr_major.csv'
		let majorWork = await csvtojson()
			.fromFile(majorWorkCsv)
			.then((jsonObj) => {
				console.log(jsonObj)
			})

		return await queryInterface.bulkInsert('work_majors', majorWork, {})
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return await queryInterface.bulkDelete('work_majors', null, {})
	},
}
