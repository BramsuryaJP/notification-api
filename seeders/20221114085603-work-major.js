'use strict'

const csvtojson = require('csvtojson')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const majorWorkCsv = __dirname + '/csv/01_wokr_major.csv'

		let majorWork

		await csvtojson({ delimiter: ',' })
			.fromFile(majorWorkCsv)
			.then((jsonObj) => {
				majorWork = jsonObj
			})

		console.log(majorWork)

		return await queryInterface.bulkInsert('work_majors', majorWork, {})
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.bulkDelete('work_majors', null, {})
	},
}
