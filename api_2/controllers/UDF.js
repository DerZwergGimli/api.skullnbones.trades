'use strict';

var utils = require('../utils/writer.js');
var UDF = require('../service/UDFService');

module.exports.geHistoryElement = function geHistoryElement (req, res, next, symbol, from, to, resolution) {
  UDF.geHistoryElement(symbol, from, to, resolution)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.geSearchSymbol = function geSearchSymbol (req, res, next, symbol) {
  UDF.geSearchSymbol(symbol)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.geSymbol = function geSymbol (req, res, next, symbol) {
  UDF.geSymbol(symbol)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.geSymbolInfo = function geSymbolInfo (req, res, next) {
  UDF.geSymbolInfo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getConfig = function getConfig (req, res, next) {
  UDF.getConfig()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStatus = function getStatus (req, res, next) {
  UDF.getStatus()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTime = function getTime (req, res, next) {
  UDF.getTime()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
