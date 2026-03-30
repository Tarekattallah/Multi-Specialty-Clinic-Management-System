# 🏥 Multi-Specialty Clinic Management System

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)

A powerful **backend API** for managing a multi-specialty medical clinic with three user roles: **Patient**, **Doctor**, and **Admin**.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [API Endpoints](#-api-endpoints)
- [Example Requests](#-example-requests)
- [Roles & Permissions](#-roles--permissions)
- [Security Features](#-security-features)
- [Future Improvements](#-future-improvements)

---

## ✨ Features

- **Authentication System**
  - User registration and login with JWT
  - Secure password hashing using bcryptjs

- **Role-Based Access Control**
  - Patient, Doctor, and Admin roles

- **Doctor Management**
  - View all doctors with their specialties
  - Doctors can update their profile and assign specialties

- **Appointment System**
  - Book appointments with double-booking prevention
  - Patients and doctors can view their appointments

- **Medical Records**
  - Doctors can add medical records after appointments
  - Automatic status update to "completed"

- **Specialties Management** *(New)*
  - Admin can add and delete specialties
  - Doctors can assign multiple specialties to their profile

- **Admin Dashboard**
  - View all appointments in the system

---

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + bcryptjs
- **Validation**: Joi
- **Architecture**: MVC + Service Layer Pattern

---

## 📁 Project Structure

```bash
src/
├── controllers/          # Request & Response handling
├── routes/               # API Routes
├── services/             # Business Logic
├── models/               # Mongoose Schemas
├── middlewares/          # Auth, Role, Error handling
├── validators/           # Joi Validation Schemas
├── config/               # Database connection
└── constants.js

🚀 Installation & Setup

Clone the repositoryBashgit clone <your-repository-url>
cd Multi-Specialty-Clinic-Management-System
Install dependenciesBashnpm install
Create .env file in the root directory:envPORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/clinic-db
JWT_SECRET=your_very_strong_secret_key_here_change_in_production
NODE_ENV=development
Run the development serverBashnpm run dev

Server will run on http://localhost:5000

📡 API Endpoints
🔐 Authentication























MethodEndpointDescriptionAccessPOST/api/auth/registerRegister new userPublicPOST/api/auth/loginLoginPublic
🩺 Specialties





























MethodEndpointDescriptionAccessGET/api/specialtiesGet all specialtiesPublicPOST/api/specialtiesCreate specialtyAdminDELETE/api/specialties/:idDelete specialtyAdmin
👨‍⚕️ Doctors





























MethodEndpointDescriptionAccessGET/api/doctorsGet all doctorsAllPUT/api/doctors/profileUpdate doctor profileDoctorPUT/api/doctors/profile/specialtiesAssign specialties to doctorDoctor
📅 Appointments























MethodEndpointDescriptionAccessPOST/api/appointmentsBook appointmentPatientGET/api/appointmentsGet user appointmentsPatient/Doctor
📋 Medical Records

















MethodEndpointDescriptionAccessPOST/api/medical-recordsAdd medical recordDoctor
🔧 Admin

















MethodEndpointDescriptionAccessGET/api/admin/appointmentsView all appointmentsAdmin

🧪 Example Requests
Register Doctor
JSONPOST /api/auth/register
{
  "name": "Dr. Ahmed Mohamed",
  "email": "ahmed@clinic.com",
  "password": "123456",
  "role": "doctor"
}
Assign Specialties to Doctor
JSONPUT /api/doctors/profile/specialties
Authorization: Bearer <doctor_token>

{
  "specialties": ["67f8a1b2c3d4e5f678901234", "67f8a1b2c3d4e5f678901235"]
}
Book Appointment
JSONPOST /api/appointments
Authorization: Bearer <patient_token>

{
  "doctorId": "67f8a1b2c3d4e5f678901234",
  "dateTime": "2026-04-15T09:30:00Z",
  "notes": "Follow-up visit"
}

🔐 Roles & Permissions





















RoleCan DoPatientBook appointments, view own appointmentsDoctorUpdate profile, manage specialties, add medical records, view own appointmentsAdminManage specialties, view all appointments

🛡️ Security Features

JWT Authentication
Role-based Authorization Middleware
Password Hashing with bcryptjs
Joi Input Validation
Global Error Handling
Protected Routes


🚀 Future Improvements

Appointment cancellation & rescheduling
Doctor availability time slots
Email/SMS notifications
Advanced search & filtering
Rate limiting & security headers
Frontend (React.js)


Made with ❤️ for educational purposes
