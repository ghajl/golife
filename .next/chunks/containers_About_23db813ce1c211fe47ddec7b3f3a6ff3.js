
          window.__NEXT_REGISTER_CHUNK('containers_About_23db813ce1c211fe47ddec7b3f3a6ff3.js', function() {
            webpackJsonp([6],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(217),
    isLength = __webpack_require__(194);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(286),
    listCacheDelete = __webpack_require__(287),
    listCacheGet = __webpack_require__(288),
    listCacheHas = __webpack_require__(289),
    listCacheSet = __webpack_require__(290);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(153);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 153:
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(85);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(310);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(328),
    baseKeys = __webpack_require__(334),
    isArrayLike = __webpack_require__(150);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(85),
    root = __webpack_require__(61);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(302),
    mapCacheDelete = __webpack_require__(309),
    mapCacheGet = __webpack_require__(311),
    mapCacheHas = __webpack_require__(312),
    mapCacheSet = __webpack_require__(313);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(330),
    isObjectLike = __webpack_require__(94);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 193:
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 194:
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(151),
    stackClear = __webpack_require__(291),
    stackDelete = __webpack_require__(292),
    stackGet = __webpack_require__(293),
    stackHas = __webpack_require__(294),
    stackSet = __webpack_require__(295);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(147),
    isObject = __webpack_require__(149);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 219:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(314),
    isObjectLike = __webpack_require__(94);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(222),
    arraySome = __webpack_require__(317),
    cacheHas = __webpack_require__(223);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(191),
    setCacheAdd = __webpack_require__(315),
    setCacheHas = __webpack_require__(316);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 223:
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 224:
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(61),
    stubFalse = __webpack_require__(331);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(104)(module)))

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(332),
    baseUnary = __webpack_require__(227),
    nodeUtil = __webpack_require__(333);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 227:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 228:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 286:
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(152);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(152);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(152);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(152);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(151);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 292:
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 293:
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 294:
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(151),
    Map = __webpack_require__(190),
    MapCache = __webpack_require__(191);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(217),
    isMasked = __webpack_require__(299),
    isObject = __webpack_require__(149),
    toSource = __webpack_require__(219);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(300);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(61);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 301:
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(303),
    ListCache = __webpack_require__(151),
    Map = __webpack_require__(190);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(304),
    hashDelete = __webpack_require__(305),
    hashGet = __webpack_require__(306),
    hashHas = __webpack_require__(307),
    hashSet = __webpack_require__(308);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(154);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 305:
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(154);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(154);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(154);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(155);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 310:
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(155);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(155);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(155);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(216),
    equalArrays = __webpack_require__(221),
    equalByTag = __webpack_require__(318),
    equalObjects = __webpack_require__(322),
    getTag = __webpack_require__(337),
    isArray = __webpack_require__(62),
    isBuffer = __webpack_require__(225),
    isTypedArray = __webpack_require__(226);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 315:
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 316:
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 317:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(148),
    Uint8Array = __webpack_require__(319),
    eq = __webpack_require__(153),
    equalArrays = __webpack_require__(221),
    mapToArray = __webpack_require__(320),
    setToArray = __webpack_require__(321);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(61);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 320:
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 321:
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(323);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(324),
    getSymbols = __webpack_require__(325),
    keys = __webpack_require__(156);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(224),
    isArray = __webpack_require__(62);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(326),
    stubArray = __webpack_require__(327);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 326:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ 327:
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(329),
    isArguments = __webpack_require__(192),
    isArray = __webpack_require__(62),
    isBuffer = __webpack_require__(225),
    isIndex = __webpack_require__(193),
    isTypedArray = __webpack_require__(226);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 329:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(147),
    isObjectLike = __webpack_require__(94);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 331:
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(147),
    isLength = __webpack_require__(194),
    isObjectLike = __webpack_require__(94);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(218);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(104)(module)))

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(228),
    nativeKeys = __webpack_require__(335);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(336);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 336:
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(338),
    Map = __webpack_require__(190),
    Promise = __webpack_require__(339),
    Set = __webpack_require__(340),
    WeakMap = __webpack_require__(341),
    baseGetTag = __webpack_require__(147),
    toSource = __webpack_require__(219);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(85),
    root = __webpack_require__(61);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(85),
    root = __webpack_require__(61);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(85),
    root = __webpack_require__(61);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(85),
    root = __webpack_require__(61);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 62:
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(498);

var _actions = __webpack_require__(496);

var _recompose = __webpack_require__(532);

var _About = __webpack_require__(800);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import { addCount } from 'actions'
// import { selectLight, selectLastUpdate, selectCount } from 'selectors'
// import { createSelector } from 'reselect';
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setStopped: function setStopped(stopped, name) {
      dispatch((0, _actions.setStopped)(stopped, name));
    }

  };
};

exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('AboutContainer'), (0, _reactRedux.connect)(function (state) {
  return state;
}, mapDispatchToProps), _recompose.pure)(_About2.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXEFib3V0LmpzIl0sIm5hbWVzIjpbIm1hcERpc3BhdGNoVG9Qcm9wcyIsInNldFN0b3BwZWQiLCJzdG9wcGVkIiwibmFtZSIsImRpc3BhdGNoIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztBQUlBOztBQUNBOzs7Ozs7OztBQUpBO0FBQ0E7QUFDQTtBQUtBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFZLEFBQ3JDOztnQkFDYyxvQkFBQSxBQUFDLFNBQUQsQUFBVSxNQUFTLEFBQzlCO2VBQVMseUJBQUEsQUFBVyxTQUFwQixBQUFTLEFBQW9CLEFBQzdCO0FBSEgsQUFBTyxBQU1SOztBQU5RLEFBQ0w7QUFGSjs7a0JBVWUsd0JBQ2IsK0JBRGEsQUFDYixBQUFlLDRDQUNQLGlCQUFBO1NBQUEsQUFBUztBQUFqQixDQUFBLEVBRmEsQUFFYixBQUF3Qiw4QyIsImZpbGUiOiJBYm91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\folder\\new\\gol\\containers\\About.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\folder\\new\\gol\\containers\\About.js"); } } })();

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var _defineProperty2 = __webpack_require__(162);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(25);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(14);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(26);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(27);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = 'C:\\folder\\new\\gol\\components\\About.js',
    _PropTypes$shape;
// import Paper from 'material-ui/Paper';

// import injectSheet from 'react-jss';


var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(451);

var _Grid = __webpack_require__(511);

var _Grid2 = _interopRequireDefault(_Grid);

var _reactYoutube = __webpack_require__(801);

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

var _GameGrid = __webpack_require__(633);

var _GameGrid2 = _interopRequireDefault(_GameGrid);

var _Icon = __webpack_require__(515);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(563);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _materialUiToggleIcon = __webpack_require__(564);

var _materialUiToggleIcon2 = _interopRequireDefault(_materialUiToggleIcon);

var _PlayArrow = __webpack_require__(559);

var _PlayArrow2 = _interopRequireDefault(_PlayArrow);

var _Pause = __webpack_require__(560);

var _Pause2 = _interopRequireDefault(_Pause);

var _boardNames = __webpack_require__(575);

function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
}

var styles = {
				mainContent: {
								marginTop: 75
				},
				intro: {
								// backgroundColor:'rgba(240,248,255,.7)',
								// padding:5,

				},
				rules: {
								backgroundColor: 'rgba(240,248,255,.7)'

				},
				// rulesPar: {
				// 	marginTop: 20
				// },
				text: {
								fontFamily: 'Open Sans',
								fallbacks: {
												fontFamily: 'sans-serif'
								}
				},
				title: {
								fontFamily: 'Julius Sans One',
								fallbacks: {
												fontFamily: 'sans-serif'
								},
								fontWeight: 900,
								marginTop: 40
				},
				'@global iframe': {
								// width: '100%',
								// height: '100%',
				},
				icon: {
								//   [theme.breakpoints.up('sm')]: {
								//       width: 25,
								//       height: 25,
								//   },
								//   [theme.breakpoints.up('md')]: {
								//       width: 35,
								//       height: 35,
								//   },
								//   [theme.breakpoints.up('lg')]: {
								//       width: 45,
								//       height: 45,
								//   },
								//       width: 40,
								//       height: 40,

								// }
								width: 25,
								height: 25

				},
				border: {
								border: '1px solid blue'
				},
				button: {
								// border: '1px solid blue',
								// padding: 0,
								// margin: 0,
								width: 35,
								height: 35
				},
				video: {
								// backgroundColor:'rgba(0,0,0,.2)',
								// // borderRadius: '0 0 5px 5px',
								// // color: 'white',
								textAlign: 'center',
								fontFamily: 'Open Sans',
								fallbacks: {
												fontFamily: 'sans-serif'
								},

								// padding: 10,
								// marginBottom: 10,
								// position: 'absolute',
								// top:0,
								// left:0,
								// paddingBottom: '56.25%',

								// overflow: 'hidden',
								marginTop: 30
								// width: '100%',
				},
				board: {
								display: 'flex',
								// flexDirection: 'column',
								// justifyContent: 'flex-start',
								// alignItems: 'center',
								// flexGrow: 1,
								// position: 'relative',
								fontSize: '.7em',
								textAlign: 'center',
								fontFamily: 'Open Sans',
								fallbacks: {
												fontFamily: 'sans-serif'

								},
								'@global span': {}

				},
				boardsSection: {
								//     	display:"flex",
								// justifyContent: 'flex-start',
								display: 'inline-block',
								marginTop: 30
				},
				item: {
								'align-self': 'flex-end'
				}
};

var About = function (_Component) {
				(0, _inherits3.default)(About, _Component);

				function About(props) {
								(0, _classCallCheck3.default)(this, About);

								var _this = (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).call(this, props));

								_this.handleWindowSizeChange = function () {
												// console.log(this.gun);
												_this.gun.grid.handleWindowSizeChange(_this.patterns.gun);
								};

								var blockCellsList = [[1, 1], [1, 2], [2, 1], [2, 2]];
								var boatCellsList = [[1, 1], [1, 2], [2, 1], [2, 3], [3, 2]];
								var loafCellsList = [[2, 1], [1, 3], [1, 2], [2, 4], [3, 2], [4, 3], [3, 4]];
								var beehiveCellsList = [[1, 2], [1, 3], [2, 1], [2, 4], [3, 2], [3, 3]];
								var blinkerCellsList = [[2, 1], [2, 2], [2, 3]];
								var beaconCellsList = [[1, 1], [1, 2], [2, 1], [2, 2], [3, 3], [3, 4], [4, 3], [4, 4]];
								var toadCellsList = [[2, 2], [2, 3], [2, 4], [3, 1], [3, 2], [3, 3]];
								var gliderCellsList = [[5, 4], [4, 3], [3, 5], [4, 5], [5, 5]];
								var spaceshipCellsList = [[5, 3], [7, 3], [4, 4], [4, 5], [4, 6], [4, 7], [5, 7], [6, 7], [7, 6]];
								var gunCellsList = [[5, 1], [6, 1], [5, 2], [6, 2], [5, 11], [6, 11], [7, 11], [4, 12], [8, 12], [3, 13], [9, 13], [3, 14], [9, 14], [6, 15], [4, 16], [8, 16], [5, 17], [6, 17], [7, 17], [6, 18], [3, 21], [4, 21], [5, 21], [3, 22], [4, 22], [5, 22], [2, 23], [6, 23], [1, 25], [2, 25], [6, 25], [7, 25], [3, 35], [4, 35], [3, 36], [4, 36]];
								_this.patterns = {};
								// console.log(this.patterns.block)
								var blockGrid = new _GameGrid2.default(_boardNames.boardNames.BLOCK, 4, 4, 12);
								var boatGrid = new _GameGrid2.default(_boardNames.boardNames.BOAT, 5, 5, 12);
								var loafGrid = new _GameGrid2.default(_boardNames.boardNames.LOAF, 6, 6, 12);
								var beehiveGrid = new _GameGrid2.default(_boardNames.boardNames.BEEHIVE, 6, 5, 12);
								var blinkerGrid = new _GameGrid2.default(_boardNames.boardNames.BLINKER, 5, 5, 12);
								var beaconGrid = new _GameGrid2.default(_boardNames.boardNames.BEACON, 6, 6, 12);
								var toadGrid = new _GameGrid2.default(_boardNames.boardNames.TOAD, 6, 6, 12);
								var gliderGrid = new _GameGrid2.default(_boardNames.boardNames.GLIDER, 10, 10, 12);
								var spaceshipGrid = new _GameGrid2.default(_boardNames.boardNames.SPACESHIP, 12, 12, 12);
								var gunIsOpenUniv = true;
								var gunGrid = new _GameGrid2.default(_boardNames.boardNames.GUN, 40, 20, 12, gunIsOpenUniv);
								_this.motionPatternList = [];
								_this.rAF = null;

								_this.block = patternBoard(blockGrid, blockCellsList);
								_this.boat = patternBoard(boatGrid, boatCellsList);
								_this.loaf = patternBoard(loafGrid, loafCellsList);
								_this.beehive = patternBoard(beehiveGrid, beehiveCellsList);
								_this.blinker = patternBoard(blinkerGrid, blinkerCellsList);
								_this.beacon = patternBoard(beaconGrid, beaconCellsList);
								_this.toad = patternBoard(toadGrid, toadCellsList);
								_this.glider = patternBoard(gliderGrid, gliderCellsList);
								_this.spaceship = patternBoard(spaceshipGrid, spaceshipCellsList);
								_this.gun = patternBoard(gunGrid, gunCellsList);
								_this.boards = [_this.block, _this.boat, _this.loaf, _this.beehive, _this.blinker, _this.beacon, _this.toad, _this.glider, _this.spaceship, _this.gun];
								_this.interval = 300;
								// let patternsWidthRelation = blockGrid.width == 5 ? 5/6 : blockGrid.width == 4 ? 4/6 : blockGrid.width == 10 ? 10/12 : 1;
								// let screenScale = 10;
								_this.orientationVerical = false;
								// console.log(props)
								// if(props.screen.width < 900){
								// 	screenScale = 3;
								// }

								// ((width + 1) * squareSize) * ratio;

								_this.buttonColor = 'rgba(0, 0, 0, .7)';
								_this.getWidth = _this.getWidth.bind(_this);
								// this.createCanvas = this.createCanvas.bind(this);
								_this.state = {
												reload: false,
												screen: {
																width: window.innerWidth,
																height: window.innerHeight,
																ratio: window.devicePixelRatio || 1,
																screenScale: window.innerWidth < 900 ? 3 : 10
												}
								};

								_this.blockWidth = _this.getWidth(_this.block.grid);
								// props.screen.width/screenScale * getPatternsWidthRelation(blockGrid.width) * .6;
								// this.blockWidth = props.screen.width/5 * getPatternsWidthRelation(blockGrid.width) * .6;
								_this.boatWidth = _this.getWidth(_this.boat.grid);
								_this.loafWidth = _this.getWidth(_this.loaf.grid);
								_this.beehiveWidth = _this.getWidth(_this.beehive.grid);
								_this.blinkerWidth = _this.getWidth(_this.blinker.grid);
								_this.beaconWidth = _this.getWidth(_this.beacon.grid);
								_this.toadWidth = _this.getWidth(_this.toad.grid);
								_this.gliderWidth = _this.getWidth(_this.glider.grid);
								_this.spaceshipWidth = _this.getWidth(_this.spaceship.grid);
								_this.gunWidth = _this.getWidth(_this.gun.grid);
								// this.boatWidth = props.screen.width/screenScale * getPatternsWidthRelation(boatGrid.width) * .6;
								// this.loafWidth = props.screen.width/screenScale * getPatternsWidthRelation(loafGrid.width) * .6;
								// this.beehiveWidth = props.screen.width/screenScale * getPatternsWidthRelation(beehiveGrid.width) * .6;
								// this.blinkerWidth = props.screen.width/screenScale * getPatternsWidthRelation(blinkerGrid.width) * .6;
								// this.beaconWidth = props.screen.width/screenScale * getPatternsWidthRelation(beaconGrid.width) * .6;
								// this.toadWidth = props.screen.width/screenScale * getPatternsWidthRelation(toadGrid.width) * .6;
								// this.gliderWidth = props.screen.width/screenScale * getPatternsWidthRelation(gliderGrid.width) * .6;
								// this.spaceshipWidth = props.screen.width/screenScale * getPatternsWidthRelation(spaceshipGrid.width) * .6;
								// this.gunWidth = props.screen.width/screenScale * getPatternsWidthRelation(gunGrid.width) * .6;   
								_this.setStopped = function (stopped, name) {
												return props.setStopped(stopped, name);
								};
								return _this;
				}

				(0, _createClass3.default)(About, [{
								key: 'getWidth',
								value: function getWidth(grid) {
												var screen = this.state.screen;
												var width = grid.width,
												    squareSize = grid.squareSize;
												// console.log(`${screen} ${screen.screenScale} ${width} ${squareSize}`)
												// console.log((width + 1) * squareSize * screen.width/100 * getPatternsWidthRelation(width))

												var w = (width + 1) * squareSize * screen.width / 100 * .7 / screen.screenScale;
												return w > screen.width * .6 ? screen.width * .6 : w;
								}

								// createCanvas(pattern, canvas) {
								//     this.canvasBoard = canvas;
								//     const ratio = this.state.screen ? this.state.screen.ratio : window.devicePixelRatio || 1
								//     console.log(ratio)
								//     console.log(this.canvasBoard)
								//     this.grid.makeBoard(this.gridWidth,this.gridHeight,this.squareSize,ratio,this.canvasBoard,null);
								//     this.updateOnce()
								// }

				}, {
								key: 'handlePlayToggle',
								value: function handlePlayToggle(pattern) {

												if (this.props.stopped[pattern.grid.name]) {
																this.start(pattern);
												} else {

																this.stop(pattern);
												}
												// // pattern.stopped = !pattern.stopped;
												// this.setState({reload:!this.state.reload})
								}
				}, {
								key: 'stop',
								value: function stop(pattern) {
												if (!this.props.stopped[pattern.grid.name]) {

																// try{

																// this.proceed=false;
																this.setStopped(true, pattern.grid.name);
																// pattern.stopped = true;
																// this.stopped = true;
																// this.changeButtonPressedStatus("pause");
																// clearTimeout(this.timeoutID);
																var index = this.motionPatternList.indexOf(pattern);
																this.motionPatternList.splice(index, 1);
																if (this.motionPatternList.length === 0) {
																				cancelAnimationFrame(this.rAF);
																}

																// this.setState({
																//     tick: null,

																//   }
																// );
																// console.log(this.state.tick);

																// console.log(this.state.tick);
																// } catch(e){
																//     console.log(e.message);
																// }            
												}
								}
				}, {
								key: 'start',
								value: function start(pattern) {
												var _this2 = this;

												if (this.props.stopped[pattern.grid.name]) {
																this.setStopped(false, pattern.grid.name);
																// pattern.stopped = false;
																// console.log("A")
																// this.proceed=true;
																// this.isClearState = false;
																// this.stopped = false;
																// this.changeButtonPressedStatus("start");
																this.motionPatternList.push(pattern);
																this.then = Date.now();
																// if(this.state.drawing){
																//     // this.isManualState = false;
																//     // this.nextGenerationChangeCellsList = totalNeighborsRevision(this.valuesBoard);
																//     // this.nextGeneration.list = totalNeighborsRevision(this.valuesBoard);
																// }
																// this.setState({
																//     drawing:false,
																//     // tick:requestAnimationFrame(() =>{this.update()}),

																// });
																// this.mode.drawing=false;
																if (this.motionPatternList.length === 1) {
																				this.rAF = requestAnimationFrame(function () {
																								_this2.update();
																				});
																}

																// console.log("A")            
												}
								}
				}, {
								key: 'update',
								value: function update() {
												var _this3 = this;

												// if(this.state.stopped){

												//     this.stop();
												// } else {
												// requestAnimationFrame(() =>{this.update()});

												// console.log(this.count++)
												this.now = Date.now();
												this.delta = this.now - this.then;

												if (this.delta > this.interval) {

																// this.then += this.interval
																this.then = this.now - this.delta % this.interval;

																this.motionPatternList.forEach(function (p) {
																				return p.grid.update();
																});
												}
												// this.setState({

												//     tick:requestAnimationFrame(() =>{this.update()}),

												// });         
												this.rAF = requestAnimationFrame(function () {
																_this3.update();
												});
												// }
								}
				}, {
								key: 'componentWillUpdate',

								// shouldComponentUpdate(nextProps){
								// 	let screenScale = 10;
								// 	if(this.orientationVerical){
								// 		if(nextProps.screen.width>nextProps.screen.height){
								// if(nextProps.screen.width < 900){
								// 	// console.log("as");
								// 	screenScale = 3;
								// }

								// 	// ((width + 1) * squareSize) * ratio;
								// this.blockWidth = getWidth(this.props.screen, this.block.grid.width, this.block.grid.squareSize, screenScale);
								//  // props.screen.width/screenScale * getPatternsWidthRelation(blockGrid.width) * .6;
								// // this.blockWidth = props.screen.width/5 * getPatternsWidthRelation(blockGrid.width) * .6;
								// this.boatWidth = getWidth(this.props.screen, this.boat.grid.width, this.boat.grid.squareSize, screenScale);
								// this.loafWidth = getWidth(this.props.screen, this.loaf.grid.width, this.loaf.grid.squareSize, screenScale);
								// this.beehiveWidth = getWidth(this.props.screen, this.beehive.grid.width, this.beehive.grid.squareSize, screenScale);
								// this.blinkerWidth = getWidth(this.props.screen, this.blinker.grid.width, this.blinker.grid.squareSize, screenScale);
								// this.beaconWidth = getWidth(this.props.screen, this.beacon.grid.width, this.beacon.grid.squareSize, screenScale);
								// this.toadWidth = getWidth(this.props.screen, this.toad.grid.width, this.toad.grid.squareSize, screenScale);
								// this.gliderWidth = getWidth(this.props.screen, this.glider.grid.width, this.glider.grid.squareSize, screenScale);
								// this.spaceshipWidth = getWidth(this.props.screen, this.spaceship.grid.width, this.spaceship.grid.squareSize, screenScale);
								// this.gunWidth = getWidth(this.props.screen, this.gun.grid.width, this.gun.grid.squareSize, screenScale);
								// // this.setState({reload: !this.state.reload});
								// return true;
								// 		}
								// 	}else {
								// 		if(nextProps.screen.width<nextProps.screen.height){
								// if(nextProps.screen.width < 900){
								// 	// console.log("as");
								// 	screenScale = 3;
								// }

								// 	// ((width + 1) * squareSize) * ratio;
								// this.blockWidth = getWidth(this.props.screen, this.block.grid.width, this.block.grid.squareSize, screenScale);
								//  // props.screen.width/screenScale * getPatternsWidthRelation(blockGrid.width) * .6;
								// // this.blockWidth = props.screen.width/5 * getPatternsWidthRelation(blockGrid.width) * .6;
								// this.boatWidth = getWidth(this.props.screen, this.boat.grid.width, this.boat.grid.squareSize, screenScale);
								// this.loafWidth = getWidth(this.props.screen, this.loaf.grid.width, this.loaf.grid.squareSize, screenScale);
								// this.beehiveWidth = getWidth(this.props.screen, this.beehive.grid.width, this.beehive.grid.squareSize, screenScale);
								// this.blinkerWidth = getWidth(this.props.screen, this.blinker.grid.width, this.blinker.grid.squareSize, screenScale);
								// this.beaconWidth = getWidth(this.props.screen, this.beacon.grid.width, this.beacon.grid.squareSize, screenScale);
								// this.toadWidth = getWidth(this.props.screen, this.toad.grid.width, this.toad.grid.squareSize, screenScale);
								// this.gliderWidth = getWidth(this.props.screen, this.glider.grid.width, this.glider.grid.squareSize, screenScale);
								// this.spaceshipWidth = getWidth(this.props.screen, this.spaceship.grid.width, this.spaceship.grid.squareSize, screenScale);
								// this.gunWidth = getWidth(this.props.screen, this.gun.grid.width, this.gun.grid.squareSize, screenScale);
								// // this.setState({reload: !this.state.reload});
								// return true;
								// 		}    		
								// 	}
								// 	return false;
								// }      n

								value: function componentWillUpdate() {
												//   	let screenScale = 10;

												// if(this.props.screen.width < 700){
												// 	// console.log("as");
												// 	screenScale = 3;


												// 	// ((width + 1) * squareSize) * ratio;
												// 	this.blockWidth = getWidth(this.props.screen, this.block.grid.width, this.block.grid.squareSize, screenScale);
												// 	 // props.screen.width/screenScale * getPatternsWidthRelation(blockGrid.width) * .6;
												// 	// this.blockWidth = props.screen.width/5 * getPatternsWidthRelation(blockGrid.width) * .6;
												// 	this.boatWidth = getWidth(this.props.screen, this.boat.grid.width, this.boat.grid.squareSize, screenScale);
												// 	this.loafWidth = getWidth(this.props.screen, this.loaf.grid.width, this.loaf.grid.squareSize, screenScale);
												// 	this.beehiveWidth = getWidth(this.props.screen, this.beehive.grid.width, this.beehive.grid.squareSize, screenScale);
												// 	this.blinkerWidth = getWidth(this.props.screen, this.blinker.grid.width, this.blinker.grid.squareSize, screenScale);
												// 	this.beaconWidth = getWidth(this.props.screen, this.beacon.grid.width, this.beacon.grid.squareSize, screenScale);
												// 	this.toadWidth = getWidth(this.props.screen, this.toad.grid.width, this.toad.grid.squareSize, screenScale);
												// 	this.gliderWidth = getWidth(this.props.screen, this.glider.grid.width, this.glider.grid.squareSize, screenScale);
												// 	this.spaceshipWidth = getWidth(this.props.screen, this.spaceship.grid.width, this.spaceship.grid.squareSize, screenScale);
												// 	this.gunWidth = getWidth(this.props.screen, this.gun.grid.width, this.gun.grid.squareSize, screenScale);
												// 	this.setState({reload: !this.state.reload});
												// }
												this.gunWidth = this.gunWidth > this.state.screen.width * .6 ? this.state.screen.width * .6 : this.gunWidth;
								}
				}, {
								key: 'componentWillMount',
								value: function componentWillMount() {
												window.addEventListener('resize', this.handleWindowSizeChange);
								}
				}, {
								key: 'componentDidMount',
								value: function componentDidMount() {
												// console.log(this.patterns.block)
												// console.log(this.patterns.boat)
												// window.addEventListener('resize', this.handleWindowSizeChange);
												//         this.setState({screen: {
												//             width: window.innerWidth,
												//             height: window.innerHeight,
												//             ratio: window.devicePixelRatio || 1,
												//             screenScale: window.innerWidth < 900 ? 3 : 10,
												//         }
												//     })

												this.block.grid.makeBoard(this.block.grid.width, this.block.grid.height, this.block.grid.squareSize, this.state.screen.ratio, this.patterns.block, this.block.cellsList, this.state.screen);
												this.block.grid.update();
												this.boat.grid.makeBoard(this.boat.grid.width, this.boat.grid.height, this.boat.grid.squareSize, this.state.screen.ratio, this.patterns.boat, this.boat.cellsList, this.state.screen);
												this.boat.grid.update();
												this.loaf.grid.makeBoard(this.loaf.grid.width, this.loaf.grid.height, this.loaf.grid.squareSize, this.state.screen.ratio, this.patterns.loaf, this.loaf.cellsList, this.state.screen);
												this.loaf.grid.update();
												this.beehive.grid.makeBoard(this.beehive.grid.width, this.beehive.grid.height, this.beehive.grid.squareSize, this.state.screen.ratio, this.patterns.beehive, this.beehive.cellsList, this.state.screen);
												this.beehive.grid.update();
												this.blinker.grid.makeBoard(this.blinker.grid.width, this.blinker.grid.height, this.blinker.grid.squareSize, this.state.screen.ratio, this.patterns.blinker, this.blinker.cellsList);
												this.blinker.grid.update();
												this.beacon.grid.makeBoard(this.beacon.grid.width, this.beacon.grid.height, this.beacon.grid.squareSize, this.state.screen.ratio, this.patterns.beacon, this.beacon.cellsList);
												this.beacon.grid.update();
												this.toad.grid.makeBoard(this.toad.grid.width, this.toad.grid.height, this.toad.grid.squareSize, this.state.screen.ratio, this.patterns.toad, this.toad.cellsList);
												this.toad.grid.update();
												this.glider.grid.makeBoard(this.glider.grid.width, this.glider.grid.height, this.glider.grid.squareSize, this.state.screen.ratio, this.patterns.glider, this.glider.cellsList);
												this.glider.grid.update();
												this.spaceship.grid.makeBoard(this.spaceship.grid.width, this.spaceship.grid.height, this.spaceship.grid.squareSize, this.state.screen.ratio, this.patterns.spaceship, this.spaceship.cellsList);
												this.spaceship.grid.update();

												this.gun.grid.makeBoard(this.gun.grid.width, this.gun.grid.height, this.gun.grid.squareSize, this.state.screen.ratio, this.patterns.gun, this.gun.cellsList);
												this.gun.grid.update();
								}
				}, {
								key: 'componentWillUnmount',
								value: function componentWillUnmount() {

												cancelAnimationFrame(this.rAF);
												this.setStopped(true, null);
												// this.props.values.speed = this.state.fps;
												// this.props.values.pattern = this.state.patternNamesIndex;
												// this.props.values.patternList = this.state.patternsList;
												// this.props.values.generationCount = this.state.generationCount;
								}
				}, {
								key: 'render',
								value: function render() {
												var _this4 = this;

												// console.log(this.props);
												var classes = this.props.classes;
												// console.log(this.gliderWidth);
												// console.log(this.blockWidth);
												return _react2.default.createElement('div', { className: classes.mainContent, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 504
																}
												}, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 506
																}
												}, _react2.default.createElement(_Grid2.default, { item: true, xs: 1, sm: 2, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 508
																}
												}, ' '), _react2.default.createElement(_Grid2.default, { item: true, xs: 10, sm: 8, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 510
																}
												}, _react2.default.createElement('p', { className: classes.intro + ' ' + classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 512
																}
												}, _react2.default.createElement('strong', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 513
																}
												}, 'The Game of Life'), ', also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced "players", by creating patterns with particular properties.'), _react2.default.createElement('div', { className: classes.video, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 521
																}
												}, _react2.default.createElement(_reactYoutube2.default, {
																videoId: 'CgOcEZinQ2I',
																opts: { width: '100%', playerVars: { showinfo: 0, rel: 0 } },

																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 522
																}
												}), 'Fragment from Stephen Hawking`s The Meaning of Life'), _react2.default.createElement('div', { className: classes.rulesPar, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 531
																}
												}, _react2.default.createElement('h2', { className: classes.title, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 532
																}
												}, 'Rules'), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 535
																}
												}, 'The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, or "populated" or "unpopulated". Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:'), _react2.default.createElement('div', { className: classes.rules, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 542
																}
												}, _react2.default.createElement('ul', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 543
																}
												}, _react2.default.createElement('li', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 544
																}
												}, 'Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.'), _react2.default.createElement('li', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 545
																}
												}, 'Any live cell with two or three live neighbours lives on to the next generation.'), _react2.default.createElement('li', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 546
																}
												}, 'Any live cell with more than three live neighbours dies, as if by overpopulation.'), _react2.default.createElement('li', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 547
																}
												}, 'Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.'))), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 550
																}
												}, 'The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed - births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.')), _react2.default.createElement('h2', { className: classes.title, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 559
																}
												}, 'Patterns'), _react2.default.createElement('h4', { className: classes.title, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 562
																}
												}, 'Still Life'), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 565
																}
												}, 'These are stable patterns that do not change and can be used to build critical solid parts of complex patterns.'), _react2.default.createElement(_Grid2.default, { container: true, spacing: 8, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 569
																}
												}, _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 573
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.blockWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 574
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 575
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.block = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 576
																}
												}), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 580
																}
												}, 'Block')))), _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 588
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.boatWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 589
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 590
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.boat = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 591
																}
												}), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 595
																}
												}, 'Boat')))), _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 603
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.loafWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 604
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 605
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.loaf = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 606
																}
												}), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 610
																}
												}, 'Loaf')))), _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 618
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.beehiveWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 619
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 620
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.beehive = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 621
																}
												}), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 625
																}
												}, 'Beehive'))))), _react2.default.createElement('h4', { className: classes.title, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 634
																}
												}, 'Oscillators'), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 637
																}
												}, 'These patterns are more complex and change over a specific number of ticks. They repeat their pattern infinitely. The basic oscillators have periods of two or three ticks, but complex oscillators have been discovered with periods of twenty or more ticks. These oscillators are very useful for setting off other reactions of bumping stable patterns to set off a chain reaction of instability. The most common period-2 oscillators include:'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 644
																}
												}, _react2.default.createElement(_Grid2.default, { container: true, spacing: 8, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 645
																}
												}, _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 648
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.blinkerWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 649
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 650
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.blinker = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 651
																}
												}), _react2.default.createElement(_IconButton2.default, { className: this.props.classes.button, 'aria-label': 'Play', onClick: function onClick() {
																				return _this4.handlePlayToggle(_this4.blinker);
																}, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 655
																}
												}, _react2.default.createElement(_materialUiToggleIcon2.default, {
																on: this.props.stopped[this.blinker.grid.name],
																onIcon: _react2.default.createElement(_PlayArrow2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 658
																				}
																}),
																offIcon: _react2.default.createElement(_Pause2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 659
																				}
																}),
																color: this.buttonColor,
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 656
																}
												})), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 663
																}
												}, 'Blinker')))), _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 671
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.beaconWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 672
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 673
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.beacon = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 674
																}
												}), _react2.default.createElement(_IconButton2.default, { className: this.props.classes.button, 'aria-label': 'Play', onClick: function onClick() {
																				return _this4.handlePlayToggle(_this4.beacon);
																}, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 678
																}
												}, _react2.default.createElement(_materialUiToggleIcon2.default, {
																on: this.props.stopped[this.beacon.grid.name],
																onIcon: _react2.default.createElement(_PlayArrow2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 681
																				}
																}),
																offIcon: _react2.default.createElement(_Pause2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 682
																				}
																}),
																color: this.buttonColor,
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 679
																}
												})), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 686
																}
												}, 'Beacon')))), _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 693
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.toadWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 694
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 695
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.toad = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 696
																}
												}), _react2.default.createElement(_IconButton2.default, { className: this.props.classes.button, 'aria-label': 'Play', onClick: function onClick() {
																				return _this4.handlePlayToggle(_this4.toad);
																}, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 700
																}
												}, _react2.default.createElement(_materialUiToggleIcon2.default, {
																on: this.props.stopped[this.toad.grid.name],
																onIcon: _react2.default.createElement(_PlayArrow2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 703
																				}
																}),
																offIcon: _react2.default.createElement(_Pause2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 704
																				}
																}),
																color: this.buttonColor,
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 701
																}
												})), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 708
																}
												}, 'Toad')))))), _react2.default.createElement('h4', { className: classes.title, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 717
																}
												}, 'Gliders and Spaceships'), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 720
																}
												}, 'A spaceship is a pattern that moves, returning to the same configuration but shifted after a finite number of generations. The glider is an example of a simple spaceship and its generations each consist of five live cells. The glider has a period of four and moves diagonally one cell every four generations. Other examples of simple spaceships include lightweight, medium weight, and heavyweight spaceships. They each move in a straight line.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 727
																}
												}, _react2.default.createElement(_Grid2.default, { container: true, spacing: 8, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 728
																}
												}, _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 731
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.gliderWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 732
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 733
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.glider = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 734
																}
												}), _react2.default.createElement(_IconButton2.default, { className: this.props.classes.button, 'aria-label': 'Play', onClick: function onClick() {
																				return _this4.handlePlayToggle(_this4.glider);
																}, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 739
																}
												}, _react2.default.createElement(_materialUiToggleIcon2.default, {
																on: this.props.stopped[this.glider.grid.name],
																onIcon: _react2.default.createElement(_PlayArrow2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 742
																				}
																}),
																offIcon: _react2.default.createElement(_Pause2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 743
																				}
																}),
																color: this.buttonColor,
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 740
																}
												})), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 748
																}
												}, 'Glider')))), _react2.default.createElement(_Grid2.default, { item: true, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 756
																}
												}, _react2.default.createElement('div', { className: classes.board, style: { width: this.spaceshipWidth, height: "100%" }, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 757
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 758
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.spaceship = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 759
																}
												}), _react2.default.createElement(_IconButton2.default, { className: this.props.classes.button, 'aria-label': 'Play', onClick: function onClick() {
																				return _this4.handlePlayToggle(_this4.spaceship);
																}, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 764
																}
												}, _react2.default.createElement(_materialUiToggleIcon2.default, {
																on: this.props.stopped[this.spaceship.grid.name],
																onIcon: _react2.default.createElement(_PlayArrow2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 767
																				}
																}),
																offIcon: _react2.default.createElement(_Pause2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 768
																				}
																}),
																color: this.buttonColor,
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 765
																}
												})), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 773
																}
												}, 'Lightweight Spaceship')))))), _react2.default.createElement('h4', { className: classes.title, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 783
																}
												}, 'Guns'), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 786
																}
												}, 'Conway offered a prize for any example of patterns that grow forever. Conway\'s prize was collected soon after its announcement, when two different ways were discovered for designing a pattern that grows forever. The first of these patterns is the period-30 glider gun, which is based on the interaction of two queen bee shuttles. Where these shuttles collide, instead of producing beehives, they produce a new glider. This glider moves away in time for the process to repeat itself 30 steps later.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 794
																}
												}, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 795
																}
												}, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 798
																}
												}, _react2.default.createElement('div', { className: classes.board, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 799
																}
												}, _react2.default.createElement('div', { className: classes.item, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 800
																}
												}, _react2.default.createElement('canvas', {
																ref: function ref(canvas) {
																				_this4.patterns.gun = canvas;
																}
																// onClick={(e) => this.handleClick(e)}
																, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 801
																}
												}), _react2.default.createElement(_IconButton2.default, { className: this.props.classes.button, 'aria-label': 'Play', onClick: function onClick() {
																				return _this4.handlePlayToggle(_this4.gun);
																}, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 805
																}
												}, _react2.default.createElement(_materialUiToggleIcon2.default, {
																on: this.props.stopped[this.gun.grid.name],
																onIcon: _react2.default.createElement(_PlayArrow2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 808
																				}
																}),
																offIcon: _react2.default.createElement(_Pause2.default, { className: this.props.classes.icon, __source: {
																								fileName: _jsxFileName,
																								lineNumber: 809
																				}
																}),
																color: this.buttonColor,
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 806
																}
												})), _react2.default.createElement('div', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 813
																}
												}, 'The Gosper Glider Gun')))))), _react2.default.createElement('h2', { className: classes.title, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 823
																}
												}, 'Origins'), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 827
																}
												}, 'Conway was interested in a problem presented in the 1940s by mathematician ', _react2.default.createElement('a', { href: 'https://en.wikipedia.org/wiki/John_von_Neumann', target: '_blank', title: 'John von Neumann', __source: {
																				fileName: _jsxFileName,
																				lineNumber: 828
																}
												}, 'John von Neumann'), ', who attempted to find a hypothetical machine that could build copies of itself and succeeded when he found a mathematical model for such a machine with very complicated rules on a rectangular grid. The Game of Life emerged as Conway\'s successful attempt to drastically simplify von Neumann\'s ideas.'), _react2.default.createElement('p', { className: classes.text, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 836
																}
												}, 'The game made its first public appearance in the October 1970 issue of ', _react2.default.createElement('i', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 836
																}
												}, 'Scientific American'), ', in Martin Gardner\'s column. From a theoretical point of view, it is interesting because it has the power of a universal Turing machine: that is, anything that can be computed algorithmically can be computed within Conway\'s Game of Life. Gardner wrote:'), _react2.default.createElement('blockquote', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 841
																}
												}, _react2.default.createElement('p', {
																__source: {
																				fileName: _jsxFileName,
																				lineNumber: 842
																}
												}, 'The game made Conway instantly famous, but it also opened up a whole new field of mathematical research, the field of ', _react2.default.createElement('a', { href: 'https://en.wikipedia.org/wiki/Cellular_automaton', target: '_blank', title: 'Cellular automata', __source: {
																				fileName: _jsxFileName,
																				lineNumber: 843
																}
												}, 'cellular automata'), '\xA0... Because of Life\'s analogies with the rise, fall and alterations of a society of living organisms, it belongs to a growing class of what are called "simulation games" (games that resemble real life processes).'))), _react2.default.createElement(_Grid2.default, { item: true, xs: 1, sm: 2, __source: {
																				fileName: _jsxFileName,
																				lineNumber: 851
																}
												}, ' ')));
								}
				}]);
				return About;
}(_react.Component);

