const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ title }) {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <p>Welcome to {title}</p>
    </Layout>
  );
};
