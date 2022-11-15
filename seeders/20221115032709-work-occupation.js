'use strict'

const csvtojson = require('csvtojson')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const workOccupationCsv = __dirname + '/csv/05_work_occupation.csv'

		let workOccupation

		await csvtojson({ delimiter: ',' })
			.fromFile(workOccupationCsv)
			.then((jsonObj) => {
				workOccupation = jsonObj
			})

		console.log(workOccupation)

		return await queryInterface.bulkInsert(
			'work_occupations',
			workOccupation,
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.bulkDelete('work_occupations', null, {})
	},
}
