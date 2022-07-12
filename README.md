<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Remove UTF-8 BOM

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Remove a UTF-8 [byte order mark][bom] (BOM) from the beginning of a string.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import removeUTF8BOM from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-utf8-bom@v0.0.9-esm/index.mjs';
```

#### removeUTF8BOM( str )

Removes a UTF-8 [byte order mark][bom] (BOM) from the beginning of a `string`.

```javascript
var str = removeUTF8BOM( '\ufeffbeep' );
// returns 'beep'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import removeUTF8BOM from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-utf8-bom@v0.0.9-esm/index.mjs';

var str = removeUTF8BOM( '\ufeffbeep' );
// returns 'beep'

str = removeUTF8BOM( 'boop\ufeff' );
// returns 'boop\ufeff'

str = removeUTF8BOM( 'be\ufeffbop' );
// returns 'be\ufeffbop'

str = removeUTF8BOM( 'foobar' );
// returns 'foobar'

</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-remove-utf8-bom.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-remove-utf8-bom

[test-image]: https://github.com/stdlib-js/string-remove-utf8-bom/actions/workflows/test.yml/badge.svg?branch=v0.0.9
[test-url]: https://github.com/stdlib-js/string-remove-utf8-bom/actions/workflows/test.yml?query=branch:v0.0.9

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-remove-utf8-bom/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-remove-utf8-bom?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-remove-utf8-bom.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-remove-utf8-bom/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-remove-utf8-bom/tree/deno
[umd-url]: https://github.com/stdlib-js/string-remove-utf8-bom/tree/umd
[esm-url]: https://github.com/stdlib-js/string-remove-utf8-bom/tree/esm
[branches-url]: https://github.com/stdlib-js/string-remove-utf8-bom/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-remove-utf8-bom/main/LICENSE

[bom]: https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
