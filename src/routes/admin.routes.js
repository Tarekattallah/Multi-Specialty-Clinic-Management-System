const express = require('express');
const router = express.Router();
const { getAllAppointments } = require('../controllers/admin.controller');
const { protect } = require('../middlewares/auth.middleware');
const { authorize } = require('../middlewares/role.middleware');

// only admin can see all appointments
router.get('/appointments', protect, authorize('admin'), getAllAppointments);

module.exports = router;