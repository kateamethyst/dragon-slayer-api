'use strict';
const Monster = require('../models/Monster');

exports.all = async (req, res, next) => {
    try {
        const monsters = await Monster.find({name: 'Rathalos'});
        res.json(monsters);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}