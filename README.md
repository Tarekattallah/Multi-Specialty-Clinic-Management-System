# Multi-Specialty Clinic Management System

A robust **backend API** for managing a multi-specialty medical clinic. Built with **Node.js**, **Express.js**, and **MongoDB** (Mongoose). Supports three user roles: **Patient**, **Doctor**, and **Admin**.

## ✨ Features

- **User Authentication & Authorization**
  - Register & Login with JWT
  - Password hashing using bcryptjs
  - Role-based access control (Patient, Doctor, Admin)

- **Doctor Management**
  - View all doctors
  - Doctors can update their profile (bio, phone, experience, specialties)
  - Automatic DoctorProfile creation upon doctor registration

- **Appointment System**
  - Patients can book appointments
  - Prevention of double booking (same doctor, same time slot)
  - View appointments (Patient sees their own, Doctor sees theirs)

- **Medical Records**
  - Doctors can add medical records after appointments
  - Automatic update of appointment status to "completed"

- **Specialties Management** (Newly Added)
  - Admin can add/delete specialties
  - Doctors can assign specialties to their profile
  - Specialties are populated in doctor listings

- **Admin Features**
  - View all appointments in the system

- **Security & Best Practices**
  - JWT Authentication
  - Input validation with Joi
  - Global error handling
  - Protected routes with role middleware
  - Separation of concerns (MVC + Service Layer)

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT + bcryptjs
- **Validation**: Joi
- **Environment**: dotenv

## 📁 Project Structure
Multi-Specialty-Clinic-Management-System/
├── app.js
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── middlewares/
│   ├── validators/
│   └── constants.js
├── .env
├── package.json
└── README.md
text## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Multi-Specialty-Clinic-Management-System

Install dependenciesBashnpm install
Create .env file in the root directory and add:envPORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/clinic-db
JWT_SECRET=your_very_strong_secret_key_here
NODE_ENV=development
Start the serverBashnpm run dev

Server will run on http://localhost:5000
📋 API Endpoints
Auth Routes























MethodEndpointDescriptionAccessPOST/api/auth/registerRegister new userPublicPOST/api/auth/loginLogin userPublic
Specialties Routes (New)





























MethodEndpointDescriptionAccessGET/api/specialtiesGet all specialtiesPublicPOST/api/specialtiesCreate new specialtyAdminDELETE/api/specialties/:idDelete specialtyAdmin
Doctors Routes





























MethodEndpointDescriptionAccessGET/api/doctorsGet all doctors (with specialties)AllPUT/api/doctors/profileUpdate doctor profileDoctorPUT/api/doctors/profile/specialtiesUpdate doctor specialtiesDoctor
Appointments Routes























MethodEndpointDescriptionAccessPOST/api/appointmentsBook new appointmentPatientGET/api/appointmentsGet user appointmentsPatient/Doctor
Medical Records Routes

















MethodEndpointDescriptionAccessPOST/api/medical-recordsAdd medical recordDoctor
Admin Routes

















MethodEndpointDescriptionAccessGET/api/admin/appointmentsGet all appointmentsAdmin
🧪 Example Requests (Postman)
Register Doctor:
JSONPOST /api/auth/register
{
  "name": "Dr. Ahmed Ali",
  "email": "ahmed@clinic.com",
  "password": "123456",
  "role": "doctor"
}
Book Appointment:
JSONPOST /api/appointments
Authorization: Bearer <token>
{
  "doctorId": "67f8a1b2c3d4e5f678901234",
  "dateTime": "2026-04-05T10:00:00Z",
  "notes": "Check-up"
}
Update Doctor Specialties:
JSONPUT /api/doctors/profile/specialties
Authorization: Bearer <doctor_token>
{
  "specialties": ["67f8a1b2c3d4e5f678901234", "67f8a1b2c3d4e5f678901235"]
}
🔐 Roles & Permissions

Patient: Book appointments, view own appointments
Doctor: Update profile, add specialties, view own appointments, add medical records
Admin: Manage specialties, view all appointments

🛡️ Error Handling

Global error middleware
Joi validation errors
Custom messages for common errors (double booking, invalid ID, etc.)
Different behavior in Development vs Production

🚀 Future Improvements

Add appointment cancellation
Time slot management for doctors
Email/SMS notifications
Search doctors by specialty
Pagination & filtering
Rate limiting
Frontend (React)

📝 License
This project is for educational purposes.
