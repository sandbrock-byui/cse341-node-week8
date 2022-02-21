const express = require('express');

const feedController = require('../controllers/professional');

const router = express.Router();

// GET /professional
router.get('/professional', feedController.getProfessional);

module.exports = router;