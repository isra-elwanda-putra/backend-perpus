const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/config');
const app = express();
const corsOptions = {
    origin: "*"
};
//register cors middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// konek ke database
// const mongooseConfig = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }

mongoose.connect(config.dbUrl)
    .then(() => console.log('database connected'))
    .catch(err => {
        console.log(`gagal terhubung, ${err.message}`);
        process.exit();
    });

//Memanggil routes user
require("./routes/book.routes")(app);
require("./routes/contact.routes")(app);

app.listen(config.port, () => console.log(`Server run on port ${config.port}`))

module.exports = app;