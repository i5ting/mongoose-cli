#!/usr/bin/env node

require('./db.js');
 
var Bson = require('./app/models/').bson;

// console.dir(Bson);
//
Bson.create({user_name:'alfred sang'}, function(err,docs){
  // Bson.find({}, function(err,docs){
    console.dir(docs);
 //    process.exit();
 //  });
});
//
//
// Bson.findAsync({}).then(function(docs){
//   console.dir(docs);
//   process.exit();
// }).catch(function(err){
//   console.err(err);
// });
//

