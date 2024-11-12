const express = require('express');
const contactUsController = require('../controllers/contactUsCon');

const router = express.Router();

router.get('/contactUs', contactUsController.getContactUs);

module.exports = router;