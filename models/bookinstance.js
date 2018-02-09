const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

// enum: This allows us to set the allowed values of a string. 
// In this case we use it to specify the availability status of our 
// books (using an enum means that we can prevent mis-spellings and 
// arbitrary values for our status)


let BookInstanceSchema = new Schema({
    book: { 
        type: Schema.ObjectId, 
        ref: 'Book', 
        required: true 
    },
    imprint: {
        type: String, 
        required: true
    },
    status: {
        type: String, 
        required: true, 
        enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], 
        default: 'Maintenance'
    },
    due_back: {
        type: Date, 
        default: Date.now
    }
});

BookInstanceSchema.virtual('url').get(function(){
    let id = this._id;
    return `/catalog/bookinstance/${id}/`;
});

BookInstanceSchema.virtual('due_back_formatted').get(function(){
    return moment(this.due_back).format('MMMM Do, YYYY');
});

module.exports = mongoose.model('BookInstanceSchema', BookInstanceSchema);