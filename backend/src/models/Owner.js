const { Schema, model } = require('mongoose');

const OwnerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: String,
    email: String,
    houseID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'House',
    },
    veiculosID: [{
        type: Schema.Types.ObjectId,
        ref: 'Veichles',
    }],
    user: {
        type: String,
        required: true,
    }
});

module.exports = model('Owner', OwnerSchema);