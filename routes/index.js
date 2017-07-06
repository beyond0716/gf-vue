var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Hello Vue'});
});

router.get('/template-ejs', function (req, res, next) {
  res.render('template', {
    title: 'Hello Ejs study!',
    names: ['foo', 'bar', 'baz'],
    users: [
      {name: 'Tobi', age: 2, species: 'ferret'},
      {name: 'Loki', age: 2, species: 'ferret'},
      {name: 'Jane', age: 6, species: 'ferret'}
    ]
  });
});

module.exports = router;