About.propTypes = {
				classes: _propTypes2.default.object.isRequired,
				setStopped: _propTypes2.default.func.isRequired,
				stopped: _propTypes2.default.shape((_PropTypes$shape = {}, (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.MAIN, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BLOCK, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BOAT, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.LOAF, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BEEHIVE, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BLINKER, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BEACON, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.TOAD, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.GLIDER, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.SPACESHIP, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.GUN, _propTypes2.default.bool), _PropTypes$shape)).isRequired
};

exports.default = (0, _styles.withStyles)(styles)(About);

function patternBoard(grid, cellsList) {
				return {
								grid: grid,
								cellsList: cellsList
								// stopped: true,

				};
}

function getPatternsWidthRelation(width) {
				return width == 5 ? 5 / 6 : width == 4 ? 4 / 6 : width == 10 ? 10 / 12 : 1;
}

// <Grid container spacing={0}>

// 		    <Grid item xs={12} md={3} > 
// 	    	</Grid>
// 	    	<Grid item xs={12} md={6} > 
// 	    	<div className={classes.video}>

// 	    	Fragment from Stephen Hawking`s The Meaning of Life
// 			</div>
// 	    	</Grid>
// 	    	<Grid item xs={12} md={3} > 
// 	    	</Grid>
// 	    	</Grid>
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFib3V0LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsIm1haW5Db250ZW50IiwibWFyZ2luVG9wIiwiaW50cm8iLCJydWxlcyIsImJhY2tncm91bmRDb2xvciIsInRleHQiLCJmb250RmFtaWx5IiwiZmFsbGJhY2tzIiwidGl0bGUiLCJmb250V2VpZ2h0IiwiaWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwiYnV0dG9uIiwidmlkZW8iLCJ0ZXh0QWxpZ24iLCJib2FyZCIsImRpc3BsYXkiLCJmb250U2l6ZSIsImJvYXJkc1NlY3Rpb24iLCJpdGVtIiwiQWJvdXQiLCJwcm9wcyIsImhhbmRsZVdpbmRvd1NpemVDaGFuZ2UiLCJndW4iLCJncmlkIiwicGF0dGVybnMiLCJibG9ja0NlbGxzTGlzdCIsImJvYXRDZWxsc0xpc3QiLCJsb2FmQ2VsbHNMaXN0IiwiYmVlaGl2ZUNlbGxzTGlzdCIsImJsaW5rZXJDZWxsc0xpc3QiLCJiZWFjb25DZWxsc0xpc3QiLCJ0b2FkQ2VsbHNMaXN0IiwiZ2xpZGVyQ2VsbHNMaXN0Iiwic3BhY2VzaGlwQ2VsbHNMaXN0IiwiZ3VuQ2VsbHNMaXN0IiwiYmxvY2tHcmlkIiwiQkxPQ0siLCJib2F0R3JpZCIsIkJPQVQiLCJsb2FmR3JpZCIsIkxPQUYiLCJiZWVoaXZlR3JpZCIsIkJFRUhJVkUiLCJibGlua2VyR3JpZCIsIkJMSU5LRVIiLCJiZWFjb25HcmlkIiwiQkVBQ09OIiwidG9hZEdyaWQiLCJUT0FEIiwiZ2xpZGVyR3JpZCIsIkdMSURFUiIsInNwYWNlc2hpcEdyaWQiLCJTUEFDRVNISVAiLCJndW5Jc09wZW5Vbml2IiwiZ3VuR3JpZCIsIkdVTiIsIm1vdGlvblBhdHRlcm5MaXN0IiwickFGIiwiYmxvY2siLCJwYXR0ZXJuQm9hcmQiLCJib2F0IiwibG9hZiIsImJlZWhpdmUiLCJibGlua2VyIiwiYmVhY29uIiwidG9hZCIsImdsaWRlciIsInNwYWNlc2hpcCIsImJvYXJkcyIsImludGVydmFsIiwib3JpZW50YXRpb25WZXJpY2FsIiwiYnV0dG9uQ29sb3IiLCJnZXRXaWR0aCIsImJpbmQiLCJzdGF0ZSIsInJlbG9hZCIsInNjcmVlbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNjcmVlblNjYWxlIiwiYmxvY2tXaWR0aCIsImJvYXRXaWR0aCIsImxvYWZXaWR0aCIsImJlZWhpdmVXaWR0aCIsImJsaW5rZXJXaWR0aCIsImJlYWNvbldpZHRoIiwidG9hZFdpZHRoIiwiZ2xpZGVyV2lkdGgiLCJzcGFjZXNoaXBXaWR0aCIsImd1bldpZHRoIiwic2V0U3RvcHBlZCIsInN0b3BwZWQiLCJuYW1lIiwic3F1YXJlU2l6ZSIsInciLCJwYXR0ZXJuIiwic3RhcnQiLCJzdG9wIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwibGVuZ3RoIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwdXNoIiwidGhlbiIsIkRhdGUiLCJub3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJkZWx0YSIsImZvckVhY2giLCJwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ha2VCb2FyZCIsImNlbGxzTGlzdCIsImNsYXNzZXMiLCJwbGF5ZXJWYXJzIiwic2hvd2luZm8iLCJyZWwiLCJydWxlc1BhciIsImNhbnZhcyIsImhhbmRsZVBsYXlUb2dnbGUiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInNoYXBlIiwiTUFJTiIsImJvb2wiLCJnZXRQYXR0ZXJuc1dpZHRoUmVsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0FBRUE7OztBQUxBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU07O21CQUFTLEFBQ0QsQUFDRCxBQUVU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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\folder\\new\\gol\\components\\About.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\folder\\new\\gol\\components\\About.js"); } } })();

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isEqual__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_youtube_player__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_youtube_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_youtube_player__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * Check whether a `props` change should result in the video being updated.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */
function shouldUpdateVideo(prevProps, props) {
  // A changing video should always trigger an update
  if (prevProps.videoId !== props.videoId) {
    return true;
  }

  // Otherwise, a change in the start/end time playerVars also requires a player
  // update.
  var prevVars = prevProps.opts.playerVars || {};
  var vars = props.opts.playerVars || {};

  return prevVars.start !== vars.start || prevVars.end !== vars.end;
}

/**
 * Neutralise API options that only require a video update, leaving only options
 * that require a player reset. The results can then be compared to see if a
 * player reset is necessary.
 *
 * @param {Object} opts
 */
function filterResetOptions(opts) {
  return _extends({}, opts, {
    playerVars: _extends({}, opts.playerVars, {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}

/**
 * Check whether a `props` change should result in the player being reset.
 * The player is reset when the `props.opts` change, except if the only change
 * is in the `start` and `end` playerVars, because a video update can deal with
 * those.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */
function shouldResetPlayer(prevProps, props) {
  return !__WEBPACK_IMPORTED_MODULE_2_lodash_isEqual___default()(filterResetOptions(prevProps.opts), filterResetOptions(props.opts));
}

/**
 * Check whether a props change should result in an id or className update.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */
function shouldUpdatePlayer(prevProps, props) {
  return prevProps.id === props.id || prevProps.className === props.className;
}

var YouTube = function (_React$Component) {
  _inherits(YouTube, _React$Component);

  function YouTube(props) {
    _classCallCheck(this, YouTube);

    var _this = _possibleConstructorReturn(this, (YouTube.__proto__ || Object.getPrototypeOf(YouTube)).call(this, props));

    _this.onPlayerReady = function (event) {
      return _this.props.onReady(event);
    };

    _this.onPlayerError = function (event) {
      return _this.props.onError(event);
    };

    _this.onPlayerStateChange = function (event) {
      _this.props.onStateChange(event);
      switch (event.data) {

        case YouTube.PlayerState.ENDED:
          _this.props.onEnd(event);
          break;

        case YouTube.PlayerState.PLAYING:
          _this.props.onPlay(event);
          break;

        case YouTube.PlayerState.PAUSED:
          _this.props.onPause(event);
          break;

        default:
          return;
      }
    };

    _this.onPlayerPlaybackRateChange = function (event) {
      return _this.props.onPlaybackRateChange(event);
    };

    _this.onPlayerPlaybackQualityChange = function (event) {
      return _this.props.onPlaybackQualityChange(event);
    };

    _this.createPlayer = function () {
      // do not attempt to create a player server-side, it won't work
      if (typeof document === 'undefined') return;
      // create player
      var playerOpts = _extends({}, _this.props.opts, {
        // preload the `videoId` video if one is already given
        videoId: _this.props.videoId
      });
      _this.internalPlayer = __WEBPACK_IMPORTED_MODULE_3_youtube_player___default()(_this.container, playerOpts);
      // attach event handlers
      _this.internalPlayer.on('ready', _this.onPlayerReady);
      _this.internalPlayer.on('error', _this.onPlayerError);
      _this.internalPlayer.on('stateChange', _this.onPlayerStateChange);
      _this.internalPlayer.on('playbackRateChange', _this.onPlayerPlaybackRateChange);
      _this.internalPlayer.on('playbackQualityChange', _this.onPlayerPlaybackQualityChange);
    };

    _this.resetPlayer = function () {
      return _this.internalPlayer.destroy().then(_this.createPlayer);
    };

    _this.updatePlayer = function () {
      _this.internalPlayer.getIframe().then(function (iframe) {
        iframe.setAttribute('id', _this.props.id);
        iframe.setAttribute('class', _this.props.className);
      });
    };

    _this.updateVideo = function () {
      if (typeof _this.props.videoId === 'undefined' || _this.props.videoId === null) {
        _this.internalPlayer.stopVideo();
        return;
      }

      // set queueing options
      var autoplay = false;
      var opts = {
        videoId: _this.props.videoId
      };
      if ('playerVars' in _this.props.opts) {
        autoplay = _this.props.opts.playerVars.autoplay === 1;
        if ('start' in _this.props.opts.playerVars) {
          opts.startSeconds = _this.props.opts.playerVars.start;
        }
        if ('end' in _this.props.opts.playerVars) {
          opts.endSeconds = _this.props.opts.playerVars.end;
        }
      }

      // if autoplay is enabled loadVideoById
      if (autoplay) {
        _this.internalPlayer.loadVideoById(opts);
        return;
      }
      // default behaviour just cues the video
      _this.internalPlayer.cueVideoById(opts);
    };

    _this.refContainer = function (container) {
      _this.container = container;
    };

    _this.container = null;
    _this.internalPlayer = null;
    return _this;
  }

  /**
    * Expose PlayerState constants for convenience. These constants can also be
    * accessed through the global YT object after the YouTube IFrame API is instantiated.
    * https://developers.google.com/youtube/iframe_api_reference#onStateChange
    */


  _createClass(YouTube, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createPlayer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (shouldUpdatePlayer(prevProps, this.props)) {
        this.updatePlayer();
      }

      if (shouldResetPlayer(prevProps, this.props)) {
        this.resetPlayer();
      }

      if (shouldUpdateVideo(prevProps, this.props)) {
        this.updateVideo();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      /**
       * Note: The `youtube-player` package that is used promisifies all Youtube
       * Player API calls, which introduces a delay of a tick before it actually
       * gets destroyed. Since React attempts to remove the element instantly
       * this method isn't quick enough to reset the container element.
       */
      this.internalPlayer.destroy();
    }

    /**
     * https://developers.google.com/youtube/iframe_api_reference#onReady
     *
     * @param {Object} event
     *   @param {Object} target - player object
     */


    /**
     * https://developers.google.com/youtube/iframe_api_reference#onError
     *
     * @param {Object} event
     *   @param {Integer} data  - error type
     *   @param {Object} target - player object
     */


    /**
     * https://developers.google.com/youtube/iframe_api_reference#onStateChange
     *
     * @param {Object} event
     *   @param {Integer} data  - status change type
     *   @param {Object} target - actual YT player
     */


    /**
     * https://developers.google.com/youtube/iframe_api_reference#onPlaybackRateChange
     *
     * @param {Object} event
     *   @param {Float} data    - playback rate
     *   @param {Object} target - actual YT player
     */


    /**
     * https://developers.google.com/youtube/iframe_api_reference#onPlaybackQualityChange
     *
     * @param {Object} event
     *   @param {String} data   - playback quality
     *   @param {Object} target - actual YT player
     */


    /**
     * Initialize the Youtube Player API on the container and attach event handlers
     */


    /**
     * Shorthand for destroying and then re-creating the Youtube Player
     */


    /**
     * Method to update the id and class of the Youtube Player iframe.
     * React should update this automatically but since the Youtube Player API
     * replaced the DIV that is mounted by React we need to do this manually.
     */


    /**
     * Call Youtube Player API methods to update the currently playing video.
     * Depeding on the `opts.playerVars.autoplay` this function uses one of two
     * Youtube Player API methods to update the video.
     */

  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'span',
        null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { id: this.props.id, className: this.props.className, ref: this.refContainer })
      );
    }
  }]);

  return YouTube;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

