import React, { useState, useEffect } from 'react';

const BookForm = ({ onSubmit, editingBook, onCancel }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const [isbn, setIsbn] = useState('');

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setGenre(editingBook.genre);
      setPublishedYear(editingBook.publishedYear);
      setIsbn(editingBook.isbn);
    } else {
      setTitle('');
      setAuthor('');
      setGenre('');
      setPublishedYear('');
      setIsbn('');
    }
  }, [editingBook]);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ title, author, genre, publishedYear, isbn });
    setTitle('');
    setAuthor('');
    setGenre('');
    setPublishedYear('');
    setIsbn('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input
        placeholder="Genre"
        value={genre}
        onChange={e => setGenre(e.target.value)}
        required
      />
      <input
        placeholder="Published Year"
        value={publishedYear}
        onChange={e => setPublishedYear(e.target.value)}
        required
      />
      <input
        placeholder="ISBN"
        value={isbn}
        onChange={e => setIsbn(e.target.value)}
        required
      />
      <button type="submit">{editingBook ? 'Update' : 'Add'} Book</button>
      {editingBook && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default BookForm;