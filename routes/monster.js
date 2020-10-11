const express = require('express');

const router = express.Router();
const monsterController = require('../app/controllers/MonsterController');

router.get('/', monsterController.all);

module.exports = router;