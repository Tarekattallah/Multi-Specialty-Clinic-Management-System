# Multi-Specialty Clinic Management System (Backend) 🏥

A robust RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage clinic operations, doctor scheduling, and patient medical records.

## 🚀 Key Features
- **Role-Based Access Control (RBAC):** Secure access for Patients, Doctors, and Admins using JWT.
- **Smart Appointment Booking:** Advanced logic to prevent double-booking for the same doctor at the same time.
- **Medical Records Management:** Doctors can create prescriptions and diagnoses, automatically completing the appointment cycle.
- **Clean Architecture:** Organized into Routes, Controllers, Services, and Models for high scalability and maintainability.
- **Global Error Handling:** Custom middleware to handle API errors gracefully.

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Security:** JWT (JSON Web Tokens), Bcrypt.js (Password Hashing)
- **Validation:** Joi (Schema Validation)

## 📁 Project Structure
```text
src/
├── controllers/    # Request handling logic
├── models/         # Database schemas
├── routes/         # API endpoints definitions
├── services/       # Core business logic (Double-booking check, etc.)
├── middlewares/    # Auth & Error middlewares
├── utils/          # Constants and Error helpers
└── validators/     # Input validation schemas
🚥 API Endpoints (Quick Look)
Auth: POST /api/auth/register | POST /api/auth/login

Doctors: GET /api/doctors | PUT /api/doctors/profile

Appointments: POST /api/appointments (Booking) | GET /api/appointments

Medical Records: POST /api/medical-records (Prescriptions)

Admin: GET /api/admin/appointments (Full Overview)

⚙️ Installation
Clone the repo: git clone <your-repo-link>

Install dependencies: npm install

Configure your .env file (PORT, MONGO_URI, JWT_SECRET).

Start the server: npm run dev
