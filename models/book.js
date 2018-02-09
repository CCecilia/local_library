const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: Schema.ObjectId,
        ref: 'Author',
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    genre: [{
        type: Schema.ObjectId, 
        ref: 'Genre'
    }]
});

// Virtual for book's url
BookSchema.virtual('url').get(function(){
    let id = this._id;
    return `/catalog/book/${id}/`;
});

module.exports = mongoose.model('Book', BookSchema);