var mongoose = require('mongoose');
var Conference = mongoose.model("Conference");

module.exports.conferencesGetAll = function(req, res) {
  console.log("GET the conferences");

  Conference
    .find()
    .exec(function(err, conferences) {
      if(err) {
        res
          .status(500)
          .json(err);
      } else {
        res
          .status(200)
          .json(conferences);
      }
    });
};

module.exports.conferencesPostOne = function(req, res) {
  console.log("Create one conference");
  Conference
    .create({
      image: req.body.image,
      date: req.body.date,
      adresse: req.body.adresse,
      ville: req.body.ville,
      nomConference: req.body.nomConference,
      participants: req.body.participants
    },function(err, conference){
      if(err) {
        console.log(err);
       res
        .status(500)
        .json(err);
     } else {
       res
        .status(201)
        .json(conference);
     }
    });
};

module.exports.conferencesPutOne = function(req, res) {
  console.log("Edit one conference");
  var conferenceId = req.params.conferenceId;
  Conference
    .findById(conferenceId)
    .exec(function(err, conference){
      if(err){
        console.log(err);
        res
          .status(500)
          .json(err);
          return;
      } else if(!conference) {
        res
          .status(404)
          .lson({
            "Messages" : "conferenceId not found" + conferenceId
          });
          return;
      }
      conference.image = req.body.image;
      conference.date = req.body.date;
      conference.adresse = req.body.adresse;
      conference.ville = req.body.ville;
      conference.nomConference = req.body.nomConference;
      conference.participants = req.body.participants;
      conference
        .save(function(err, conferenceUpdated){
          if(err) {
            res
              .status(500)
              .json(err);
          } else {
            res
              .status(204)
              .json(conferenceUpdated);
          }
        });
    });
};


module.exports.conferencesGetOne = function(req, res) {
  var conferenceId = req.params.conferenceId;
  console.log("GET conferenceId", conferenceId);
  Conference
    .findById(conferenceId)
    .exec(function(err, conference){
      if(err){
        console.log(err);
        res
          .status(500)
          .json(err);
      } else if(!conference) {
        res
          .status(404)
          .lson({
            "Messages" : "conferenceId not found" + conferenceId
          });
      } else {
        res
          .status(200)
          .json(conference);
      }

    });

};
