import { Context } from "../types/context";
export function createVariable(context: Context, name: string, value: any) {
  return {
    name,
    value,
  };
}

