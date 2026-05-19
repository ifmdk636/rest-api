⚙️ Installation
1. Clone Repository
git clone https://github.com/ifmdk636/rest-api.git

Masuk ke folder project:

cd rest-api
2. Install Dependencies
npm install
3. Setup Database MySQL

Buat database baru di MySQL:

CREATE DATABASE rest_api;
4. Setup Environment Variables

Buat file .env di root project:

PORT=5000
DB_PORT=3306

5. Run Application
Development Mode
npm run dev
Production Mode
npm start

🚀 API Endpoints
Example Base URL
http://localhost:5000/api
📌 Example CRUD Endpoints
GET All Data
GET /users
Response
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
]
GET Single Data
GET /users/:id
Response
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
POST Create Data
POST /users
Request Body
{
  "name": "John Doe",
  "email": "john@example.com"
}
Response
{
  "message": "User created successfully"
}
PUT Update Data
PUT /users/:id
Request Body
{
  "name": "Updated User",
  "email": "updated@example.com"
}
Response
{
  "message": "User updated successfully"
}
DELETE Data
DELETE /users/:id
Response
{
  "message": "User deleted successfully"
}
🧩 Example Database Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);
📦 Available Scripts
Command	Description
npm start	Run production server
npm run dev	Run development server using nodemon
🔒 Environment Variables
Variable	Description
PORT	Server port
DB_HOST	MySQL host
DB_USER	MySQL username
DB_PASSWORD	MySQL password
DB_NAME	Database name
DB_PORT	Database port
🧪 Testing API

Gunakan tools berikut untuk testing endpoint:

Postman
Thunder Client (VSCode Extension)
📖 HTTP Status Codes
Code	Meaning
200	OK
400	Bad Request
404	Not Found

🔥 Future Improvements
JWT Authentication
Role Based Authorization
Request Validation
Swagger Documentation
Unit Testing
Docker Support
👨‍💻 Author

Developed by ifmdk636a

GitHub:
ifmdk636/rest-api
