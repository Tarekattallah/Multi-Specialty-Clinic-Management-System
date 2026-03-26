const express = require('express');
const router = express.Router();
const { createAppointment, getAppointments } = require('../controllers/appointment.controller');
const { protect } = require('../middlewares/auth.middleware');

// all routes here need login
router.use(protect);

// book a new appointment
router.post('/', createAppointment);

// get my appointments (works for both patient and doctor)
router.get('/', getAppointments);

module.exports = router;