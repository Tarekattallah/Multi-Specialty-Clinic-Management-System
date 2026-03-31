const express = require('express');
const router = express.Router();

const { getDoctors, updateProfile, updateSpecialties } = require('../controllers/doctor.controller');

const { protect } = require('../middlewares/auth.middleware');
const { authorize } = require('../middlewares/role.middleware');


router.get('/', protect, getDoctors);

router.put('/profile', protect, authorize('doctor'), updateProfile);

router.put('/profile/specialties', protect, authorize('doctor'), updateSpecialties);

module.exports = router;