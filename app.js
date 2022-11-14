const express = require('express')

const { sequelize } = require('./models')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// routers
const norificationRouter = require('./routes/notifiicationRouter')
app.use('/notification', norificationRouter)

//port
const PORT = process.env.PORT || 3000

const csvtojson = require('csvtojson')
const majorWorkCsv = './seeders/csv/01_wokr_major.csv'

let majorWork = csvtojson()
	.fromFile(majorWorkCsv)
	.then((jsonObj) => {
		console.log(jsonObj)
	})

app.listen(PORT, async () => {
	console.log(`server is running on port ${PORT}`)
	console.log(majorWork)
})
