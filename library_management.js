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
    } //list of all books and their titles and availability
    
    calculateTotalBooksAvailable() {
        return this.getAvailableBooks();
    } // calculates number of books available using previous method
}


//task 3: create a Patron class

class Patron {
    constructor(name, borrowedBooks) {
        this.name = name;
        this.borrowedBooks = [];
    } //create class with parameters

    borrowBook(book) {
        if (this.isAvailable === true) {
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed ${book.title}.`);
            this.isAvailable === false
        } else {
            return "This book is unavailable.";
        }
    } //if available, add to borrowedBooks and change availability. if not, return error

    returnBook(book) {
        let borrowingBook = this.borrowedBooks.find(book => book.title === book.title);
        if (borrowingBook) {
            this.borrowedBooks = this.borrowedBooks.filter(book => book.title !== book.title);
            console.log(`${book.title} is now available.`);
            book.isAvailable = true;
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


//task 5: handle books borrowing and returning
//added to the Section class ^^


//task 6: create and manage sections and patrons (from example data)

//create sections//
const fiction = new Section("Fiction");
const science = new Section("Science"); 

//create books//
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

//add books to sections//
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

//create patrons//
const regularPatron = new Patron("John Doe");
const vipPatron = new VIPPatron("Jane Smith", true);

//regular patron tries to borrow book
regularPatron.borrowBook(book1);

//VIP patron tries to borrow a book (has priotrity)
vipPatron.borrowBook(book1);

//return the book
regularPatron.returnBook(book1);

//list books and availability//
fiction.listBooks();

//calculate total available books in each section//
console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${science.getAvailableBooks()}`);