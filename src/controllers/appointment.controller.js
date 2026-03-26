const { bookAppointmentSchema } = require('../validators/appointment.validator');
const appointmentService = require('../services/appointment.service');

const createAppointment = async (req, res) => {
    try {
        // validate request body
        const { error, value } = bookAppointmentSchema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({
                message: 'Validation error',
                errors: error.details.map(err => err.message)
            });
        }

        // only patients can book
        if (req.user.role !== 'patient') {
            return res.status(403).json({ message: 'Only patients can book appointments' });
        }

        const appointment = await appointmentService.bookAppointment(req.user.id, value);
        res.status(201).json({ message: 'Appointment booked successfully', appointment });

    } catch (error) {
        console.log('book appt error:', error.message);
        if (error.message === 'This time slot is already booked' || error.message === 'Doctor not found') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Server error' });
    }
};

const getAppointments = async (req, res) => {
    try {
        const appointments = await appointmentService.getUserAppointments(req.user.id, req.user.role);
        res.json(appointments);
    } catch (error) {
        console.log('get appts error:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createAppointment,
    getAppointments
};