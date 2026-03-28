const doctorService = require('../services/doctor.service');

const getDoctors = async (req, res) => {
    try {
        const doctors = await doctorService.getAllDoctors();
        res.json(doctors);
    } catch (error) {
        console.log('get doctors error:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const updateProfile = async (req, res) => {
    try {
        const updatedProfile = await doctorService.updateDoctorProfile(req.user.id, req.body);
        res.json({ message: 'Profile updated', profile: updatedProfile });
    } catch (error) {
        console.log('update profile error:', error.message);
        if (error.message === 'Profile not found') {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getDoctors,
    updateProfile
};