# Kanbas Node.js Server

This repository contains the backend implementation for the Kanbas Online Learning Management System (OLMS), built with Node.js, Express, and MongoDB. It provides RESTful APIs to manage application data and enable communication between the frontend and database.

## Project Structure

```
kanbas-node-server-app/
│── Kanbas/
│   ├── Assignments/   # Assignment-related API logic
│   │   ├── dao.js     # Data Access Object for Assignments
│   │   ├── model.js   # Mongoose model for Assignments
│   │   ├── routes.js  # Express routes for Assignments API
│   │   ├── schema.js  # Mongoose schema for Assignments
│   ├── Courses/       # Course management APIs
│   │   ├── dao.js
│   │   ├── model.js
│   │   ├── routes.js
│   │   ├── schema.js
│   ├── Users/         # User authentication and management
│   │   ├── dao.js
│   │   ├── model.js
│   │   ├── routes.js
│   │   ├── schema.js
│   ├── Database/      # Database configuration and connection
│   │   ├── assignments.js
│   │   ├── courses.d.ts
│   │   ├── courses.js
│   │   ├── enrollments.js
│   │   ├── index.js
│   │   ├── modules.js
│   │   ├── users.js
│── package.json       # Project dependencies and metadata
│── server.js          # Main entry point for the server
│── .env               # Environment variables (MongoDB URI, port, etc.)
```

## Installation and Setup

1. Clone the repository:
   ```sh
   git clone [your-repository-url]
   ```

2. Navigate to the project directory:
   ```sh
   cd kanbas-node-server-app
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following:
     ```env
     MONGO_URI=mongodb://localhost:27017/kanbas
     PORT=4000
     ```

5. Start the server:
   ```sh
   npm start
   ```

6. For development with automatic restarts:
   ```sh
   npm run dev
   ```

## API Endpoints

| Method | Endpoint           | Description |
|--------|-------------------|-------------|
| GET    | `/api/users`       | Retrieve all users |
| POST   | `/api/users`       | Create a new user |
| GET    | `/api/courses`     | Retrieve all courses |
| POST   | `/api/courses`     | Create a new course |
| GET    | `/api/modules`     | Retrieve all modules |
| POST   | `/api/modules`     | Create a new module |
| GET    | `/api/enrollments` | Retrieve all enrollments |
| POST   | `/api/enrollments` | Enroll a user into a course |
| GET    | `/api/assignments` | Retrieve all assignments |
| POST   | `/api/assignments` | Create a new assignment |

More detailed API documentation can be found in the project.

## Technologies Used

- **Backend Framework**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Environment Management**: dotenv
- **Development Tools**: Nodemon

## Deployment

The backend deployed to Render.com.

