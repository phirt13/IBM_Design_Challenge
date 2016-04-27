const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send(__dirname + '/public/index.html');
});

app.get('/*', (req, res) => {
  var cheap404 = '<h1>These are not the droids you are looking for...</h1>';
  res.send(cheap404);
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log('server running at localhost:' + port);
});
