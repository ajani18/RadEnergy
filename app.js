var express = require('express');
var path = require('path');
var favicon = require('serve-favicon'); //icon
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var mongoose = require('mongoose');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
console.log("We have connected");
});

var index = require('./routes/index');
var users = require('./routes/users');
var classesData = require('./routes/classesData');
var classes = require('./routes/classes');
var userinfo = require('./routes/userinfo');
// var form = require('.routes/contact');

var our_project_home = require('./routes/our_project_home');
var our_project_problem = require('./routes/our_project_problem');
var our_project_literature = require('./routes/our_project_literature');
var our_project_research = require('./routes/our_project_research');
var our_project_findings = require('./routes/our_project_findings');
var our_project_conclusions = require('./routes/our_project_conclusions');
var our_project_bibliography = require('./routes/our_project_bibliography');

var education_home = require('./routes/educationhome');
var education_tut = require('./routes/educationtut');
var education_down = require('./routes/educationdownlaods');

var mrjones = require('./routes/malis');



//var makerSpace = require('./routes/MakerSpace');
// var getGraph = require('./public/javascripts/dataVisual');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', our_project_home);
app.use('/users', users);
app.use('/classesdata', classesData);
app.use('/classes', classes);
app.use('/userinfo', userinfo);
// app.use('/contactus', contact);

app.use('/our_project/home', our_project_home);
app.use('/our_project/problem', our_project_problem);
app.use('/our_project/literature', our_project_literature);
app.use('/our_project/research', our_project_research);
app.use('/our_project/findings', our_project_findings);
app.use('/our_project/conclusions', our_project_conclusions);
app.use('/our_project/bibliography', our_project_bibliography);

app.use('/education/home', education_home);
app.use('/education/tutorials', education_tut);
app.use('/education/download', education_down);

app.use('/mrjones', mrjones)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// app.set('port', 8080);
//   server = app.listen(app.get('port'), function(){
//   console.log("server listening on port " + app.get('port'));
// });
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
