# react-responsive-esm-demo

Demo of a bug when using react-responsive in ESM context

This is a common library setup:
- in `src/index.mjs`, there is a source file that uses react-responsive. This could also be written in TypeScript or whatever.
- rollup builds the library to both esm and cjs outputs in dist folder.
- Note that rollup adds `_interopDefault` wrapper for cjs output, but not for esm - apparently this should be expected, as interop option is ignored for esm.

Now, when using the library output in either cjs or esm contexts, there are `test.js` and `test.mjs` files in root.
- Running `node test.js` logs `[Function: MediaQuery]` to console.
- Running `node test.mjs` logs the following to console:

```
{
  Context: <ref *1> {
    '$$typeof': Symbol(react.context),
    _currentValue: undefined,
    _currentValue2: undefined,
    _threadCount: 0,
    Provider: { '$$typeof': Symbol(react.provider), _context: [Circular *1] },
    Consumer: { '$$typeof': Symbol(react.context), _context: [Circular *1] },
    _defaultValue: null,
    _globalName: null,
    _currentRenderer: null,
    _currentRenderer2: null
  },
  default: [Function: MediaQuery],
  toQuery: [Function: toQuery],
  useMediaQuery: [Function: useMediaQuery]
}
```

The esm usage is faulty, as it should also log the default-exported function, not an object with default property.