const Book = require('../models/Book');

// In-memory books array
let books = [
  new Book(1, 'To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction', '9780061120084'),
  new Book(2, '1984', 'George Orwell', 1949, 'Dystopian', '9780451524935'),
  new Book(3, 'The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Classic', '9780743273565')
];

// Current ID counter for adding new books
let currentId = books.length;

// Get all books
const getAllBooks = () => books;

// Get book by ID
const getBookById = id => books.find(book => book.id === id);

// Add a new book
const addBook = data => {
  const newId = ++currentId;
  const newBook = new Book(newId, data.title, data.author, data.publishedYear, data.genre, data.isbn);
  books.push(newBook);
  return newBook;
};

// Update a book
const updateBook = (id, data) => {
  const book = getBookById(id);
  if (book) {
    book.update(data);
    return book;
  }
  return null;
};

// Delete a book
const deleteBook = id => {
  const initialLength = books.length;
  books = books.filter(book => book.id !== id);
  return initialLength !== books.length;
};

module.exports = { getAllBooks, getBookById, addBook, updateBook, deleteBook };