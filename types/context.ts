import {Variable} from "./variable";

export type Context = {
  variables: Record<string, any>;
  id: string;
  createVariable: (name: string, value: any) => Variable;
};
