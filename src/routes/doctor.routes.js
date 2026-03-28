const express = require('express');
const router = express.Router();
const { getDoctors, updateProfile } = require('../controllers/doctor.controller');
const { protect } = require('../middlewares/auth.middleware');
const { authorize } = require('../middlewares/role.middleware');


router.get('/', protect, getDoctors);


router.put('/profile', protect, authorize('doctor'), updateProfile);

module.exports = router;