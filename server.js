// - - - - = = = = Configurations = = = = - - - - 
// Express
const express = require('express');
const app = express();
// Path
const path = require('path');
//Mongoose
var mongoose = require('mongoose');
require('./server/config/mongoose.js');
// Static Directory
app.use(express.static(__dirname + '/anonNotes/dist'));
// Body Parser 
const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
// Router
var routes_setter=require('./server/config/routes.js');
routes_setter(app);
// - - - - = = = = Server Listener = = = = - - - - 
const port = 9200;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));