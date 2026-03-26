const express = require('express');
const router = express.Router();
const { getDoctors, updateProfile } = require('../controllers/doctor.controller');
const { protect } = require('../middlewares/auth.middleware');
const { authorize } = require('../middlewares/role.middleware');

// any logged in user can see the doctors list
router.get('/', protect, getDoctors);

// only a doctor can update their own profile
router.put('/profile', protect, authorize('doctor'), updateProfile);

module.exports = router;