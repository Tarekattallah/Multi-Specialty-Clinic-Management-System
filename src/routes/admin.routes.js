const express = require('express');
const router = express.Router();
const { getAllAppointments } = require('../controllers/admin.controller');
const { protect } = require('../middlewares/auth.middleware');
const { authorize } = require('../middlewares/role.middleware');

router.get('/appointments', protect, authorize('admin'), getAllAppointments);

module.exports = router;