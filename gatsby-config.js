'use strict';

// /**
//  * Source-map-support mimics node's stack trace making debugging easier
//  * ts-node register helps importing and compiling TypeScript modules into JS
//  */
// require('source-map-support').install();
require('ts-node').register();

module.exports = require('./gatsby-config.ts');
