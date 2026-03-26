const Joi = require('joi');

const bookAppointmentSchema = Joi.object({
    doctorId: Joi.string().required(),
    dateTime: Joi.date().iso().greater('now').required()
        .messages({
            'date.greater': 'Appointment time must be in the future',
            'any.required': 'Date and time are required'
        }),
    notes: Joi.string().allow('').optional()
});

module.exports = {
    bookAppointmentSchema
};