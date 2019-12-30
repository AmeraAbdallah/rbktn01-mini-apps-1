const express = require('express');
const bodyParser = require('body-parser');

let app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get('/', (req, res) => {
    res.sendFile('/index.html');
});

app.post('/form1', (req, res) => {
    console.log(req.body);
    res.send();
});

app.post('/form2', (req, res) => {
    console.log(req.body);
    res.send();
});

app.post('/form3', (req, res) => {
    console.log(req.body);
    res.send();
});

app.listen(8080, () => console.log('listning to port 8080'))