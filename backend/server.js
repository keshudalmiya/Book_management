const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookData = require('./data/bookData');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
// GET /books - Get all books
app.get('/books', (req, res) => {
  res.json(bookData.getAllBooks());
});

// GET /books/:id - Get specific book
app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = bookData.getBookById(id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

// POST /books - Add new book
app.post('/books', (req, res) => {
  const { title, author, genre, publishedYear, isbn } = req.body;
  if (!title || !author || !genre || !publishedYear || !isbn) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const newBook = bookData.addBook({ title, author, genre, publishedYear, isbn });
  res.status(201).json(newBook);
});

// PUT /books/:id - Update book
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, genre, publishedYear, isbn } = req.body;
  if (!title || !author || !genre || !publishedYear || !isbn) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const updatedBook = bookData.updateBook(id, { title, author, genre, publishedYear, isbn });
  if (!updatedBook) return res.status(404).json({ error: 'Book not found' });
  res.json(updatedBook);
});

// DELETE /books/:id - Delete book
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = bookData.deleteBook(id);
  if (!deleted) return res.status(404).json({ error: 'Book not found' });
  res.json({ success: true });
});

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Book Management API',
    endpoints: {
      getAllBooks: 'GET /api/books',
      getBookById: 'GET /api/books/:id',
      createBook: 'POST /api/books',
      updateBook: 'PUT /api/books/:id',
      deleteBook: 'DELETE /api/books/:id'
    }
  });
});

// Error handling middleware
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});