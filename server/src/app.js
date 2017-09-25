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

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
