const mongoose = require('mongoose');
const User = mongoose.model('user');

const UserController = {
    getMe: (req, res) => {
        User.findOne(req.user._id).select('-password, -__v').then((me) => {
            res.status(200).send(me)
            console.log(me);
        }, (error) => {
            res.status(404).send({ message: error.message })
            console.log(error);
        })
    }
}

module.exports = UserController;
