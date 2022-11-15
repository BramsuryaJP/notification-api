'use strict'

const csvtojson = require('csvtojson')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const majorSubWorkCsv = __dirname + '/csv/02_work_sub_major.csv'

		let majorSubWork

		await csvtojson({ delimiter: ',' })
			.fromFile(majorSubWorkCsv)
			.then((jsonObj) => {
				majorSubWork = jsonObj
			})

		console.log(majorSubWork)

		return await queryInterface.bulkInsert(
			'work_sub_majors',
			majorSubWork,
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.bulkDelete('work_sub_majors', null, {})
	},
}
