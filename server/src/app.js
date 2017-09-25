const express = require('express');
const bodyParser = require('body-parser').json();
const models = require('./db.js');

const app = express();
const port = 6161;

app.get('/', (req, res) => {
  console.log('request on /')
  res.send('Coming soon');
});

app.get('/test', (req, res) => {
  //TODO: create endpoint here
  res.redirect('/');
});

app.use('/test', bodyParser);

app.post('/test', (req, res) => {
  console.log(req.body);
});

app.get('/test/:testId', (req, res) => {
  models.Test.findOne({_id: req.params.testId})
    .then((data) => res.send(data))
    .catch((err) => res.send('something went wrong.'));
  //res.send(req.params);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
