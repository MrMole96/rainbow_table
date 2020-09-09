const fs = require('fs');
const readline = require('readline');
const md5 = require('js-md5');
var args = process.argv.slice(2);


var file = args[0]
var hashedPassword = args[1];
var result = [];
console.log('args',args)
const readInterface = readline.createInterface({
    input: fs.createReadStream(file),
});

readInterface.on('line', (words) => {

    var word = words.split(" ")[0];
    var hash = words.split(" ")[1];

    if(hashedPassword===hash){
        result.push(word);
    }

}).on('close', () => {
    var file = fs.createWriteStream('result.txt');
    file.on('error', function (err) { /* error handling */ });
    result.forEach(function (v) { file.write(v + '\n'); });
    file.end();
})