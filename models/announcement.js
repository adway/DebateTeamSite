var mongoose = require('mongoose');

var announcementSchema = mongoose.Schema({
  event: String,
  description: String,
  date: String
});

module.exports = mongoose.model('Announcement', announcementSchema);
