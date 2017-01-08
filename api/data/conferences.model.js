var mongoose = require('mongoose');
var conferenceSchema = mongoose.Schema({
  image: String,
  date: Date,
  adresse: String,
  ville: String,
  nomConference: String,
  participants: Number
});

mongoose.model("Conference", conferenceSchema, "conferences");
