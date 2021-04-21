const express = require('express');
const Contact = require('../model/userSchema');
const router = express.Router();

router.post('/contact', async (req, res) => {

    const { name, email, phone, message } = req.body;
    
    if (!name || !email || !phone || !message) {
        return res.status(422).json({ error: "Please filled the field" });
    }

    try {
        const user = new Contact({name, email, phone, message});

        await user.save();
        
        res.status(201).json({ message: "Query send successfully" });

        /* res.json({ message: req.body }); */
    } catch (error) {
        console.log(error);
    }

});

router.get('/getdata', (req, res) => {
    Contact.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

module.exports = router;