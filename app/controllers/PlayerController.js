'use strict';
const Player = require('../models/Player');

/**
 * Get All the Players Information sort by created at
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.all = async (req, res, next) => {
    try {
        const players = await Player.find().sort({ created_at: -1 });
        res.json(players);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

/**
 * Save Player
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.store = async (req, res, next) => {
    try {
        const player =  new Player({
            player_id: req.body.player_id,
            is_winner: req.body.is_winner,
        });
        player.save();
        res.json(player);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}