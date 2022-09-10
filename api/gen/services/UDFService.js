/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* history object
* Gets a symbol info message 
*
* symbol String trading pair symbol (optional)
* from BigDecimal timestamp from (optional)
* to BigDecimal timestamp to (optional)
* resolution String time resolution (optional)
* countback BigDecimal counter (optional)
* currencyCode String symbol-cde (optional)
* returns HistoryElement
* */
const geHistoryElement = ({ symbol, from, to, resolution, countback, currencyCode }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        symbol,
        from,
        to,
        resolution,
        countback,
        currencyCode,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* symbol into
* Gets a symbol info message 
*
* query String trading pair symbol (optional)
* limit String limit results (optional)
* type String type (optional)
* exchange String exchange (optional)
* returns List
* */
const geSearchSymbol = ({ query, limit, type, exchange }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        query,
        limit,
        type,
        exchange,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* symbol into
* Gets a symbol info message 
*
* symbol String trading pair symbol (optional)
* returns Symbol
* */
const geSymbol = ({ symbol }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        symbol,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* symbol into
* Gets a symbols info message 
*
* returns SymbolInfo
* */
const geSymbolInfo = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* src
* Gets a config message 
*
* returns Config
* */
const getConfig = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* status
* Gets a status message 
*
* returns String
* */
const getStatus = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* time
* Gets server time 
*
* returns BigDecimal
* */
const getTime = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  geHistoryElement,
  geSearchSymbol,
  geSymbol,
  geSymbolInfo,
  getConfig,
  getStatus,
  getTime,
};
