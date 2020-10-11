const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MonsterSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  hp: {
    type: Number,
    required: true,
    trim: true
  },
  moves: [
    {
      name: {
        type: String
      },
      from: {
        type: Number,
      },
      to: {
        type: Number,
      }
    }
  ]
});

module.exports = mongoose.model('monsters', MonsterSchema);