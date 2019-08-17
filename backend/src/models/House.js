const { Schema, model } = require('mongoose');

const HouseSchema = new Schema({
    number: {
        type: Number,
        required: true
    },
    block: {
        type: Number,
        required: true
    },
    ownerID: Schema.Types.ObjectId,
});

module.exports = model('House', HouseSchema);