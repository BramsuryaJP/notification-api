const notificationController = require('../controllers/notificationController')

const router = require('express').Router()

router.post('/create-notification', notificationController.CreateNotification)
router.get('/all-notification', notificationController.GetAllNotifications)
router.get('/:uuid', notificationController.GetSingleNotification)
router.delete('/:uuid', notificationController.DeleteNotification)
router.put('/:uuid', notificationController.UpdateNotification)

module.exports = router
