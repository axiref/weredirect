const express = require('express'),
app = express(),
path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));
app.use('/images', express.static(__dirname + '/views/images'));

const PORT = 8893;

function isWechat (ua) {
  return (/micromessenger/i.test(ua)) ? true : false ;
}

app.get('/',  (req, res) => {
  let iswechat = isWechat(req.get('User-Agent'));
  let url = req.query.url;
  if (!url) {
    res.render('index', {type: 'default'})
  } else if (iswechat) {
    res.render('index')
  } else {
    res.redirect(url);
  }
})

app.listen(PORT)

console.log(`服务器运行在${PORT}端口...`)