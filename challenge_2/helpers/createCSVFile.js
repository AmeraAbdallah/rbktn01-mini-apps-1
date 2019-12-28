const fs = require('fs');

let createCSVFile = (csvStr, path) => {
    console.log(path)
    fs.writeFile( path, csvStr, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};

module.exports = createCSVFile;