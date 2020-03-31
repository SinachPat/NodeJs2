var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/sinachpat";

MongoClient.connect(url, function(err, db) {

if (err) throw err;

var datab = db.db("sinachpat");
datab.createCollection('interns', function(err, res){
    if (err) throw err;
    console.log('Interns collection created!');

    db.close();

});

});

