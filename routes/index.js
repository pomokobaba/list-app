const express = require('express');
const mysql = require('mysql');
const app = express();

// CSS読込み
app.use(express.static('public'));

// MySQLの接続
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Baba0814',
  database: 'list_app'
});

// トップ画面
app.get('/', (req, res) => {
  res.render('top.ejs');
});

// 買い物リスト画面
app.get('/index', (req, res) => {
  res.render('index.ejs');
});

module.exports = app;
