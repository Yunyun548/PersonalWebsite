var express = require('express');
var router = express.Router();

var experiences = require('../public/data/work-experience.json');
var education = require('../public/data/education.json');
var skillsMains = require('../public/data/skills-mains.json');
var skillsSecondaries = require('../public/data/skills-secondaries.json');
var links = require('../public/data/links.json');


/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', {
        experiences: experiences,
        education: education,
        skills: {
            mains: skillsMains,
            secondaries: skillsSecondaries
        },
        links: links,
        location: 'Taipei, Taiwan'
    });
});

module.exports = router;
