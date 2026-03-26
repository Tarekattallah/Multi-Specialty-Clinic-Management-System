const express = require('express');
const router = express.Router();
const { addRecord } = require('../controllers/medicalRecord.controller');
const { protect } = require('../middlewares/auth.middleware');
const { authorize } = require('../middlewares/role.middleware');

// only logged-in doctors can access this route
router.post('/', protect, authorize('doctor'), addRecord);

module.exports = router;