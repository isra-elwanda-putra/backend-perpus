module.exports = app => {
    const book = require("../controllers/book.controller");
    const router = require("express").Router();

    router.get("/books", book.findSearch);
    router.post("/books", book.findSearch);
    app.use("/perpus", router);
}