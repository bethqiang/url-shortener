const express = require('express');
const router = express.Router();

const models = require('./models');
const Link = models.Link;

router.get('/', (req, res, next) => {
  res.sendFile('index.html');
});

// Create or retrieve a shortened URL for a "long" URL
// Not a huge fan of this 'get' method here - I think a 'post' would make more sense. But alas, project requirements...
router.get('/api/:origUrl(*)', (req, res, next) => {
  // need to verify if link is valid

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
