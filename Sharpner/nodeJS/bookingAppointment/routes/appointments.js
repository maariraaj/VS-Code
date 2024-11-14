const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');

router.post('/appointmentData', async (req, res) => {
    try {
        const newAppointment = await Appointment.create(req.body);
        res.json(newAppointment);
    } catch (err) {
        console.log(err);
    }
});

router.get('/appointmentData', async (req, res) => {
    try {
        const appointments = await Appointment.findAll();
        res.json(appointments);
    } catch (err) {
        console.log(err);
    }
});

router.delete('/appointmentData/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Appointment.destroy({ where: { id } });
        res.json({ message: 'Appointment deleted' });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;