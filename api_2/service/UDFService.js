"use strict";

/**
 * history object
 * Gets a symbol info message
 *
 * symbol String trading pair symbol (optional)
 * from BigDecimal timestamp from (optional)
 * to BigDecimal timestamp to (optional)
 * resolution BigDecimal time resolution (optional)
 * returns HistoryElement
 **/
exports.geHistoryElement = function (symbol, from, to, resolution) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      s: "ok",
      c: [12322121, 12322121],
      t: [12322121, 12322121],
      v: [12322121, 12322121],
      h: [12322121, 12322121],
      l: [12322121, 12322121],
      o: [12322121, 12322121],
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * symbol into
 * Gets a symbol info message
 *
 * symbol String trading pair symbol (optional)
 * returns List
 **/
exports.geSearchSymbol = function (symbol) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        symbol: "PX4ATLAS",
        ticker: "PX4ATLAS",
        full_name: "PX4ATLAS",
        description: "PX4 ATLAS",
        exchange: "SA",
        type: "crypto",
      },
      {
        symbol: "PX4ATLAS",
        ticker: "PX4ATLAS",
        full_name: "PX4ATLAS",
        description: "PX4 ATLAS",
        exchange: "SA",
        type: "crypto",
      },
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * symbol into
 * Gets a symbol info message
 *
 * symbol String trading pair symbol (optional)
 * returns Symbol
 **/
exports.geSymbol = function (symbol) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      symbol: "PX4ATLAS",
      ticker: "PX4ATLAS",
      has_daily: true,
      has_weekly_and_monthly: 0.8008281904610115,
      minmov2: 0,
      session: "24x7",
      timezone: "UTC",
      has_intraday: true,
      description: "PX4 ATLAS",
      listed_exchange: "SA",
      supported_resolutions: ["1", "1"],
      type: "crypto",
      currency_code: "PX4ATLAS",
      full_name: "PX4ATLAS",
      name: "PX4ATLAS",
      minmovement: 1,
      minmov: 1,
      exchange: "SA",
      pricescale: [100, 100],
      minmovement2: 0,
      data_status: "streaming",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * symbol into
 * Gets a symbols info message
 *
 * returns SymbolInfo
 **/
exports.geSymbolInfo = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      symbol: ["PX4ATLAS", "PX4ATLAS"],
      ticker: ["PX4ATLAS", "PX4ATLAS"],
      has_daily: true,
      has_weekly_and_monthly: 0.8008281904610115,
      minmov2: 0,
      session: "24x7",
      timezone: "UTC",
      has_intraday: true,
      description: ["PX4 ATLAS", "PX4 ATLAS"],
      listed_exchange: "SA",
      supported_resolutions: ["1D", "1H"],
      type: "crypto",
      currency_code: ["PX4ATLAS", "PX4ATLAS"],
      full_name: ["PX4ATLAS", "PX4ATLAS"],
      name: ["PX4ATLAS", "PX4ATLAS"],
      minmovement: 1,
      minmov: 1,
      exchange: "SA",
      pricescale: [100, 100],
      minmovement2: 0,
      data_status: "streaming",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * config
 * Gets a config message
 *
 * returns Config
 **/
exports.getConfig = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      supports_marks: false,
      supports_time: true,
      exchanges: [
        {
          name: "StarAtlas",
          value: "SA",
          desc: "StarAtlas Exch",
        },
        {
          name: "StarAtlas",
          value: "SA",
          desc: "StarAtlas Exch",
        },
      ],
      supports_search: true,
      supports_group_request: false,
      symbols_types: [
        {
          name: "Cryptocurrency",
          value: "crypto",
        },
        {
          name: "Cryptocurrency",
          value: "crypto",
        },
      ],
      supported_resolutions: ["1D", "1H"],
      homePage: "https://www.acme-corp.com",
      supports_timescale_marks: false,
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * status
 * Gets a status message
 *
 * returns String
 **/
exports.getStatus = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = "Weclome to S&B StarAtlas Trades API";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * time
 * Gets server time
 *
 * returns BigDecimal
 **/
exports.getTime = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = 1662761714;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
