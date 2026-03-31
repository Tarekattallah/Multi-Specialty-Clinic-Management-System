const Appointment = require('../models/Appointment.model');
const DoctorProfile = require('../models/DoctorProfile.model');

const bookAppointment = async (patientId, appointmentData) => {
    const { doctorId, dateTime, notes } = appointmentData;

    // 1. Check if doctor exists
    const doctor = await DoctorProfile.findById(doctorId);
    if (!doctor) {
        throw new Error('Doctor not found');
    }

    // 2. Convert dateTime to proper Date object
    const appointmentDate = new Date(dateTime);
    if (isNaN(appointmentDate.getTime())) {
        throw new Error('Invalid date format');
    }

    // 3. Prevent double booking
    const existingAppt = await Appointment.findOne({
        doctor: doctorId,
        dateTime: appointmentDate,
        status: { $ne: 'cancelled' }
    });

    if (existingAppt) {
        throw new Error('This time slot is already booked');
    }

    // 4. Create appointment
    const appointment = await Appointment.create({
        patient: patientId,
        doctor: doctorId,
        dateTime: appointmentDate,
        notes: notes || '',
        status: 'pending'
    });

    return appointment;
};

const getUserAppointments = async (userId, role) => {
    let query = {};

    if (role === 'patient') {
        query.patient = userId;
    } else if (role === 'doctor') {
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