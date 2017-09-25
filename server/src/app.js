const express = require('express');

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

app.get('/test/:testId', (req, res) => {
  res.send(req.params);
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
