//task 1: create a Book class

class Book {
    constructor(title, author, IBSN, isAvailable) {
        this.title = title;
        this.author = author;
        this.IBSN = IBSN;
        this.isAvailable = true;
    } //constructs the class and its properties

    getDetails() {
        console.log(`Title: ${this.title}. Author: ${this.author}. IBSN: ${this.IBSN}. Available: ${this._isAvailable}.`);
    } //retrieves details of object in class

    get isAvailable() {
        return `Available: ${this._isAvailable}`;
    } //returns availability of book

    set isAvailable(newAvailability) {
        if (this.isAvailable === true) {
            this.isAvailable === false;
        } else {
            this.isAvailable === true;
        }
    } //sets new availability of book. if available, change to false. if not, change to true.
}


//task 2: create a Section class

const books = []; //initial books array

class Section {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    } //constructs class with parameters

    addBook(book) {
        this.books.push(book)
    } //adds book to books array

    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    } //returns all books with isAvailable === true

    listBooks() {
        return this.books.map(book => `The book ${book.title} is ${book.isAvailable ? "available" : "borrowed"}.`);
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
            this.isAvailable === false
            console.log(`${this.name} borrowed ${book.title}.`);
        } else {
            return "This book is unavailable.";
        }
    } //if available, add to borrowedBooks and change availability. if not, return error

    returnBook(book) {
        let book = this.borrowedBooks.find(book => book.title === book.title);
        if (book) {
            this.borrowedBooks = this.borrowedBooks.filter(book => book.title !== book.title);
            book.isAvailable = true;
            console.log(`${book.title} is now available.`);
        } else {
            console.log(`${this.name} did not borrow this book.`);
        }
    } //if they own it, remove from borrowedBooks. if not, show error.
}


//task 4: create a VIPPatron class that inherits from Patron

class VIPPatron extends Patron {
    constructor(name, borrowedBooks, priority) {
        super(name, borrowedBooks);
        this.priority = true;
    } //extend Patron, includes priority parameter

    borrowBook(book) {
        if (this.priority && book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`VIP ${this.name} borrowed ${book.title}.`)
        } else {
            console.log("Book unavailable or no priority.");
        }
    }
}