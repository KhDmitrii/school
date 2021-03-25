var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:1387@localhost:5432/school');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  db.any('SELECT * FROM masters')
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
  // res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
