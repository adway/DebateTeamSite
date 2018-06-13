const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Westborough High School Debate Team | Home',
    page_name: 'Home'
  });
});

router.get('/officers', (req, res) => {
  res.render('officers', {
    title: 'Westborough High School Debate Team | Officers',
    page_name: 'Officers'
  });
});

module.exports = router;
