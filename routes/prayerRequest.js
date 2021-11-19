const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const PrayerRequest = mongoose.model('prayerRequest');

router.post('/createprayerreq', requireLogin, (req, res) => {
    const { title, description } = req.body;
    if(!title || !description) {
        return res.status(422).json({ message: 'title or description is required' })
    }
    req.user.password = undefined;
    const prayer = new PrayerRequest({
        title,
        description,
        postedBy: req.user
    })

    prayer.save()
        .then(response => {
            res.json({prayer: response})
        })
        .catch(error => console.log(error))
})

router.get('/myprayer', requireLogin, (req, res) => {
    PrayerRequest.find({ postedBy: req.user._id })
        .populate('postedBy', '_id name')
        .then(response => {
            res.json(response)
        })
        .catch(error => console.log(error))
})

router.delete('/deleteprayerreq/:prayerId', requireLogin, (req, res) => {
    PrayerRequest.findOne({_id: req.params.prayerId})
        .populate('postedBy', '_id')
        .exec((err, prayer) => {
            if(err || !prayer) {
                return res.status(422).json({error: err})
            }
            if(prayer.postedBy._id.toString() === req.user._id.toString()) {
                prayer.remove()
                    .then(response => {
                        res.json(response)
                    }) .catch(error => {
                    console.log(error)
                })
            }
        })
})


module.exports = router
