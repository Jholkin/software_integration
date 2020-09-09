var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.send('hello world');
});

router.get('/person/:name', (req, res) => {
  res.send('Hello ' + req.params.name);
});

module.exports = router;
