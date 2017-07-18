var express = require('express');
var router = express.Router();

var experiences = require('../public/data/work-experience.json');

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', {
        experiences: experiences,
        location: 'Taipei, Taiwan'
    });
});

module.exports = router;
