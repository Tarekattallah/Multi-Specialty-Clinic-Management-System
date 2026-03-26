const Appointment = require('../models/Appointment.model');
const DoctorProfile = require('../models/DoctorProfile.model');

const bookAppointment = async (patientId, appointmentData) => {
    const { doctorId, dateTime, notes } = appointmentData;

    // check if doctor exists
    const doctor = await DoctorProfile.findById(doctorId);
    if (!doctor) {
        throw new Error('Doctor not found');
    }

    // core logic: prevent double booking (same doctor, same time, not cancelled)
    const existingAppt = await Appointment.findOne({
        doctor: doctorId,
        dateTime: dateTime,
        status: { $ne: 'cancelled' }
    });

    if (existingAppt) {
        throw new Error('This time slot is already booked');
    }

    // create the appointment
    const appointment = await Appointment.create({
        patient: patientId,
        doctor: doctorId,
        dateTime,
        notes
    });

    return appointment;
};

const getUserAppointments = async (userId, role) => {
    let query = {};

    if (role === 'patient') {
        query.patient = userId;
    } else if (role === 'doctor') {
        // get doctor profile id first
        const doctorProfile = await DoctorProfile.findOne({ user: userId });
        if (doctorProfile) {
            query.doctor = doctorProfile._id;
        }
    }

    const appointments = await Appointment.find(query)
        .populate('patient', 'name email')
        .populate({
            path: 'doctor',
            populate: { path: 'user', select: 'name' }
        })
        .sort({ dateTime: 1 });

    return appointments;
};

module.exports = {
    bookAppointment,
    getUserAppointments
};