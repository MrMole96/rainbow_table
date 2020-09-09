const fs = require('fs');
const readline = require('readline');
const md5 = require('js-md5');
var args = process.argv.slice(2);


var file = args[0];
var lines = [];

const readInterface = readline.createInterface({
    input: fs.createReadStream(file),
});

readInterface.on('line', (word) => {

    var hash = md5(word);

    lines.push(word + " " + hash)

}).on('close', () => {
    var file = fs.createWriteStream('rainbow_word_list.txt');
    file.on('error', function (err) { /* error handling */ });
    lines.forEach(function (v) { file.write(v + '\n'); });
    file.end();
})