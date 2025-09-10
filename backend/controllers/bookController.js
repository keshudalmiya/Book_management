const bookData = require('../data/bookData');

// Get all books
exports.getAllBooks = (req, res) => {
  const books = bookData.getAllBooks();
  res.status(200).json({
    success: true,
    count: books.length,
    data: books
  });
};

// Get book by ID
exports.getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid ID format'
    });
  }

  const book = bookData.getBookById(id);
  
  if (!book) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${id} not found`
    });
  }
  
  res.status(200).json({
    success: true,
    data: book
  });
};

// Create a new book
exports.createBook = (req, res) => {
  const { title, author, publishedYear, genre } = req.body;
  
  // Validate required fields
  if (!title || !author) {
    return res.status(400).json({
      success: false,
      message: 'Please provide both title and author'
    });
  }
  
  const newBook = bookData.addBook({ title, author, publishedYear, genre });
  
  res.status(201).json({
    success: true,
    message: 'Book created successfully',
    data: newBook
  });
};

// Update a book
exports.updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid ID format'
    });
  }
  
  // Check if book exists
  if (!bookData.getBookById(id)) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${id} not found`
    });
  }
  
  const updatedBook = bookData.updateBook(id, req.body);
  
  res.status(200).json({
    success: true,
    message: 'Book updated successfully',
    data: updatedBook
  });
};

// Delete a book
exports.deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid ID format'
    });
  }
  
  // Check if book exists
  if (!bookData.getBookById(id)) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${id} not found`
    });
  }
  
  bookData.deleteBook(id);
  
  res.status(200).json({
    success: true,
    message: `Book with ID ${id} deleted successfully`
  });
};