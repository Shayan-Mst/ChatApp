![image](https://github.com/user-attachments/assets/56a925eb-2afb-45a8-98e1-565dc2c01a1c)

# 🗨️ ChatApp

A real-time chat application built with **React + Vite** on the frontend, **Node.js + Express** on the backend, and **MongoDB** for data storage. The app features real-time messaging, user authentication, and a smooth, modern UI.

---

## 📄 Description

**ChatApp** allows users to send and receive real-time messages, manage their accounts, and communicate with each other seamlessly.

Features:
- Real-time messaging with Socket.IO
- User authentication (JWT-based)
- MongoDB for storing user data and chat history
- Modern UI with React and Tailwind CSS
- Messages are stored in the backend and retrieved for chat sessions

---

## 🎯 Objective

This project aims to demonstrate the use of:
- **Socket.IO** for real-time communication
- **JWT authentication** for secure login and registration
- **MongoDB** as the data store for users and messages
- **React + Vite** for a fast and dynamic frontend
- **Node.js + Express** for the backend API

---

## 🛠️ Tools Used

- React JS  
- Vite (for frontend build)  
- Node.js  
- Express  
- Socket.IO (for real-time messaging)
- nodemail (For authenticating email , sending code to your email for register purposes)
- MongoDB  
- JWT (for user authentication)  
- Tailwind CSS (for styling)  
- bcrypt.js (for password hashing)

---

## ▶️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Shayan-Mst/ChatApp.git

-Backend (Node.js + Express)
-Install dependencies
cd ChatApp
cd Back
cd chatApp
npm install


Frontend (React + Vite)
-Install dependencies
cd ChatApp
cd Front
cd ChatApp
cd my-react-app
npm install

3. Environment Setup

Create a .env file inside the server/ directory with the following content:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Run the app
Backend (Node.js + Express)

Start the backend server:

cd ChatApp
cd Back
cd chatApp
node server.js


Frontend (React + Vite)

Start the frontend development server:

cd ChatApp
cd Front
cd ChatApp
cd my-react-app
npm run dev

  

Make sure to configure the API proxy in vite.config.ts to forward frontend API requests to the backend:

server: {
  proxy: {
    '/api': 'http://localhost:YOUR_PORT',
  },
},

🧪 LocalStorage Notes

    User authentication tokens  are stored in the browser's localStorage.

    You can click on "Logout" to clear the user token.


