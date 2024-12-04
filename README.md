# Task Manager API

A simple RESTful API built with Node.js, Express, and MongoDB for managing tasks. The API supports creating, retrieving, updating, deleting, and filtering tasks by status.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Sample Data](#sample-data)
- [License](#license)

---

## Features

- Create, retrieve, update, and delete tasks.
- Filter tasks by status (`pending` or `completed`).
- MongoDB for data persistence.
- Organized project structure for scalability and maintainability.

---

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-manager-api.git
   cd task-manager-api


API Endpoints
1. Create a Task
Method: POST
Endpoint: /api/tasks
Body:
json
Copy code
{
  "title": "Task Title",
  "description": "Task Description"
}
2. Get All Tasks
Method: GET
Endpoint: /api/tasks
3. Update a Task
Method: PUT
Endpoint: /api/tasks/:id
Body:
json
Copy code
{
  "status": "completed"
}
4. Delete a Task
Method: DELETE
Endpoint: /api/tasks/:id
5. Filter Tasks by Status
Method: GET
Endpoint: /api/tasks/status/:status
Replace :status with pending or completed.
Sample Data
Request: Create a Task
json
Copy code
POST /api/tasks
{
  "title": "Finish Assignment",
  "description": "Complete the math assignment by Monday"
}
Response:
json
Copy code
{
  "message": "Task created successfully",
  "task": {
    "id": "12345",
    "title": "Finish Assignment",
    "description": "Complete the math assignment by Monday",
    "status": "pending",
    "createdAt": "2024-12-04T10:00:00.000Z",
    "updatedAt": "2024-12-04T10:00:00.000Z"
  }
}
