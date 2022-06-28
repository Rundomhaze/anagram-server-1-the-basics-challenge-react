const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Home = require('../views/Home');
const Words = require('../views/Words');
const {Word} = require('../db/models')

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const main = React.createElement(Home, { title: 'Anagram Finder' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/word', async (req, res) => {
  const wordInput = req.body.wordInput
  const wordInputSplit = wordInput.split('').sort().join('').toLowerCase();
  const allWords = await Word.findAll()
  const allWordsSort = allWords.filter((el) => el.content.split('').sort().join('').toLowerCase() === wordInputSplit);
  const wordsAnagrams = allWordsSort.map((el) => el.content)
  const main = React.createElement(Words, { word: wordsAnagrams });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);

})

module.exports = router;
