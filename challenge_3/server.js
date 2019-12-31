const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Purchase = require('./db/models/purchase');

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

app.post('/purchase', (req, res) => {
    console.log(req.body);
    let p = new Purchase(req.body);
    p.save().then((data) => {
        console.log('saved');
        res.send();
    }).catch(err => console.log(err))
});

mongoose.connect('mongodb://localhost:27017/checkout', {useNewUrlParser: true}).then(() => {
    app.listen(8080, () => console.log('listning to port 8080'))
});