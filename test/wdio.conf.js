"use strict";

const path = require("path");

exports.config = {
//  host: "0.0.0.0",
//  port: 4444,

  specs: [
    "./test/**"
  ],

  capabilities: [
//    { browserName: "phantomjs" },
    { browserName: "chrome" },
//    { browserName: "firefox" }
  ],

  baseUrl:        "http://localhost:3000",
  logLevel:       "result",
  coloredLogs:    true,
  screenshotPath: path.join(__dirname, "../tmp/wdioScreenShots"),
  waitforTimeout: 10000,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd"
  },

  reporters:       ["dot"],
  reporterOptions: {
    outputDir: "./"
  }
};
