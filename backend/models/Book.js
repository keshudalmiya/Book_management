// Book model class
class Book {
  constructor(id, title, author, publishedYear, genre, isbn) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.genre = genre;
    this.isbn = isbn;
  }

  update(data) {
    this.title = data.title;
    this.author = data.author;
    this.publishedYear = data.publishedYear;
    this.genre = data.genre;
    this.isbn = data.isbn;
  }
}

module.exports = Book;