const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ title }) {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <p>Welcome to {title}</p>
      <form id="home" action="/word" method="post">
            <label htmlFor="text">
              Which words anagrams would you like to see:<br>
              </br>
              <input type="text" name="wordInput"/>
            </label>
            <button name="button" type="submit">Get Anagrams</button>
          </form>
    </Layout>
  );
};
