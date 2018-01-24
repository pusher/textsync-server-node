"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var permissions_1 = require("./lib/permissions");
var textsync_1 = require("./lib/textsync");
module.exports = textsync_1.default;
module.exports.Permissions = permissions_1.Permissions;
module.exports.default = textsync_1.default;
