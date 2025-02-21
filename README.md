# react-scrollbar-size-esm-demo

Demo of a bug when using react-scrollbar-size in ESM context

This is a common library setup:
- in `src/index.mjs`, there is a source file that uses react-scrollbar-size. This could also be written in TypeScript or whatever.
- rollup builds the library to both esm and cjs outputs in dist folder.
- Note that rollup adds `_interopDefault` wrapper for cjs output, but not for esm - apparently this should be expected, as interop option is ignored for esm.

Now, when using the library output in either cjs or esm contexts, there are `test.js` and `test.mjs` files in root.
- Running `node test.js` logs `[Function: useScrollbarSize]` to console.
- Running `node test.mjs` logs `{ default: [Function: useScrollbarSize] }` to console.

The esm usage is faulty, as it should also log the exported function, not an object with default property.