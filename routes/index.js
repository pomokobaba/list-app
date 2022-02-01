var express = require('express');
var app = express.Router();

// CSS読込み
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

// トップ画面を表示するルーティングを作成してください
app.get('/top',(req, res) => {
  res.render('top.ejs');
});

module.exports = app;
