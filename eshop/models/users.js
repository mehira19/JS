const mongoose = require('mongoose');

/* definition of schema for Users*/
var Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    soldItems: {
        type: [ObjectId],
        required: true,
        default: []
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});
// export the schema
const dbConnection = require('../controllers/db');
const Users = dbConnection.model('Users', UserSchema, 'users');

module.exports.schema = UserSchema;
// export the model
module.exports.model = Users;