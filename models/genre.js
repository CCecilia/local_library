const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GenreSchema = new Schema({
    name: { 
        type: String,
        min: 3,
        max: 100,
        required: true
    }
});

GenreSchema.virtual('url').get(function(){
    let id = this._id;
    return `/catalog/genre/${id}/`;
});

module.exports = mongoose.model('Genre', GenreSchema);