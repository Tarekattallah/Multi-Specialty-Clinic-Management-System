const mongoose = require('mongoose');

const doctorProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bio: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    experienceYears: {
        type: Number,
        min: 0
    },
    specialties: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Specialty'
    }]
}, {
    timestamps: true
});

const DoctorProfile = mongoose.model('DoctorProfile', doctorProfileSchema);

module.exports = DoctorProfile;