const db = require('../models')

// create main Model
const Notification = db.Notification

// create a notification
const CreateNotification = async (req, res) => {
	const { user_id, type, subject, message } = req.body

	try {
		const notification = await Notification.create({
			user_id,
			type,
			subject,
			message,
		})

		return res.status(200).json(notification)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ error: 'something went wrong !' })
	}
}

// Get All Notification
const GetAllNotifications = async (req, res) => {
	try {
		const notifications = await Notification.findAll()
		return res.status(200).json(notifications)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ error: 'something went wrong !' })
	}
}

// Get Single Notification
const GetSingleNotification = async (req, res) => {
	const uuid = req.params.uuid

	try {
		const notifications = await Notification.findAll({ where: { uuid } })
		return res.status(200).json(notifications)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ error: 'something went wrong !' })
	}
}

// Delete a Notification
const DeleteNotification = async (req, res) => {
	const uuid = req.params.uuid

	try {
		const notification = await Notification.findOne({
			where: {
				uuid,
			},
		})

		await notification.destroy()

		return res.status(200).json({ message: 'Notification Deleted' })
	} catch (error) {
		console.log(error)
		return res.status(500).json({ error: 'something went wrong !' })
	}
}

// Update a Notification
const UpdateNotification = async (req, res) => {
	const uuid = req.params.uuid

	const { user_id, type, subject, message } = req.body

	try {
		const notification = await Notification.findOne({
			where: {
				uuid,
			},
		})

		notification.user_id = user_id
		notification.type = type
		notification.subject = subject
		notification.message = message

		await notification.save()

		return res.status(200).json(notification)
	} catch (error) {
		return res.status(400).json({ error: 'something went wrong !' })
	}
}

module.exports = {
	CreateNotification,
	GetAllNotifications,
	GetSingleNotification,
	DeleteNotification,
	UpdateNotification,
}
