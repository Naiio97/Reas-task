const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    estateType: {
        required: true,
        type: 'string'
    },
    fullName: {
        required: true,
        type: 'string'
    },
    phone: {
        required: true,
        type: 'string'
    },
    email: {
        required: true,
        type: 'string'
    },
    region: {
        required: true,
        type: 'string'
    },
    district: {
        required: true,
        type: 'string'
    }
})

module.exports = mongoose.model('Data', dataSchema) 