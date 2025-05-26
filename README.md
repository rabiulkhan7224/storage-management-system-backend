# 📦 Storage Management Backend

A secure and scalable backend system for a file and folder storage management application built with **Node.js**, **Express**, and **MongoDB** using **TypeScript**.

---

## 🚀 Features

* User authentication with JWT
* File and folder CRUD operations
* Folder hierarchy and ownership
* Secure API access with middleware
* Clean, modular MVC architecture
* MongoDB integration via Mongoose

---

## 📁 Project Structure

```
src/
├── controllers/        # Request handlers
├── middlewares/        # Custom middleware (auth, etc.)
├── models/             # Mongoose models
├── routes/             # Route definitions
├── types/              # TypeScript interfaces and types
├── server.ts           # Entry point
```

---

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/storage-management-backend.git
cd storage-management-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-db
JWT_SECRET=your_jwt_secret
```

### 4. Start the development server

```bash
npm run dev
```

---

## 🔐 Authentication

All file and folder routes are protected by JWT authentication. Include a valid token in the `Authorization` header:

```
Authorization: Bearer <your_token>
```

Use `/api/auth/signup` and `/api/auth/login` to obtain a token.

---

## 📦 API Endpoints

## 🔐 Authentication Routes

### `POST /api/auth/signup`
Create a new user account.

### `POST /api/auth/login`
Authenticate user and receive a JWT token.

### `POST /api/auth/logout`
Logout user (handled client-side by removing token).

---

## 📁 File Management Routes

### `POST /api/files`
Create a new file (requires authentication).

### `PUT /api/files/rename/:id`
Rename a file.

### `POST /api/files/duplicate/:id`
Duplicate a file.

### `DELETE /api/files/:id`
Delete a file.

### `GET /api/files/:id`
Get a single file by ID.

### `GET /api/files`
Get all files for the authenticated user.

### `GET /api/files/folder/:folderId`
Get all files within a specific folder.

### `GET /api/files/search?search=<term>`
Search files by name/content.

### `GET /api/files/by-date?date=<YYYY-MM-DD>`
Get files uploaded on a specific date.

### `GET /api/files/by-type?type=<file_type>`
Filter files by type (e.g., `pdf`, `image`).

---

## 📂 Folder Management Routes

### `POST /api/folders`
Create a new folder.

### `PUT /api/folders/rename/:id`
Rename a folder.

### `DELETE /api/folders/:id`
Delete a folder.

### `GET /api/folders/:id`
Get a single folder by ID.

### `GET /api/folders`
Get all folders for the authenticated user.

---

## 👨‍💻 Author

**Md Rabiul Hasan**
MERN Stack Developer
