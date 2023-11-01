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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# homedir

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the current user's home directory.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import homedir from 'https://cdn.jsdelivr.net/gh/stdlib-js/os-homedir@esm/index.mjs';
```

#### homedir()

Returns the current user's `home` directory.

```javascript
var home = homedir();
// e.g., returns '/Users/<username>'
```

If unable to locate a `home` directory, the function returns `null`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The implementation primarily checks various [environment variables][environment-variables] to locate a `home` directory. Note that this approach has **security vulnerabilities**, as attackers can tamper with [environment variables][environment-variables].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import homedir from 'https://cdn.jsdelivr.net/gh/stdlib-js/os-homedir@esm/index.mjs';

console.log( homedir() );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/os-configdir`][@stdlib/os/configdir]</span><span class="delimiter">: </span><span class="description">return a directory for user-specific configuration files.</span>
-   <span class="package-name">[`@stdlib/os-tmpdir`][@stdlib/os/tmpdir]</span><span class="delimiter">: </span><span class="description">return the directory for storing temporary files.</span>

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/os-homedir.svg
[npm-url]: https://npmjs.org/package/@stdlib/os-homedir

[test-image]: https://github.com/stdlib-js/os-homedir/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/os-homedir/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/os-homedir/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/os-homedir?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/os-homedir.svg
[dependencies-url]: https://david-dm.org/stdlib-js/os-homedir/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/os-homedir#cli
[cli-url]: https://github.com/stdlib-js/os-homedir/tree/cli
[@stdlib/os-homedir]: https://github.com/stdlib-js/os-homedir/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/os-homedir/tree/deno
[umd-url]: https://github.com/stdlib-js/os-homedir/tree/umd
[esm-url]: https://github.com/stdlib-js/os-homedir/tree/esm
[branches-url]: https://github.com/stdlib-js/os-homedir/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/os-homedir/main/LICENSE

[environment-variables]: https://en.wikipedia.org/wiki/Environment_variable

<!-- <related-links> -->

[@stdlib/os/configdir]: https://github.com/stdlib-js/os-configdir/tree/esm

[@stdlib/os/tmpdir]: https://github.com/stdlib-js/os-tmpdir/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
