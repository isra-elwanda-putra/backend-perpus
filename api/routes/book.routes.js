const book = require("../controllers/book.controller");
const router = require("express").Router();
module.exports = app => {
    // router.post("/book", contact.findOneContact);
    router.get("/books", book.findSearch);
    app.use("/perpus", router);
}