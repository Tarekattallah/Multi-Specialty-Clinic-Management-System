const { bookAppointmentSchema } = require('../validators/appointment.validator');
const appointmentService = require('../services/appointment.service');

const createAppointment = async (req, res) => {
    try {
        // Validate request body
        const { error, value } = bookAppointmentSchema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({
                message: 'Validation error',
                errors: error.details.map(err => err.message)
            });
        }

        // Only patients can book appointments
        if (req.user.role !== 'patient') {
            return res.status(403).json({ 
                message: 'Only patients can book appointments' 
            });
        }

        // Important: Use req.user._id (not .id)
        const appointment = await appointmentService.bookAppointment(req.user._id, value);

        res.status(201).json({
            message: 'Appointment booked successfully',
            appointment
        });

    } catch (error) {
        console.error('Book appointment error:', error.message);

        // Handle known business errors
        if (error.message === 'Doctor not found' ||
            error.message === 'This time slot is already booked' ||
            error.message === 'Invalid date format') {
            return res.status(400).json({ message: error.message });
        }

        // Unknown errors
        res.status(500).json({ 
            message: 'Server error',
            error: error.message   // مؤقتاً عشان نشوف الخطأ الحقيقي
        });
    }
};

const getAppointments = async (req, res) => {
    try {
        const appointments = await appointmentService.getUserAppointments(req.user._id, req.user.role);
        res.json(appointments);
    } catch (error) {
        console.error('Get appointments error:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createAppointment,
    getAppointments
};