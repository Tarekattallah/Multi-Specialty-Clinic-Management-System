const medicalRecordService = require('../services/medicalRecord.service');

const addRecord = async (req, res) => {
    try {
        // only doctors can add records (we'll protect this in routes)
        const record = await medicalRecordService.createRecord(req.body.appointmentId, req.body);
        res.status(201).json({ message: 'Medical record added successfully', record });
    } catch (error) {
        console.log('medical record error:', error.message);
        res.status(400).json({ message: error.message || 'Server error' });
    }
};

module.exports = { addRecord };