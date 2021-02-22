// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/ownerblog.html'))
  );

  // cms route loads cms.html
  app.get('/cms', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/cms.html'))
  );

  // blog route loads blog.html
  app.get('/ownerposts', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/ownerblog.html'))
  );

  // authors route loads author-manager.html
  app.get('/owners', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/owner-manager.html'))
  );
};