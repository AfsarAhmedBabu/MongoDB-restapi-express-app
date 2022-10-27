const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    productName: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model('Data', schema);