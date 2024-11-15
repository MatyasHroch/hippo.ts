"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVariable = createVariable;
function createVariable(context, name, value) {
    return {
        name: name,
        value: value,
    };
}
var variable = createVariable({}, "variable-name", "variable-value");
