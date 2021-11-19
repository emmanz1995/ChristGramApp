const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../key');
const requireLogin = require('../middleware/requireLogin');

// router.get('/protected', requireLogin, (req, res) => {
//     res.send('hello user')
// })

router.post('/signup', (req, res) => {
    const { name, email, password, denomination, pic } = req.body;
    if(!name || !email || !password || !denomination) {
        return res.status(422).json({ error: 'please add all the fields' })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if(savedUser) {
                return res.status(422).json({ error: 'user already exists with this email.' })
            }
            bcrypt.hash(password, 14)
            .then(hashedpassword => {
                const user = new User({
                    email,
                    password: hashedpassword,
                    name,
                    denomination,
                    pic
                })
                user.save()
                    .then(user => {
                        res.json({ message: 'Saved Successfully!' })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
        })
        .catch(error => {
            console.log(error)
        })
})

router.post('/signin', (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(422).json({ message: 'Please add email or password' })
    }
    User.findOne({email: email})
        .then(savedUser => {
            if(!savedUser) {
                res.status(422).json({ error: 'Invalid email or password' })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if(doMatch) {
                        // res.json({ message: 'Successfully signed' })
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
                        const {_id, name, email, denomination, pic} = savedUser;
                        res.json({token, user: {_id, name, email, denomination, pic}})
                    } else {
                        return res.status(422).json({ error: 'Invalid email or password' })
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        })
})

module.exports = router;
