'use strict'

const csvtojson = require('csvtojson')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const workMinorGroupCsv = __dirname + '/csv/03_work_minor_group.csv'

		let workMinorGroup

		await csvtojson({ delimiter: ',' })
			.fromFile(workMinorGroupCsv)
			.then((jsonObj) => {
				workMinorGroup = jsonObj
			})

		console.log(workMinorGroup)

		return await queryInterface.bulkInsert(
			'work_minor_groups',
			workMinorGroup,
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.bulkDelete('work_minor_groups', null, {})
	},
}
