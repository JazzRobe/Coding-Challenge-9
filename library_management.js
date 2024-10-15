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
        
    } //returns all books with isAvailable === true

    listBooks() {
        return books;
    }
}