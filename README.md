# 🏥 Multi-Specialty Clinic Management System

A complete **backend API** for managing a multi-specialty medical clinic built with Node.js and Express.js.

## ✨ Features

- User Registration & Login with JWT Authentication
- Role-based Authorization (Patient, Doctor, Admin)
- Doctor Profile Management
- Appointment Booking System with double-booking prevention
- Medical Records Management
- Specialties Management (Admin + Doctor assignment)
- Global Error Handling & Input Validation

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT + bcryptjs
- **Validation**: Joi
- **Environment Management**: dotenv

## 📂 Project Structure

```bash
src/
├── config/
├── controllers/
├── routes/
├── services/
├── models/
├── middlewares/
├── validators/
└── constants.js
🚀 Installation & Setup

Clone the repositoryBashgit clone <your-repo-link>
cd Multi-Specialty-Clinic-Management-System
Install dependenciesBashnpm install
Create .env file in the root folder:envPORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/clinic-db
JWT_SECRET=your_super_secret_jwt_key_12345
NODE_ENV=development
Run the serverBashnpm run dev

Server will start at http://localhost:5000
📋 API Endpoints
🔐 Authentication























MethodEndpointDescriptionAccessPOST/api/auth/registerRegister new userPublicPOST/api/auth/loginUser loginPublic
🩺 Specialties





























MethodEndpointDescriptionAccessGET/api/specialtiesGet all specialtiesPublicPOST/api/specialtiesCreate new specialtyAdminDELETE/api/specialties/:idDelete a specialtyAdmin
👨‍⚕️ Doctors





























MethodEndpointDescriptionAccessGET/api/doctorsGet all doctors (with specialties)AllPUT/api/doctors/profileUpdate doctor profileDoctorPUT/api/doctors/profile/specialtiesAssign specialties to doctorDoctor
📅 Appointments























MethodEndpointDescriptionAccessPOST/api/appointmentsBook a new appointmentPatientGET/api/appointmentsGet user's appointmentsPatient/Doctor
📋 Medical Records

















MethodEndpointDescriptionAccessPOST/api/medical-recordsAdd medical recordDoctor
🔧 Admin

















MethodEndpointDescriptionAccessGET/api/admin/appointmentsGet all appointmentsAdmin
🧪 Example Requests
1. Register a Doctor
JSONPOST /api/auth/register
{
  "name": "Dr. Mohamed Ali",
  "email": "mohamed@clinic.com",
  "password": "123456",
  "role": "doctor"
}
2. Update Doctor Specialties
JSONPUT /api/doctors/profile/specialties
Authorization: Bearer <your_token>

{
  "specialties": [
    "67f8a1b2c3d4e5f678901234",
    "67f8a1b2c3d4e5f678901235"
  ]
}
3. Book Appointment
JSONPOST /api/appointments
Authorization: Bearer <patient_token>

{
  "doctorId": "67f8a1b2c3d4e5f678901234",
  "dateTime": "2026-04-10T11:00:00Z",
  "notes": "Routine check-up"
}
🔐 Roles & Permissions

Patient: Can book and view their appointments
Doctor: Can update profile, manage specialties, view their appointments, add medical records
Admin: Can manage specialties and view all appointments

🛡️ Security Features

JWT Token Authentication
Role-based Middleware Protection
Password Hashing with bcryptjs
Joi Input Validation
Global Error Handling

🚀 Future Enhancements

Appointment cancellation feature
Doctor availability & time slots
Email notifications
Search doctors by specialty
Frontend integration (React.js)
