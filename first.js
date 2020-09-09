const fs = require('fs');
const readline = require('readline');

var uniqueWords = [];

const readInterface = readline.createInterface({
    input: fs.createReadStream('pan_tadeusz.txt'),
});

readInterface.on('line', (line) => {

    var words = line.replace(/[.,…»«—\/#!?$%\^&\*;:{}=\-_`~()]/g, "").replace("\r", "").split(" ");

    for (let index = 0; index < words.length; index++) {
        const element = words[index];
        if (uniqueWords.indexOf(element) === -1) {
            uniqueWords.push(element)
        }
    }

}).on('close', () => {
    var file = fs.createWriteStream('word_list.txt');
    file.on('error', function (err) { /* error handling */ });
    uniqueWords.forEach(function (v) { file.write(v + '\n'); });
    file.end();
})