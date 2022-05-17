const React = require('react');

module.exports = function Words({ word }) {
  return (
    <main className="container">
      <h1>
        {word}
      </h1>
      <p>The anagrams of &quot;{word}&quot; are ...</p>
    </main>
  );
};
