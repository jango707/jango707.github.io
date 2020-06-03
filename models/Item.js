const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ItemSchema = new Schema({
    title: {
        type: String,
        
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);