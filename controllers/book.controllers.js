const books = require("../util/data");

const getDetailBook = (req, res) => {
    let book = books.find(function (item) {
        return item.id == req.params.id;
    });
    book ? res.status(200).json(book) : res.sendStatus(404);
}

const getAllBooks = (req, res) => {
    res.status(200).json(books);
}

const createBook = (req, res) => {
    const { title, author, finished } = req.body;
    let book = {
        id: books.length + 1,
        title: title,
        author: author,
        finished: finished !== undefined ? finished : false,
        createdAt: new Date(),
    };
    books.push(book);
    res.status(201).json(book);
}

const updateBook = (req, res) => {
    let book = books.find(function (item) {
        return item.id == req.params.id;
    });
    if (book) {
        const { title, author, finished } = req.body;
        let updated = {
            id: book.id,
            title: title !== undefined ? title : book.title,
            author: author !== undefined ? author : book.author,
            finished: finished !== undefined ? finished : book.finished,
            createdAt: book.createdAt,
        };
        books.splice(books.indexOf(book), 1, updated);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
}

const deleteBook = (req, res) => {
    let book = books.find(function (item) {
        return item.id == req.params.id;
    });
    if (book) {
        books.splice(books.indexOf(book), 1);
    } else {
        return res.sendStatus(404);
    }
    res.sendStatus(204);
}

module.exports = {
    createBook,
    getAllBooks,
    getDetailBook,
    updateBook,
    deleteBook
};