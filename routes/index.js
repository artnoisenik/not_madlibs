var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('auth', { title: 'Dab Libs' });
});

router.post('/addstrain', function(req, res, next) {
  knex('strains')
    .insert(req.body)
    .then(function(response) {
      res.redirect('/');
    })
});

router.post('/addtype', function(req, res, next) {
  knex('types')
    .insert(req.body)
    .then(function(response) {
      res.redirect('/');
    })
});

router.post('/addplace', function(req, res, next) {
  knex('places')
    .insert(req.body)
    .then(function(response) {
      res.redirect('/');
    })
});

module.exports = router;
