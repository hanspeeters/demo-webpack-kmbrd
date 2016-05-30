/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "builds/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	__webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _jquery2.default)("button").click(function () {
	  return alert("Hi");
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "button {\n  background-color: #FFA500;\n}\nbody {\n  background-image: url(" + __webpack_require__(5) + ");\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);