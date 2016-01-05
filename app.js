var express = require('express');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var app = express();
var knex = require('./db/knex');
var auth = require('./routes/index');
var bodyParser = require('body-parser');
require('dotenv').load();

app.set('trust proxy', 1);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use('/users', users);
app.use(cookieParser(process.env.SECRET));
app.use('/auth', auth);
app.use(cookieSession({
	name: 'session',
	keys: ['key1']
}));

var server = app.listen(3000, function(){
	console.log("listening on port 3000");
});

