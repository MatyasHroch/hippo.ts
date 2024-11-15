import { Context } from "../types/context";
import { createVariable } from "./variable";

export function createContext() {
  const newContext: Context = {
    variables: {},
    id: "context-id",
    createVariable(name: string, value: any) {
      return _createVariable(newContext, name, value);
    }
  };

  return newContext as Context;
}

function _createVariable(newContext: Partial<Context>, name: string, value: any) {
  if (!newContext || !newContext.variables) {
    newContext.variables = {};
  }

  const newVariable = createVariable(newContext as Context, name, value);
  newContext.variables[name] = newVariable;

  return newVariable;
}
