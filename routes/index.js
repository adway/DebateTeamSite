const express = require('express');
const router = express.Router();
const Announcement = require('../models/announcement');
const Officer = require('../models/officer');

router.get('/', (req, res) => {
  Announcement.find({}, null, { sort: { _id: -1 } }, function(
    err,
    allAnnouncements
  ) {
    if (err) {
      console.log(err);
    } else {
      res.render('home', {
        page_name: 'Home',
        announcements: allAnnouncements
      });
    }
  });
});

router.get('/officers', (req, res) => {
  Officer.find({}, null, { sort: { _id: -1 } }, (err, allOfficers) => {
    if (err) {
      console.log(err);
    } else {
      res.render('officers', {
        page_name: 'Officers',
        officers: allOfficers
      });
    }
  });
});

module.exports = router;
