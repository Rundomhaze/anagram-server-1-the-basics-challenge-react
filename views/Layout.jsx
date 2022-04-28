const React = require('react');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
