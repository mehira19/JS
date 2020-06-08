const mongoose = require('mongoose');

/* definition of schema for Items*/
var Schema = mongoose.Schema;

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isSold: {
        type: Boolean,
        required: true,
        default: false
    },
    price: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});
// export the schema
const dbConnection = require('../controllers/db');
const Items = dbConnection.model('Items', ItemSchema, 'items');

module.exports.schema = ItemSchema;
// export the model
module.exports.model = Items;