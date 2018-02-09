const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

let AuthorSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        max: 100
    },
    family_name: {
        type: String,
        required: true,
        max: 100
    },
    date_of_birth: {
        type: Date
    },
    date_of_death: {
        type: Date
    }
});

// Virtual for author's full name
AuthorSchema.virtual('name').get(function(){
    let fname = this.first_name;
    let lname = this.family_name;
    return `${fname}, ${lname}`;
});

// Virtual for author's url
AuthorSchema.virtual('url').get(function(){
    let id = this._id
    return `/catalog/author/${id}/`;
});

AuthorSchema.virtual('life_span').get(function(){
    let dob_pretty = moment(this.date_of_birth).format('MMMM Do, YYYY');
    let dod_pretty = moment(this.date_of_death).format('MMMM Do, YYYY');
    return `${dob_pretty} - ${dod_pretty}`;
});

module.exports = mongoose.model('Author', AuthorSchema);