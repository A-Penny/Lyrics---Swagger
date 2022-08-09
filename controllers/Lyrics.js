'use strict';

var utils = require('../utils/writer.js');
var Lyrics = require('../service/LyricsService');

module.exports.create_lyric = function create_lyric (req, res, next, body) {
  Lyrics.create_lyric(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delete_lyric = function delete_lyric (req, res, next, id) {
  Lyrics.delete_lyric(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_lyric_id = function get_lyric_id (req, res, next, id) {
  Lyrics.get_lyric_id(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_lyrics = function get_lyrics (req, res, next) {
  Lyrics.get_lyrics()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_lyric = function update_lyric (req, res, next, id) {
  Lyrics.update_lyric(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
