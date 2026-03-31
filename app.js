const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/database');
const cors = require('cors')
const authRoutes = require('./src/routes/auth.routes');
const adminRoutes = require('./src/routes/admin.routes');
const doctorRoutes = require('./src/routes/doctor.routes');
const specialtyRoutes = require('./src/routes/specialty.routes');
const appointmentRoutes = require('./src/routes/appointment.routes');
const medicalRecordRoutes = require('./src/routes/medicalRecord.routes');

const { notFound, errorHandler } = require('./src/middlewares/error.middleware');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors("http://localhost:5173/"))
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/specialties', specialtyRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/medical-records', medicalRecordRoutes);


// connect to database
connectDB();

const PORT = process.env.PORT || 5000;

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is listening ${PORT}`);
});