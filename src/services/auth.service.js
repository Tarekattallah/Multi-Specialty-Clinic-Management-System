const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');
const DoctorProfile = require('../models/DoctorProfile.model');

const register = async (userData) => {
    const { name, email, password, role } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User with this email already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role
    });

    // If the user is a doctor, create empty DoctorProfile
    if (role === 'doctor') {
        await DoctorProfile.create({
            user: user._id,
            bio: '',
            phone: '',
            experienceYears: 0,
            specialties: []
        });
    }

    // Generate JWT token
    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );

    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token
    };
};

const login = async (email, password) => {
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid email or password');
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid email or password');
    }

    // Generate JWT token
    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );

    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token
    };
};

module.exports = {
    register,
    login
};