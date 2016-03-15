var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema ({
  name: String,
  league: String,
  origin: String,
  logo: String
});

var Team = mongoose.model('Team', TeamSchema);
module.exports = Team;
