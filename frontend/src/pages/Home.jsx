import React, { useEffect, useState } from 'react';
import { getBooks, addBook, updateBook, deleteBook } from '../services/api';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const fetchBooks = () => {
    getBooks().then(data => {
      console.log('Fetched books:', data);
      setBooks(data);
    }).catch(console.error);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddOrUpdate = async (book) => {
    if (editingBook) {
      const updated = await updateBook(editingBook.id, book);
      console.log('Updated book:', updated);
      setEditingBook(null);
    } else {
      const added = await addBook(book);
      console.log('Added book:', added);
    }
    fetchBooks();
  };

  const handleEdit = (book) => setEditingBook(book);

  const handleDelete = async (id) => {
    await deleteBook(id);
    fetchBooks();
  };

  const handleCancelEdit = () => setEditingBook(null);

  return (
    <div>
      <h1>Book Management</h1>
      <BookForm
        onSubmit={handleAddOrUpdate}
        editingBook={editingBook}
        onCancel={handleCancelEdit}
      />
      <BookList
        books={books}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Home;