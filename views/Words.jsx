const React = require('react');
const Layout = require('./Layout');

module.exports = function Words({ word, title }) {
  return (
    <Layout title={title}>
      <main className="container">
        <h1>
          {word}
        </h1>
        <p>The anagrams of &quot;{word}&quot; are ...</p>
      </main>
    </Layout>
  );
};
