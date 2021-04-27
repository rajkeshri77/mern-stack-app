const express = require('express');
const Contact = require('../model/userSchema');
const Carrer = require('../model/userSchema');
const router = express.Router();
const fileUpload = require('express-fileupload');
const multer = require("multer");
var upload = multer({ dest: '../client/public/uploads/' })

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


router.post('/carrer', upload.single('file'), async (req, res) => {
    const { name, email, phone } = req.body;
    const {file} = req.file;
    
    if (!name || !email || !phone || !file) {
        return res.status(422).json({ error: "Please filled the field" });
    }

    try {
        const user = new Carrer({name, email, phone, file});
        
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