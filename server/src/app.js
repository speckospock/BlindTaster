const express = require('express');
const bodyParser = require('body-parser').json();
const cors = require('cors');
const models = require('./db.js');

const app = express();
const port = 6161;

app.use(cors());

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
  let newTest = new models.Test({name, producer, vintage, varietal, country, region, type} = req.body);

  console.log(newTest);
  // newTest.save().then(res.send(newTest));
  res.send(newTest);
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
