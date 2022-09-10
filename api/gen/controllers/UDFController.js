/**
 * The UDFController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UDFService');
const geHistoryElement = async (request, response) => {
  await Controller.handleRequest(request, response, service.geHistoryElement);
};

const geSearchSymbol = async (request, response) => {
  await Controller.handleRequest(request, response, service.geSearchSymbol);
};

const geSymbol = async (request, response) => {
  await Controller.handleRequest(request, response, service.geSymbol);
};

const geSymbolInfo = async (request, response) => {
  await Controller.handleRequest(request, response, service.geSymbolInfo);
};

const getConfig = async (request, response) => {
  await Controller.handleRequest(request, response, service.getConfig);
};

const getStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.getStatus);
};

const getTime = async (request, response) => {
  await Controller.handleRequest(request, response, service.getTime);
};


module.exports = {
  geHistoryElement,
  geSearchSymbol,
  geSymbol,
  geSymbolInfo,
  getConfig,
  getStatus,
  getTime,
};
