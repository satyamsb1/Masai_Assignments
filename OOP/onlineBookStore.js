function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
  
  function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  
    this.getBookInfo = function() {
      console.log("Title:", this.title);
      console.log("Author:", this.author.name);
      console.log("Genre:", this.genre);
      console.log("Price:", this.price);
    };
  }
  
  const author1 = new Author("J.K. Rowling", 1965, "British");
  const author2 = new Author("Haruki Murakami", 1987, "Japanese");
  
  const book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 10.99);
  const book2 = new Book("The Norwegian Wood", author2, "Fiction", 14.95);
  const book3 = new Book("The Lord of the Rings: The Fellowship of the Ring", new Author("J.R.R. Tolkien", 1892, "British"), "Fantasy", 12.99);
  
  const bookstore = [book1, book2, book3];
  
  for (const book of bookstore) {
    book.getBookInfo();
  }
  