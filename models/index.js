const mongoose = require('mongoose');
module.exports = {
    BookModel: require('./book.model')(mongoose),
    BorrowModel: require('./borrow.model')(mongoose),
    ContactModel: require('./contact.model')(mongoose)
}