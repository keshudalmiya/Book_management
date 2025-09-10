import React from 'react';

const BookList = ({ books = [], onDelete, onEdit }) => (
  <div className="book-card-list">
    {Array.isArray(books) && books.map(book => (
      <div className="book-card" key={book.id}>
        <div className="book-card-content">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Year:</strong> {book.publishedYear}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
        </div>
        <div className="book-card-actions">
          <button onClick={() => onEdit(book)}>Edit</button>
          <button onClick={() => onDelete(book.id)}>Delete</button>
        </div>
      </div>
    ))}
  </div>
);

export default BookList;