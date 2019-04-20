var express = require('express');
var router = express.Router();

router.get('/games', function(req, res, next) {
  res.send([
    { id: 'a1', name: 'APEX' },
    { id: 'b1', name: 'GTA5' },
    { id: 'c1', name: 'Sekiro' }
  ]);
});

router.get('/error', function(req, res, next) {
  res.status(500).send('Not found');
});

module.exports = router;
