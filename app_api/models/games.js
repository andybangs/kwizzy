var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: String,
  user: String,
  url: String,
  created: Date,
  alphabetical: {type: Boolean, "default": false},
  suddenDeath: {type: Boolean, "default": false},
  studyMode: {type: Boolean, "default": true},
  timerSeconds: {type: Number, "default": 120, min: 0},
  data: [String]
});

mongoose.model('Game', gameSchema);
