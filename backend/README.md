# Book Management REST API

A simple REST API for managing books using Node.js and Express.

## Features

- Get all books
- Get book by ID
- Create a new book
- Update a book
- Delete a book

## Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```
   or for development with auto-restart:
   ```
   npm run dev
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/books | Get all books |
| GET    | /api/books/:id | Get book by ID |
| POST   | /api/books | Create a new book |
| PUT    | /api/books/:id | Update a book |
| DELETE | /api/books/:id | Delete a book |

## Request & Response Examples

### GET /api/books

Response:
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
    },
    // more books...
  ]
}
```

### POST /api/books

Request:
```json
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "publishedYear": 1937,
  "genre": "Fantasy"
}
```

Response:
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

## Testing

Use Postman or any other API testing tool to test the endpoints.