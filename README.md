# **Taskify API**

## 🚀 Short Description

This is the backend for the **Task Management Board**, built with **Node.js, Express, and MongoDB**. It provides a RESTful API for managing tasks, including creating, updating, deleting, and reordering tasks.

## 📦 Dependencies

This project uses the following major dependencies:

- **Express.js** (Web framework for Node.js)
- **MongoDB & Mongoose** (Database and ORM for data management)
- **Cors** (Middleware for handling Cross-Origin Resource Sharing)
- **dotenv** (Environment variable management)
- **Nodemon** (Development server auto-restart)

## 🔧 Installation Steps

1. **Clone the Repository**

   ```
   git clone https://github.com/Fahim047/task-board-api.git
   cd task-board-api

   ```

2. **Install Dependencies**

   ```
   npm install

   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add:

   ```
   PORT=8000
   MONGO_URI=

   ```

4. **Start the Server**

   ```
   npm run dev  # Uses Nodemon for auto-restart during development

   ```

5. **Test the API**

   Use **Postman**, **cURL**, or visit `http://localhost:8000/api/tasks` in the browser to check if the API is running.

## 📌 API Endpoints

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| GET    | `/api/v1/tasks`     | Fetch all tasks         |
| POST   | `/api/v1/tasks`     | Create a new task       |
| PATCH  | `/api/v1/tasks/:id` | Update an existing task |
| DELETE | `/api/v1/tasks/:id` | Delete a task           |

## 🛠 Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Middleware:** CORS, dotenv

---

### 📝 Contributions

If you'd like to contribute, feel free to fork the repo and create a pull request. 🚀
