const fs = require('fs')

function readFile() {
  const allWords = fs.readFileSync('./fixtures/abridged_word_list.txt', 'utf-8');
  return allWords.slice(0, -1).split('\n');
};

module.exports = readFile 
