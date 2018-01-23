"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pusher_platform_node_1 = require("pusher-platform-node");
var authorizer_1 = require("./authorizer");
var TextSync = /** @class */ (function () {
    function TextSync(_a) {
        var instanceLocator = _a.instanceLocator, key = _a.key;
        var instanceOptions = {
            serviceName: 'textsync',
            serviceVersion: 'v1',
            locator: instanceLocator,
            key: key
        };
        this.instance = new pusher_platform_node_1.Instance(instanceOptions);
        this.authorizer = new authorizer_1.default(this.instance);
    }
    TextSync.prototype.authorizeDocument = function (requestData, permissionsFn) {
        var _this = this;
        var documentId = requestData.documentId;
        return permissionsFn(documentId).then(function (permissions) {
            return _this.authorizer.authorize(documentId, permissions);
        });
    };
    return TextSync;
}());
exports.TextSync = TextSync;
