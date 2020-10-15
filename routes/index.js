const express = require('express');

const router = express.Router();

router.get('/',  (req, res) => {
    res.send('Hello to Dragon Slayer API');
});

module.exports = router;