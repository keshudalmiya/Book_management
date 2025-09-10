# 📚 Book Management REST API

A simple RESTful API for managing a collection of books built with **Node.js** and **Express**.

---

## Features

-  Get all books  
-  Get a book by ID  
-  Add a new book  
-  Update an existing book  
-  Delete a book  

---

## 🛠 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/book-management-api.git
   cd book-management-api

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   * For production:

     ```bash
     npm start
     ```

   * For development (with auto-restart):

     ```bash
     npm run dev
     ```

   The server will typically run at:
   `http://localhost:3000`

---

## 🔗 API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/api/books`     | Get all books       |
| GET    | `/api/books/:id` | Get book by ID      |
| POST   | `/api/books`     | Create a new book   |
| PUT    | `/api/books/:id` | Update a book by ID |
| DELETE | `/api/books/:id` | Delete a book by ID |

---

## 📦 Request & Response Examples

### 🔹 GET `/api/books`

**Response**

```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "publishedYear": 1960,
      "genre": "Fiction",
      "createdAt": "2023-09-20T12:00:00.000Z",
      "updatedAt": "2023-09-20T12:00:00.000Z"
    }
    // ...
  ]
}
```

---

### 🔹 POST `/api/books`

**Request**

```json
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "publishedYear": 1937,
  "genre": "Fantasy"
}
```

**Response**

```json
{
  "success": true,
  "message": "Book created successfully",
  "data": {
    "id": 4,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "publishedYear": 1937,
    "genre": "Fantasy",
    "createdAt": "2023-09-20T12:05:00.000Z",
    "updatedAt": "2023-09-20T12:05:00.000Z"
  }
}
```

---

## 🧪 Testing the API

Use **Postman**, **Thunder Client**, or `curl` to test the API.

Example:

```bash
curl http://localhost:3000/api/books
```

---

## 📁 Project Structure

```
📦 book-management-api
├── 📁 routes
├── 📁 controllers
├── 📁 models
├── server.js / index.js
├── package.json
└── README.md
```

---

## 🙌 Acknowledgements

Built with 💚 using Node.js and Express.

---
