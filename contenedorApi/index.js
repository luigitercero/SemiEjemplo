const express = require('express')
const mysql = require('mysql');
const app = express()
const ip = process.env.IP || "192.169.35.1"
const port =  process.env.PORT || 3000
const user = process.env.USER || "root"
const password  = process.env.PASS || "123456789"

var isConnect
var con = mysql.createConnection({
  host: ip,
  user: user,
  password: password,
  port: 3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

bodyParser = require('body-parser').json();
app.get('/', function (req, res) {
  res.send(`kas variable de entorno son port: ${port} y ip ${ip}`)
})
app.get('/par',bodyParser, function (req, res) {
  res.send(req.body);
  console.log(req.body);
})
app.listen(port)

console.log(`se escucha en el puerto ${port} ${ip} ${user} ${password}`);
