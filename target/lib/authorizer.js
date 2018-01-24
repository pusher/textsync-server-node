"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DEFAULT_PAYLOAD = { grant_type: 'client_credentials' };
var Authorizer = /** @class */ (function () {
    function Authorizer(instance) {
        this.instance = instance;
    }
    Authorizer.prototype.buildServiceClaims = function (documentId, permissions) {
        return { textsync: { documentId: documentId, permissions: permissions } };
    };
    Authorizer.prototype.authorize = function (documentId, permissions, options) {
        var opts = {
            serviceClaims: __assign({}, this.buildServiceClaims(documentId, permissions))
        };
        return this.instance.authenticate(DEFAULT_PAYLOAD, opts);
    };
    return Authorizer;
}());
exports.default = Authorizer;
