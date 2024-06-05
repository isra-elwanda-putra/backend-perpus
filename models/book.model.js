module.exports = mongoose => {
    const AutoIncrement = require('mongoose-sequence')(mongoose);
    const { Schema } = mongoose;
    const bookSchema = new Schema({
        id: {
            type: Number,
            unique: true,
        },
        judulBuku: {
            type: String,
        },
        seriBuku: {
            type: String,
        },
        image: {
            type: String,
        },
    }, {
        timestamps: false,
        versionKey: false
    });
    bookSchema.plugin(AutoIncrement, { id: 'book_seq', inc_field: 'id' });
    return mongoose.model('books', bookSchema);
}