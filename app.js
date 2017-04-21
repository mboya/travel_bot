var express = require("express");
const bodyParser= require('body-parser');
const dbClient = require('mongodb').MongoClient;
var app = express();

var db;
var db_path = 'mongodb://127.0.0.1:27017/travel_bot';

app.use(bodyParser.urlencoded({extended: true}))

dbClient.connect(db_path, (err, database) => {
    if(err) return console.log(err)
    db = database
    app.listen(3000, ()=>{
        console.log('connected to mongo db', 'starting server');
    })
});