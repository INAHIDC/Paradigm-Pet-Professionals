const mongoose = require('mongoose');

const ConsultationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    timezone: { type: String, required: true },
    petName: { type: String, required: true },
    petType: { type: String, required: true },
    petAge: { type: String, required: true },
    submissionDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Consultation', ConsultationSchema);
