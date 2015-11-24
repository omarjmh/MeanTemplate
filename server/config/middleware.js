var morgan = require('morgan'), 
    bodyParser = require('body-parser'),
    path = require('path'),
    express =  require('express'),
    helpers     = require('./helpers.js');


module.exports = function(app, express) {
  // var router1 = express.Router();
  // var router2 = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname + '/../../client')));

  // app.use('/api/users', router2); // use user router for all user request

  // authentication middleware used to decode token and made available on the request
  
  // app.use('/api/app', router1); // user link router for link request
  

  // inject our routers into their respective route files
  //require('../app/appRoutes.js')(router1);
  //require('../app/otherRoutes.js')(router1);
};