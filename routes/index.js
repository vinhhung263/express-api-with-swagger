const express = require('express');
const bookRouter = require('./book.routes');

const rootRouter = express.Router();
rootRouter.use("/books", bookRouter);

module.exports = rootRouter;