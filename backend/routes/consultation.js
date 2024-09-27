const express = require('express');
const router = express.Router();
const Consultation = require('../models/Consultation');
router.post('/', async (req, res) => {
    const { name, phone, email, timezone, petName, petType, petAge } = req.body;

    try {
        const newConsultation = new Consultation({
            name,
            phone,
            email,
            timezone,
            petName,
            petType,
            petAge
        });

        await newConsultation.save();
        res.json({ success: true, message: 'Your request submitted successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error, please try again later.' });
    }
});

module.exports = router;
