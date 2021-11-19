const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    denomination: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        default: 'https://res.cloudinary.com/emmanuel-cloud-storage/image/upload/v1624974538/user-placeholder_uhoqlp.png'
    }
});

mongoose.model('user', userSchema);
