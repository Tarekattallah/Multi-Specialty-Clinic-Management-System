const DoctorProfile = require('../models/DoctorProfile.model');
const Specialty = require('../models/Specialty.model');

const getAllDoctors = async () => {
    const doctors = await DoctorProfile.find()
        .populate('user', 'name email')
        .populate('specialties', 'name');
    return doctors;
};

const updateDoctorProfile = async (userId, profileData) => {
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

const updateDoctorSpecialties = async (userId, specialtyIds) => {
    if (specialtyIds && specialtyIds.length > 0) {
        const existingSpecialties = await Specialty.find({
            _id: { $in: specialtyIds }
        });

        if (existingSpecialties.length !== specialtyIds.length) {
            throw new Error('One or more specialties not found');
        }
    }

    const profile = await DoctorProfile.findOneAndUpdate(
        { user: userId },
        { specialties: specialtyIds || [] },
        { new: true, runValidators: true }
    ).populate('specialties', 'name');

    if (!profile) {
        throw new Error('Profile not found');
    }

    return profile;
};

module.exports = {
    getAllDoctors,
    updateDoctorProfile,
    updateDoctorSpecialties
};