YouTube.propTypes = {
  videoId: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,

  // custom ID for player element
  id: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,

  // custom class name for player element
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,

  // https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
  opts: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,

  // event subscriptions
  onReady: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onError: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onPlay: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onPause: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onEnd: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onStateChange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onPlaybackRateChange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onPlaybackQualityChange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func
};
YouTube.defaultProps = {
  opts: {},
  onReady: function onReady() {},
  onError: function onError() {},
  onPlay: function onPlay() {},
  onPause: function onPause() {},
  onEnd: function onEnd() {},
  onStateChange: function onStateChange() {},
  onPlaybackRateChange: function onPlaybackRateChange() {},
  onPlaybackQualityChange: function onPlaybackQualityChange() {}
};
YouTube.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};


/* harmony default export */ __webpack_exports__["default"] = (YouTube);

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(220);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _sister = __webpack_require__(804);

var _sister2 = _interopRequireDefault(_sister);

var _loadYouTubeIframeApi = __webpack_require__(805);

var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);

var _YouTubePlayer = __webpack_require__(807);

var _YouTubePlayer2 = _interopRequireDefault(_YouTubePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef YT.Player
 * @see https://developers.google.com/youtube/iframe_api_reference
 * */

/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
 */
var youtubeIframeAPI = void 0;

/**
 * A factory function used to produce an instance of YT.Player and queue function calls and proxy events of the resulting object.
 *
 * @param elementId Either An existing YT.Player instance,
 * the DOM element or the id of the HTML element where the API will insert an <iframe>.
 * @param options See `options` (Ignored when using an existing YT.Player instance).
 * @param strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions. Default: `false`.
 * See `FunctionStateMap.js` for supported functions and acceptable states.
 */

exports.default = function (maybeElementId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var strictState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var emitter = (0, _sister2.default)();

  if (!youtubeIframeAPI) {
    youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)();
  }

  if (options.events) {
    throw new Error('Event handlers cannot be overwritten.');
  }

  if (typeof maybeElementId === 'string' && !document.getElementById(maybeElementId)) {
    throw new Error('Element "' + maybeElementId + '" does not exist.');
  }

  options.events = _YouTubePlayer2.default.proxyEvents(emitter);

  var playerAPIReady = new Promise(function (resolve) {
    if (typeof maybeElementId === 'string' || maybeElementId instanceof HTMLElement) {
      // eslint-disable-next-line promise/catch-or-return
      youtubeIframeAPI.then(function (YT) {
        var player = new YT.Player(maybeElementId, options);

        emitter.on('ready', function () {
          resolve(player);
        });

        return null;
      });
    } else if ((typeof maybeElementId === 'undefined' ? 'undefined' : _typeof(maybeElementId)) === 'object' && maybeElementId.playVideo instanceof Function) {
      var player = maybeElementId;

      resolve(player);
    } else {
      throw new TypeError('Unexpected state.');
    }
  });

  var playerApi = _YouTubePlayer2.default.promisifyPlayer(playerAPIReady, strictState);

  playerApi.on = emitter.on;
  playerApi.off = emitter.off;

  return playerApi;
};

module.exports = exports['default'];

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
function Sister () {
    var sister = {},
        events = {};

    /**
     * @name handler
     * @function
     * @param {Object} data Event data.
     */

    /**
     * @param {String} name Event name.
     * @param {handler} handler
     * @return {listener}
     */
    sister.on = function (name, handler) {
        var listener = {name: name, handler: handler};
        events[name] = events[name] || [];
        events[name].unshift(listener);
        return listener;
    };

    /**
     * @param {listener}
     */
    sister.off = function (listener) {
        var index = events[listener.name].indexOf(listener);

        if (index != -1) {
            events[listener.name].splice(index, 1);
        }
    };

    /**
     * @param {String} name Event name.
     * @param {Object} data Event data.
     */
    sister.trigger = function (name, data) {
        var listeners = events[name],
            i;

        if (listeners) {
            i = listeners.length;
            while (i--) {
                listeners[i].handler(data);
            }
        }
    };

    return sister;
}

global.gajus = global.gajus || {};
global.gajus.Sister = Sister;

module.exports = Sister;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadScript = __webpack_require__(806);

var _loadScript2 = _interopRequireDefault(_loadScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  /**
   * A promise that is resolved when window.onYouTubeIframeAPIReady is called.
   * The promise is resolved with a reference to window.YT object.
   */
  var iframeAPIReady = new Promise(function (resolve) {
    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
      resolve(window.YT);

      return;
    }

    var previous = window.onYouTubeIframeAPIReady;

    // The API will call this function when page has finished downloading
    // the JavaScript for the player API.
    window.onYouTubeIframeAPIReady = function () {
      if (previous) {
        previous();
      }

      resolve(window.YT);
    };
  });

  var protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';

  (0, _loadScript2.default)(protocol + '//www.youtube.com/iframe_api');

  return iframeAPIReady;
};

module.exports = exports['default'];

/***/ }),

/***/ 806:
/***/ (function(module, exports) {


module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}


/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debug = __webpack_require__(808);

var _debug2 = _interopRequireDefault(_debug);

var _functionNames = __webpack_require__(811);

var _functionNames2 = _interopRequireDefault(_functionNames);

var _eventNames = __webpack_require__(812);

var _eventNames2 = _interopRequireDefault(_eventNames);

var _FunctionStateMap = __webpack_require__(813);

var _FunctionStateMap2 = _interopRequireDefault(_FunctionStateMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('youtube-player');

var YouTubePlayer = {};

/**
 * Construct an object that defines an event handler for all of the YouTube
 * player events. Proxy captured events through an event emitter.
 *
 * @todo Capture event parameters.
 * @see https://developers.google.com/youtube/iframe_api_reference#Events
 */
YouTubePlayer.proxyEvents = function (emitter) {
  var events = {};

  var _loop = function _loop(eventName) {
    var onEventName = 'on' + eventName.slice(0, 1).toUpperCase() + eventName.slice(1);

    events[onEventName] = function (event) {
      debug('event "%s"', onEventName, event);

      emitter.trigger(eventName, event);
    };
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _eventNames2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var eventName = _step.value;

      _loop(eventName);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return events;
};

/**
 * Delays player API method execution until player state is ready.
 *
 * @todo Proxy all of the methods using Object.keys.
 * @todo See TRICKY below.
 * @param playerAPIReady Promise that resolves when player is ready.
 * @param strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions.
 * @returns {Object}
 */
YouTubePlayer.promisifyPlayer = function (playerAPIReady) {
  var strictState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var functions = {};

  var _loop2 = function _loop2(functionName) {
    if (strictState && _FunctionStateMap2.default[functionName]) {
      functions[functionName] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return playerAPIReady.then(function (player) {
          var stateInfo = _FunctionStateMap2.default[functionName];
          var playerState = player.getPlayerState();

          // eslint-disable-next-line no-warning-comments
          // TODO: Just spread the args into the function once Babel is fixed:
          // https://github.com/babel/babel/issues/4270
          //
          // eslint-disable-next-line prefer-spread
          var value = player[functionName].apply(player, args);

          // TRICKY: For functions like `seekTo`, a change in state must be
          // triggered given that the resulting state could match the initial
          // state.
          if (stateInfo.stateChangeRequired ||

          // eslint-disable-next-line no-extra-parens
          Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerState) === -1) {
            return new Promise(function (resolve) {
              var onPlayerStateChange = function onPlayerStateChange() {
                var playerStateAfterChange = player.getPlayerState();

                var timeout = void 0;

                if (typeof stateInfo.timeout === 'number') {
                  timeout = setTimeout(function () {
                    player.removeEventListener('onStateChange', onPlayerStateChange);

                    resolve();
                  }, stateInfo.timeout);
                }

                if (Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerStateAfterChange) !== -1) {
                  player.removeEventListener('onStateChange', onPlayerStateChange);

                  clearTimeout(timeout);

                  resolve();
                }
              };

              player.addEventListener('onStateChange', onPlayerStateChange);
            }).then(function () {
              return value;
            });
          }

          return value;
        });
      };
    } else {
      functions[functionName] = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return playerAPIReady.then(function (player) {
          // eslint-disable-next-line no-warning-comments
          // TODO: Just spread the args into the function once Babel is fixed:
          // https://github.com/babel/babel/issues/4270
          //
          // eslint-disable-next-line prefer-spread
          return player[functionName].apply(player, args);
        });
      };
    }
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _functionNames2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var functionName = _step2.value;

      _loop2(functionName);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return functions;
};

exports.default = YouTubePlayer;
module.exports = exports['default'];

/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(809);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(810);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ 810:
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Functions
 */
exports.default = ['cueVideoById', 'loadVideoById', 'cueVideoByUrl', 'loadVideoByUrl', 'playVideo', 'pauseVideo', 'stopVideo', 'getVideoLoadedFraction', 'cuePlaylist', 'loadPlaylist', 'nextVideo', 'previousVideo', 'playVideoAt', 'setShuffle', 'setLoop', 'getPlaylist', 'getPlaylistIndex', 'setOption', 'mute', 'unMute', 'isMuted', 'setVolume', 'getVolume', 'seekTo', 'getPlayerState', 'getPlaybackRate', 'setPlaybackRate', 'getAvailablePlaybackRates', 'getPlaybackQuality', 'setPlaybackQuality', 'getAvailableQualityLevels', 'getCurrentTime', 'getDuration', 'removeEventListener', 'getVideoUrl', 'getVideoEmbedCode', 'getOptions', 'getOption', 'addEventListener', 'destroy', 'setSize', 'getIframe'];
module.exports = exports['default'];

/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Events
 * `volumeChange` is not officially supported but seems to work
 * it emits an object: `{volume: 82.6923076923077, muted: false}`
 */
exports.default = ['ready', 'stateChange', 'playbackQualityChange', 'playbackRateChange', 'error', 'apiChange', 'volumeChange'];
module.exports = exports['default'];

/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlayerStates = __webpack_require__(814);

