
console.log("- Part 1: Arrays -");

const shelf = ["Wings of Fire", "The Alchemist", "Let Us C"];

console.log(shelf);
console.log(shelf.length);
console.log(shelf[0]);
console.log(shelf[shelf.length - 1]);

shelf.push("Clean Code");
shelf.unshift("Godan");
console.log(shelf);

console.log(shelf.pop());
console.log(shelf.shift());
console.log(shelf);

shelf.splice(1, 1, "Malgudi Days");
console.log(shelf);

console.log(shelf.indexOf("Let Us C"));
console.log(shelf.includes("Godan"));

console.log(shelf.slice(0, 2));
console.log(shelf);

console.log([...shelf].sort());
console.log(Array.isArray(shelf));

shelf.forEach(book => console.log(book));


console.log("--- Part 2: Objects ---");

const book = {
    id: 101,
    title: "Wings of Fire",
    author: "A. P. J. Abdul Kalam",
    price: 350,
    copies: 4,
    publisher: {
        name: "Universities Press",
        city: "Hyderabad"
    },
    tags: ["biography", "science"],
    describe() {
        return `${this.title} by ${this.author}`;
    }
};

console.log(book.title);
console.log(book["author"]);
console.log(book.publisher.city);
console.log(book.tags[1]);
console.log(book.describe());

book.price = 380;
book.isbn = "123456";
console.log(book.isbn);
delete book.isbn;

console.log("isbn" in book);
console.log("price" in book);

console.log(Object.keys(book));
console.log(Object.values(book.publisher));
console.log(Object.entries(book.publisher));

const { title, price } = book;
console.log(title, price);

const updatedBook = { ...book, price: 400 };
console.log(book.price);
console.log(updatedBook.price);


console.log("--- Part 3: Functions ---");

function formatPrice(amount) {
    return "Rs " + amount;
}

console.log(formatPrice(350));

const calculateLateFee = function(daysLate, ratePerDay = 2) {
    return daysLate * ratePerDay;
};

console.log(calculateLateFee(5));
console.log(calculateLateFee(5, 3));

const createBook = (id, title, author, category, price, copies, rating) => ({
    id, title, author, category, price, copies, rating
});

console.log(createBook(107, "Ikigai", "Hector Garcia", "Self-help", 399, 6, 4.3));


console.log("--- Part 4: Arrays of Objects ---");

const library = [
    createBook(101, "Wings of Fire", "A. P. J. Abdul Kalam", "Autobiography", 350, 4, 4.8),
    createBook(102, "The Alchemist", "Paulo Coelho", "Fiction", 299, 2, 4.5),
    createBook(103, "Let Us C", "Yashavant Kanetkar", "Programming", 450, 5, 4.2),
    createBook(104, "Clean Code", "Robert C. Martin", "Programming", 899, 0, 4.7),
    createBook(105, "Godan", "Munshi Premchand", "Fiction", 220, 3, 4.6),
    createBook(106, "Malgudi Days", "R. K. Narayan", "Fiction", 275, 1, 4.4)
];

console.log(library.map(book => book.title));

console.log(library.filter(book => book.price < 300).map(book => book.title));

console.log(library.find(book => book.id === 104));

console.log(library.findIndex(book => book.id === 105));

console.log(library.some(book => book.copies === 0));
console.log(library.every(book => book.rating > 4));


console.log("--- Part 5: LibraTrack Mini Project ---");

const isAvailable = book => book.copies > 0;

const addBook = (lib, newBook) => [...lib, newBook];

const removeBook = (lib, id) => lib.filter(book => book.id !== id);

const borrowBook = (lib, id) => {
    const book = lib.find(book => book.id === id);

    if (!book) return "Book not found";
    if (!isAvailable(book)) return `Sorry, ${book.title} is out of stock`;


    book.copies--;
    return `Borrowed: ${book.title} (${book.copies} copies left)`;
};

const searchByAuthor = (lib, text) => 
    lib.filter(book => book.author.toLowerCase().includes(text.toLowerCase()))
        .map(book => book.title);

const printReport = lib => {
    console.log("ID - Title - Price - Copies - Status");

    lib.forEach(book => {
        const status = isAvailable(book) ? "In stock" : "Out of stock";
        console.log(`${book.id} - ${book.title} - ${formatPrice(book.price)} - ${book.copies} - ${status}`);
    });
};

console.log(borrowBook(library, 101));
console.log(borrowBook(library, 104));
console.log(borrowBook(library, 999));

const updated = addBook(library, createBook(107, "Ikigai", "Hector Garcia", "Self-help", 399, 6, 4.3));

console.log(library.length);
console.log(updated.length);

const trimmed = removeBook(updated, 102);
console.log(trimmed.length);

console.log(searchByAuthor(library, "kalam"));