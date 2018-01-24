"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pusher_platform_node_1 = require("pusher-platform-node");
var authorizer_1 = require("./authorizer");
var TextSync = /** @class */ (function () {
    function TextSync(options) {
        var instanceOptions = Object.assign({
            serviceName: 'textsync',
            serviceVersion: 'v1'
        }, options);
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
exports.default = TextSync;
