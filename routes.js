const express = require('express');
const router = express.Router();

const models = require('./models');
const Link = models.Link;

router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

module.exports = router;
