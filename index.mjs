// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function r(r){if(!t(r))throw new TypeError(s("invalid argument. Must provide a string. Value: `%s`.",r));return 65279===r.charCodeAt(0)?r.slice(1):r}export{r as default};
//# sourceMappingURL=index.mjs.map
