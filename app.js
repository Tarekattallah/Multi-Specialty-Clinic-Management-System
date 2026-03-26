const express = require('express');
const cors = require('cors');
const helmet = require('helmet'); 
const dotenv = require('dotenv');
const connectDB = require('./src/config/database');
const authRoutes = require('./src/routes/auth.routes');
const adminRoutes = require('./src/routes/admin.routes');
const doctorRoutes = require('./src/routes/doctor.routes');
const appointmentRoutes = require('./src/routes/appointment.routes');
const medicalRecordRoutes = require('./src/routes/medicalRecord.routes');
const { notFound, errorHandler } = require('./src/middlewares/error.middleware');


dotenv.config();

const app = express();

// basic middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes 
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/medical-records', medicalRecordRoutes);
// simple test route
app.get('/', (req, res) => {
    res.json({
        message: 'MediBook Backend is up and running!',
        status: 'ok'
    });
});

// connect to database
connectDB();

const PORT = process.env.PORT || 5000;
// لازم يكونوا في الآخر عشان يمسكوا أي حاجة عدت من الـ routes
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});