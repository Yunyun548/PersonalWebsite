var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        location: 'Taipei, Taiwan'
    });
});

module.exports = router;
