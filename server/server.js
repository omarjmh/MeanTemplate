var express = require('express'),
    app = express(),
    expressSession = require('express-session'),
    path = require('path'),
    mongoose = require('mongoose');

require('./config/middleware.js')(app, express);

/*
mongoose/MonogDB connection:
Set the name of your DB and then uncomment, Mongo will make one if it doesn't exist
 */

// mongoose.connect('mongodb://localhost/MeanTemplate');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error...'));
// db.once('open', function(){
//   console.log('MonogDB connection is alive and open!');
// });

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});