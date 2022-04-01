// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var s=r.isPrimitive,i=t;var e=function(r){if(!s(r))throw new TypeError(i("invalid argument. Must provide a string. Value: `%s`.",r));return 65279===r.charCodeAt(0)?r.slice(1):r};export{e as default};
//# sourceMappingURL=index.mjs.map
