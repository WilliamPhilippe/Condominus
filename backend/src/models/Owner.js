const { Schema, model } = require('mongoose');

const OwnerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: String,
    email: String,
    houseNumber: {
        type: Number,
        required: true,
    },
    houseBlock:{
        type: Number,
        required: true,
    },
    veichlesPlate: String,
    user: {
        type: String,
        required: true,
    }
});

module.exports = model('Owner', OwnerSchema);