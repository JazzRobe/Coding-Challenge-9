//task 1: create a Book class

class Book {
    constructor(title, author, IBSN, isAvailable) {
        this.title = title;
        this.author = author;
        this.IBSN = IBSN;
        this.isAvailable = isAvailable;
    } //constructs the class and its properties

    getDetails() {
        console.log(`Title: ${this.title}. Author: ${this.author}. IBSN: ${this.IBSN}. Available: ${this.isAvailable}.`);
    } //retrieves details of object in class

    get isAvailable() {
        return `Available: ${this.isAvailable}`;
    } //returns availability of book

    set isAvailable(newAvailability) {
        if (this.isAvailable === true) {
            this.isAvailable === false;
        } else {
            this.isAvailable === true;
        }
    } //sets new availability of book. if available, change to false. if not, change to true.
}


//create a Section class

const books = []; //initial books array

class Section {
    constructor(name, books) {
        this.name = name;
        this.books = books;
    } //constructs class with parameters

    addBook(book) {
        this.book.push(books)
    } //adds book to books array

    getAvailableBooks() {
        //ADD LATER!!!
    } //returns all books with isAvailable === true

    listBooks() {
        return books;
    }
}


//task 3: create a Patron class

class Patron {
    constructor(name, borrowedBooks) {
        this.name = name;
        this.borrowedBooks = borrowedBooks;
    } //create class with parameters

    borrowBook(book) {
        if (this.isAvailable === true) {
            this.borrowedBooks.push(book);
            this.isAvailable === false;
        } else {
            return "This book is unavailable.";
        }
    } //if available, add to borrowedBooks and change availability. if not, return error

    returnBook(book) {
        this.borrowedBooks.find() //FINISH LATER !!!
    } //if they own it, remove from borrowedBooks. if not, show error.
}

//returnBook: check if they own the book.
//remove book from borrowedBooks.
//if they don't own, "Patron does not own book."