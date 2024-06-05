const contact = require("../controllers/contact.controller");
const router = require("express").Router();
module.exports = app => {
    router.post("/contact", contact.findOneContact);
    router.post("/contact", contact.findAllContact);
    router.post("/contacts", contact.createContact);
    router.get("/contact", contact.updateContact);
    router.post("/contact", contact.deleteContact);
    app.use("/perpus", router);
}