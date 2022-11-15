'use strict'

const csvtojson = require('csvtojson')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const workUnitGroupCsv = __dirname + '/csv/04_work_unit_group.csv'

		let workUnitGroup

		await csvtojson({ delimiter: ',' })
			.fromFile(workUnitGroupCsv)
			.then((jsonObj) => {
				workUnitGroup = jsonObj
			})

		console.log(workUnitGroup)

		return await queryInterface.bulkInsert(
			'work_unit_groups',
			workUnitGroup,
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.bulkDelete('work_unit_groups', null, {})
	},
}
