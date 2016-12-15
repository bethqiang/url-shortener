const express = require('express');
const router = express.Router();
const path = require('path');

const models = require('./models');
const Link = models.Link;

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Getting and navigating to a URL in the database
router.get('/:linkNum', (req, res, next) => {
  Link.findOne({
    where: {
      shortUrl: `https://small-ify.herokuapp.com/${req.params.linkNum}`
    }
  })
  .then(data => {
    res.redirect(data.url);
  })
  .catch(next);
});

// Create or retrieve a shortened URL for a "long" URL
// Not a huge fan of this 'get' method here - I think a 'post' would make more sense. But alas, project requirements...
router.get('/api/:origUrl(*)', (req, res, next) => {
  if (/^https?:\/\//.test(req.params.origUrl)) {
    Link.findOrCreate({
      where: {
        url: req.params.origUrl
      }
    })
    .then(urlObj => {
      const [data] = urlObj;
      res.json({
        url: data.url,
        shortUrl: data.shortUrl
      });
    })
    .catch(next);
  } else {
    res.json({
      error: 'Please ensure your URL has a valid protocol.'
    });
  }
});

module.exports = router;
