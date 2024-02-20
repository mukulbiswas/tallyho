var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: 'Got a GET request but there is nothing to show.' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', company: 'Brevity Labs' });
});

module.exports = router;
