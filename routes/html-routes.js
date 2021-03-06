// Dependencies
const path = require('path');
const db = require('../models');


// Routes
module.exports = (app) => {
    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    // app.get('/', (req, res) =>
    //     res.sendFile(path.join(__dirname, '../public/ownerblog.html'))
    // );

    app.get('/', (req, res) =>
    res.render("owners"));


    // cms route loads cms.html
    app.get('/cms', (req, res) =>
        res.render("index")
    );

    // blog route loads blog.html
    app.get('/ownerposts', (req, res) =>
        res.render("ownerblog")
    );

    // authors route loads author-manager.html
    app.get('/owners', (req, res) =>
        res.render("owners")
    );

       //To load each individual post
    app.get('/post/=:id', (req, res) =>
    {
        db.OwnerPost.findOne({
            where: {
                id: req.params.id,
            },
            include: [db.Owner],
        }).then((dbOwnerPost) => {
           res.render('post', {
               post: dbOwnerPost.dataValues
           })
        });
        

    }
);



};