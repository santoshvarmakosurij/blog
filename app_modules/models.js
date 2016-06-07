var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var User = mongoose.model('User', new Schema({
  id: ObjectId,
  nickName: { type: String, required: '{PATH} is required.' },
  email: { type: String, required: '{PATH} is required.',unique: true },
  userName: { type: String, required: '{PATH} is required.',unique: true }
}));

var M = {};
M.User = User;

module.exports.M = M;
