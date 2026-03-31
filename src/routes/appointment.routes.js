const express = require('express');
const router = express.Router();

const { createAppointment, getAppointments } = require('../controllers/appointment.controller');
const { protect } = require('../middlewares/auth.middleware');


router.use(protect);

router.post('/', createAppointment);   
router.get('/', getAppointments);   

module.exports = router;