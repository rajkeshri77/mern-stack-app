const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const carrerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    meta_data: {}
})

const Contact = mongoose.model('CONTACT', userSchema);
const Carrer = mongoose.model('CARRER', carrerSchema);

module.exports = Contact;
module.exports = Carrer;