const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Kubernetes Backend App Running');
});

app.get('/cpu', (req, res) => {

  let total = 0;

  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  res.send(`CPU Load Generated ${total}`);
});

app.get('/save', (req, res) => {

  fs.appendFileSync('/data/test.txt', 'Persistent Data Saved\n');

  res.send('Data Saved');
});

app.get('/data', (req, res) => {

  const data = fs.readFileSync('/data/test.txt', 'utf8');

  res.send(data);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});