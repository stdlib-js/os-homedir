/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var ENV = require( '@stdlib/process-env' );


// VARIABLES //

var mpath = './../lib/main.js';


// FUNCTIONS //

/**
* Mock returning a numeric user identity.
*
* @private
* @returns {integer} user identity
*/
function getuid() {
	return 314;
}

/**
* Returns a copy of the default proxyquire options.
*
* @private
* @returns {Object} options object
*/
function makeOpts() {
	var opts = {
		'@stdlib/os-platform': 'darwin',
		'@stdlib/assert-is-windows': false,
		'@stdlib/process-getuid': getuid,
		'@stdlib/process-env': ENV
	};
	return opts;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	var homedir;
	t.ok( true, __filename );
	homedir = require( mpath ); // eslint-disable-line stdlib/no-dynamic-require
	t.strictEqual( typeof homedir, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a home directory in a non-windows environment (HOME)', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'HOME': '/Users/beep',
		'@noCallThru': true
	};
	opts[ '@stdlib/os-platform' ] = 'darwin';
	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), '/Users/beep', 'returns home directory' );

	t.end();
});

tape( 'the function returns a home directory in a Mac OS X environment (LOGNAME)', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'LOGNAME': 'beep',
		'@noCallThru': true
	};
	opts[ '@stdlib/os-platform' ] = 'darwin';
	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), '/Users/beep', 'returns home directory' );

	t.end();
});

tape( 'the function returns a home directory in a Linux environment (LOGNAME)', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'LOGNAME': 'beep',
		'@noCallThru': true
	};
	opts[ '@stdlib/os-platform' ] = 'linux';
	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), '/home/beep', 'returns home directory' );

	t.end();
});

tape( 'the function returns a home directory in a Mac OS X environment (USER)', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'USER': 'beep',
		'@noCallThru': true
	};
	opts[ '@stdlib/os-platform' ] = 'darwin';
	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), '/Users/beep', 'returns home directory' );

	t.end();
});

tape( 'the function returns a home directory in a Linux environment (USER)', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'USER': 'beep',
		'@noCallThru': true
	};
	opts[ '@stdlib/os-platform' ] = 'linux';
	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), '/home/beep', 'returns home directory' );

	t.end();
});

tape( 'the function returns a home directory in a Mac OS X environment (LNAME)', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'LNAME': 'beep',
		'@noCallThru': true
	};
	opts[ '@stdlib/os-platform' ] = 'darwin';
	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), '/Users/beep', 'returns home directory' );

	t.end();
});

tape( 'the function returns a home directory in a Linux environment (LNAME)', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'LNAME': 'beep',
		'@noCallThru': true
	};
	opts[ '@stdlib/os-platform' ] = 'linux';
	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), '/home/beep', 'returns home directory' );
	t.end();
});

tape( 'the function returns a home directory in a Mac OS X environment (USERNAME)', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'USERNAME': 'beep',
		'@noCallThru': true
	};
	opts[ '@stdlib/os-platform' ] = 'darwin';
	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), '/Users/beep', 'returns home directory' );
	t.end();
});

tape( 'the function returns a home directory in a Linux environment (USERNAME)', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'USERNAME': 'beep',
		'@noCallThru': true
	};
	opts[ '@stdlib/os-platform' ] = 'linux';
	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), '/home/beep', 'returns home directory' );
	t.end();
});

tape( 'the function returns `null` if unable to locate a home directory in a Mac OS X environment', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'@noCallThru': true
	};
	opts[ '@stdlib/os-platform' ] = 'darwin';
	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), null, 'returns null' );
	t.end();
});

tape( 'the function returns `null` if unable to locate a home directory in a Linux environment', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'@noCallThru': true
	};
	opts[ '@stdlib/os-platform' ] = 'linux';
	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), null, 'returns null' );
	t.end();
});

tape( 'the function returns the `/root` directory if run as `root` in a Linux environment', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'@noCallThru': true
	};
	opts[ '@stdlib/os-platform' ] = 'linux';
	opts[ '@stdlib/process-getuid' ] = mock;

	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), '/root', 'returns root directory' );
	t.end();

	function mock() {
		return 0;
	}
});

tape( 'the function returns a home directory on Windows (USERPROFILE)', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'USERPROFILE': 'C:\\Users\\boop',
		'@noCallThru': true
	};
	opts[ '@stdlib/assert-is-windows' ] = true;
	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), 'C:\\Users\\boop', 'returns home directory' );
	t.end();
});

tape( 'the function returns a home directory on Windows (HOMEDRIVE+HOMEPATH)', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'HOMEDRIVE': 'C:',
		'HOMEPATH': '\\Users\\boop',
		'@noCallThru': true
	};
	opts[ '@stdlib/assert-is-windows' ] = true;
	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), 'C:\\Users\\boop', 'returns home directory' );
	t.end();
});

tape( 'the function returns a home directory on Windows (HOME)', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'HOME': 'C:\\Users\\boop',
		'@noCallThru': true
	};
	opts[ '@stdlib/assert-is-windows' ] = true;
	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), 'C:\\Users\\boop', 'returns home directory' );
	t.end();
});

tape( 'the function returns `null` if unable to locate a home directory on Windows', function test( t ) {
	var homedir;
	var opts;

	opts = makeOpts();
	opts[ '@stdlib/process-env' ] = {
		'@noCallThru': true
	};
	opts[ '@stdlib/assert-is-windows' ] = true;
	homedir = proxyquire( mpath, opts );

	t.strictEqual( homedir(), null, 'returns null' );
	t.end();
});
