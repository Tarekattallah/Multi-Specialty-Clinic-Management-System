const Specialty = require('../models/Specialty.model');

const createSpecialty = async (req, res) => {
    try {
        const { name } = req.body;

        const specialty = await Specialty.create({ name });

        res.status(201).json({
            message: 'Specialty created successfully',
            specialty
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({ 
                message: 'Specialty with this name already exists' 
            });
        }
        console.log('Create specialty error:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const getAllSpecialties = async (req, res) => {
    try {
        const specialties = await Specialty.find().sort({ name: 1 });
        res.json(specialties);
    } catch (error) {
        console.log('Get specialties error:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteSpecialty = async (req, res) => {
    try {
        const specialty = await Specialty.findByIdAndDelete(req.params.id);
        if (!specialty) {
            return res.status(404).json({ message: 'Specialty not found' });
        }
        res.json({ message: 'Specialty deleted successfully' });
    } catch (error) {
        console.log('Delete specialty error:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createSpecialty,
    getAllSpecialties,
    deleteSpecialty
};