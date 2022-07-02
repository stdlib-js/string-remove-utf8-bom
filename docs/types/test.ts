/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import removeUTF8BOM = require( './index' );


// TESTS //

// The function returns a string...
{
	removeUTF8BOM( '\ufeffbeep' ); // $ExpectType string
}

// The function does not compile if provided a value other than a string...
{
	removeUTF8BOM( true ); // $ExpectError
	removeUTF8BOM( false ); // $ExpectError
	removeUTF8BOM( null ); // $ExpectError
	removeUTF8BOM( undefined ); // $ExpectError
	removeUTF8BOM( 5 ); // $ExpectError
	removeUTF8BOM( [] ); // $ExpectError
	removeUTF8BOM( {} ); // $ExpectError
	removeUTF8BOM( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	removeUTF8BOM(); // $ExpectError
}
