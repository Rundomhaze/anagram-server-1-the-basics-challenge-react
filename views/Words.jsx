const React = require('react');
const Layout = require('./Layout');

module.exports = function Words({ word, title }) {
  return (
    <Layout title={title}>
      <main className="container">
        <h1>
          {word[0]}
        </h1>
        <p>The anagrams of {word[0]} are ...</p>
        <br></br>
        <ul>
          {word.map((el) => <li>{el}</li>)}
        </ul>
        <a href='http://localhost:3000/'>Home</a>
      </main>
    </Layout>
  );
};

