const express = require('express');
const app = express();

// CSS読込み
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

// トップ画面
app.get('/top', (req, res) => {
  res.render('top.ejs');
});

// // 買い物リスト画面
// app.get('/index', (req, res) => {
//   res.render('index.ejs');
// });

app.listen(3000);
