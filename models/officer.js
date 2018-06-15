var mongoose = require('mongoose');

var officerSchema = mongoose.Schema({
  name: String,
  position: String,
  bio: String
});

module.exports = mongoose.model('Officer', officerSchema);
