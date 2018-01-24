"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var textsync_1 = require("./lib/textsync");
exports.default = textsync_1.TextSync;
var Permissions = require('./lib/permissions').Permissions;
var TextSync = require('./lib/textsync').TextSync;
module.exports = TextSync;
module.exports.Permissions = Permissions;
module.exports.default = TextSync;
