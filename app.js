const http = require('http')
var fs = require('fs');
var url = require('url');
var express = require('express');
const exp = require('constants');
const app = express();

const hostname = '127.0.0.1'
const port = 3000

app.use(express.static('frontend'));
app.use('/css',express.static(__dirname + 'frontend/css'));
app.use('/js',express.static(__dirname + 'frontend/js'));
app.use('/img',express.static(__dirname + 'frontend/img'));
app.get('',(req,res) => {
    res.sendFile(__dirname + 'frontend/index.html');
    
})
app.listen(port, () => console.log(`https://localhost:3000/`));

// server.listen(8082);  