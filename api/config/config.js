require('dotenv').config();
module.exports = {
    dbUrl: process.env.MONGO_DB || "mongodb://127.0.0.1:27017/perpus",
    port: process.env.PORT || 3000
}
