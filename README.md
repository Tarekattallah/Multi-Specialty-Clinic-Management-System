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

- **Authentication System** — User registration & login with JWT, secure password hashing via bcryptjs
- **Role-Based Access Control** — Patient, Doctor, and Admin roles
- **Doctor Management** — View all doctors with specialties; doctors can update profiles
- **Appointment System** — Book appointments with double-booking prevention
- **Medical Records** — Doctors can add records after appointments; status auto-updates to "completed"
- **Specialties Management** — Admin can add/delete specialties; doctors can assign multiple specialties
- **Admin Dashboard** — View all appointments across the system

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcryptjs |
| Validation | Joi |
| Architecture | MVC + Service Layer Pattern |

---

## 📁 Project Structure

```
src/
├── controllers/     # Request & Response handling
├── routes/          # API Routes
├── services/        # Business Logic
├── models/          # Mongoose Schemas
├── middlewares/     # Auth, Role, Error handling
├── validators/      # Joi Validation Schemas
├── config/          # Database connection
└── constants.js
```

---

## 🚀 Installation & Setup

**1. Clone the repository**
```bash
git clone <your-repository-url>
cd Multi-Specialty-Clinic-Management-System
```

**2. Install dependencies**
```bash
npm install
```

**3. Create `.env` file in the root directory**
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/clinic-db
JWT_SECRET=your_very_strong_secret_key_here_change_in_production
NODE_ENV=development
```

**4. Run the development server**
```bash
npm run dev
```

Server will run on `http://localhost:5000`

---

## 📡 API Endpoints

### 🔐 Authentication

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Register new user | Public |
| POST | `/api/auth/login` | Login | Public |

### 🩺 Specialties

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/specialties` | Get all specialties | Public |
| POST | `/api/specialties` | Create specialty | Admin |
| DELETE | `/api/specialties/:id` | Delete specialty | Admin |

### 👨‍⚕️ Doctors

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/doctors` | Get all doctors | All |
| PUT | `/api/doctors/profile` | Update doctor profile | Doctor |
| PUT | `/api/doctors/profile/specialties` | Assign specialties to doctor | Doctor |

### 📅 Appointments

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/appointments` | Book appointment | Patient |
| GET | `/api/appointments` | Get user appointments | Patient / Doctor |

### 📋 Medical Records

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/medical-records` | Add medical record | Doctor |

### 🔧 Admin

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/admin/appointments` | View all appointments | Admin |

---

## 🧪 Example Requests

**Register Doctor**
```json
POST /api/auth/register
{
  "name": "Dr. Ahmed Mohamed",
  "email": "ahmed@clinic.com",
  "password": "123456",
  "role": "doctor"
}
```

**Assign Specialties to Doctor**
```json
PUT /api/doctors/profile/specialties
Authorization: Bearer <doctor_token>

{
  "specialties": ["67f8a1b2c3d4e5f678901234", "67f8a1b2c3d4e5f678901235"]
}
```

**Book Appointment**
```json
POST /api/appointments
Authorization: Bearer <patient_token>

{
  "doctorId": "67f8a1b2c3d4e5f678901234",
  "dateTime": "2026-04-15T09:30:00Z",
  "notes": "Follow-up visit"
}
```

---

## 🔐 Roles & Permissions

| Role | Can Do |
|------|--------|
| Patient | Book appointments, view own appointments |
| Doctor | Update profile, manage specialties, add medical records, view own appointments |
| Admin | Manage specialties, view all appointments |

---

## 🛡️ Security Features

- JWT Authentication
- Role-based Authorization Middleware
- Password Hashing with bcryptjs
- Joi Input Validation
- Global Error Handling
- Protected Routes

---

## 🚀 Future Improvements

- Appointment cancellation & rescheduling
- Doctor availability time slots
- Email/SMS notifications
- Advanced search & filtering
- Rate limiting & security headers
- Frontend (React.js)

---

> Made with ❤️ for educational purposes
