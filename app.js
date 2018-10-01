const path = require('path');
const redis = require('redis');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');


// Init app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/************************** Public Folder ***************************/
app.use(express.static(__dirname + '/public'));

/************************** Server Config ****************************/

// Port
const port = 8000;

app.listen(port, function () {
    console.log('Server started on port ' + port);
});

/*************************** Pages Config *****************************/

// View Engine
app.engine('handlebars', exphbs({ defaultLayout: 'indexTemplate' }));
app.set('view engine', 'handlebars');

// Index Page
app.get('/', function (req, res, next) {
    res.render('index');
});

/***************************** Redis DB *****************************/

// Create Redis Client
var redisClient = redis.createClient();

//Custom Port & Host
//var redisClient = redis.createClient(port, host);

redisClient.on('connect', function () {
    console.log('Connected to Redis...');
});

// Methods

// Add User Page
app.get('/user/add', function (req, res, next) {
    res.render('index');
});

// Process Add User Page
app.post('/user/add', function (req, res, next) {
    let email = req.body.email;
    let year = req.body.year;
    let quest_1 = req.body.range_1;
    let quest_2 = req.body.range_2;
    let quest_3 = req.body.range_3;
    let quest_4 = req.body.range_4;
    let quest_5 = req.body.range_5;
    let quest_6 = req.body.range_6;
    let quest_7 = req.body.range_7;
    let quest_8 = req.body.range_8;
    let quest_9 = req.body.range_9;
    let quest_10 = req.body.range_10;

    redisClient.hmset(email,
        ['Email', email,
            'Year', year,
            'Quest_1', quest_1,
            'Quest_2', quest_2,
            'Quest_3', quest_3,
            'Quest_4', quest_4,
            'Quest_5', quest_5,
            'Quest_6', quest_6,
            'Quest_7', quest_7,
            'Quest_8', quest_8,
            'Quest_9', quest_9,
            'Quest_10', quest_10
        ], function (err, reply) {
            if (err) {
                console.log(err);
            }
            console.log(reply);
            res.redirect('/');
        });
});

// methodOverride
app.use(methodOverride('_method'));