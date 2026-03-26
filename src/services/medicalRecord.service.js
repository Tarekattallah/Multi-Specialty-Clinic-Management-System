const MedicalRecord = require('../models/MedicalRecord.model');
const Appointment = require('../models/Appointment.model');

const createRecord = async (appointmentId, recordData) => {
    // check if appointment exists
    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) throw new Error('Appointment not found');

    // create the medical record
    const record = await MedicalRecord.create({
        appointment: appointmentId,
        diagnosis: recordData.diagnosis,
        prescription: recordData.prescription,
        notes: recordData.notes
    });

    // update appointment status to completed automatically
    appointment.status = 'completed';
    await appointment.save();

    return record;
};

module.exports = { createRecord };