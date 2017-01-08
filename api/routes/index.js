var express = require('express');
var router = express.Router();

var ctrlConferences = require('../controllers/conferences.controllers.js');

router
  .route('/conferences')
  .get(ctrlConferences.conferencesGetAll)
  .post(ctrlConferences.conferencesPostOne);

router
  .route('/conferences/:conferenceId')
  .get(ctrlConferences.conferencesGetOne)
  .put(ctrlConferences.conferencesPutOne);

module.exports = router;
