const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Westborough High School Debate Team | Home',
        page_name: 'Home'
    });
});

module.exports = router;
