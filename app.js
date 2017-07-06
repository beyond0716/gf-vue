var express = require('express');
var ejs = require('ejs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();




var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/pro-vue');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
/*db.once('open', function() {
    var Schema = mongoose.Schema;
    var blogSchema = new Schema({
        title:  String,
        author: String,
        body:   String,
        comments: [{ body: String, date: Date }],
        date: { type: Date, default: Date.now },
        hidden: Boolean,
        meta: {
            votes: Number,
            favs:  Number
        }
    });
    var Blog = mongoose.model('Blog', blogSchema);

    var animalSchema = new Schema({ name: String, type: String });
    animalSchema.methods.findSimilarTypes = function(cb) {
        return this.model('Animal').find({ type: this.type }, cb);
    };
    var Animal = mongoose.model('Animal', animalSchema);
    var dog = new Animal({ type: 'dog' });
    dog.findSimilarTypes(function(err, dogs) {
        console.log(dogs); // woof
    });

    var kittySchema = mongoose.Schema({
        name: String
    });
    kittySchema.methods.speak = function () {
        var greeting = this.name
          ? "Meow name is " + this.name
          : "I don't have a name";
        console.log(greeting);
    }

    var Kitten = mongoose.model('Kitten', kittySchema);
    var fluffy = new Kitten({ name: 'fluffy' });
    fluffy.save(function (err, fluffy) {
        if (err) return console.error(err);
        fluffy.speak();
    });
    Kitten.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    })
});*/


var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});










app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/*app.engine('.html',ejs.__express);
app.set('view engine', 'html');*/
// ejs.delimiter = '$';

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;