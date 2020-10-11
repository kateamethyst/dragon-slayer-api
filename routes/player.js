const express = require('express');

const router = express.Router();
const Player = require('../app/models/Player');
const playerController = require('../app/controllers/PlayerController');

router.get('/', playerController.all);
router.post('/', playerController.store);

module.exports = router;