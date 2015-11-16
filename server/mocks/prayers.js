/*jshint node:true*/
module.exports = function(app) {
  var uuid = require('uuid');
  var express = require('express');
  var bodyParser = require('body-parser');
  var prayersRouter = express.Router();
  var prayers = [];

  prayersRouter.get('/', function(req, res) {
    res.send({
      'prayers': prayers
    });
  });

  prayersRouter.post('/', function(req, res) {
    var prayer = req.body.prayer;

    prayer.id = uuid.v4();
    prayers.push(prayer);

    res.json({ prayer: prayer });
  });

  prayersRouter.get('/:id', function(req, res) {
    res.send({
      'prayers': {
        id: req.params.id
      }
    });
  });

  prayersRouter.put('/:id', function(req, res) {
    res.send({
      'prayers': {
        id: req.params.id
      }
    });
  });

  prayersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/prayers', bodyParser.json());
  app.use('/api/prayers', prayersRouter);
};
