const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  player_id: {
    type: String,
    required: true,
    trim: true
  },
  is_winner: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('players', PlayerSchema);