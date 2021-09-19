var mongoose = require('mongoose');

var mongodb = 'mongodb://127.0.01/my_database';
mongoose.connect(mongodb, {useNewUrlParser: true,useUifiedTopology: true})

var db = mongoose.connection;

db.on('error',console.error.bind(console,"Mongodb connection error"));
