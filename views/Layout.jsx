const React = require('react');
const Footer = require('./Footer');
const Header = require('./Header');

module.exports = function Layout({ children, title }) {
  return (
    <html>
      <head>
        <title>{title}</title>
        <link rel='stylesheet' href='/stylesheets/style.css' />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
