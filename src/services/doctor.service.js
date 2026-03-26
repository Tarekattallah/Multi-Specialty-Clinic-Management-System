const DoctorProfile = require('../models/DoctorProfile.model');

const getAllDoctors = async () => {
    // get all doctors and populate user info
    const doctors = await DoctorProfile.find().populate('user', 'name email');
    return doctors;
};

const updateDoctorProfile = async (userId, profileData) => {
    // update profile based on logged-in user id
    const profile = await DoctorProfile.findOneAndUpdate(
        { user: userId },
        profileData,
        { new: true, runValidators: true }
    );

    if (!profile) {
        throw new Error('Profile not found');
    }

    return profile;
};

module.exports = {
    getAllDoctors,
    updateDoctorProfile
};