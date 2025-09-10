const API_BASE_URL = 'http://localhost:3000';

export async function getBooks() {
  const response = await fetch(`${API_BASE_URL}/books`);
  if (!response.ok) throw new Error('Failed to fetch books');
  return response.json();
}

export async function addBook(book) {
  const response = await fetch(`${API_BASE_URL}/books`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  if (!response.ok) throw new Error('Failed to add book');
  return response.json();
}

export async function updateBook(id, book) {
  const response = await fetch(`${API_BASE_URL}/books/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  if (!response.ok) throw new Error('Failed to update book');
  return response.json();
}

export async function deleteBook(id) {
  const response = await fetch(`${API_BASE_URL}/books/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete book');
  return response.json();
}