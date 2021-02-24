const express = require('express');
const exphbs = require('express-handlebars');
const htmlRouter = require('./routes/html-routes.js');
const ownerRouter = require('./routes/owner-api-routes.js');
const apiRouter = require('./routes/post-api-routes.js');

//S3 starter code
const aws = require('aws-sdk');


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Invoke routes
htmlRouter(app);
ownerRouter(app);
apiRouter(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

});

//More S3 code 
const S3_BUCKET = process.env.S3_BUCKET;
// WE MUST CHANGE TO THE RIGHT REGION
aws.config.region = 'us-east-2';
//

