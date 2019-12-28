
let convertJsonToCsv = (csvJson, csv = '', title = [], vals = []) => {

    if(Array.isArray(csvJson)){
        for(let i = 0; i < csvJson.length; i++){
            convertJsonToCsv(csvJson[i], csv, title, vals);
        }
    }
    else if(typeof csvJson === 'object'){
        let row = [];
        for(let key in csvJson){
            if(Array.isArray(csvJson[key])){
                convertJsonToCsv(csvJson[key], csv, title, vals);
            }
            else if(title.includes(key)){
                row.push(csvJson[key]);
            } else {
                title.push(key);
                row.push(csvJson[key]);
            }
        }
        vals.push(row.join(','));
    }
    return title.join(',') + '\n' + vals.join('\n');
};

module.exports = convertJsonToCsv;