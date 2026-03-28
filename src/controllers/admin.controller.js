const Appointment = require('../models/Appointment.model');

const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .populate('patient', 'name email')
            .populate({
                path: 'doctor',
                populate: { path: 'user', select: 'name' }
            })
            .sort({ dateTime: 1 });

        res.json(appointments);
    } catch (error) {
        console.log('admin appts error:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getAllAppointments };