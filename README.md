MERN Final Project – E-commerce Platform
Table of Contents

Project Description

Features

Technologies Used

Folder Structure

Setup Instructions

Environment Variables

Running the Application

API Endpoints

Deployment

Screenshots

License

Project Description

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) e-commerce application.
It allows users to:

Register and login

Browse products

Create and view orders

Admins can manage products (CRUD operations)

The backend exposes RESTful APIs and supports JWT authentication.
The frontend is built with React, providing a responsive and dynamic user interface.

Features

User Authentication (register/login)

Product Management (create, read, update, delete)

Order Management (create and list orders)

JWT-based authentication

Admin-only routes

RESTful API design

Real-time updates (optional with Socket.io for future enhancement)

Technologies Used

Frontend: React.js, React Router, TailwindCSS, Axios

Backend: Node.js, Express.js, JWT, bcryptjs

Database: MongoDB Atlas

Dev Tools: Nodemon, VS Code

Deployment: Vercel (frontend), Render/Heroku (backend)

Folder Structure
mern-final-project/
├── client/              # React frontend
├── server/              # Node/Express backend
│   ├── config/          # Database connection
│   ├── controllers/     # Route controllers
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── server.js        # Entry point
│   └── package.json
├── .gitignore
└── README.md

Setup Instructions

Clone the repository

git clone https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-Isaiah-enrich.git
cd mern-final-project/server


Install backend dependencies

npm install


Install frontend dependencies

cd ../client
npm install

Environment Variables

Create a .env file in server/ with the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Running the Application
Backend
cd server
npm run dev

Frontend
cd client
npm start


The app should now be accessible at http://localhost:3000

API Endpoints
Users
Method	Route	Description
POST	/api/users/register	Register new user
POST	/api/users/login	Login user & get token
Products
Method	Route	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get single product
POST	/api/products	Create product (admin)
PUT	/api/products/:id	Update product (admin)
DELETE	/api/products/:id	Delete product (admin)
Orders
Method	Route	Description
POST	/api/orders	Create new order
GET	/api/orders/user/:userId	Get user's orders