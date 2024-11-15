"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = createContext;
var variable_1 = require("./variable");
function createContext() {
    var newContext = {
        variables: {},
        id: "context-id",
        createVariable: function (name, value) {
            return _createVariable(newContext, name, value);
        }
    };
    return newContext;
}
function _createVariable(newContext, name, value) {
    if (!newContext || !newContext.variables) {
        newContext.variables = {};
    }
    var newVariable = (0, variable_1.createVariable)(newContext, name, value);
    newContext.variables[name] = newVariable;
    return newVariable;
}
