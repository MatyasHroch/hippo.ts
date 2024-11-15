import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs"; // Import CommonJS plugin

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/hippojs.umd.js",
      format: "umd",
      name: "HippoJS",
    },
    {
      file: "dist/hippojs.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(), // Use CommonJS plugin to handle CommonJS modules
    typescript({ tsconfig: "./tsconfig.json" }),
  ],
};
