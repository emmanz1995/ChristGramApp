const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const prayerRequestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    postedBy: {
        type: ObjectId,
        ref: 'user'
    }
})

mongoose.model('prayerRequest', prayerRequestSchema);