var _PlayerStates2 = _interopRequireDefault(_PlayerStates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  pauseVideo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PAUSED],
    stateChangeRequired: false
  },
  playVideo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING],
    stateChangeRequired: false
  },
  seekTo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING, _PlayerStates2.default.PAUSED],
    stateChangeRequired: true,

    // TRICKY: `seekTo` may not cause a state change if no buffering is
    // required.
    timeout: 3000
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  BUFFERING: 3,
  ENDED: 0,
  PAUSED: 2,
  PLAYING: 1,
  UNSTARTED: -1,
  VIDEO_CUED: 5
};
module.exports = exports["default"];

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(296),
    getValue = __webpack_require__(301);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2NvbnRhaW5lcnNfQWJvdXRfMjNkYjgxM2NlMWMyMTFmZTQ3ZGRlYzdiM2YzYTZmZjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlLmpzPzkwMTBiMDIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzPzkwMTBiMDIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzPzkwMTBiMDIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcz85MDEwYjAyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcz85MDEwYjAyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hcERhdGEuanM/OTAxMGIwMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanM/OTAxMGIwMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXAuanM/OTAxMGIwMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcz85MDEwYjAyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanM/OTAxMGIwMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0luZGV4LmpzPzkwMTBiMDIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcz85MDEwYjAyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N0YWNrLmpzPzkwMTBiMDIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzPzkwMTBiMDIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanM/OTAxMGIwMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNFcXVhbC5qcz85MDEwYjAyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzPzkwMTBiMDIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0Q2FjaGUuanM/MTVkNWIyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYWNoZUhhcy5qcz8xNWQ1YjIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UHVzaC5qcz8xNWQ1YjIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanM/MTVkNWIyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzVHlwZWRBcnJheS5qcz8xNWQ1YjIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcz8xNWQ1YjIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzPzE1ZDViMjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanM/MTVkNWIyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanM/MTVkNWIyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVHZXQuanM/MTVkNWIyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanM/MTVkNWIyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanM/MTVkNWIyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0NsZWFyLmpzPzE1ZDViMjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanM/MTVkNWIyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0dldC5qcz8xNWQ1YjIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrSGFzLmpzPzE1ZDViMjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanM/MTVkNWIyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYXRpdmUuanM/MTVkNWIyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcz8xNWQ1YjIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanM/MTVkNWIyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRWYWx1ZS5qcz8xNWQ1YjIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanM/MTVkNWIyMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19IYXNoLmpzPzBkOTQwZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzPzBkOTQwZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qcz8wZDk0MGYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanM/MGQ5NDBmMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzPzBkOTQwZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qcz8wZDk0MGYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzPzBkOTQwZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzPzBkOTQwZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanM/MGQ5NDBmMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcz8wZDk0MGYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzPzBkOTQwZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzPzBkOTQwZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVBZGQuanM/MGQ5NDBmMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qcz8wZDk0MGYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qcz8wZDk0MGYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanM/MGQ5NDBmMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19VaW50OEFycmF5LmpzPzBkOTQwZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwVG9BcnJheS5qcz8wZDk0MGYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFRvQXJyYXkuanM/MGQ5NDBmMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbE9iamVjdHMuanM/MGQ5NDBmMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzLmpzPzBkOTQwZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanM/MDA4ZGVjNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRTeW1ib2xzLmpzPzAwOGRlYzYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlGaWx0ZXIuanM/MDA4ZGVjNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcz8wMDhkZWM2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanM/MDA4ZGVjNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanM/MDA4ZGVjNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanM/MDA4ZGVjNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcz8wMDhkZWM2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanM/MDA4ZGVjNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcz8wMDhkZWM2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzLmpzPzAwOGRlYzYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qcz8wMDhkZWM2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanM/MDA4ZGVjNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRUYWcuanM/MDA4ZGVjNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19EYXRhVmlldy5qcz8wMDhkZWM2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanM/MDA4ZGVjNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXQuanM/MDA4ZGVjNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzPzAwOGRlYzYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzPzAwOGRlYzYiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9BYm91dC5qcz8wMDhkZWM2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXQuanM/MDA4ZGVjNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QteW91dHViZS9lcy9Zb3VUdWJlLmpzPzAwOGRlYzYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0VxdWFsLmpzP2UwZDhiNjkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3lvdXR1YmUtcGxheWVyL2Rpc3QvaW5kZXguanM/ZTBkOGI2OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2lzdGVyL3NyYy9zaXN0ZXIuanM/ZTBkOGI2OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveW91dHViZS1wbGF5ZXIvZGlzdC9sb2FkWW91VHViZUlmcmFtZUFwaS5qcz9lMGQ4YjY5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2FkLXNjcmlwdC9pbmRleC5qcz9lMGQ4YjY5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95b3V0dWJlLXBsYXllci9kaXN0L1lvdVR1YmVQbGF5ZXIuanM/ZTBkOGI2OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanM/ZTBkOGI2OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2RlYnVnLmpzP2UwZDhiNjkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzP2UwZDhiNjkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3lvdXR1YmUtcGxheWVyL2Rpc3QvZnVuY3Rpb25OYW1lcy5qcz9lMGQ4YjY5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95b3V0dWJlLXBsYXllci9kaXN0L2V2ZW50TmFtZXMuanM/ZTBkOGI2OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveW91dHViZS1wbGF5ZXIvZGlzdC9GdW5jdGlvblN0YXRlTWFwLmpzP2UwZDhiNjkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3lvdXR1YmUtcGxheWVyL2Rpc3QvY29uc3RhbnRzL1BsYXllclN0YXRlcy5qcz9lMGQ4YjY5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE5hdGl2ZS5qcz9lMGQ4YjY5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19MaXN0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gMTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanNcbi8vIG1vZHVsZSBpZCA9IDE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwQ2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNJbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3RhY2suanNcbi8vIG1vZHVsZSBpZCA9IDIxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gMjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNFcXVhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDIyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gMjIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAyODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAyODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gMjkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDI5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDI5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDI5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDI5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzTWFza2VkLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDMwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMzAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanNcbi8vIG1vZHVsZSBpZCA9IDMwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDMwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qc1xuLy8gbW9kdWxlIGlkID0gMzA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEhhcy5qc1xuLy8gbW9kdWxlIGlkID0gMzA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleWFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDMxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDMxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qc1xuLy8gbW9kdWxlIGlkID0gMzE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlQWRkLmpzXG4vLyBtb2R1bGUgaWQgPSAzMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlTb21lLmpzXG4vLyBtb2R1bGUgaWQgPSAzMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDMxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1VpbnQ4QXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDMxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMzIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbE9iamVjdHMuanNcbi8vIG1vZHVsZSBpZCA9IDMyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qc1xuLy8gbW9kdWxlIGlkID0gMzI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gMzI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDMyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanNcbi8vIG1vZHVsZSBpZCA9IDMyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDMzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkZhbHNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMzMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbm9kZVV0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDMzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzXG4vLyBtb2R1bGUgaWQgPSAzMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMzM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fRGF0YVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDMzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDMzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qc1xuLy8gbW9kdWxlIGlkID0gMzQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fV2Vha01hcC5qc1xuLy8gbW9kdWxlIGlkID0gMzQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA2IiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldFN0b3BwZWQgfSBmcm9tICdhY3Rpb25zJ1xyXG4vLyBpbXBvcnQgeyBhZGRDb3VudCB9IGZyb20gJ2FjdGlvbnMnXHJcbi8vIGltcG9ydCB7IHNlbGVjdExpZ2h0LCBzZWxlY3RMYXN0VXBkYXRlLCBzZWxlY3RDb3VudCB9IGZyb20gJ3NlbGVjdG9ycydcclxuLy8gaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XHJcbmltcG9ydCB7IGNvbXBvc2UsIHNldERpc3BsYXlOYW1lLCBwdXJlIH0gZnJvbSAncmVjb21wb3NlJztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQWJvdXQnO1xyXG5cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2V0U3RvcHBlZDogKHN0b3BwZWQsIG5hbWUpID0+IHtcclxuICAgIFx0ZGlzcGF0Y2goc2V0U3RvcHBlZChzdG9wcGVkLCBuYW1lKSlcclxuICAgIH0sXHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXHJcbiAgc2V0RGlzcGxheU5hbWUoJ0Fib3V0Q29udGFpbmVyJyksXHJcbiAgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSwgbWFwRGlzcGF0Y2hUb1Byb3BzKSxcclxuICBwdXJlXHJcbikoQWJvdXQpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29udGFpbmVycy9BYm91dC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG4vLyBpbXBvcnQgUGFwZXIgZnJvbSAnbWF0ZXJpYWwtdWkvUGFwZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdtYXRlcmlhbC11aS9HcmlkJztcclxuLy8gaW1wb3J0IGluamVjdFNoZWV0IGZyb20gJ3JlYWN0LWpzcyc7XHJcbmltcG9ydCBZb3VUdWJlIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xyXG5pbXBvcnQgR2FtZUdyaWQgZnJvbSAnLi4vaGVscGVycy9HYW1lR3JpZCc7XHJcbmltcG9ydCBJY29uIGZyb20gJ21hdGVyaWFsLXVpL0ljb24nO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFRvZ2dsZUljb24gZnJvbSAnbWF0ZXJpYWwtdWktdG9nZ2xlLWljb24nO1xyXG5pbXBvcnQgUGxheUFycm93IGZyb20gJ21hdGVyaWFsLXVpLWljb25zL1BsYXlBcnJvdyc7XHJcbmltcG9ydCBQYXVzZSBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9QYXVzZSc7XHJcbmltcG9ydCB7Ym9hcmROYW1lc30gZnJvbSAnLi4vaGVscGVycy9ib2FyZE5hbWVzJ1xyXG5cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuXHRtYWluQ29udGVudDoge1xyXG5cdFx0bWFyZ2luVG9wOiA3NVxyXG5cdH0sXHJcbiAgICBpbnRybzoge1xyXG4gICAgXHQvLyBiYWNrZ3JvdW5kQ29sb3I6J3JnYmEoMjQwLDI0OCwyNTUsLjcpJyxcclxuICAgIFx0Ly8gcGFkZGluZzo1LFxyXG4gICBcdFxyXG4gICAgfSxcclxuICAgIHJ1bGVzOiB7XHJcbiAgICBcdGJhY2tncm91bmRDb2xvcjoncmdiYSgyNDAsMjQ4LDI1NSwuNyknLFxyXG4gICAgXHRcclxuICAgIH0sXHJcbiAgICAvLyBydWxlc1Bhcjoge1xyXG4gICAgLy8gXHRtYXJnaW5Ub3A6IDIwXHJcbiAgICAvLyB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdPcGVuIFNhbnMnLCBcclxuICAgICAgICBmYWxsYmFja3M6e1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXHJcbiAgICAgICAgfSwgICAgIFx0XHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBmb250RmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgXHJcbiAgICAgICAgZmFsbGJhY2tzOntcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9udFdlaWdodDogOTAwLFxyXG4gICAgICAgIG1hcmdpblRvcDogNDBcclxuICAgIH0sXHJcbiAgICAnQGdsb2JhbCBpZnJhbWUnOiB7XHJcbiAgICBcdC8vIHdpZHRoOiAnMTAwJScsXHJcbiAgICBcdC8vIGhlaWdodDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgICBpY29uOiB7XHJcbiAgLy8gICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgLy8gICAgICAgd2lkdGg6IDI1LFxyXG4gIC8vICAgICAgIGhlaWdodDogMjUsXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gIC8vICAgICAgIHdpZHRoOiAzNSxcclxuICAvLyAgICAgICBoZWlnaHQ6IDM1LFxyXG4gIC8vICAgfSxcclxuICAvLyAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcclxuICAvLyAgICAgICB3aWR0aDogNDUsXHJcbiAgLy8gICAgICAgaGVpZ2h0OiA0NSxcclxuICAvLyAgIH0sXHJcbiAgLy8gICAgICAgd2lkdGg6IDQwLFxyXG4gIC8vICAgICAgIGhlaWdodDogNDAsXHJcblxyXG4gIC8vIH1cclxuICAgICAgd2lkdGg6IDI1LFxyXG4gICAgICBoZWlnaHQ6IDI1LFxyXG5cclxuICAgIH0sXHJcbiAgICBib3JkZXI6IHtcclxuXHRcdGJvcmRlcjogJzFweCBzb2xpZCBibHVlJyxcclxuICAgIH0sXHJcbiAgICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgIC8vIGJvcmRlcjogJzFweCBzb2xpZCBibHVlJyxcclxuICAgICAgICAgLy8gcGFkZGluZzogMCxcclxuICAgICAgICAgLy8gbWFyZ2luOiAwLFxyXG4gICAgICAgICB3aWR0aDogMzUsXHJcbiAgICAgICAgICBoZWlnaHQ6IDM1LFxyXG4gICAgICAgICAgfSxcclxuICAgIHZpZGVvOiB7XHJcbiAgICBcdC8vIGJhY2tncm91bmRDb2xvcjoncmdiYSgwLDAsMCwuMiknLFxyXG4gICAgXHQvLyAvLyBib3JkZXJSYWRpdXM6ICcwIDAgNXB4IDVweCcsXHJcbiAgICBcdC8vIC8vIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgXHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgXHRmb250RmFtaWx5OiAnT3BlbiBTYW5zJywgXHJcbiAgICAgICAgZmFsbGJhY2tzOntcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxyXG4gICAgICAgIH0sXHJcbiAgICBcclxuICAgIFx0Ly8gcGFkZGluZzogMTAsXHJcbiAgICBcdC8vIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICBcdFx0Ly8gcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBcdFx0Ly8gdG9wOjAsXHJcbiAgICBcdFx0Ly8gbGVmdDowLFxyXG5cdC8vIHBhZGRpbmdCb3R0b206ICc1Ni4yNSUnLFxyXG5cdFxyXG5cdC8vIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuXHRtYXJnaW5Ub3A6MzAsXHJcblx0XHQvLyB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGJvYXJkOiB7XHJcbiAgICBcdGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIFx0Ly8gZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBcdC8vIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXHJcbiAgICBcdC8vIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgXHQvLyBmbGV4R3JvdzogMSxcclxuICAgIFx0Ly8gcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBcdGZvbnRTaXplOiAnLjdlbScsXHJcbiAgICBcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBcdGZvbnRGYW1pbHk6ICdPcGVuIFNhbnMnLCBcclxuICAgICAgICBmYWxsYmFja3M6e1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ0BnbG9iYWwgc3Bhbic6IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgfSxcclxuICAgIGJvYXJkc1NlY3Rpb246IHtcclxuLy8gICAgIFx0ZGlzcGxheTpcImZsZXhcIixcclxuLy8ganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICBcdG1hcmdpblRvcDozMCxcclxuICAgIH0sXHJcbiAgICBpdGVtOiB7XHJcbiAgICBcdCdhbGlnbi1zZWxmJzogJ2ZsZXgtZW5kJyxcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBBYm91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdGNvbnN0IGJsb2NrQ2VsbHNMaXN0ID0gW1sxLDFdLFsxLDJdLFsyLDFdLFsyLDJdXTtcclxuXHRcdGNvbnN0IGJvYXRDZWxsc0xpc3QgPSBbWzEsMV0sWzEsMl0sWzIsMV0sWzIsM10sWzMsMl1dO1xyXG5cdFx0Y29uc3QgbG9hZkNlbGxzTGlzdCA9IFtbMiwxXSxbMSwzXSxbMSwyXSxbMiw0XSxbMywyXSxbNCwzXSxbMyw0XV07XHJcblx0XHRjb25zdCBiZWVoaXZlQ2VsbHNMaXN0ID0gW1sxLDJdLFsxLDNdLFsyLDFdLFsyLDRdLFszLDJdLFszLDNdXTtcclxuXHRcdGNvbnN0IGJsaW5rZXJDZWxsc0xpc3QgPSBbWzIsMV0sWzIsMl0sWzIsM11dO1xyXG5cdFx0Y29uc3QgYmVhY29uQ2VsbHNMaXN0ID0gW1sxLDFdLFsxLDJdLFsyLDFdLFsyLDJdLFszLDNdLFszLDRdLFs0LDNdLFs0LDRdXTtcclxuXHRcdGNvbnN0IHRvYWRDZWxsc0xpc3QgPSBbWzIsMl0sWzIsM10sWzIsNF0sWzMsMV0sWzMsMl0sWzMsM11dO1xyXG5cdFx0Y29uc3QgZ2xpZGVyQ2VsbHNMaXN0ID0gW1s1LDRdLFs0LDNdLFszLDVdLFs0LDVdLFs1LDVdXTtcclxuXHRcdGNvbnN0IHNwYWNlc2hpcENlbGxzTGlzdCA9IFtbNSwzXSxbNywzXSxbNCw0XSxbNCw1XSxbNCw2XSxbNCw3XSxbNSw3XSxbNiw3XSxbNyw2XV07XHJcblx0XHRjb25zdCBndW5DZWxsc0xpc3QgPSBbWzUsMV0sWzYsMV0sWzUsMl0sWzYsMl0sWzUsMTFdLFs2LDExXSxbNywxMV0sWzQsMTJdLFs4LDEyXSxbMywxM10sWzksMTNdLFszLDE0XSxbOSwxNF0sXHJcblx0XHRbNiwxNV0sWzQsMTZdLFs4LDE2XSxbNSwxN10sWzYsMTddLFs3LDE3XSxbNiwxOF0sWzMsMjFdLFs0LDIxXSxbNSwyMV0sWzMsMjJdLFs0LDIyXSxbNSwyMl0sWzIsMjNdLFs2LDIzXSxbMSwyNV0sWzIsMjVdLFxyXG5cdFx0WzYsMjVdLFs3LDI1XSxbMywzNV0sWzQsMzVdLFszLDM2XSxbNCwzNl1dO1xyXG5cdFx0dGhpcy5wYXR0ZXJucyA9IHt9O1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5wYXR0ZXJucy5ibG9jaylcclxuXHRcdGNvbnN0IGJsb2NrR3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLkJMT0NLLCA0LCA0LCAxMik7XHJcblx0XHRjb25zdCBib2F0R3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLkJPQVQsIDUsIDUsIDEyKTtcclxuXHRcdGNvbnN0IGxvYWZHcmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuTE9BRiwgNiwgNiwgMTIpO1xyXG5cdFx0Y29uc3QgYmVlaGl2ZUdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5CRUVISVZFLCA2LCA1LCAxMik7XHRcclxuXHRcdGNvbnN0IGJsaW5rZXJHcmlkID0gbmV3IEdhbWVHcmlkKGJvYXJkTmFtZXMuQkxJTktFUiwgNSwgNSwgMTIpO1xyXG5cdFx0Y29uc3QgYmVhY29uR3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLkJFQUNPTiwgNiwgNiwgMTIpO1xyXG5cdFx0Y29uc3QgdG9hZEdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5UT0FELCA2LCA2LCAxMik7XHRcclxuXHRcdGNvbnN0IGdsaWRlckdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5HTElERVIsIDEwLCAxMCwgMTIpO1xyXG5cdFx0Y29uc3Qgc3BhY2VzaGlwR3JpZCA9IG5ldyBHYW1lR3JpZChib2FyZE5hbWVzLlNQQUNFU0hJUCwgMTIsIDEyLCAxMik7XHJcblx0XHRjb25zdCBndW5Jc09wZW5Vbml2ID0gdHJ1ZTtcclxuXHRcdGNvbnN0IGd1bkdyaWQgPSBuZXcgR2FtZUdyaWQoYm9hcmROYW1lcy5HVU4sIDQwLCAyMCwgMTIsZ3VuSXNPcGVuVW5pdik7XHJcblx0XHR0aGlzLm1vdGlvblBhdHRlcm5MaXN0ID0gW107XHJcblx0XHR0aGlzLnJBRiA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5ibG9jayA9IHBhdHRlcm5Cb2FyZChibG9ja0dyaWQsIGJsb2NrQ2VsbHNMaXN0KTtcclxuXHRcdHRoaXMuYm9hdCA9IHBhdHRlcm5Cb2FyZChib2F0R3JpZCwgYm9hdENlbGxzTGlzdCk7XHJcblx0XHR0aGlzLmxvYWYgPSBwYXR0ZXJuQm9hcmQobG9hZkdyaWQsIGxvYWZDZWxsc0xpc3QpO1xyXG5cdFx0dGhpcy5iZWVoaXZlID0gcGF0dGVybkJvYXJkKGJlZWhpdmVHcmlkLCBiZWVoaXZlQ2VsbHNMaXN0KTtcclxuXHRcdHRoaXMuYmxpbmtlciA9IHBhdHRlcm5Cb2FyZChibGlua2VyR3JpZCwgYmxpbmtlckNlbGxzTGlzdCk7XHJcblx0XHR0aGlzLmJlYWNvbiA9IHBhdHRlcm5Cb2FyZChiZWFjb25HcmlkLCBiZWFjb25DZWxsc0xpc3QpO1xyXG5cdFx0dGhpcy50b2FkID0gcGF0dGVybkJvYXJkKHRvYWRHcmlkLCB0b2FkQ2VsbHNMaXN0KTtcclxuXHRcdHRoaXMuZ2xpZGVyID0gcGF0dGVybkJvYXJkKGdsaWRlckdyaWQsIGdsaWRlckNlbGxzTGlzdCk7XHJcblx0XHR0aGlzLnNwYWNlc2hpcCA9IHBhdHRlcm5Cb2FyZChzcGFjZXNoaXBHcmlkLCBzcGFjZXNoaXBDZWxsc0xpc3QpO1xyXG5cdFx0dGhpcy5ndW4gPSBwYXR0ZXJuQm9hcmQoZ3VuR3JpZCwgZ3VuQ2VsbHNMaXN0KTtcclxuICAgICAgICB0aGlzLmJvYXJkcyA9IFtcclxuICAgICAgICAgICAgdGhpcy5ibG9jayxcclxuICAgICAgICAgICAgdGhpcy5ib2F0LFxyXG4gICAgICAgICAgICB0aGlzLmxvYWYsXHJcbiAgICAgICAgICAgIHRoaXMuYmVlaGl2ZSxcclxuICAgICAgICAgICAgdGhpcy5ibGlua2VyLFxyXG4gICAgICAgICAgICB0aGlzLmJlYWNvbixcclxuICAgICAgICAgICAgdGhpcy50b2FkLFxyXG4gICAgICAgICAgICB0aGlzLmdsaWRlcixcclxuICAgICAgICAgICAgdGhpcy5zcGFjZXNoaXAsXHJcbiAgICAgICAgICAgIHRoaXMuZ3VuLFxyXG4gICAgICAgICAgICBdO1xyXG5cdFx0dGhpcy5pbnRlcnZhbD0zMDA7XHJcblx0XHQvLyBsZXQgcGF0dGVybnNXaWR0aFJlbGF0aW9uID0gYmxvY2tHcmlkLndpZHRoID09IDUgPyA1LzYgOiBibG9ja0dyaWQud2lkdGggPT0gNCA/IDQvNiA6IGJsb2NrR3JpZC53aWR0aCA9PSAxMCA/IDEwLzEyIDogMTtcclxuXHRcdC8vIGxldCBzY3JlZW5TY2FsZSA9IDEwO1xyXG5cdFx0dGhpcy5vcmllbnRhdGlvblZlcmljYWwgPSBmYWxzZTtcdFx0XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcHMpXHJcblx0XHQvLyBpZihwcm9wcy5zY3JlZW4ud2lkdGggPCA5MDApe1xyXG5cdFx0Ly8gXHRzY3JlZW5TY2FsZSA9IDM7XHJcblx0XHQvLyB9XHJcblxyXG5cdFx0Ly8gKCh3aWR0aCArIDEpICogc3F1YXJlU2l6ZSkgKiByYXRpbztcclxuXHRcclxuXHRcdHRoaXMuYnV0dG9uQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAuNyknO1xyXG4gICAgICAgIHRoaXMuZ2V0V2lkdGggPSB0aGlzLmdldFdpZHRoLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5jcmVhdGVDYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcy5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0cmVsb2FkOmZhbHNlLFxyXG4gICAgICAgICAgICBzY3JlZW46IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgcmF0aW86IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsXHJcbiAgICAgICAgICAgICAgICBzY3JlZW5TY2FsZTogd2luZG93LmlubmVyV2lkdGggPCA5MDAgPyAzIDogMTAsXHJcbiAgICAgICAgICAgIH0sXHJcblx0XHR9XHJcblxyXG4gICAgICAgIHRoaXMuYmxvY2tXaWR0aCA9IHRoaXMuZ2V0V2lkdGgodGhpcy5ibG9jay5ncmlkKTtcclxuICAgICAgICAgLy8gcHJvcHMuc2NyZWVuLndpZHRoL3NjcmVlblNjYWxlICogZ2V0UGF0dGVybnNXaWR0aFJlbGF0aW9uKGJsb2NrR3JpZC53aWR0aCkgKiAuNjtcclxuICAgICAgICAvLyB0aGlzLmJsb2NrV2lkdGggPSBwcm9wcy5zY3JlZW4ud2lkdGgvNSAqIGdldFBhdHRlcm5zV2lkdGhSZWxhdGlvbihibG9ja0dyaWQud2lkdGgpICogLjY7XHJcbiAgICAgICAgdGhpcy5ib2F0V2lkdGggPSB0aGlzLmdldFdpZHRoKHRoaXMuYm9hdC5ncmlkKTtcclxuICAgICAgICB0aGlzLmxvYWZXaWR0aCA9IHRoaXMuZ2V0V2lkdGgodGhpcy5sb2FmLmdyaWQpO1xyXG4gICAgICAgIHRoaXMuYmVlaGl2ZVdpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLmJlZWhpdmUuZ3JpZCk7XHJcbiAgICAgICAgdGhpcy5ibGlua2VyV2lkdGggPSB0aGlzLmdldFdpZHRoKHRoaXMuYmxpbmtlci5ncmlkKTtcclxuICAgICAgICB0aGlzLmJlYWNvbldpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLmJlYWNvbi5ncmlkKTtcclxuICAgICAgICB0aGlzLnRvYWRXaWR0aCA9IHRoaXMuZ2V0V2lkdGgodGhpcy50b2FkLmdyaWQpO1xyXG4gICAgICAgIHRoaXMuZ2xpZGVyV2lkdGggPSB0aGlzLmdldFdpZHRoKHRoaXMuZ2xpZGVyLmdyaWQpO1xyXG4gICAgICAgIHRoaXMuc3BhY2VzaGlwV2lkdGggPSB0aGlzLmdldFdpZHRoKHRoaXMuc3BhY2VzaGlwLmdyaWQpO1xyXG4gICAgICAgIHRoaXMuZ3VuV2lkdGggPSB0aGlzLmdldFdpZHRoKHRoaXMuZ3VuLmdyaWQpO1xyXG4gICAgICAgIC8vIHRoaXMuYm9hdFdpZHRoID0gcHJvcHMuc2NyZWVuLndpZHRoL3NjcmVlblNjYWxlICogZ2V0UGF0dGVybnNXaWR0aFJlbGF0aW9uKGJvYXRHcmlkLndpZHRoKSAqIC42O1xyXG4gICAgICAgIC8vIHRoaXMubG9hZldpZHRoID0gcHJvcHMuc2NyZWVuLndpZHRoL3NjcmVlblNjYWxlICogZ2V0UGF0dGVybnNXaWR0aFJlbGF0aW9uKGxvYWZHcmlkLndpZHRoKSAqIC42O1xyXG4gICAgICAgIC8vIHRoaXMuYmVlaGl2ZVdpZHRoID0gcHJvcHMuc2NyZWVuLndpZHRoL3NjcmVlblNjYWxlICogZ2V0UGF0dGVybnNXaWR0aFJlbGF0aW9uKGJlZWhpdmVHcmlkLndpZHRoKSAqIC42O1xyXG4gICAgICAgIC8vIHRoaXMuYmxpbmtlcldpZHRoID0gcHJvcHMuc2NyZWVuLndpZHRoL3NjcmVlblNjYWxlICogZ2V0UGF0dGVybnNXaWR0aFJlbGF0aW9uKGJsaW5rZXJHcmlkLndpZHRoKSAqIC42O1xyXG4gICAgICAgIC8vIHRoaXMuYmVhY29uV2lkdGggPSBwcm9wcy5zY3JlZW4ud2lkdGgvc2NyZWVuU2NhbGUgKiBnZXRQYXR0ZXJuc1dpZHRoUmVsYXRpb24oYmVhY29uR3JpZC53aWR0aCkgKiAuNjtcclxuICAgICAgICAvLyB0aGlzLnRvYWRXaWR0aCA9IHByb3BzLnNjcmVlbi53aWR0aC9zY3JlZW5TY2FsZSAqIGdldFBhdHRlcm5zV2lkdGhSZWxhdGlvbih0b2FkR3JpZC53aWR0aCkgKiAuNjtcclxuICAgICAgICAvLyB0aGlzLmdsaWRlcldpZHRoID0gcHJvcHMuc2NyZWVuLndpZHRoL3NjcmVlblNjYWxlICogZ2V0UGF0dGVybnNXaWR0aFJlbGF0aW9uKGdsaWRlckdyaWQud2lkdGgpICogLjY7XHJcbiAgICAgICAgLy8gdGhpcy5zcGFjZXNoaXBXaWR0aCA9IHByb3BzLnNjcmVlbi53aWR0aC9zY3JlZW5TY2FsZSAqIGdldFBhdHRlcm5zV2lkdGhSZWxhdGlvbihzcGFjZXNoaXBHcmlkLndpZHRoKSAqIC42O1xyXG4gICAgICAgIC8vIHRoaXMuZ3VuV2lkdGggPSBwcm9wcy5zY3JlZW4ud2lkdGgvc2NyZWVuU2NhbGUgKiBnZXRQYXR0ZXJuc1dpZHRoUmVsYXRpb24oZ3VuR3JpZC53aWR0aCkgKiAuNjsgICBcclxuICAgICAgICB0aGlzLnNldFN0b3BwZWQgPSAoc3RvcHBlZCwgbmFtZSkgPT4gcHJvcHMuc2V0U3RvcHBlZChzdG9wcGVkLCBuYW1lKTtcclxuXHR9XHJcblxyXG4gICAgZ2V0V2lkdGgoZ3JpZCl7XHJcbiAgICAgICAgbGV0IHtzY3JlZW59ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQge3dpZHRoLCBzcXVhcmVTaXplfSA9IGdyaWQ7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCR7c2NyZWVufSAke3NjcmVlbi5zY3JlZW5TY2FsZX0gJHt3aWR0aH0gJHtzcXVhcmVTaXplfWApXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coKHdpZHRoICsgMSkgKiBzcXVhcmVTaXplICogc2NyZWVuLndpZHRoLzEwMCAqIGdldFBhdHRlcm5zV2lkdGhSZWxhdGlvbih3aWR0aCkpXHJcbiAgICAgICAgbGV0IHcgPSAoKHdpZHRoICsgMSkgKiBzcXVhcmVTaXplICogc2NyZWVuLndpZHRoLzEwMCAqIC43KS9zY3JlZW4uc2NyZWVuU2NhbGU7XHJcbiAgICAgICAgcmV0dXJuIHcgPiBzY3JlZW4ud2lkdGggKiAuNiA/IHNjcmVlbi53aWR0aCAqIC42IDogdztcclxuICAgIH1cclxuXHJcbiAgICAvLyBjcmVhdGVDYW52YXMocGF0dGVybiwgY2FudmFzKSB7XHJcbiAgICAvLyAgICAgdGhpcy5jYW52YXNCb2FyZCA9IGNhbnZhcztcclxuICAgIC8vICAgICBjb25zdCByYXRpbyA9IHRoaXMuc3RhdGUuc2NyZWVuID8gdGhpcy5zdGF0ZS5zY3JlZW4ucmF0aW8gOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmF0aW8pXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5jYW52YXNCb2FyZClcclxuICAgIC8vICAgICB0aGlzLmdyaWQubWFrZUJvYXJkKHRoaXMuZ3JpZFdpZHRoLHRoaXMuZ3JpZEhlaWdodCx0aGlzLnNxdWFyZVNpemUscmF0aW8sdGhpcy5jYW52YXNCb2FyZCxudWxsKTtcclxuICAgIC8vICAgICB0aGlzLnVwZGF0ZU9uY2UoKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGhhbmRsZVBsYXlUb2dnbGUocGF0dGVybil7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdG9wcGVkW3BhdHRlcm4uZ3JpZC5uYW1lXSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQocGF0dGVybik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcChwYXR0ZXJuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLy8gcGF0dGVybi5zdG9wcGVkID0gIXBhdHRlcm4uc3RvcHBlZDtcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtyZWxvYWQ6IXRoaXMuc3RhdGUucmVsb2FkfSlcclxuICAgIH0gIFxyXG5cclxuICAgIHN0b3AocGF0dGVybil7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMuc3RvcHBlZFtwYXR0ZXJuLmdyaWQubmFtZV0pe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gdHJ5e1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvY2VlZD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RvcHBlZCh0cnVlLCBwYXR0ZXJuLmdyaWQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBwYXR0ZXJuLnN0b3BwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdG9wcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2hhbmdlQnV0dG9uUHJlc3NlZFN0YXR1cyhcInBhdXNlXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElEKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMubW90aW9uUGF0dGVybkxpc3QuaW5kZXhPZihwYXR0ZXJuKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW90aW9uUGF0dGVybkxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubW90aW9uUGF0dGVybkxpc3QubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgICAgIFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yQUYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aWNrOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS50aWNrKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGljayk7XHJcbiAgICAgICAgICAgIC8vIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAvLyB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhcnQocGF0dGVybil7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdG9wcGVkW3BhdHRlcm4uZ3JpZC5uYW1lXSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RvcHBlZChmYWxzZSwgcGF0dGVybi5ncmlkLm5hbWUpO1xyXG4gICAgICAgIFx0Ly8gcGF0dGVybi5zdG9wcGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQVwiKVxyXG4gICAgICAgICAgICAvLyB0aGlzLnByb2NlZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5pc0NsZWFyU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zdG9wcGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2hhbmdlQnV0dG9uUHJlc3NlZFN0YXR1cyhcInN0YXJ0XCIpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdGlvblBhdHRlcm5MaXN0LnB1c2gocGF0dGVybik7XHJcbiAgICAgICAgICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIC8vIGlmKHRoaXMuc3RhdGUuZHJhd2luZyl7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLmlzTWFudWFsU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMubmV4dEdlbmVyYXRpb25DaGFuZ2VDZWxsc0xpc3QgPSB0b3RhbE5laWdoYm9yc1JldmlzaW9uKHRoaXMudmFsdWVzQm9hcmQpO1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5uZXh0R2VuZXJhdGlvbi5saXN0ID0gdG90YWxOZWlnaGJvcnNSZXZpc2lvbih0aGlzLnZhbHVlc0JvYXJkKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgLy8gICAgIGRyYXdpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aWNrOnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9Pnt0aGlzLnVwZGF0ZSgpfSksXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubW9kZS5kcmF3aW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBpZih0aGlzLm1vdGlvblBhdHRlcm5MaXN0Lmxlbmd0aCA9PT0gMSl7XHJcbiAgICAgICAgICAgIFx0dGhpcy5yQUYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT57dGhpcy51cGRhdGUoKX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJBXCIpICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHR1cGRhdGUoKXtcclxuICAgICAgICAvLyBpZih0aGlzLnN0YXRlLnN0b3BwZWQpe1xyXG5cclxuICAgICAgICAvLyAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+e3RoaXMudXBkYXRlKCl9KTtcclxuXHJcbiAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvdW50KyspXHJcbiAgICAgICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5kZWx0YSA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlbHRhID4gdGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRoZW4gKz0gdGhpcy5pbnRlcnZhbFxyXG4gICAgICAgICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5kZWx0YSAlIHRoaXMuaW50ZXJ2YWwpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdGlvblBhdHRlcm5MaXN0LmZvckVhY2gocCA9PiBwLmdyaWQudXBkYXRlKCkpXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgIHRpY2s6cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+e3RoaXMudXBkYXRlKCl9KSxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB9KTsgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5yQUYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT57dGhpcy51cGRhdGUoKX0pOyBcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICBcdC8vIGNvbnNvbGUubG9nKHRoaXMuZ3VuKTtcclxuXHRcdHRoaXMuZ3VuLmdyaWQuaGFuZGxlV2luZG93U2l6ZUNoYW5nZSh0aGlzLnBhdHRlcm5zLmd1bik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcyl7XHJcbiAgICAvLyBcdGxldCBzY3JlZW5TY2FsZSA9IDEwO1xyXG4gICAgLy8gXHRpZih0aGlzLm9yaWVudGF0aW9uVmVyaWNhbCl7XHJcbiAgICAvLyBcdFx0aWYobmV4dFByb3BzLnNjcmVlbi53aWR0aD5uZXh0UHJvcHMuc2NyZWVuLmhlaWdodCl7XHJcblx0XHRcdFx0Ly8gaWYobmV4dFByb3BzLnNjcmVlbi53aWR0aCA8IDkwMCl7XHJcblx0XHRcdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhcImFzXCIpO1xyXG5cdFx0XHRcdC8vIFx0c2NyZWVuU2NhbGUgPSAzO1xyXG5cdFx0XHRcdC8vIH1cclxuXHJcblx0XHRcdFx0Ly8gXHQvLyAoKHdpZHRoICsgMSkgKiBzcXVhcmVTaXplKSAqIHJhdGlvO1xyXG5cdFx0XHRcdC8vIHRoaXMuYmxvY2tXaWR0aCA9IGdldFdpZHRoKHRoaXMucHJvcHMuc2NyZWVuLCB0aGlzLmJsb2NrLmdyaWQud2lkdGgsIHRoaXMuYmxvY2suZ3JpZC5zcXVhcmVTaXplLCBzY3JlZW5TY2FsZSk7XHJcblx0XHRcdFx0Ly8gIC8vIHByb3BzLnNjcmVlbi53aWR0aC9zY3JlZW5TY2FsZSAqIGdldFBhdHRlcm5zV2lkdGhSZWxhdGlvbihibG9ja0dyaWQud2lkdGgpICogLjY7XHJcblx0XHRcdFx0Ly8gLy8gdGhpcy5ibG9ja1dpZHRoID0gcHJvcHMuc2NyZWVuLndpZHRoLzUgKiBnZXRQYXR0ZXJuc1dpZHRoUmVsYXRpb24oYmxvY2tHcmlkLndpZHRoKSAqIC42O1xyXG5cdFx0XHRcdC8vIHRoaXMuYm9hdFdpZHRoID0gZ2V0V2lkdGgodGhpcy5wcm9wcy5zY3JlZW4sIHRoaXMuYm9hdC5ncmlkLndpZHRoLCB0aGlzLmJvYXQuZ3JpZC5zcXVhcmVTaXplLCBzY3JlZW5TY2FsZSk7XHJcblx0XHRcdFx0Ly8gdGhpcy5sb2FmV2lkdGggPSBnZXRXaWR0aCh0aGlzLnByb3BzLnNjcmVlbiwgdGhpcy5sb2FmLmdyaWQud2lkdGgsIHRoaXMubG9hZi5ncmlkLnNxdWFyZVNpemUsIHNjcmVlblNjYWxlKTtcclxuXHRcdFx0XHQvLyB0aGlzLmJlZWhpdmVXaWR0aCA9IGdldFdpZHRoKHRoaXMucHJvcHMuc2NyZWVuLCB0aGlzLmJlZWhpdmUuZ3JpZC53aWR0aCwgdGhpcy5iZWVoaXZlLmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0XHRcdC8vIHRoaXMuYmxpbmtlcldpZHRoID0gZ2V0V2lkdGgodGhpcy5wcm9wcy5zY3JlZW4sIHRoaXMuYmxpbmtlci5ncmlkLndpZHRoLCB0aGlzLmJsaW5rZXIuZ3JpZC5zcXVhcmVTaXplLCBzY3JlZW5TY2FsZSk7XHJcblx0XHRcdFx0Ly8gdGhpcy5iZWFjb25XaWR0aCA9IGdldFdpZHRoKHRoaXMucHJvcHMuc2NyZWVuLCB0aGlzLmJlYWNvbi5ncmlkLndpZHRoLCB0aGlzLmJlYWNvbi5ncmlkLnNxdWFyZVNpemUsIHNjcmVlblNjYWxlKTtcclxuXHRcdFx0XHQvLyB0aGlzLnRvYWRXaWR0aCA9IGdldFdpZHRoKHRoaXMucHJvcHMuc2NyZWVuLCB0aGlzLnRvYWQuZ3JpZC53aWR0aCwgdGhpcy50b2FkLmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0XHRcdC8vIHRoaXMuZ2xpZGVyV2lkdGggPSBnZXRXaWR0aCh0aGlzLnByb3BzLnNjcmVlbiwgdGhpcy5nbGlkZXIuZ3JpZC53aWR0aCwgdGhpcy5nbGlkZXIuZ3JpZC5zcXVhcmVTaXplLCBzY3JlZW5TY2FsZSk7XHJcblx0XHRcdFx0Ly8gdGhpcy5zcGFjZXNoaXBXaWR0aCA9IGdldFdpZHRoKHRoaXMucHJvcHMuc2NyZWVuLCB0aGlzLnNwYWNlc2hpcC5ncmlkLndpZHRoLCB0aGlzLnNwYWNlc2hpcC5ncmlkLnNxdWFyZVNpemUsIHNjcmVlblNjYWxlKTtcclxuXHRcdFx0XHQvLyB0aGlzLmd1bldpZHRoID0gZ2V0V2lkdGgodGhpcy5wcm9wcy5zY3JlZW4sIHRoaXMuZ3VuLmdyaWQud2lkdGgsIHRoaXMuZ3VuLmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0XHRcdC8vIC8vIHRoaXMuc2V0U3RhdGUoe3JlbG9hZDogIXRoaXMuc3RhdGUucmVsb2FkfSk7XHJcblx0XHRcdFx0Ly8gcmV0dXJuIHRydWU7XHJcbiAgICAvLyBcdFx0fVxyXG4gICAgLy8gXHR9ZWxzZSB7XHJcbiAgICAvLyBcdFx0aWYobmV4dFByb3BzLnNjcmVlbi53aWR0aDxuZXh0UHJvcHMuc2NyZWVuLmhlaWdodCl7XHJcblx0XHRcdFx0Ly8gaWYobmV4dFByb3BzLnNjcmVlbi53aWR0aCA8IDkwMCl7XHJcblx0XHRcdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhcImFzXCIpO1xyXG5cdFx0XHRcdC8vIFx0c2NyZWVuU2NhbGUgPSAzO1xyXG5cdFx0XHRcdC8vIH1cclxuXHJcblx0XHRcdFx0Ly8gXHQvLyAoKHdpZHRoICsgMSkgKiBzcXVhcmVTaXplKSAqIHJhdGlvO1xyXG5cdFx0XHRcdC8vIHRoaXMuYmxvY2tXaWR0aCA9IGdldFdpZHRoKHRoaXMucHJvcHMuc2NyZWVuLCB0aGlzLmJsb2NrLmdyaWQud2lkdGgsIHRoaXMuYmxvY2suZ3JpZC5zcXVhcmVTaXplLCBzY3JlZW5TY2FsZSk7XHJcblx0XHRcdFx0Ly8gIC8vIHByb3BzLnNjcmVlbi53aWR0aC9zY3JlZW5TY2FsZSAqIGdldFBhdHRlcm5zV2lkdGhSZWxhdGlvbihibG9ja0dyaWQud2lkdGgpICogLjY7XHJcblx0XHRcdFx0Ly8gLy8gdGhpcy5ibG9ja1dpZHRoID0gcHJvcHMuc2NyZWVuLndpZHRoLzUgKiBnZXRQYXR0ZXJuc1dpZHRoUmVsYXRpb24oYmxvY2tHcmlkLndpZHRoKSAqIC42O1xyXG5cdFx0XHRcdC8vIHRoaXMuYm9hdFdpZHRoID0gZ2V0V2lkdGgodGhpcy5wcm9wcy5zY3JlZW4sIHRoaXMuYm9hdC5ncmlkLndpZHRoLCB0aGlzLmJvYXQuZ3JpZC5zcXVhcmVTaXplLCBzY3JlZW5TY2FsZSk7XHJcblx0XHRcdFx0Ly8gdGhpcy5sb2FmV2lkdGggPSBnZXRXaWR0aCh0aGlzLnByb3BzLnNjcmVlbiwgdGhpcy5sb2FmLmdyaWQud2lkdGgsIHRoaXMubG9hZi5ncmlkLnNxdWFyZVNpemUsIHNjcmVlblNjYWxlKTtcclxuXHRcdFx0XHQvLyB0aGlzLmJlZWhpdmVXaWR0aCA9IGdldFdpZHRoKHRoaXMucHJvcHMuc2NyZWVuLCB0aGlzLmJlZWhpdmUuZ3JpZC53aWR0aCwgdGhpcy5iZWVoaXZlLmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0XHRcdC8vIHRoaXMuYmxpbmtlcldpZHRoID0gZ2V0V2lkdGgodGhpcy5wcm9wcy5zY3JlZW4sIHRoaXMuYmxpbmtlci5ncmlkLndpZHRoLCB0aGlzLmJsaW5rZXIuZ3JpZC5zcXVhcmVTaXplLCBzY3JlZW5TY2FsZSk7XHJcblx0XHRcdFx0Ly8gdGhpcy5iZWFjb25XaWR0aCA9IGdldFdpZHRoKHRoaXMucHJvcHMuc2NyZWVuLCB0aGlzLmJlYWNvbi5ncmlkLndpZHRoLCB0aGlzLmJlYWNvbi5ncmlkLnNxdWFyZVNpemUsIHNjcmVlblNjYWxlKTtcclxuXHRcdFx0XHQvLyB0aGlzLnRvYWRXaWR0aCA9IGdldFdpZHRoKHRoaXMucHJvcHMuc2NyZWVuLCB0aGlzLnRvYWQuZ3JpZC53aWR0aCwgdGhpcy50b2FkLmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0XHRcdC8vIHRoaXMuZ2xpZGVyV2lkdGggPSBnZXRXaWR0aCh0aGlzLnByb3BzLnNjcmVlbiwgdGhpcy5nbGlkZXIuZ3JpZC53aWR0aCwgdGhpcy5nbGlkZXIuZ3JpZC5zcXVhcmVTaXplLCBzY3JlZW5TY2FsZSk7XHJcblx0XHRcdFx0Ly8gdGhpcy5zcGFjZXNoaXBXaWR0aCA9IGdldFdpZHRoKHRoaXMucHJvcHMuc2NyZWVuLCB0aGlzLnNwYWNlc2hpcC5ncmlkLndpZHRoLCB0aGlzLnNwYWNlc2hpcC5ncmlkLnNxdWFyZVNpemUsIHNjcmVlblNjYWxlKTtcclxuXHRcdFx0XHQvLyB0aGlzLmd1bldpZHRoID0gZ2V0V2lkdGgodGhpcy5wcm9wcy5zY3JlZW4sIHRoaXMuZ3VuLmdyaWQud2lkdGgsIHRoaXMuZ3VuLmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0XHRcdC8vIC8vIHRoaXMuc2V0U3RhdGUoe3JlbG9hZDogIXRoaXMuc3RhdGUucmVsb2FkfSk7XHJcblx0XHRcdFx0Ly8gcmV0dXJuIHRydWU7XHJcbiAgICAvLyBcdFx0fSAgICBcdFx0XHJcbiAgICAvLyBcdH1cclxuICAgIC8vIFx0cmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfSAgICAgIG5cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCl7XHJcbiAgLy8gICBcdGxldCBzY3JlZW5TY2FsZSA9IDEwO1xyXG4gICAgXHRcclxuXHRcdC8vIGlmKHRoaXMucHJvcHMuc2NyZWVuLndpZHRoIDwgNzAwKXtcclxuXHRcdC8vIFx0Ly8gY29uc29sZS5sb2coXCJhc1wiKTtcclxuXHRcdC8vIFx0c2NyZWVuU2NhbGUgPSAzO1xyXG5cdFx0XHJcblxyXG5cdFx0Ly8gXHQvLyAoKHdpZHRoICsgMSkgKiBzcXVhcmVTaXplKSAqIHJhdGlvO1xyXG5cdFx0Ly8gXHR0aGlzLmJsb2NrV2lkdGggPSBnZXRXaWR0aCh0aGlzLnByb3BzLnNjcmVlbiwgdGhpcy5ibG9jay5ncmlkLndpZHRoLCB0aGlzLmJsb2NrLmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0Ly8gXHQgLy8gcHJvcHMuc2NyZWVuLndpZHRoL3NjcmVlblNjYWxlICogZ2V0UGF0dGVybnNXaWR0aFJlbGF0aW9uKGJsb2NrR3JpZC53aWR0aCkgKiAuNjtcclxuXHRcdC8vIFx0Ly8gdGhpcy5ibG9ja1dpZHRoID0gcHJvcHMuc2NyZWVuLndpZHRoLzUgKiBnZXRQYXR0ZXJuc1dpZHRoUmVsYXRpb24oYmxvY2tHcmlkLndpZHRoKSAqIC42O1xyXG5cdFx0Ly8gXHR0aGlzLmJvYXRXaWR0aCA9IGdldFdpZHRoKHRoaXMucHJvcHMuc2NyZWVuLCB0aGlzLmJvYXQuZ3JpZC53aWR0aCwgdGhpcy5ib2F0LmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0Ly8gXHR0aGlzLmxvYWZXaWR0aCA9IGdldFdpZHRoKHRoaXMucHJvcHMuc2NyZWVuLCB0aGlzLmxvYWYuZ3JpZC53aWR0aCwgdGhpcy5sb2FmLmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0Ly8gXHR0aGlzLmJlZWhpdmVXaWR0aCA9IGdldFdpZHRoKHRoaXMucHJvcHMuc2NyZWVuLCB0aGlzLmJlZWhpdmUuZ3JpZC53aWR0aCwgdGhpcy5iZWVoaXZlLmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0Ly8gXHR0aGlzLmJsaW5rZXJXaWR0aCA9IGdldFdpZHRoKHRoaXMucHJvcHMuc2NyZWVuLCB0aGlzLmJsaW5rZXIuZ3JpZC53aWR0aCwgdGhpcy5ibGlua2VyLmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0Ly8gXHR0aGlzLmJlYWNvbldpZHRoID0gZ2V0V2lkdGgodGhpcy5wcm9wcy5zY3JlZW4sIHRoaXMuYmVhY29uLmdyaWQud2lkdGgsIHRoaXMuYmVhY29uLmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0Ly8gXHR0aGlzLnRvYWRXaWR0aCA9IGdldFdpZHRoKHRoaXMucHJvcHMuc2NyZWVuLCB0aGlzLnRvYWQuZ3JpZC53aWR0aCwgdGhpcy50b2FkLmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0Ly8gXHR0aGlzLmdsaWRlcldpZHRoID0gZ2V0V2lkdGgodGhpcy5wcm9wcy5zY3JlZW4sIHRoaXMuZ2xpZGVyLmdyaWQud2lkdGgsIHRoaXMuZ2xpZGVyLmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0Ly8gXHR0aGlzLnNwYWNlc2hpcFdpZHRoID0gZ2V0V2lkdGgodGhpcy5wcm9wcy5zY3JlZW4sIHRoaXMuc3BhY2VzaGlwLmdyaWQud2lkdGgsIHRoaXMuc3BhY2VzaGlwLmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0Ly8gXHR0aGlzLmd1bldpZHRoID0gZ2V0V2lkdGgodGhpcy5wcm9wcy5zY3JlZW4sIHRoaXMuZ3VuLmdyaWQud2lkdGgsIHRoaXMuZ3VuLmdyaWQuc3F1YXJlU2l6ZSwgc2NyZWVuU2NhbGUpO1xyXG5cdFx0Ly8gXHR0aGlzLnNldFN0YXRlKHtyZWxvYWQ6ICF0aGlzLnN0YXRlLnJlbG9hZH0pO1xyXG5cdFx0Ly8gfVxyXG5cdFx0dGhpcy5ndW5XaWR0aCA9IHRoaXMuZ3VuV2lkdGggPiB0aGlzLnN0YXRlLnNjcmVlbi53aWR0aCAqIC42ID8gdGhpcy5zdGF0ZS5zY3JlZW4ud2lkdGggKiAuNiA6IHRoaXMuZ3VuV2lkdGhcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93U2l6ZUNoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIFx0Ly8gY29uc29sZS5sb2codGhpcy5wYXR0ZXJucy5ibG9jaylcclxuICBcdC8vIGNvbnNvbGUubG9nKHRoaXMucGF0dGVybnMuYm9hdClcclxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1NpemVDaGFuZ2UpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtzY3JlZW46IHtcclxuICAgIC8vICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgIC8vICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgLy8gICAgICAgICAgICAgcmF0aW86IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsXHJcbiAgICAvLyAgICAgICAgICAgICBzY3JlZW5TY2FsZTogd2luZG93LmlubmVyV2lkdGggPCA5MDAgPyAzIDogMTAsXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KVxyXG5cclxuICAgICAgICBcdHRoaXMuYmxvY2suZ3JpZC5tYWtlQm9hcmQodGhpcy5ibG9jay5ncmlkLndpZHRoLHRoaXMuYmxvY2suZ3JpZC5oZWlnaHQsdGhpcy5ibG9jay5ncmlkLnNxdWFyZVNpemUsdGhpcy5zdGF0ZS5zY3JlZW4ucmF0aW8sdGhpcy5wYXR0ZXJucy5ibG9jayx0aGlzLmJsb2NrLmNlbGxzTGlzdCx0aGlzLnN0YXRlLnNjcmVlbik7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2suZ3JpZC51cGRhdGUoKTtcclxuICAgICAgICBcdHRoaXMuYm9hdC5ncmlkLm1ha2VCb2FyZCh0aGlzLmJvYXQuZ3JpZC53aWR0aCx0aGlzLmJvYXQuZ3JpZC5oZWlnaHQsdGhpcy5ib2F0LmdyaWQuc3F1YXJlU2l6ZSx0aGlzLnN0YXRlLnNjcmVlbi5yYXRpbyx0aGlzLnBhdHRlcm5zLmJvYXQsdGhpcy5ib2F0LmNlbGxzTGlzdCx0aGlzLnN0YXRlLnNjcmVlbik7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hdC5ncmlkLnVwZGF0ZSgpO1xyXG4gICAgICAgIFx0dGhpcy5sb2FmLmdyaWQubWFrZUJvYXJkKHRoaXMubG9hZi5ncmlkLndpZHRoLHRoaXMubG9hZi5ncmlkLmhlaWdodCx0aGlzLmxvYWYuZ3JpZC5zcXVhcmVTaXplLHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvLHRoaXMucGF0dGVybnMubG9hZix0aGlzLmxvYWYuY2VsbHNMaXN0LHRoaXMuc3RhdGUuc2NyZWVuKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FmLmdyaWQudXBkYXRlKCk7XHJcbiAgICAgICAgXHR0aGlzLmJlZWhpdmUuZ3JpZC5tYWtlQm9hcmQodGhpcy5iZWVoaXZlLmdyaWQud2lkdGgsdGhpcy5iZWVoaXZlLmdyaWQuaGVpZ2h0LHRoaXMuYmVlaGl2ZS5ncmlkLnNxdWFyZVNpemUsdGhpcy5zdGF0ZS5zY3JlZW4ucmF0aW8sdGhpcy5wYXR0ZXJucy5iZWVoaXZlLHRoaXMuYmVlaGl2ZS5jZWxsc0xpc3QsdGhpcy5zdGF0ZS5zY3JlZW4pO1xyXG4gICAgICAgICAgICB0aGlzLmJlZWhpdmUuZ3JpZC51cGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5ibGlua2VyLmdyaWQubWFrZUJvYXJkKHRoaXMuYmxpbmtlci5ncmlkLndpZHRoLHRoaXMuYmxpbmtlci5ncmlkLmhlaWdodCx0aGlzLmJsaW5rZXIuZ3JpZC5zcXVhcmVTaXplLHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvLHRoaXMucGF0dGVybnMuYmxpbmtlcix0aGlzLmJsaW5rZXIuY2VsbHNMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5ibGlua2VyLmdyaWQudXBkYXRlKCk7XHJcbiAgICAgICAgXHR0aGlzLmJlYWNvbi5ncmlkLm1ha2VCb2FyZCh0aGlzLmJlYWNvbi5ncmlkLndpZHRoLHRoaXMuYmVhY29uLmdyaWQuaGVpZ2h0LHRoaXMuYmVhY29uLmdyaWQuc3F1YXJlU2l6ZSx0aGlzLnN0YXRlLnNjcmVlbi5yYXRpbyx0aGlzLnBhdHRlcm5zLmJlYWNvbix0aGlzLmJlYWNvbi5jZWxsc0xpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLmJlYWNvbi5ncmlkLnVwZGF0ZSgpO1xyXG4gICAgICAgIFx0dGhpcy50b2FkLmdyaWQubWFrZUJvYXJkKHRoaXMudG9hZC5ncmlkLndpZHRoLHRoaXMudG9hZC5ncmlkLmhlaWdodCx0aGlzLnRvYWQuZ3JpZC5zcXVhcmVTaXplLHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvLHRoaXMucGF0dGVybnMudG9hZCx0aGlzLnRvYWQuY2VsbHNMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy50b2FkLmdyaWQudXBkYXRlKCk7XHJcbiAgICAgICAgICBcdHRoaXMuZ2xpZGVyLmdyaWQubWFrZUJvYXJkKHRoaXMuZ2xpZGVyLmdyaWQud2lkdGgsdGhpcy5nbGlkZXIuZ3JpZC5oZWlnaHQsdGhpcy5nbGlkZXIuZ3JpZC5zcXVhcmVTaXplLHRoaXMuc3RhdGUuc2NyZWVuLnJhdGlvLHRoaXMucGF0dGVybnMuZ2xpZGVyLHRoaXMuZ2xpZGVyLmNlbGxzTGlzdCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2xpZGVyLmdyaWQudXBkYXRlKCk7ICBcclxuICAgICAgICAgIFx0dGhpcy5zcGFjZXNoaXAuZ3JpZC5tYWtlQm9hcmQodGhpcy5zcGFjZXNoaXAuZ3JpZC53aWR0aCx0aGlzLnNwYWNlc2hpcC5ncmlkLmhlaWdodCx0aGlzLnNwYWNlc2hpcC5ncmlkLnNxdWFyZVNpemUsdGhpcy5zdGF0ZS5zY3JlZW4ucmF0aW8sdGhpcy5wYXR0ZXJucy5zcGFjZXNoaXAsdGhpcy5zcGFjZXNoaXAuY2VsbHNMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5zcGFjZXNoaXAuZ3JpZC51cGRhdGUoKTsgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIFx0dGhpcy5ndW4uZ3JpZC5tYWtlQm9hcmQodGhpcy5ndW4uZ3JpZC53aWR0aCx0aGlzLmd1bi5ncmlkLmhlaWdodCx0aGlzLmd1bi5ncmlkLnNxdWFyZVNpemUsdGhpcy5zdGF0ZS5zY3JlZW4ucmF0aW8sdGhpcy5wYXR0ZXJucy5ndW4sdGhpcy5ndW4uY2VsbHNMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5ndW4uZ3JpZC51cGRhdGUoKTsgICAgICAgICAgICAgXHQgICAgICAgXHJcbiAgICAgICAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yQUYpOyAgICBcclxuICAgICAgICB0aGlzLnNldFN0b3BwZWQodHJ1ZSwgbnVsbClcclxuICAgICAgICAvLyB0aGlzLnByb3BzLnZhbHVlcy5zcGVlZCA9IHRoaXMuc3RhdGUuZnBzO1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMudmFsdWVzLnBhdHRlcm4gPSB0aGlzLnN0YXRlLnBhdHRlcm5OYW1lc0luZGV4O1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMudmFsdWVzLnBhdHRlcm5MaXN0ID0gdGhpcy5zdGF0ZS5wYXR0ZXJuc0xpc3Q7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy52YWx1ZXMuZ2VuZXJhdGlvbkNvdW50ID0gdGhpcy5zdGF0ZS5nZW5lcmF0aW9uQ291bnQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHsgICAgXHJcbiAgICBcdC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgXHRjb25zdCBjbGFzc2VzID0gdGhpcy5wcm9wcy5jbGFzc2VzO1xyXG4gICAgXHQvLyBjb25zb2xlLmxvZyh0aGlzLmdsaWRlcldpZHRoKTtcclxuICAgIFx0Ly8gY29uc29sZS5sb2codGhpcy5ibG9ja1dpZHRoKTtcclxuXHRyZXR1cm4oXHJcblx0ICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5Db250ZW50fT5cclxuICAgICAgICBcclxuXHQgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG5cdCAgIFxyXG5cdCAgICA8R3JpZCBpdGVtIHhzPXsxfSBzbT17Mn0gPiA8L0dyaWQ+XHJcblx0ICAgIFxyXG5cdCAgICA8R3JpZCBpdGVtIHhzPXsxMH0gIHNtPXs4fSA+XHJcblx0ICAgIFxyXG5cdCAgICBcdDxwIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5pbnRyb30gJHtjbGFzc2VzLnRleHR9YH0+XHJcblx0ICAgIFx0PHN0cm9uZz5UaGUgR2FtZSBvZiBMaWZlPC9zdHJvbmc+LCBhbHNvIGtub3duIHNpbXBseSBhcyBMaWZlLCBpcyBhIGNlbGx1bGFyIGF1dG9tYXRvbiBkZXZpc2VkIGJ5IHRoZSBcclxuXHQgICAgXHRCcml0aXNoIG1hdGhlbWF0aWNpYW4gSm9obiBIb3J0b24gQ29ud2F5IGluIDE5NzAuIFRoZSBcImdhbWVcIiBpcyBhIHplcm8tcGxheWVyIGdhbWUsIFxyXG5cdCAgICBcdG1lYW5pbmcgdGhhdCBpdHMgZXZvbHV0aW9uIGlzIGRldGVybWluZWQgYnkgaXRzIGluaXRpYWwgc3RhdGUsIFxyXG5cdCAgICBcdHJlcXVpcmluZyBubyBmdXJ0aGVyIGlucHV0LiBPbmUgaW50ZXJhY3RzIHdpdGggdGhlIEdhbWUgb2YgTGlmZSBieSBjcmVhdGluZyBhbiBpbml0aWFsIFxyXG5cdCAgICBcdGNvbmZpZ3VyYXRpb24gYW5kIG9ic2VydmluZyBob3cgaXQgZXZvbHZlcywgb3IsIGZvciBhZHZhbmNlZCBcInBsYXllcnNcIiwgYnkgY3JlYXRpbmcgXHJcblx0ICAgIFx0cGF0dGVybnMgd2l0aCBwYXJ0aWN1bGFyIHByb3BlcnRpZXMuXHJcblx0ICAgIFx0PC9wPlxyXG5cdCAgICBcdFxyXG5cdCAgICBcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnZpZGVvfT5cclxuXHQgICAgXHQ8WW91VHViZVxyXG5cdFx0XHQgIHZpZGVvSWQ9XCJDZ09jRVppblEySVwiICAgICAgICAgICAgICAgICAgXHJcblx0XHRcdCAgb3B0cz17e3dpZHRoOicxMDAlJywgcGxheWVyVmFyczoge3Nob3dpbmZvOjAsIHJlbDowfX19XHRcclxuXHRcclxuXHJcblx0XHRcdC8+XHJcblx0XHRcdEZyYWdtZW50IGZyb20gU3RlcGhlbiBIYXdraW5nYHMgVGhlIE1lYW5pbmcgb2YgTGlmZVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0ICAgIFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucnVsZXNQYXJ9PlxyXG5cdCAgICBcdDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG5cdCAgICBcdFJ1bGVzXHJcblx0ICAgIFx0PC9oMj5cclxuXHQgICAgXHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcblx0ICAgIFx0VGhlIHVuaXZlcnNlIG9mIHRoZSBHYW1lIG9mIExpZmUgaXMgYW4gaW5maW5pdGUgdHdvLWRpbWVuc2lvbmFsIG9ydGhvZ29uYWwgZ3JpZCBcclxuXHQgICAgXHRvZiBzcXVhcmUgY2VsbHMsIGVhY2ggb2Ygd2hpY2ggaXMgaW4gb25lIG9mIHR3byBwb3NzaWJsZSBzdGF0ZXMsIGFsaXZlIG9yIGRlYWQsIG9yIFxyXG5cdCAgICBcdFwicG9wdWxhdGVkXCIgb3IgXCJ1bnBvcHVsYXRlZFwiLiBFdmVyeSBjZWxsIGludGVyYWN0cyB3aXRoIGl0cyBlaWdodCBuZWlnaGJvdXJzLCBcclxuXHQgICAgXHR3aGljaCBhcmUgdGhlIGNlbGxzIHRoYXQgYXJlIGhvcml6b250YWxseSwgdmVydGljYWxseSwgb3IgZGlhZ29uYWxseSBhZGphY2VudC4gXHJcblx0ICAgIFx0QXQgZWFjaCBzdGVwIGluIHRpbWUsIHRoZSBmb2xsb3dpbmcgdHJhbnNpdGlvbnMgb2NjdXI6XHJcblx0ICAgIFx0PC9wPlxyXG5cdCAgICBcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJ1bGVzfT5cclxuXHQgICAgXHQ8dWw+XHJcblx0XHRcdFx0PGxpPkFueSBsaXZlIGNlbGwgd2l0aCBmZXdlciB0aGFuIHR3byBsaXZlIG5laWdoYm91cnMgZGllcywgYXMgaWYgY2F1c2VkIGJ5IHVuZGVycG9wdWxhdGlvbi48L2xpPlxyXG5cdFx0XHRcdDxsaT5BbnkgbGl2ZSBjZWxsIHdpdGggdHdvIG9yIHRocmVlIGxpdmUgbmVpZ2hib3VycyBsaXZlcyBvbiB0byB0aGUgbmV4dCBnZW5lcmF0aW9uLjwvbGk+XHJcblx0XHRcdFx0PGxpPkFueSBsaXZlIGNlbGwgd2l0aCBtb3JlIHRoYW4gdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGRpZXMsIGFzIGlmIGJ5IG92ZXJwb3B1bGF0aW9uLjwvbGk+XHJcblx0XHRcdFx0PGxpPkFueSBkZWFkIGNlbGwgd2l0aCBleGFjdGx5IHRocmVlIGxpdmUgbmVpZ2hib3VycyBiZWNvbWVzIGEgbGl2ZSBjZWxsLCBhcyBpZiBieSByZXByb2R1Y3Rpb24uPC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuXHRcdFx0VGhlIGluaXRpYWwgcGF0dGVybiBjb25zdGl0dXRlcyB0aGUgc2VlZCBvZiB0aGUgc3lzdGVtLiBcclxuXHRcdFx0VGhlIGZpcnN0IGdlbmVyYXRpb24gaXMgY3JlYXRlZCBieSBhcHBseWluZyB0aGUgYWJvdmUgcnVsZXMgXHJcblx0XHRcdHNpbXVsdGFuZW91c2x5IHRvIGV2ZXJ5IGNlbGwgaW4gdGhlIHNlZWQgLSBiaXJ0aHMgYW5kIGRlYXRocyBvY2N1ciBzaW11bHRhbmVvdXNseSwgXHJcblx0XHRcdGFuZCB0aGUgZGlzY3JldGUgbW9tZW50IGF0IHdoaWNoIHRoaXMgaGFwcGVucyBpcyBzb21ldGltZXMgY2FsbGVkIGEgdGljayBcclxuXHRcdFx0KGluIG90aGVyIHdvcmRzLCBlYWNoIGdlbmVyYXRpb24gaXMgYSBwdXJlIGZ1bmN0aW9uIG9mIHRoZSBwcmVjZWRpbmcgb25lKS4gXHJcblx0XHRcdFRoZSBydWxlcyBjb250aW51ZSB0byBiZSBhcHBsaWVkIHJlcGVhdGVkbHkgdG8gY3JlYXRlIGZ1cnRoZXIgZ2VuZXJhdGlvbnMuXHJcblx0ICAgIFx0PC9wPlxyXG5cdCAgICBcdDwvZGl2PlxyXG5cdCAgICBcdDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG5cdCAgICBcdFBhdHRlcm5zXHJcblx0ICAgIFx0PC9oMj5cclxuXHQgICAgXHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuXHQgICAgXHRTdGlsbCBMaWZlXHJcblx0ICAgIFx0PC9oND5cclxuXHQgICAgXHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcblx0ICAgIFx0VGhlc2UgYXJlIHN0YWJsZSBwYXR0ZXJucyB0aGF0IGRvIG5vdCBjaGFuZ2UgYW5kIGNhbiBiZSB1c2VkIHRvIGJ1aWxkIGNyaXRpY2FsIHNvbGlkIHBhcnRzIG9mIGNvbXBsZXggcGF0dGVybnMuXHJcblx0ICAgIFx0PC9wPlxyXG5cdCAgICBcdFxyXG5cdCAgICBcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs4fSA+XHJcblx0ICAgXHJcblx0XHRcdCAgICBcclxuXHRcdFx0ICAgIFxyXG5cdFx0XHQgICAgPEdyaWQgaXRlbT5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkfSBzdHlsZT17e3dpZHRoOnRoaXMuYmxvY2tXaWR0aCwgaGVpZ2h0OiBcIjEwMCVcIn19ID5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG5cdFx0XHQgICAgPGNhbnZhc1xyXG5cdCAgICAgICAgICAgICAgICByZWY9eyhjYW52YXMpID0+IHsgdGhpcy5wYXR0ZXJucy5ibG9jayA9IGNhbnZhc319XHJcblx0ICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGUpfVxyXG5cdCAgICAgICAgICAgIC8+XHJcblx0ICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICBCbG9ja1xyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPC9HcmlkPlxyXG5cdFx0XHQgICAgXHJcblx0XHRcdCAgICBcclxuXHRcdFx0ICAgIDxHcmlkIGl0ZW0gPlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9hcmR9ICBzdHlsZT17e3dpZHRoOnRoaXMuYm9hdFdpZHRoLCBoZWlnaHQ6IFwiMTAwJVwifX0gPlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcblx0XHRcdCAgICA8Y2FudmFzXHJcblx0ICAgICAgICAgICAgICAgIHJlZj17KGNhbnZhcykgPT4geyB0aGlzLnBhdHRlcm5zLmJvYXQgPSBjYW52YXN9fVxyXG5cdCAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVDbGljayhlKX1cclxuXHQgICAgICAgICAgICAvPlxyXG5cdCAgICAgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICAgICAgQm9hdFxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPC9HcmlkPlxyXG5cdFx0XHQgICBcclxuXHRcdFx0ICAgIFxyXG5cdFx0XHQgICAgPEdyaWQgaXRlbT5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkfSAgc3R5bGU9e3t3aWR0aDp0aGlzLmxvYWZXaWR0aCwgaGVpZ2h0OiBcIjEwMCVcIn19ID5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG5cdFx0XHQgICAgPGNhbnZhc1xyXG5cdCAgICAgICAgICAgICAgICByZWY9eyhjYW52YXMpID0+IHsgdGhpcy5wYXR0ZXJucy5sb2FmID0gY2FudmFzfX1cclxuXHQgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9XHJcblx0ICAgICAgICAgICAgLz5cclxuXHQgICAgICAgICAgICA8ZGl2PlxyXG5cdCAgICAgICAgICAgIExvYWZcclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDwvR3JpZD5cclxuXHRcdFx0ICAgIFxyXG5cdFx0XHQgICAgXHJcblx0XHRcdCAgICA8R3JpZCBpdGVtPlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9hcmR9ICBzdHlsZT17e3dpZHRoOnRoaXMuYmVlaGl2ZVdpZHRoLCBoZWlnaHQ6IFwiMTAwJVwifX0gPlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcblx0XHRcdCAgICA8Y2FudmFzXHJcblx0ICAgICAgICAgICAgICAgIHJlZj17KGNhbnZhcykgPT4geyB0aGlzLnBhdHRlcm5zLmJlZWhpdmUgPSBjYW52YXN9fVxyXG5cdCAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVDbGljayhlKX1cclxuXHQgICAgICAgICAgICAvPlxyXG5cdCAgICAgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICAgICAgQmVlaGl2ZVxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDwvR3JpZD5cclxuXHRcdFx0ICAgXHJcblx0XHQgICAgPC9HcmlkPlxyXG5cdFx0ICAgIFxyXG5cdFx0XHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuXHRcdCAgICBPc2NpbGxhdG9ycyBcclxuXHRcdCAgICA8L2g0PlxyXG5cdFx0ICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuXHQgICAgXHRUaGVzZSBwYXR0ZXJucyBhcmUgbW9yZSBjb21wbGV4IGFuZCBjaGFuZ2Ugb3ZlciBhIHNwZWNpZmljIG51bWJlciBvZiB0aWNrcy4gXHJcblx0ICAgIFx0VGhleSByZXBlYXQgdGhlaXIgcGF0dGVybiBpbmZpbml0ZWx5LiBUaGUgYmFzaWMgb3NjaWxsYXRvcnMgaGF2ZSBwZXJpb2RzIG9mIHR3byBvciB0aHJlZSB0aWNrcywgXHJcblx0ICAgIFx0YnV0IGNvbXBsZXggb3NjaWxsYXRvcnMgaGF2ZSBiZWVuIGRpc2NvdmVyZWQgd2l0aCBwZXJpb2RzIG9mIHR3ZW50eSBvciBtb3JlIHRpY2tzLiBcclxuXHQgICAgXHRUaGVzZSBvc2NpbGxhdG9ycyBhcmUgdmVyeSB1c2VmdWwgZm9yIHNldHRpbmcgb2ZmIG90aGVyIHJlYWN0aW9ucyBvZiBidW1waW5nIHN0YWJsZSBwYXR0ZXJucyB0byBzZXQgb2ZmIGEgY2hhaW4gcmVhY3Rpb24gb2YgaW5zdGFiaWxpdHkuIFxyXG5cdCAgICBcdFRoZSBtb3N0IGNvbW1vbiBwZXJpb2QtMiBvc2NpbGxhdG9ycyBpbmNsdWRlOlxyXG5cdCAgICBcdDwvcD5cclxuXHQgICAgXHQ8ZGl2ICBjbGFzc05hbWU9e2NsYXNzZXMuYm9hcmRzU2VjdGlvbn0gPlxyXG5cdCAgICBcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs4fT5cclxuXHQgICBcclxuXHRcdFx0ICAgIFxyXG5cdFx0XHQgICAgPEdyaWQgaXRlbSA+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2FyZH0gIHN0eWxlPXt7d2lkdGg6dGhpcy5ibGlua2VyV2lkdGgsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG5cdFx0XHQgICAgPGNhbnZhc1xyXG5cdCAgICAgICAgICAgICAgICByZWY9eyhjYW52YXMpID0+IHsgdGhpcy5wYXR0ZXJucy5ibGlua2VyID0gY2FudmFzfX1cclxuXHQgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9XHJcblx0ICAgICAgICAgICAgLz5cclxuXHRcdFx0ICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc2VzLmJ1dHRvbn0gYXJpYS1sYWJlbD1cIlBsYXlcIiAgb25DbGljayA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5ibGlua2VyKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uPXt0aGlzLnByb3BzLnN0b3BwZWRbdGhpcy5ibGlua2VyLmdyaWQubmFtZV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JY29uPXs8UGxheUFycm93IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc2VzLmljb259IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZkljb249ezxQYXVzZSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3Nlcy5pY29ufSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9IHt0aGlzLmJ1dHRvbkNvbG9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICBCbGlua2VyXHJcblx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8L0dyaWQ+XHJcblx0XHRcdCAgICBcclxuXHRcdFx0ICAgIFxyXG5cdFx0XHQgICAgPEdyaWQgaXRlbT4gXHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2FyZH0gc3R5bGU9e3t3aWR0aDp0aGlzLmJlYWNvbldpZHRoLCBoZWlnaHQ6IFwiMTAwJVwifX0+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuXHRcdFx0ICAgIDxjYW52YXNcclxuXHQgICAgICAgICAgICAgICAgcmVmPXsoY2FudmFzKSA9PiB7IHRoaXMucGF0dGVybnMuYmVhY29uID0gY2FudmFzfX1cclxuXHQgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9XHJcblx0ICAgICAgICAgICAgLz5cclxuXHRcdFx0ICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc2VzLmJ1dHRvbn0gYXJpYS1sYWJlbD1cIlBsYXlcIiAgb25DbGljayA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5iZWFjb24pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb249e3RoaXMucHJvcHMuc3RvcHBlZFt0aGlzLmJlYWNvbi5ncmlkLm5hbWVdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSWNvbj17PFBsYXlBcnJvdyBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3Nlcy5pY29ufSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZJY29uPXs8UGF1c2UgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzZXMuaWNvbn0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSB7dGhpcy5idXR0b25Db2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICBCZWFjb25cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDwvR3JpZD5cclxuXHRcdFx0ICAgIFxyXG5cdFx0XHQgICAgPEdyaWQgaXRlbT4gXHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2FyZH0gc3R5bGU9e3t3aWR0aDp0aGlzLnRvYWRXaWR0aCwgaGVpZ2h0OiBcIjEwMCVcIn19PlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcblx0XHRcdCAgICA8Y2FudmFzXHJcblx0ICAgICAgICAgICAgICAgIHJlZj17KGNhbnZhcykgPT4geyB0aGlzLnBhdHRlcm5zLnRvYWQgPSBjYW52YXN9fVxyXG5cdCAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVDbGljayhlKX1cclxuXHQgICAgICAgICAgICAvPlxyXG5cdFx0XHQgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzZXMuYnV0dG9ufSBhcmlhLWxhYmVsPVwiUGxheVwiICBvbkNsaWNrID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLnRvYWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb249e3RoaXMucHJvcHMuc3RvcHBlZFt0aGlzLnRvYWQuZ3JpZC5uYW1lXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkljb249ezxQbGF5QXJyb3cgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzZXMuaWNvbn0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2ZmSWNvbj17PFBhdXNlIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc2VzLmljb259IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0ge3RoaXMuYnV0dG9uQ29sb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cdCAgICAgICAgICAgIFRvYWRcclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDwvR3JpZD5cclxuXHRcdFx0ICAgIFxyXG5cdFx0ICAgIDwvR3JpZD5cclxuXHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0PGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcblx0XHQgICAgR2xpZGVycyBhbmQgU3BhY2VzaGlwc1xyXG5cdFx0ICAgIDwvaDQ+XHJcblx0XHQgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG5cdCAgICBcdEEgc3BhY2VzaGlwIGlzIGEgcGF0dGVybiB0aGF0IG1vdmVzLCByZXR1cm5pbmcgdG8gdGhlIHNhbWUgY29uZmlndXJhdGlvbiBidXQgc2hpZnRlZCBhZnRlciBhIGZpbml0ZSBudW1iZXIgb2YgZ2VuZXJhdGlvbnMuIFxyXG5cdCAgICBcdFRoZSBnbGlkZXIgaXMgYW4gZXhhbXBsZSBvZiBhIHNpbXBsZSBzcGFjZXNoaXAgYW5kIGl0cyBnZW5lcmF0aW9ucyBlYWNoIGNvbnNpc3Qgb2YgZml2ZSBsaXZlIGNlbGxzLiBcclxuXHQgICAgXHRUaGUgZ2xpZGVyIGhhcyBhIHBlcmlvZCBvZiBmb3VyIGFuZCBtb3ZlcyBkaWFnb25hbGx5IG9uZSBjZWxsIGV2ZXJ5IGZvdXIgZ2VuZXJhdGlvbnMuXHJcblx0ICAgIFx0T3RoZXIgZXhhbXBsZXMgb2Ygc2ltcGxlIHNwYWNlc2hpcHMgaW5jbHVkZSBsaWdodHdlaWdodCwgbWVkaXVtIHdlaWdodCwgYW5kIGhlYXZ5d2VpZ2h0IHNwYWNlc2hpcHMuIFxyXG5cdCAgICBcdFRoZXkgZWFjaCBtb3ZlIGluIGEgc3RyYWlnaHQgbGluZS5cclxuXHQgICAgXHQ8L3A+XHJcblx0ICAgIFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuXHQgICAgXHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17OH0+XHJcblx0ICAgXHJcblx0XHRcdCAgICBcclxuXHRcdFx0ICAgIDxHcmlkIGl0ZW0gPiBcclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkfSBzdHlsZT17e3dpZHRoOnRoaXMuZ2xpZGVyV2lkdGgsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG5cdFx0XHQgICAgPGNhbnZhc1xyXG5cdCAgICAgICAgICAgICAgICByZWY9eyhjYW52YXMpID0+IHsgdGhpcy5wYXR0ZXJucy5nbGlkZXIgPSBjYW52YXN9fVxyXG5cdCAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVDbGljayhlKX1cclxuXHQgICAgICAgICAgICAvPlxyXG5cdCAgICAgICAgICAgIFxyXG5cdCAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc2VzLmJ1dHRvbn0gYXJpYS1sYWJlbD1cIlBsYXlcIiAgb25DbGljayA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5nbGlkZXIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb249e3RoaXMucHJvcHMuc3RvcHBlZFt0aGlzLmdsaWRlci5ncmlkLm5hbWVdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSWNvbj17PFBsYXlBcnJvdyBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3Nlcy5pY29ufSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZJY29uPXs8UGF1c2UgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzZXMuaWNvbn0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSB7dGhpcy5idXR0b25Db2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIEdsaWRlclxyXG5cdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8L0dyaWQ+XHJcblx0XHRcdCAgIFxyXG5cclxuXHRcdFx0ICAgIDxHcmlkIGl0ZW0gPiBcclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkfSBzdHlsZT17e3dpZHRoOnRoaXMuc3BhY2VzaGlwV2lkdGgsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG5cdFx0XHQgICAgPGNhbnZhc1xyXG5cdCAgICAgICAgICAgICAgICByZWY9eyhjYW52YXMpID0+IHsgdGhpcy5wYXR0ZXJucy5zcGFjZXNoaXAgPSBjYW52YXN9fVxyXG5cdCAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVDbGljayhlKX1cclxuXHQgICAgICAgICAgICAvPlxyXG5cdCAgICAgICAgICAgIFxyXG5cdCAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc2VzLmJ1dHRvbn0gYXJpYS1sYWJlbD1cIlBsYXlcIiAgb25DbGljayA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5zcGFjZXNoaXApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb249e3RoaXMucHJvcHMuc3RvcHBlZFt0aGlzLnNwYWNlc2hpcC5ncmlkLm5hbWVdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSWNvbj17PFBsYXlBcnJvdyBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3Nlcy5pY29ufSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZJY29uPXs8UGF1c2UgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzZXMuaWNvbn0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSB7dGhpcy5idXR0b25Db2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIExpZ2h0d2VpZ2h0IFNwYWNlc2hpcFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPC9HcmlkPlxyXG5cclxuXHRcdFx0ICAgIFxyXG5cdFx0ICAgIDwvR3JpZD5cdCAgIFxyXG5cdFx0ICAgIDwvZGl2PiBcdFxyXG5cdFx0XHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuXHRcdCAgICBHdW5zXHJcblx0XHQgICAgPC9oND5cclxuXHRcdCAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcblx0XHRcdENvbndheSBvZmZlcmVkIGEgcHJpemUgZm9yIGFueSBleGFtcGxlIG9mIHBhdHRlcm5zIHRoYXQgZ3JvdyBmb3JldmVyLiBcclxuXHRcdFx0Q29ud2F5J3MgcHJpemUgd2FzIGNvbGxlY3RlZCBzb29uIGFmdGVyIGl0cyBhbm5vdW5jZW1lbnQsIHdoZW4gdHdvIGRpZmZlcmVudCB3YXlzIHdlcmUgZGlzY292ZXJlZCBmb3IgZGVzaWduaW5nIGEgcGF0dGVybiB0aGF0IGdyb3dzIGZvcmV2ZXIuXHJcblxyXG5cdFx0XHRUaGUgZmlyc3Qgb2YgdGhlc2UgcGF0dGVybnMgaXMgdGhlIHBlcmlvZC0zMCBnbGlkZXIgZ3VuLCB3aGljaCBpcyBiYXNlZCBvbiB0aGUgaW50ZXJhY3Rpb24gb2YgdHdvIHF1ZWVuIGJlZSBzaHV0dGxlcy4gXHJcblx0XHRcdFdoZXJlIHRoZXNlIHNodXR0bGVzIGNvbGxpZGUsIGluc3RlYWQgb2YgcHJvZHVjaW5nIGJlZWhpdmVzLCB0aGV5IHByb2R1Y2UgYSBuZXcgZ2xpZGVyLiBcclxuXHRcdFx0VGhpcyBnbGlkZXIgbW92ZXMgYXdheSBpbiB0aW1lIGZvciB0aGUgcHJvY2VzcyB0byByZXBlYXQgaXRzZWxmIDMwIHN0ZXBzIGxhdGVyLlxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxkaXYgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2FyZHNTZWN0aW9ufSA+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuXHQgICBcclxuXHRcdFx0ICAgIFxyXG5cdFx0XHQgICAgPEdyaWQgaXRlbSB4cz17MTJ9PiBcclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkfSA+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuXHRcdFx0ICAgIDxjYW52YXNcclxuXHQgICAgICAgICAgICAgICAgcmVmPXsoY2FudmFzKSA9PiB7IHRoaXMucGF0dGVybnMuZ3VuID0gY2FudmFzfX1cclxuXHQgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9XHJcblx0ICAgICAgICAgICAgLz5cclxuXHQgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3Nlcy5idXR0b259IGFyaWEtbGFiZWw9XCJQbGF5XCIgIG9uQ2xpY2sgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZ3VuKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb249e3RoaXMucHJvcHMuc3RvcHBlZFt0aGlzLmd1bi5ncmlkLm5hbWVdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkljb249ezxQbGF5QXJyb3cgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzZXMuaWNvbn0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZkljb249ezxQYXVzZSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3Nlcy5pY29ufSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSB7dGhpcy5idXR0b25Db2xvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICBUaGUgR29zcGVyIEdsaWRlciBHdW5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDwvR3JpZD5cclxuXHJcblx0XHRcdCAgICBcclxuXHRcdCAgICA8L0dyaWQ+XHRcclxuXHRcdCAgICA8L2Rpdj5cclxuXHQgICAgXHQ8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuXHQgICAgXHRPcmlnaW5zXHJcblx0ICAgIFx0PC9oMj5cclxuXHJcblx0ICAgIFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PkNvbndheSB3YXMgaW50ZXJlc3RlZCBpbiBhIHByb2JsZW0gcHJlc2VudGVkIGluIHRoZSAxOTQwcyBieSBcclxuXHQgICAgXHRtYXRoZW1hdGljaWFuIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Kb2huX3Zvbl9OZXVtYW5uXCIgIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiSm9obiB2b24gTmV1bWFublwiPkpvaG4gdm9uIE5ldW1hbm48L2E+LCBcclxuXHQgICAgXHR3aG8gYXR0ZW1wdGVkIHRvIGZpbmQgYSBoeXBvdGhldGljYWwgbWFjaGluZSB0aGF0IGNvdWxkIGJ1aWxkIGNvcGllcyBvZiBpdHNlbGYgXHJcblx0ICAgIFx0YW5kIHN1Y2NlZWRlZCB3aGVuIGhlIGZvdW5kIGEgbWF0aGVtYXRpY2FsIG1vZGVsIGZvciBzdWNoIGEgbWFjaGluZSB3aXRoIHZlcnkgXHJcblx0ICAgIFx0Y29tcGxpY2F0ZWQgcnVsZXMgb24gYSByZWN0YW5ndWxhciBncmlkLiBUaGUgR2FtZSBvZiBMaWZlIGVtZXJnZWQgYXMgQ29ud2F5J3MgXHJcblx0ICAgIFx0c3VjY2Vzc2Z1bCBhdHRlbXB0IHRvIGRyYXN0aWNhbGx5IHNpbXBsaWZ5IHZvbiBOZXVtYW5uJ3MgaWRlYXMuXHJcblxyXG5cdCAgICBcdDwvcD5cclxuXHJcblx0ICAgIFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlRoZSBnYW1lIG1hZGUgaXRzIGZpcnN0IHB1YmxpYyBhcHBlYXJhbmNlIGluIHRoZSBPY3RvYmVyIDE5NzAgaXNzdWUgb2YgPGk+U2NpZW50aWZpYyBBbWVyaWNhbjwvaT4sIGluIE1hcnRpbiBHYXJkbmVyJ3MgY29sdW1uLiBcclxuXHQgICAgXHRGcm9tIGEgdGhlb3JldGljYWwgcG9pbnQgb2YgdmlldywgaXQgaXMgaW50ZXJlc3RpbmcgYmVjYXVzZSBpdCBoYXMgdGhlIHBvd2VyIG9mIFxyXG5cdCAgICBcdGEgdW5pdmVyc2FsIFR1cmluZyBtYWNoaW5lOiB0aGF0IGlzLCBhbnl0aGluZyB0aGF0IGNhbiBiZSBjb21wdXRlZCBhbGdvcml0aG1pY2FsbHkgXHJcblx0ICAgIFx0Y2FuIGJlIGNvbXB1dGVkIHdpdGhpbiBDb253YXkncyBHYW1lIG9mIExpZmUuIEdhcmRuZXIgd3JvdGU6XHJcblx0ICAgIFx0PC9wPlxyXG5cdCAgICBcdDxibG9ja3F1b3RlPlxyXG5cdFx0XHQ8cD5UaGUgZ2FtZSBtYWRlIENvbndheSBpbnN0YW50bHkgZmFtb3VzLCBidXQgaXQgYWxzbyBvcGVuZWQgdXAgYSB3aG9sZSBuZXcgXHJcblx0XHRcdGZpZWxkIG9mIG1hdGhlbWF0aWNhbCByZXNlYXJjaCwgdGhlIGZpZWxkIG9mIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DZWxsdWxhcl9hdXRvbWF0b25cIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIkNlbGx1bGFyIGF1dG9tYXRhXCI+Y2VsbHVsYXIgYXV0b21hdGE8L2E+XHJcblx0XHRcdCZuYnNwOy4uLiBCZWNhdXNlIG9mIExpZmUncyBhbmFsb2dpZXMgd2l0aCB0aGUgcmlzZSwgXHJcblx0XHRcdGZhbGwgYW5kIGFsdGVyYXRpb25zIG9mIGEgc29jaWV0eSBvZiBsaXZpbmcgb3JnYW5pc21zLCBpdCBiZWxvbmdzIHRvIGEgXHJcblx0XHRcdGdyb3dpbmcgY2xhc3Mgb2Ygd2hhdCBhcmUgY2FsbGVkIFwic2ltdWxhdGlvbiBnYW1lc1wiIChnYW1lcyB0aGF0IHJlc2VtYmxlIHJlYWwgbGlmZSBwcm9jZXNzZXMpLlxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDwvYmxvY2txdW90ZT5cclxuXHRcdFx0XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PEdyaWQgaXRlbSB4cz17MX0gc209ezJ9ID4gPC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0ICAgICBcclxuXHQgICAgPC9kaXY+XHJcblx0KTsgXHJcblx0fVxyXG59XHJcblxyXG5BYm91dC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICBzZXRTdG9wcGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgc3RvcHBlZDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBbYm9hcmROYW1lcy5NQUlOXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQkxPQ0tdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CT0FUXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuTE9BRl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkJFRUhJVkVdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lcy5CTElOS0VSXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuQkVBQ09OXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZXMuVE9BRF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkdMSURFUl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLlNQQUNFU0hJUF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWVzLkdVTl06IFByb3BUeXBlcy5ib29sLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQWJvdXQpO1xyXG5cclxuZnVuY3Rpb24gcGF0dGVybkJvYXJkKGdyaWQsY2VsbHNMaXN0KXtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Z3JpZCxcclxuXHRcdGNlbGxzTGlzdCxcclxuXHRcdC8vIHN0b3BwZWQ6IHRydWUsXHJcblx0XHRcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXR0ZXJuc1dpZHRoUmVsYXRpb24od2lkdGgpe1xyXG5cdHJldHVybiB3aWR0aCA9PSA1ID8gNS82IDogd2lkdGggPT0gNCA/IDQvNiA6IHdpZHRoID09IDEwID8gMTAvMTIgOiAxO1xyXG59XHJcblxyXG5cclxuLy8gPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG5cdCAgIFxyXG4vLyBcdFx0ICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30gPiBcclxuLy8gXHQgICAgXHQ8L0dyaWQ+XHJcbi8vIFx0ICAgIFx0PEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fSA+IFxyXG4vLyBcdCAgICBcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnZpZGVvfT5cclxuXHJcbi8vIFx0ICAgIFx0RnJhZ21lbnQgZnJvbSBTdGVwaGVuIEhhd2tpbmdgcyBUaGUgTWVhbmluZyBvZiBMaWZlXHJcbi8vIFx0XHRcdDwvZGl2PlxyXG4vLyBcdCAgICBcdDwvR3JpZD5cclxuLy8gXHQgICAgXHQ8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezN9ID4gXHJcbi8vIFx0ICAgIFx0PC9HcmlkPlxyXG4vLyBcdCAgICBcdDwvR3JpZD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Fib3V0LmpzIiwidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJztcbmltcG9ydCB5b3VUdWJlUGxheWVyIGZyb20gJ3lvdXR1YmUtcGxheWVyJztcblxuLyoqXHJcbiAqIENoZWNrIHdoZXRoZXIgYSBgcHJvcHNgIGNoYW5nZSBzaG91bGQgcmVzdWx0IGluIHRoZSB2aWRlbyBiZWluZyB1cGRhdGVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJldlByb3BzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cbmZ1bmN0aW9uIHNob3VsZFVwZGF0ZVZpZGVvKHByZXZQcm9wcywgcHJvcHMpIHtcbiAgLy8gQSBjaGFuZ2luZyB2aWRlbyBzaG91bGQgYWx3YXlzIHRyaWdnZXIgYW4gdXBkYXRlXG4gIGlmIChwcmV2UHJvcHMudmlkZW9JZCAhPT0gcHJvcHMudmlkZW9JZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gT3RoZXJ3aXNlLCBhIGNoYW5nZSBpbiB0aGUgc3RhcnQvZW5kIHRpbWUgcGxheWVyVmFycyBhbHNvIHJlcXVpcmVzIGEgcGxheWVyXG4gIC8vIHVwZGF0ZS5cbiAgdmFyIHByZXZWYXJzID0gcHJldlByb3BzLm9wdHMucGxheWVyVmFycyB8fCB7fTtcbiAgdmFyIHZhcnMgPSBwcm9wcy5vcHRzLnBsYXllclZhcnMgfHwge307XG5cbiAgcmV0dXJuIHByZXZWYXJzLnN0YXJ0ICE9PSB2YXJzLnN0YXJ0IHx8IHByZXZWYXJzLmVuZCAhPT0gdmFycy5lbmQ7XG59XG5cbi8qKlxyXG4gKiBOZXV0cmFsaXNlIEFQSSBvcHRpb25zIHRoYXQgb25seSByZXF1aXJlIGEgdmlkZW8gdXBkYXRlLCBsZWF2aW5nIG9ubHkgb3B0aW9uc1xyXG4gKiB0aGF0IHJlcXVpcmUgYSBwbGF5ZXIgcmVzZXQuIFRoZSByZXN1bHRzIGNhbiB0aGVuIGJlIGNvbXBhcmVkIHRvIHNlZSBpZiBhXHJcbiAqIHBsYXllciByZXNldCBpcyBuZWNlc3NhcnkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAqL1xuZnVuY3Rpb24gZmlsdGVyUmVzZXRPcHRpb25zKG9wdHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvcHRzLCB7XG4gICAgcGxheWVyVmFyczogX2V4dGVuZHMoe30sIG9wdHMucGxheWVyVmFycywge1xuICAgICAgYXV0b3BsYXk6IDAsXG4gICAgICBzdGFydDogMCxcbiAgICAgIGVuZDogMFxuICAgIH0pXG4gIH0pO1xufVxuXG4vKipcclxuICogQ2hlY2sgd2hldGhlciBhIGBwcm9wc2AgY2hhbmdlIHNob3VsZCByZXN1bHQgaW4gdGhlIHBsYXllciBiZWluZyByZXNldC5cclxuICogVGhlIHBsYXllciBpcyByZXNldCB3aGVuIHRoZSBgcHJvcHMub3B0c2AgY2hhbmdlLCBleGNlcHQgaWYgdGhlIG9ubHkgY2hhbmdlXHJcbiAqIGlzIGluIHRoZSBgc3RhcnRgIGFuZCBgZW5kYCBwbGF5ZXJWYXJzLCBiZWNhdXNlIGEgdmlkZW8gdXBkYXRlIGNhbiBkZWFsIHdpdGhcclxuICogdGhvc2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcmV2UHJvcHNcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xuZnVuY3Rpb24gc2hvdWxkUmVzZXRQbGF5ZXIocHJldlByb3BzLCBwcm9wcykge1xuICByZXR1cm4gIWlzRXF1YWwoZmlsdGVyUmVzZXRPcHRpb25zKHByZXZQcm9wcy5vcHRzKSwgZmlsdGVyUmVzZXRPcHRpb25zKHByb3BzLm9wdHMpKTtcbn1cblxuLyoqXHJcbiAqIENoZWNrIHdoZXRoZXIgYSBwcm9wcyBjaGFuZ2Ugc2hvdWxkIHJlc3VsdCBpbiBhbiBpZCBvciBjbGFzc05hbWUgdXBkYXRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJldlByb3BzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKi9cbmZ1bmN0aW9uIHNob3VsZFVwZGF0ZVBsYXllcihwcmV2UHJvcHMsIHByb3BzKSB7XG4gIHJldHVybiBwcmV2UHJvcHMuaWQgPT09IHByb3BzLmlkIHx8IHByZXZQcm9wcy5jbGFzc05hbWUgPT09IHByb3BzLmNsYXNzTmFtZTtcbn1cblxudmFyIFlvdVR1YmUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoWW91VHViZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gWW91VHViZShwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBZb3VUdWJlKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChZb3VUdWJlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoWW91VHViZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLm9uUGxheWVyUmVhZHkgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vblJlYWR5KGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25QbGF5ZXJFcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uRXJyb3IoZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblBsYXllclN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5wcm9wcy5vblN0YXRlQ2hhbmdlKGV2ZW50KTtcbiAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YSkge1xuXG4gICAgICAgIGNhc2UgWW91VHViZS5QbGF5ZXJTdGF0ZS5FTkRFRDpcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkVuZChldmVudCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBZb3VUdWJlLlBsYXllclN0YXRlLlBMQVlJTkc6XG4gICAgICAgICAgX3RoaXMucHJvcHMub25QbGF5KGV2ZW50KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFlvdVR1YmUuUGxheWVyU3RhdGUuUEFVU0VEOlxuICAgICAgICAgIF90aGlzLnByb3BzLm9uUGF1c2UoZXZlbnQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vblBsYXllclBsYXliYWNrUmF0ZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uUGxheWJhY2tSYXRlQ2hhbmdlKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25QbGF5ZXJQbGF5YmFja1F1YWxpdHlDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vblBsYXliYWNrUXVhbGl0eUNoYW5nZShldmVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLmNyZWF0ZVBsYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGRvIG5vdCBhdHRlbXB0IHRvIGNyZWF0ZSBhIHBsYXllciBzZXJ2ZXItc2lkZSwgaXQgd29uJ3Qgd29ya1xuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgIC8vIGNyZWF0ZSBwbGF5ZXJcbiAgICAgIHZhciBwbGF5ZXJPcHRzID0gX2V4dGVuZHMoe30sIF90aGlzLnByb3BzLm9wdHMsIHtcbiAgICAgICAgLy8gcHJlbG9hZCB0aGUgYHZpZGVvSWRgIHZpZGVvIGlmIG9uZSBpcyBhbHJlYWR5IGdpdmVuXG4gICAgICAgIHZpZGVvSWQ6IF90aGlzLnByb3BzLnZpZGVvSWRcbiAgICAgIH0pO1xuICAgICAgX3RoaXMuaW50ZXJuYWxQbGF5ZXIgPSB5b3VUdWJlUGxheWVyKF90aGlzLmNvbnRhaW5lciwgcGxheWVyT3B0cyk7XG4gICAgICAvLyBhdHRhY2ggZXZlbnQgaGFuZGxlcnNcbiAgICAgIF90aGlzLmludGVybmFsUGxheWVyLm9uKCdyZWFkeScsIF90aGlzLm9uUGxheWVyUmVhZHkpO1xuICAgICAgX3RoaXMuaW50ZXJuYWxQbGF5ZXIub24oJ2Vycm9yJywgX3RoaXMub25QbGF5ZXJFcnJvcik7XG4gICAgICBfdGhpcy5pbnRlcm5hbFBsYXllci5vbignc3RhdGVDaGFuZ2UnLCBfdGhpcy5vblBsYXllclN0YXRlQ2hhbmdlKTtcbiAgICAgIF90aGlzLmludGVybmFsUGxheWVyLm9uKCdwbGF5YmFja1JhdGVDaGFuZ2UnLCBfdGhpcy5vblBsYXllclBsYXliYWNrUmF0ZUNoYW5nZSk7XG4gICAgICBfdGhpcy5pbnRlcm5hbFBsYXllci5vbigncGxheWJhY2tRdWFsaXR5Q2hhbmdlJywgX3RoaXMub25QbGF5ZXJQbGF5YmFja1F1YWxpdHlDaGFuZ2UpO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZXNldFBsYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5pbnRlcm5hbFBsYXllci5kZXN0cm95KCkudGhlbihfdGhpcy5jcmVhdGVQbGF5ZXIpO1xuICAgIH07XG5cbiAgICBfdGhpcy51cGRhdGVQbGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5pbnRlcm5hbFBsYXllci5nZXRJZnJhbWUoKS50aGVuKGZ1bmN0aW9uIChpZnJhbWUpIHtcbiAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCBfdGhpcy5wcm9wcy5pZCk7XG4gICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgX3RoaXMucHJvcHMuY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy51cGRhdGVWaWRlbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0eXBlb2YgX3RoaXMucHJvcHMudmlkZW9JZCA9PT0gJ3VuZGVmaW5lZCcgfHwgX3RoaXMucHJvcHMudmlkZW9JZCA9PT0gbnVsbCkge1xuICAgICAgICBfdGhpcy5pbnRlcm5hbFBsYXllci5zdG9wVmlkZW8oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgcXVldWVpbmcgb3B0aW9uc1xuICAgICAgdmFyIGF1dG9wbGF5ID0gZmFsc2U7XG4gICAgICB2YXIgb3B0cyA9IHtcbiAgICAgICAgdmlkZW9JZDogX3RoaXMucHJvcHMudmlkZW9JZFxuICAgICAgfTtcbiAgICAgIGlmICgncGxheWVyVmFycycgaW4gX3RoaXMucHJvcHMub3B0cykge1xuICAgICAgICBhdXRvcGxheSA9IF90aGlzLnByb3BzLm9wdHMucGxheWVyVmFycy5hdXRvcGxheSA9PT0gMTtcbiAgICAgICAgaWYgKCdzdGFydCcgaW4gX3RoaXMucHJvcHMub3B0cy5wbGF5ZXJWYXJzKSB7XG4gICAgICAgICAgb3B0cy5zdGFydFNlY29uZHMgPSBfdGhpcy5wcm9wcy5vcHRzLnBsYXllclZhcnMuc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdlbmQnIGluIF90aGlzLnByb3BzLm9wdHMucGxheWVyVmFycykge1xuICAgICAgICAgIG9wdHMuZW5kU2Vjb25kcyA9IF90aGlzLnByb3BzLm9wdHMucGxheWVyVmFycy5lbmQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gaWYgYXV0b3BsYXkgaXMgZW5hYmxlZCBsb2FkVmlkZW9CeUlkXG4gICAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgICAgX3RoaXMuaW50ZXJuYWxQbGF5ZXIubG9hZFZpZGVvQnlJZChvcHRzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gZGVmYXVsdCBiZWhhdmlvdXIganVzdCBjdWVzIHRoZSB2aWRlb1xuICAgICAgX3RoaXMuaW50ZXJuYWxQbGF5ZXIuY3VlVmlkZW9CeUlkKG9wdHMpO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZWZDb250YWluZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgICBfdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgfTtcblxuICAgIF90aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgX3RoaXMuaW50ZXJuYWxQbGF5ZXIgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8qKlxyXG4gICAgKiBFeHBvc2UgUGxheWVyU3RhdGUgY29uc3RhbnRzIGZvciBjb252ZW5pZW5jZS4gVGhlc2UgY29uc3RhbnRzIGNhbiBhbHNvIGJlXHJcbiAgICAqIGFjY2Vzc2VkIHRocm91Z2ggdGhlIGdsb2JhbCBZVCBvYmplY3QgYWZ0ZXIgdGhlIFlvdVR1YmUgSUZyYW1lIEFQSSBpcyBpbnN0YW50aWF0ZWQuXHJcbiAgICAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvaWZyYW1lX2FwaV9yZWZlcmVuY2Ujb25TdGF0ZUNoYW5nZVxyXG4gICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhZb3VUdWJlLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmNyZWF0ZVBsYXllcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGlmIChzaG91bGRVcGRhdGVQbGF5ZXIocHJldlByb3BzLCB0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hvdWxkUmVzZXRQbGF5ZXIocHJldlByb3BzLCB0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnJlc2V0UGxheWVyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG91bGRVcGRhdGVWaWRlbyhwcmV2UHJvcHMsIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlkZW8oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgLyoqXHJcbiAgICAgICAqIE5vdGU6IFRoZSBgeW91dHViZS1wbGF5ZXJgIHBhY2thZ2UgdGhhdCBpcyB1c2VkIHByb21pc2lmaWVzIGFsbCBZb3V0dWJlXHJcbiAgICAgICAqIFBsYXllciBBUEkgY2FsbHMsIHdoaWNoIGludHJvZHVjZXMgYSBkZWxheSBvZiBhIHRpY2sgYmVmb3JlIGl0IGFjdHVhbGx5XHJcbiAgICAgICAqIGdldHMgZGVzdHJveWVkLiBTaW5jZSBSZWFjdCBhdHRlbXB0cyB0byByZW1vdmUgdGhlIGVsZW1lbnQgaW5zdGFudGx5XHJcbiAgICAgICAqIHRoaXMgbWV0aG9kIGlzbid0IHF1aWNrIGVub3VnaCB0byByZXNldCB0aGUgY29udGFpbmVyIGVsZW1lbnQuXHJcbiAgICAgICAqL1xuICAgICAgdGhpcy5pbnRlcm5hbFBsYXllci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL2lmcmFtZV9hcGlfcmVmZXJlbmNlI29uUmVhZHlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcclxuICAgICAqICAgQHBhcmFtIHtPYmplY3R9IHRhcmdldCAtIHBsYXllciBvYmplY3RcclxuICAgICAqL1xuXG5cbiAgICAvKipcclxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvaWZyYW1lX2FwaV9yZWZlcmVuY2Ujb25FcnJvclxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxyXG4gICAgICogICBAcGFyYW0ge0ludGVnZXJ9IGRhdGEgIC0gZXJyb3IgdHlwZVxyXG4gICAgICogICBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gcGxheWVyIG9iamVjdFxyXG4gICAgICovXG5cblxuICAgIC8qKlxyXG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9pZnJhbWVfYXBpX3JlZmVyZW5jZSNvblN0YXRlQ2hhbmdlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XHJcbiAgICAgKiAgIEBwYXJhbSB7SW50ZWdlcn0gZGF0YSAgLSBzdGF0dXMgY2hhbmdlIHR5cGVcclxuICAgICAqICAgQHBhcmFtIHtPYmplY3R9IHRhcmdldCAtIGFjdHVhbCBZVCBwbGF5ZXJcclxuICAgICAqL1xuXG5cbiAgICAvKipcclxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvaWZyYW1lX2FwaV9yZWZlcmVuY2Ujb25QbGF5YmFja1JhdGVDaGFuZ2VcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcclxuICAgICAqICAgQHBhcmFtIHtGbG9hdH0gZGF0YSAgICAtIHBsYXliYWNrIHJhdGVcclxuICAgICAqICAgQHBhcmFtIHtPYmplY3R9IHRhcmdldCAtIGFjdHVhbCBZVCBwbGF5ZXJcclxuICAgICAqL1xuXG5cbiAgICAvKipcclxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvaWZyYW1lX2FwaV9yZWZlcmVuY2Ujb25QbGF5YmFja1F1YWxpdHlDaGFuZ2VcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcclxuICAgICAqICAgQHBhcmFtIHtTdHJpbmd9IGRhdGEgICAtIHBsYXliYWNrIHF1YWxpdHlcclxuICAgICAqICAgQHBhcmFtIHtPYmplY3R9IHRhcmdldCAtIGFjdHVhbCBZVCBwbGF5ZXJcclxuICAgICAqL1xuXG5cbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemUgdGhlIFlvdXR1YmUgUGxheWVyIEFQSSBvbiB0aGUgY29udGFpbmVyIGFuZCBhdHRhY2ggZXZlbnQgaGFuZGxlcnNcclxuICAgICAqL1xuXG5cbiAgICAvKipcclxuICAgICAqIFNob3J0aGFuZCBmb3IgZGVzdHJveWluZyBhbmQgdGhlbiByZS1jcmVhdGluZyB0aGUgWW91dHViZSBQbGF5ZXJcclxuICAgICAqL1xuXG5cbiAgICAvKipcclxuICAgICAqIE1ldGhvZCB0byB1cGRhdGUgdGhlIGlkIGFuZCBjbGFzcyBvZiB0aGUgWW91dHViZSBQbGF5ZXIgaWZyYW1lLlxyXG4gICAgICogUmVhY3Qgc2hvdWxkIHVwZGF0ZSB0aGlzIGF1dG9tYXRpY2FsbHkgYnV0IHNpbmNlIHRoZSBZb3V0dWJlIFBsYXllciBBUElcclxuICAgICAqIHJlcGxhY2VkIHRoZSBESVYgdGhhdCBpcyBtb3VudGVkIGJ5IFJlYWN0IHdlIG5lZWQgdG8gZG8gdGhpcyBtYW51YWxseS5cclxuICAgICAqL1xuXG5cbiAgICAvKipcclxuICAgICAqIENhbGwgWW91dHViZSBQbGF5ZXIgQVBJIG1ldGhvZHMgdG8gdXBkYXRlIHRoZSBjdXJyZW50bHkgcGxheWluZyB2aWRlby5cclxuICAgICAqIERlcGVkaW5nIG9uIHRoZSBgb3B0cy5wbGF5ZXJWYXJzLmF1dG9wbGF5YCB0aGlzIGZ1bmN0aW9uIHVzZXMgb25lIG9mIHR3b1xyXG4gICAgICogWW91dHViZSBQbGF5ZXIgQVBJIG1ldGhvZHMgdG8gdXBkYXRlIHRoZSB2aWRlby5cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGlkOiB0aGlzLnByb3BzLmlkLCBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lLCByZWY6IHRoaXMucmVmQ29udGFpbmVyIH0pXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBZb3VUdWJlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Zb3VUdWJlLnByb3BUeXBlcyA9IHtcbiAgdmlkZW9JZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvLyBjdXN0b20gSUQgZm9yIHBsYXllciBlbGVtZW50XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8vIGN1c3RvbSBjbGFzcyBuYW1lIGZvciBwbGF5ZXIgZWxlbWVudFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9pZnJhbWVfYXBpX3JlZmVyZW5jZSNMb2FkaW5nX2FfVmlkZW9fUGxheWVyXG4gIG9wdHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLy8gZXZlbnQgc3Vic2NyaXB0aW9uc1xuICBvblJlYWR5OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25FcnJvcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUGxheTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUGF1c2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkVuZDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU3RhdGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblBsYXliYWNrUmF0ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUGxheWJhY2tRdWFsaXR5Q2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xufTtcbllvdVR1YmUuZGVmYXVsdFByb3BzID0ge1xuICBvcHRzOiB7fSxcbiAgb25SZWFkeTogZnVuY3Rpb24gb25SZWFkeSgpIHt9LFxuICBvbkVycm9yOiBmdW5jdGlvbiBvbkVycm9yKCkge30sXG4gIG9uUGxheTogZnVuY3Rpb24gb25QbGF5KCkge30sXG4gIG9uUGF1c2U6IGZ1bmN0aW9uIG9uUGF1c2UoKSB7fSxcbiAgb25FbmQ6IGZ1bmN0aW9uIG9uRW5kKCkge30sXG4gIG9uU3RhdGVDaGFuZ2U6IGZ1bmN0aW9uIG9uU3RhdGVDaGFuZ2UoKSB7fSxcbiAgb25QbGF5YmFja1JhdGVDaGFuZ2U6IGZ1bmN0aW9uIG9uUGxheWJhY2tSYXRlQ2hhbmdlKCkge30sXG4gIG9uUGxheWJhY2tRdWFsaXR5Q2hhbmdlOiBmdW5jdGlvbiBvblBsYXliYWNrUXVhbGl0eUNoYW5nZSgpIHt9XG59O1xuWW91VHViZS5QbGF5ZXJTdGF0ZSA9IHtcbiAgVU5TVEFSVEVEOiAtMSxcbiAgRU5ERUQ6IDAsXG4gIFBMQVlJTkc6IDEsXG4gIFBBVVNFRDogMixcbiAgQlVGRkVSSU5HOiAzLFxuICBDVUVEOiA1XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFlvdVR1YmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QteW91dHViZS9lcy9Zb3VUdWJlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MDFcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGRlZXAgY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlXG4gKiBlcXVpdmFsZW50LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBzdXBwb3J0cyBjb21wYXJpbmcgYXJyYXlzLCBhcnJheSBidWZmZXJzLCBib29sZWFucyxcbiAqIGRhdGUgb2JqZWN0cywgZXJyb3Igb2JqZWN0cywgbWFwcywgbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcyxcbiAqIHNldHMsIHN0cmluZ3MsIHN5bWJvbHMsIGFuZCB0eXBlZCBhcnJheXMuIGBPYmplY3RgIG9iamVjdHMgYXJlIGNvbXBhcmVkXG4gKiBieSB0aGVpciBvd24sIG5vdCBpbmhlcml0ZWQsIGVudW1lcmFibGUgcHJvcGVydGllcy4gRnVuY3Rpb25zIGFuZCBET01cbiAqIG5vZGVzIGFyZSBjb21wYXJlZCBieSBzdHJpY3QgZXF1YWxpdHksIGkuZS4gYD09PWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uaXNFcXVhbChvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBvYmplY3QgPT09IG90aGVyO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFcXVhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSA4MDJcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfc2lzdGVyID0gcmVxdWlyZSgnc2lzdGVyJyk7XG5cbnZhciBfc2lzdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Npc3Rlcik7XG5cbnZhciBfbG9hZFlvdVR1YmVJZnJhbWVBcGkgPSByZXF1aXJlKCcuL2xvYWRZb3VUdWJlSWZyYW1lQXBpJyk7XG5cbnZhciBfbG9hZFlvdVR1YmVJZnJhbWVBcGkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9hZFlvdVR1YmVJZnJhbWVBcGkpO1xuXG52YXIgX1lvdVR1YmVQbGF5ZXIgPSByZXF1aXJlKCcuL1lvdVR1YmVQbGF5ZXInKTtcblxudmFyIF9Zb3VUdWJlUGxheWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1lvdVR1YmVQbGF5ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIEB0eXBlZGVmIFlULlBsYXllclxuICogQHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL2lmcmFtZV9hcGlfcmVmZXJlbmNlXG4gKiAqL1xuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9pZnJhbWVfYXBpX3JlZmVyZW5jZSNMb2FkaW5nX2FfVmlkZW9fUGxheWVyXG4gKi9cbnZhciB5b3V0dWJlSWZyYW1lQVBJID0gdm9pZCAwO1xuXG4vKipcbiAqIEEgZmFjdG9yeSBmdW5jdGlvbiB1c2VkIHRvIHByb2R1Y2UgYW4gaW5zdGFuY2Ugb2YgWVQuUGxheWVyIGFuZCBxdWV1ZSBmdW5jdGlvbiBjYWxscyBhbmQgcHJveHkgZXZlbnRzIG9mIHRoZSByZXN1bHRpbmcgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSBlbGVtZW50SWQgRWl0aGVyIEFuIGV4aXN0aW5nIFlULlBsYXllciBpbnN0YW5jZSxcbiAqIHRoZSBET00gZWxlbWVudCBvciB0aGUgaWQgb2YgdGhlIEhUTUwgZWxlbWVudCB3aGVyZSB0aGUgQVBJIHdpbGwgaW5zZXJ0IGFuIDxpZnJhbWU+LlxuICogQHBhcmFtIG9wdGlvbnMgU2VlIGBvcHRpb25zYCAoSWdub3JlZCB3aGVuIHVzaW5nIGFuIGV4aXN0aW5nIFlULlBsYXllciBpbnN0YW5jZSkuXG4gKiBAcGFyYW0gc3RyaWN0U3RhdGUgQSBmbGFnIGRlc2lnbmF0aW5nIHdoZXRoZXIgb3Igbm90IHRvIHdhaXQgZm9yXG4gKiBhbiBhY2NlcHRhYmxlIHN0YXRlIHdoZW4gY2FsbGluZyBzdXBwb3J0ZWQgZnVuY3Rpb25zLiBEZWZhdWx0OiBgZmFsc2VgLlxuICogU2VlIGBGdW5jdGlvblN0YXRlTWFwLmpzYCBmb3Igc3VwcG9ydGVkIGZ1bmN0aW9ucyBhbmQgYWNjZXB0YWJsZSBzdGF0ZXMuXG4gKi9cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG1heWJlRWxlbWVudElkKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIHN0cmljdFN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICB2YXIgZW1pdHRlciA9ICgwLCBfc2lzdGVyMi5kZWZhdWx0KSgpO1xuXG4gIGlmICgheW91dHViZUlmcmFtZUFQSSkge1xuICAgIHlvdXR1YmVJZnJhbWVBUEkgPSAoMCwgX2xvYWRZb3VUdWJlSWZyYW1lQXBpMi5kZWZhdWx0KSgpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuZXZlbnRzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFdmVudCBoYW5kbGVycyBjYW5ub3QgYmUgb3ZlcndyaXR0ZW4uJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIG1heWJlRWxlbWVudElkID09PSAnc3RyaW5nJyAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWF5YmVFbGVtZW50SWQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IFwiJyArIG1heWJlRWxlbWVudElkICsgJ1wiIGRvZXMgbm90IGV4aXN0LicpO1xuICB9XG5cbiAgb3B0aW9ucy5ldmVudHMgPSBfWW91VHViZVBsYXllcjIuZGVmYXVsdC5wcm94eUV2ZW50cyhlbWl0dGVyKTtcblxuICB2YXIgcGxheWVyQVBJUmVhZHkgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIGlmICh0eXBlb2YgbWF5YmVFbGVtZW50SWQgPT09ICdzdHJpbmcnIHx8IG1heWJlRWxlbWVudElkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9taXNlL2NhdGNoLW9yLXJldHVyblxuICAgICAgeW91dHViZUlmcmFtZUFQSS50aGVuKGZ1bmN0aW9uIChZVCkge1xuICAgICAgICB2YXIgcGxheWVyID0gbmV3IFlULlBsYXllcihtYXliZUVsZW1lbnRJZCwgb3B0aW9ucyk7XG5cbiAgICAgICAgZW1pdHRlci5vbigncmVhZHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmVzb2x2ZShwbGF5ZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBtYXliZUVsZW1lbnRJZCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWF5YmVFbGVtZW50SWQpKSA9PT0gJ29iamVjdCcgJiYgbWF5YmVFbGVtZW50SWQucGxheVZpZGVvIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHZhciBwbGF5ZXIgPSBtYXliZUVsZW1lbnRJZDtcblxuICAgICAgcmVzb2x2ZShwbGF5ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmV4cGVjdGVkIHN0YXRlLicpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHBsYXllckFwaSA9IF9Zb3VUdWJlUGxheWVyMi5kZWZhdWx0LnByb21pc2lmeVBsYXllcihwbGF5ZXJBUElSZWFkeSwgc3RyaWN0U3RhdGUpO1xuXG4gIHBsYXllckFwaS5vbiA9IGVtaXR0ZXIub247XG4gIHBsYXllckFwaS5vZmYgPSBlbWl0dGVyLm9mZjtcblxuICByZXR1cm4gcGxheWVyQXBpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMveW91dHViZS1wbGF5ZXIvZGlzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODAzXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIi8qKlxuKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vZ2FqdXMvc2lzdGVyIGZvciB0aGUgY2Fub25pY2FsIHNvdXJjZSByZXBvc2l0b3J5XG4qIEBsaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS9nYWp1cy9zaXN0ZXIvYmxvYi9tYXN0ZXIvTElDRU5TRSBCU0QgMy1DbGF1c2VcbiovXG5mdW5jdGlvbiBTaXN0ZXIgKCkge1xuICAgIHZhciBzaXN0ZXIgPSB7fSxcbiAgICAgICAgZXZlbnRzID0ge307XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoYW5kbGVyXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgRXZlbnQgZGF0YS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIEV2ZW50IG5hbWUuXG4gICAgICogQHBhcmFtIHtoYW5kbGVyfSBoYW5kbGVyXG4gICAgICogQHJldHVybiB7bGlzdGVuZXJ9XG4gICAgICovXG4gICAgc2lzdGVyLm9uID0gZnVuY3Rpb24gKG5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0ge25hbWU6IG5hbWUsIGhhbmRsZXI6IGhhbmRsZXJ9O1xuICAgICAgICBldmVudHNbbmFtZV0gPSBldmVudHNbbmFtZV0gfHwgW107XG4gICAgICAgIGV2ZW50c1tuYW1lXS51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2xpc3RlbmVyfVxuICAgICAqL1xuICAgIHNpc3Rlci5vZmYgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gZXZlbnRzW2xpc3RlbmVyLm5hbWVdLmluZGV4T2YobGlzdGVuZXIpO1xuXG4gICAgICAgIGlmIChpbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgZXZlbnRzW2xpc3RlbmVyLm5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgRXZlbnQgbmFtZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBFdmVudCBkYXRhLlxuICAgICAqL1xuICAgIHNpc3Rlci50cmlnZ2VyID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IGV2ZW50c1tuYW1lXSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgICAgaSA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzW2ldLmhhbmRsZXIoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHNpc3Rlcjtcbn1cblxuZ2xvYmFsLmdhanVzID0gZ2xvYmFsLmdhanVzIHx8IHt9O1xuZ2xvYmFsLmdhanVzLlNpc3RlciA9IFNpc3RlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBTaXN0ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc2lzdGVyL3NyYy9zaXN0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDgwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfbG9hZFNjcmlwdCA9IHJlcXVpcmUoJ2xvYWQtc2NyaXB0Jyk7XG5cbnZhciBfbG9hZFNjcmlwdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2FkU2NyaXB0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2hlbiB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgaXMgY2FsbGVkLlxuICAgKiBUaGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIGEgcmVmZXJlbmNlIHRvIHdpbmRvdy5ZVCBvYmplY3QuXG4gICAqL1xuICB2YXIgaWZyYW1lQVBJUmVhZHkgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIGlmICh3aW5kb3cuWVQgJiYgd2luZG93LllULlBsYXllciAmJiB3aW5kb3cuWVQuUGxheWVyIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHJlc29sdmUod2luZG93LllUKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91cyA9IHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeTtcblxuICAgIC8vIFRoZSBBUEkgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiBwYWdlIGhhcyBmaW5pc2hlZCBkb3dubG9hZGluZ1xuICAgIC8vIHRoZSBKYXZhU2NyaXB0IGZvciB0aGUgcGxheWVyIEFQSS5cbiAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgcHJldmlvdXMoKTtcbiAgICAgIH1cblxuICAgICAgcmVzb2x2ZSh3aW5kb3cuWVQpO1xuICAgIH07XG4gIH0pO1xuXG4gIHZhciBwcm90b2NvbCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHA6JyA/ICdodHRwOicgOiAnaHR0cHM6JztcblxuICAoMCwgX2xvYWRTY3JpcHQyLmRlZmF1bHQpKHByb3RvY29sICsgJy8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGknKTtcblxuICByZXR1cm4gaWZyYW1lQVBJUmVhZHk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy95b3V0dWJlLXBsYXllci9kaXN0L2xvYWRZb3VUdWJlSWZyYW1lQXBpLmpzXG4vLyBtb2R1bGUgaWQgPSA4MDVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxvYWQgKHNyYywgb3B0cywgY2IpIHtcbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF1cbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBvcHRzXG4gICAgb3B0cyA9IHt9XG4gIH1cblxuICBvcHRzID0gb3B0cyB8fCB7fVxuICBjYiA9IGNiIHx8IGZ1bmN0aW9uKCkge31cblxuICBzY3JpcHQudHlwZSA9IG9wdHMudHlwZSB8fCAndGV4dC9qYXZhc2NyaXB0J1xuICBzY3JpcHQuY2hhcnNldCA9IG9wdHMuY2hhcnNldCB8fCAndXRmOCc7XG4gIHNjcmlwdC5hc3luYyA9ICdhc3luYycgaW4gb3B0cyA/ICEhb3B0cy5hc3luYyA6IHRydWVcbiAgc2NyaXB0LnNyYyA9IHNyY1xuXG4gIGlmIChvcHRzLmF0dHJzKSB7XG4gICAgc2V0QXR0cmlidXRlcyhzY3JpcHQsIG9wdHMuYXR0cnMpXG4gIH1cblxuICBpZiAob3B0cy50ZXh0KSB7XG4gICAgc2NyaXB0LnRleHQgPSAnJyArIG9wdHMudGV4dFxuICB9XG5cbiAgdmFyIG9uZW5kID0gJ29ubG9hZCcgaW4gc2NyaXB0ID8gc3RkT25FbmQgOiBpZU9uRW5kXG4gIG9uZW5kKHNjcmlwdCwgY2IpXG5cbiAgLy8gc29tZSBnb29kIGxlZ2FjeSBicm93c2VycyAoZmlyZWZveCkgZmFpbCB0aGUgJ2luJyBkZXRlY3Rpb24gYWJvdmVcbiAgLy8gc28gYXMgYSBmYWxsYmFjayB3ZSBhbHdheXMgc2V0IG9ubG9hZFxuICAvLyBvbGQgSUUgd2lsbCBpZ25vcmUgdGhpcyBhbmQgbmV3IElFIHdpbGwgc2V0IG9ubG9hZFxuICBpZiAoIXNjcmlwdC5vbmxvYWQpIHtcbiAgICBzdGRPbkVuZChzY3JpcHQsIGNiKTtcbiAgfVxuXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKHNjcmlwdCwgYXR0cnMpIHtcbiAgZm9yICh2YXIgYXR0ciBpbiBhdHRycykge1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cnNbYXR0cl0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0ZE9uRW5kIChzY3JpcHQsIGNiKSB7XG4gIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5vbmVycm9yID0gdGhpcy5vbmxvYWQgPSBudWxsXG4gICAgY2IobnVsbCwgc2NyaXB0KVxuICB9XG4gIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIHRoaXMub25sb2FkID0gbnVsbCBoZXJlIGlzIG5lY2Vzc2FyeVxuICAgIC8vIGJlY2F1c2UgZXZlbiBJRTkgd29ya3Mgbm90IGxpa2Ugb3RoZXJzXG4gICAgdGhpcy5vbmVycm9yID0gdGhpcy5vbmxvYWQgPSBudWxsXG4gICAgY2IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCAnICsgdGhpcy5zcmMpLCBzY3JpcHQpXG4gIH1cbn1cblxuZnVuY3Rpb24gaWVPbkVuZCAoc2NyaXB0LCBjYikge1xuICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgIT0gJ2NvbXBsZXRlJyAmJiB0aGlzLnJlYWR5U3RhdGUgIT0gJ2xvYWRlZCcpIHJldHVyblxuICAgIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbFxuICAgIGNiKG51bGwsIHNjcmlwdCkgLy8gdGhlcmUgaXMgbm8gd2F5IHRvIGNhdGNoIGxvYWRpbmcgZXJyb3JzIGluIElFOFxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2FkLXNjcmlwdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODA2XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9kZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJyk7XG5cbnZhciBfZGVidWcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVidWcpO1xuXG52YXIgX2Z1bmN0aW9uTmFtZXMgPSByZXF1aXJlKCcuL2Z1bmN0aW9uTmFtZXMnKTtcblxudmFyIF9mdW5jdGlvbk5hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Z1bmN0aW9uTmFtZXMpO1xuXG52YXIgX2V2ZW50TmFtZXMgPSByZXF1aXJlKCcuL2V2ZW50TmFtZXMnKTtcblxudmFyIF9ldmVudE5hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50TmFtZXMpO1xuXG52YXIgX0Z1bmN0aW9uU3RhdGVNYXAgPSByZXF1aXJlKCcuL0Z1bmN0aW9uU3RhdGVNYXAnKTtcblxudmFyIF9GdW5jdGlvblN0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Z1bmN0aW9uU3RhdGVNYXApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVidWcgPSAoMCwgX2RlYnVnMi5kZWZhdWx0KSgneW91dHViZS1wbGF5ZXInKTtcblxudmFyIFlvdVR1YmVQbGF5ZXIgPSB7fTtcblxuLyoqXG4gKiBDb25zdHJ1Y3QgYW4gb2JqZWN0IHRoYXQgZGVmaW5lcyBhbiBldmVudCBoYW5kbGVyIGZvciBhbGwgb2YgdGhlIFlvdVR1YmVcbiAqIHBsYXllciBldmVudHMuIFByb3h5IGNhcHR1cmVkIGV2ZW50cyB0aHJvdWdoIGFuIGV2ZW50IGVtaXR0ZXIuXG4gKlxuICogQHRvZG8gQ2FwdHVyZSBldmVudCBwYXJhbWV0ZXJzLlxuICogQHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL2lmcmFtZV9hcGlfcmVmZXJlbmNlI0V2ZW50c1xuICovXG5Zb3VUdWJlUGxheWVyLnByb3h5RXZlbnRzID0gZnVuY3Rpb24gKGVtaXR0ZXIpIHtcbiAgdmFyIGV2ZW50cyA9IHt9O1xuXG4gIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGV2ZW50TmFtZSkge1xuICAgIHZhciBvbkV2ZW50TmFtZSA9ICdvbicgKyBldmVudE5hbWUuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIGV2ZW50TmFtZS5zbGljZSgxKTtcblxuICAgIGV2ZW50c1tvbkV2ZW50TmFtZV0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGRlYnVnKCdldmVudCBcIiVzXCInLCBvbkV2ZW50TmFtZSwgZXZlbnQpO1xuXG4gICAgICBlbWl0dGVyLnRyaWdnZXIoZXZlbnROYW1lLCBldmVudCk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfZXZlbnROYW1lczIuZGVmYXVsdFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBldmVudE5hbWUgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgX2xvb3AoZXZlbnROYW1lKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV2ZW50cztcbn07XG5cbi8qKlxuICogRGVsYXlzIHBsYXllciBBUEkgbWV0aG9kIGV4ZWN1dGlvbiB1bnRpbCBwbGF5ZXIgc3RhdGUgaXMgcmVhZHkuXG4gKlxuICogQHRvZG8gUHJveHkgYWxsIG9mIHRoZSBtZXRob2RzIHVzaW5nIE9iamVjdC5rZXlzLlxuICogQHRvZG8gU2VlIFRSSUNLWSBiZWxvdy5cbiAqIEBwYXJhbSBwbGF5ZXJBUElSZWFkeSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBwbGF5ZXIgaXMgcmVhZHkuXG4gKiBAcGFyYW0gc3RyaWN0U3RhdGUgQSBmbGFnIGRlc2lnbmF0aW5nIHdoZXRoZXIgb3Igbm90IHRvIHdhaXQgZm9yXG4gKiBhbiBhY2NlcHRhYmxlIHN0YXRlIHdoZW4gY2FsbGluZyBzdXBwb3J0ZWQgZnVuY3Rpb25zLlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuWW91VHViZVBsYXllci5wcm9taXNpZnlQbGF5ZXIgPSBmdW5jdGlvbiAocGxheWVyQVBJUmVhZHkpIHtcbiAgdmFyIHN0cmljdFN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICB2YXIgZnVuY3Rpb25zID0ge307XG5cbiAgdmFyIF9sb29wMiA9IGZ1bmN0aW9uIF9sb29wMihmdW5jdGlvbk5hbWUpIHtcbiAgICBpZiAoc3RyaWN0U3RhdGUgJiYgX0Z1bmN0aW9uU3RhdGVNYXAyLmRlZmF1bHRbZnVuY3Rpb25OYW1lXSkge1xuICAgICAgZnVuY3Rpb25zW2Z1bmN0aW9uTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwbGF5ZXJBUElSZWFkeS50aGVuKGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgICAgICB2YXIgc3RhdGVJbmZvID0gX0Z1bmN0aW9uU3RhdGVNYXAyLmRlZmF1bHRbZnVuY3Rpb25OYW1lXTtcbiAgICAgICAgICB2YXIgcGxheWVyU3RhdGUgPSBwbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKTtcblxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby13YXJuaW5nLWNvbW1lbnRzXG4gICAgICAgICAgLy8gVE9ETzogSnVzdCBzcHJlYWQgdGhlIGFyZ3MgaW50byB0aGUgZnVuY3Rpb24gb25jZSBCYWJlbCBpcyBmaXhlZDpcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzQyNzBcbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICAgICAgdmFyIHZhbHVlID0gcGxheWVyW2Z1bmN0aW9uTmFtZV0uYXBwbHkocGxheWVyLCBhcmdzKTtcblxuICAgICAgICAgIC8vIFRSSUNLWTogRm9yIGZ1bmN0aW9ucyBsaWtlIGBzZWVrVG9gLCBhIGNoYW5nZSBpbiBzdGF0ZSBtdXN0IGJlXG4gICAgICAgICAgLy8gdHJpZ2dlcmVkIGdpdmVuIHRoYXQgdGhlIHJlc3VsdGluZyBzdGF0ZSBjb3VsZCBtYXRjaCB0aGUgaW5pdGlhbFxuICAgICAgICAgIC8vIHN0YXRlLlxuICAgICAgICAgIGlmIChzdGF0ZUluZm8uc3RhdGVDaGFuZ2VSZXF1aXJlZCB8fFxuXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dHJhLXBhcmVuc1xuICAgICAgICAgIEFycmF5LmlzQXJyYXkoc3RhdGVJbmZvLmFjY2VwdGFibGVTdGF0ZXMpICYmIHN0YXRlSW5mby5hY2NlcHRhYmxlU3RhdGVzLmluZGV4T2YocGxheWVyU3RhdGUpID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgIHZhciBvblBsYXllclN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gb25QbGF5ZXJTdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGxheWVyU3RhdGVBZnRlckNoYW5nZSA9IHBsYXllci5nZXRQbGF5ZXJTdGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN0YXRlSW5mby50aW1lb3V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignb25TdGF0ZUNoYW5nZScsIG9uUGxheWVyU3RhdGVDaGFuZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgIH0sIHN0YXRlSW5mby50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZUluZm8uYWNjZXB0YWJsZVN0YXRlcykgJiYgc3RhdGVJbmZvLmFjY2VwdGFibGVTdGF0ZXMuaW5kZXhPZihwbGF5ZXJTdGF0ZUFmdGVyQ2hhbmdlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdvblN0YXRlQ2hhbmdlJywgb25QbGF5ZXJTdGF0ZUNoYW5nZSk7XG5cbiAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignb25TdGF0ZUNoYW5nZScsIG9uUGxheWVyU3RhdGVDaGFuZ2UpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jdGlvbnNbZnVuY3Rpb25OYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGxheWVyQVBJUmVhZHkudGhlbihmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXdhcm5pbmctY29tbWVudHNcbiAgICAgICAgICAvLyBUT0RPOiBKdXN0IHNwcmVhZCB0aGUgYXJncyBpbnRvIHRoZSBmdW5jdGlvbiBvbmNlIEJhYmVsIGlzIGZpeGVkOlxuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNDI3MFxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICAgICAgICByZXR1cm4gcGxheWVyW2Z1bmN0aW9uTmFtZV0uYXBwbHkocGxheWVyLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2Z1bmN0aW9uTmFtZXMyLmRlZmF1bHRbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgIHZhciBmdW5jdGlvbk5hbWUgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgIF9sb29wMihmdW5jdGlvbk5hbWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcbiAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9ucztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFlvdVR1YmVQbGF5ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy95b3V0dWJlLXBsYXllci9kaXN0L1lvdVR1YmVQbGF5ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDgwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIvKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9ICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWVcbiAgICAgICAgICAgICAgICYmICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWUuc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgPyBjaHJvbWUuc3RvcmFnZS5sb2NhbFxuICAgICAgICAgICAgICAgICAgOiBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG4gICdsaWdodHNlYWdyZWVuJyxcbiAgJ2ZvcmVzdGdyZWVuJyxcbiAgJ2dvbGRlbnJvZCcsXG4gICdkb2RnZXJibHVlJyxcbiAgJ2RhcmtvcmNoaWQnLFxuICAnY3JpbXNvbidcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuICAgIC8vIGRvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHZhciByO1xuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gIH0gY2F0Y2goZSkge31cblxuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gODA4XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuICovXG5cbmV4cG9ydHMubmFtZXMgPSBbXTtcbmV4cG9ydHMuc2tpcHMgPSBbXTtcblxuLyoqXG4gKiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG4gKlxuICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4vKipcbiAqIFByZXZpb3VzIGxvZyB0aW1lc3RhbXAuXG4gKi9cblxudmFyIHByZXZUaW1lO1xuXG4vKipcbiAqIFNlbGVjdCBhIGNvbG9yLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG4gIHZhciBoYXNoID0gMCwgaTtcblxuICBmb3IgKGkgaW4gbmFtZXNwYWNlKSB7XG4gICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cblxuICByZXR1cm4gZXhwb3J0cy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBleHBvcnRzLmNvbG9ycy5sZW5ndGhdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblxuICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBkaXNhYmxlZD9cbiAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIHR1cm4gdGhlIGBhcmd1bWVudHNgIGludG8gYSBwcm9wZXIgQXJyYXlcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgYXJnc1swXSkge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgIHZhciBsb2dGbiA9IGRlYnVnLmxvZyB8fCBleHBvcnRzLmxvZyB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblxuICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgIGV4cG9ydHMuaW5pdChkZWJ1Zyk7XG4gIH1cblxuICByZXR1cm4gZGVidWc7XG59XG5cbi8qKlxuICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgdmFyIHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbiAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFzcGxpdFtpXSkgY29udGludWU7IC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG4gICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgZXhwb3J0cy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgZXhwb3J0cy5lbmFibGUoJycpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENvZXJjZSBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gIHJldHVybiB2YWw7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanNcbi8vIG1vZHVsZSBpZCA9IDgwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICBpZiAobXMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8XG4gICAgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8XG4gICAgcGx1cmFsKG1zLCBtLCAnbWludXRlJykgfHxcbiAgICBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fFxuICAgIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBuLCBuYW1lKSB7XG4gIGlmIChtcyA8IG4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1zIDwgbiAqIDEuNSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1zIC8gbikgKyAnICcgKyBuYW1lO1xuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODEwXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9pZnJhbWVfYXBpX3JlZmVyZW5jZSNGdW5jdGlvbnNcbiAqL1xuZXhwb3J0cy5kZWZhdWx0ID0gWydjdWVWaWRlb0J5SWQnLCAnbG9hZFZpZGVvQnlJZCcsICdjdWVWaWRlb0J5VXJsJywgJ2xvYWRWaWRlb0J5VXJsJywgJ3BsYXlWaWRlbycsICdwYXVzZVZpZGVvJywgJ3N0b3BWaWRlbycsICdnZXRWaWRlb0xvYWRlZEZyYWN0aW9uJywgJ2N1ZVBsYXlsaXN0JywgJ2xvYWRQbGF5bGlzdCcsICduZXh0VmlkZW8nLCAncHJldmlvdXNWaWRlbycsICdwbGF5VmlkZW9BdCcsICdzZXRTaHVmZmxlJywgJ3NldExvb3AnLCAnZ2V0UGxheWxpc3QnLCAnZ2V0UGxheWxpc3RJbmRleCcsICdzZXRPcHRpb24nLCAnbXV0ZScsICd1bk11dGUnLCAnaXNNdXRlZCcsICdzZXRWb2x1bWUnLCAnZ2V0Vm9sdW1lJywgJ3NlZWtUbycsICdnZXRQbGF5ZXJTdGF0ZScsICdnZXRQbGF5YmFja1JhdGUnLCAnc2V0UGxheWJhY2tSYXRlJywgJ2dldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMnLCAnZ2V0UGxheWJhY2tRdWFsaXR5JywgJ3NldFBsYXliYWNrUXVhbGl0eScsICdnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzJywgJ2dldEN1cnJlbnRUaW1lJywgJ2dldER1cmF0aW9uJywgJ3JlbW92ZUV2ZW50TGlzdGVuZXInLCAnZ2V0VmlkZW9VcmwnLCAnZ2V0VmlkZW9FbWJlZENvZGUnLCAnZ2V0T3B0aW9ucycsICdnZXRPcHRpb24nLCAnYWRkRXZlbnRMaXN0ZW5lcicsICdkZXN0cm95JywgJ3NldFNpemUnLCAnZ2V0SWZyYW1lJ107XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy95b3V0dWJlLXBsYXllci9kaXN0L2Z1bmN0aW9uTmFtZXMuanNcbi8vIG1vZHVsZSBpZCA9IDgxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvaWZyYW1lX2FwaV9yZWZlcmVuY2UjRXZlbnRzXG4gKiBgdm9sdW1lQ2hhbmdlYCBpcyBub3Qgb2ZmaWNpYWxseSBzdXBwb3J0ZWQgYnV0IHNlZW1zIHRvIHdvcmtcbiAqIGl0IGVtaXRzIGFuIG9iamVjdDogYHt2b2x1bWU6IDgyLjY5MjMwNzY5MjMwNzcsIG11dGVkOiBmYWxzZX1gXG4gKi9cbmV4cG9ydHMuZGVmYXVsdCA9IFsncmVhZHknLCAnc3RhdGVDaGFuZ2UnLCAncGxheWJhY2tRdWFsaXR5Q2hhbmdlJywgJ3BsYXliYWNrUmF0ZUNoYW5nZScsICdlcnJvcicsICdhcGlDaGFuZ2UnLCAndm9sdW1lQ2hhbmdlJ107XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy95b3V0dWJlLXBsYXllci9kaXN0L2V2ZW50TmFtZXMuanNcbi8vIG1vZHVsZSBpZCA9IDgxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfUGxheWVyU3RhdGVzID0gcmVxdWlyZSgnLi9jb25zdGFudHMvUGxheWVyU3RhdGVzJyk7XG5cbnZhciBfUGxheWVyU3RhdGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BsYXllclN0YXRlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcGF1c2VWaWRlbzoge1xuICAgIGFjY2VwdGFibGVTdGF0ZXM6IFtfUGxheWVyU3RhdGVzMi5kZWZhdWx0LkVOREVELCBfUGxheWVyU3RhdGVzMi5kZWZhdWx0LlBBVVNFRF0sXG4gICAgc3RhdGVDaGFuZ2VSZXF1aXJlZDogZmFsc2VcbiAgfSxcbiAgcGxheVZpZGVvOiB7XG4gICAgYWNjZXB0YWJsZVN0YXRlczogW19QbGF5ZXJTdGF0ZXMyLmRlZmF1bHQuRU5ERUQsIF9QbGF5ZXJTdGF0ZXMyLmRlZmF1bHQuUExBWUlOR10sXG4gICAgc3RhdGVDaGFuZ2VSZXF1aXJlZDogZmFsc2VcbiAgfSxcbiAgc2Vla1RvOiB7XG4gICAgYWNjZXB0YWJsZVN0YXRlczogW19QbGF5ZXJTdGF0ZXMyLmRlZmF1bHQuRU5ERUQsIF9QbGF5ZXJTdGF0ZXMyLmRlZmF1bHQuUExBWUlORywgX1BsYXllclN0YXRlczIuZGVmYXVsdC5QQVVTRURdLFxuICAgIHN0YXRlQ2hhbmdlUmVxdWlyZWQ6IHRydWUsXG5cbiAgICAvLyBUUklDS1k6IGBzZWVrVG9gIG1heSBub3QgY2F1c2UgYSBzdGF0ZSBjaGFuZ2UgaWYgbm8gYnVmZmVyaW5nIGlzXG4gICAgLy8gcmVxdWlyZWQuXG4gICAgdGltZW91dDogMzAwMFxuICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMveW91dHViZS1wbGF5ZXIvZGlzdC9GdW5jdGlvblN0YXRlTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA4MTNcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIEJVRkZFUklORzogMyxcbiAgRU5ERUQ6IDAsXG4gIFBBVVNFRDogMixcbiAgUExBWUlORzogMSxcbiAgVU5TVEFSVEVEOiAtMSxcbiAgVklERU9fQ1VFRDogNVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMveW91dHViZS1wbGF5ZXIvZGlzdC9jb25zdGFudHMvUGxheWVyU3RhdGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MTRcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE5hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDYiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBTEE7QUFDQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFOQTtBQUZBO0FBQ0E7QUFTQTtBQUVBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUVBOztBQUlBO0FBRkE7O0FBSUE7QUFHQTtBQUNBO0FBTEE7O0FBUUE7QUFDQTtBQUpBO0FBSUE7QUFDQTtBQUNBOztBQUVBOztBQUlBO0FBSEE7QUFGQTs7QUFPQTs7QUFHQTtBQUZBO0FBR0E7QUFFQTtBQVBBOztBQVNBO0FBRUE7QUFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQXJCQTs7QUF1QkE7QUFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTkE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUhBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQXBCQTs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUFwQkE7O0FBcUJBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7O0FBTUE7QUFBQTtBQWhIQTtBQUNBOztBQXdIQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQStOQTtBQUVBO0FBQUE7QUFoT0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7O0FBSUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFEQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBOztBQUVBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFEQTtBQUlBO0FBSkE7QUFJQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7O0FBRUE7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQURBO0FBSUE7QUFKQTtBQUlBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTs7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFJQTtBQUpBO0FBSUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBOztBQUVBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFEQTtBQUlBO0FBSkE7QUFJQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTs7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFKQTtBQU9BO0FBUEE7QUFDQTs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7O0FBRUE7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQURBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBSkE7QUFPQTtBQVBBO0FBQ0E7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBOztBQUVBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFEQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUpBO0FBT0E7QUFQQTtBQUNBOztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBOztBQUVBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFEQTtBQUtBO0FBTEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUpBO0FBUUE7QUFSQTtBQUNBOztBQU9BO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTs7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFLQTtBQUxBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFKQTtBQVFBO0FBUkE7QUFDQTs7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTs7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFKQTtBQU9BO0FBUEE7QUFDQTs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFLQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQU5BOzs7QUFPQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN4NEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzlWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDeExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
          })
        