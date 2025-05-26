# 📦 Storage Management Backend

A backend API for a cloud-based file and folder storage system. It supports user authentication, file and folder operations, and advanced search functionalities.

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
https://github.com/rabiulkhan7224/storage-management-system-backend.git
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
### 🌐 Base URL

```bash
https://storage-management-system-backend-three.vercel.app
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

## 📁 File Management Routes (Authorization: Bearer <your_token> Required)

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

## 📂 Folder Management Routes  (Authorization: Bearer <your_token> Required)

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





## 📘 API Documentation (with Sample Requests)

### 🔐 Authentication

**Signup**

```http
POST /api/auth/signup
```

**Body (JSON):**

```json
{
  "name":"Your name"
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Login**

```http
POST /api/auth/login
```

**Body (JSON):**

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Response:**

```json
{
  "token": "<JWT Token>"
}
```

**Logout**

```http
POST /api/auth/logout
```

*Note: Logout is handled on the client by deleting the token.*

---

### 📁 File Management

**Create File**

```http
POST /api/files
Authorization: Bearer <token>
```

**Body (JSON):**

```json
{
  "name": "documents2",
        "url": "https://example.com/document2.pdf",
        "type": "docx",
        "folderId"
}
```

**Rename File**

```http
PUT /api/files/rename/:id
Authorization: Bearer <token>
```

**Body (JSON):**

```json
{
  "name": "updated_report.pdf"
}
```

**Duplicate File**

```http
POST /api/files/duplicate/:id
Authorization: Bearer <token>
```

**Delete File**

```http
DELETE /api/files/:id
Authorization: Bearer <token>
```

**Get Single File**

```http
GET /api/files/:id
Authorization: Bearer <token>
```

**Get All Files**

```http
GET /api/files
Authorization: Bearer <token>
```

**Get Files by Folder**

```http
GET /api/files/folder/:folderId
Authorization: Bearer <token>
```

**Search Files**

```http
GET /api/files/search?search=keyboard
Authorization: Bearer <token>
```

**Files by Date**

```http
GET /api/files/by-date?date=2025-05-26
Authorization: Bearer <token>
```

**Files by Type**

```http
GET /api/files/by-type?type=image
Authorization: Bearer <token>
```

---

### 📂 Folder Management

**Create Folder**

```http
POST /api/folders
Authorization: Bearer <token>
```

**Body (JSON):**

```json
{
  "name": "My Documents"
}
```

**Rename Folder**

```http
PUT /api/folders/rename/:id
Authorization: Bearer <token>
```

**Body (JSON):**

```json
{
  "name": "Renamed Folder"
}
```

**Delete Folder**

```http
DELETE /api/folders/:id
Authorization: Bearer <token>
```

**Get Single Folder**

```http
GET /api/folders/:id
Authorization: Bearer <token>
```

**Get All Folders**

```http
GET /api/folders
Authorization: Bearer <token>
```

---

## 🧪 Running the Project

1. Clone the repository:

   ```bash
   https://github.com/rabiulkhan7224/storage-management-system-backend.git
   cd storage-management-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/storageDB
   JWT_SECRET=your_jwt_secret
   ```

4. Run the server:

   ```bash
   npm run dev
   ```

---

## 🔒 Authentication Middleware

All file and folder routes are protected using JWT. Attach a Bearer token in the `Authorization` header:

```
Authorization: Bearer <your_token>
```

---

## 👨‍💻 Author

**Md Rabiul Hasan**
MERN Stack Developer

## 📬 Contact

Maintainer: [Md Rabiul Khan](mailto:mdrabiulkhanbabo@gmail.com)

---

## 📄 License

MIT License
