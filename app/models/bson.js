var Promise = require('bluebird');
var mongoose = require('mongoose');
var MongooseDao = require('mongoosedao');
var Schema = mongoose.Schema;

BsonSchema = new Schema({
  user_name: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

var Bson = mongoose.model('Bson', BsonSchema);

Promise.promisifyAll(Bson);
Promise.promisifyAll(Bson.prototype);

var MeetingDao = new MongooseDao(Bson);

Promise.promisifyAll(Bson);

module.exports = Bson;