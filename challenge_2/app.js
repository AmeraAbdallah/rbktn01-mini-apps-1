const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const convertJsonToCsv = require('./helpers/convertJsonToCsv');
const createCSVFile = require('./helpers/createCSVFile');
const fs = require('fs');
const uuid = require('uuid/v1');

let getPath = () => {
    return path.join(__dirname, 'storage', `csv${uuid()}.csv`);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/client/index.html')));

app.post('/csv', (req, res) => {
    let csv = convertJsonToCsv(JSON.parse(req.body.csvJson));
    createCSVFile(csv,  getPath());
    res.redirect('/');
});

module.exports = app;