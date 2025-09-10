import React, { useState, useEffect } from 'react';

const GENRES = [
  "FANTASY",
  "SCIENCE FICTION",
  "DYSTOPIAN",
  "ADVENTURE",
  "ROMANCE",
  "MYSTERY",
  "HORROR",
  "THRILLER",
  "HISTORICAL FICTION",
  "YOUNG ADULT (YA)",
  "CHILDREN'S FICTION",
  "OTHERS"
];

const getYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = currentYear; y >= 1900; y--) {
    years.push(y);
  }
  return years;
};

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
      <select
        value={genre}
        onChange={e => setGenre(e.target.value)}
        required
        className="genre-select"
      >
        <option value="">Select Genre</option>
        {GENRES.map(g => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
      <select
        value={publishedYear}
        onChange={e => setPublishedYear(e.target.value)}
        required
        className="year-select"
      >
        <option value="">Select Year</option>
        {getYearOptions().map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
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