
          window.__NEXT_REGISTER_CHUNK('containers_About_23db813ce1c211fe47ddec7b3f3a6ff3.js', function() {
            webpackJsonp([5],{

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

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(498);

var _actions = __webpack_require__(497);

var _recompose = __webpack_require__(509);

var _About = __webpack_require__(785);

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

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = __webpack_require__(95);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _style = __webpack_require__(499);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(451);

var _Grid = __webpack_require__(500);

var _Grid2 = _interopRequireDefault(_Grid);

var _reactYoutube = __webpack_require__(786);

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

var _GameGrid = __webpack_require__(590);

var _GameGrid2 = _interopRequireDefault(_GameGrid);

var _Icon = __webpack_require__(528);

var _Icon2 = _interopRequireDefault(_Icon);

var _IconButton = __webpack_require__(594);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _materialUiToggleIcon = __webpack_require__(595);

var _materialUiToggleIcon2 = _interopRequireDefault(_materialUiToggleIcon);

var _PlayArrow = __webpack_require__(592);

var _PlayArrow2 = _interopRequireDefault(_PlayArrow);

var _Pause = __webpack_require__(593);

var _Pause2 = _interopRequireDefault(_Pause);

var _boardNames = __webpack_require__(527);

var _helpers = __webpack_require__(591);

var _colors = __webpack_require__(492);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var beaconCoordinates = __webpack_require__(800);
var beehiveCoordinates = __webpack_require__(801);
var blinkerCoordinates = __webpack_require__(802);
var blockCoordinates = __webpack_require__(803);
var boatCoordinates = __webpack_require__(804);
var gliderCoordinates = __webpack_require__(805);
var gunCoordinates = __webpack_require__(806);
var loafCoordinates = __webpack_require__(807);
var lspaceshipCoordinates = __webpack_require__(808);
var oscGlassesCoordinates = __webpack_require__(809);
var oscQuadCoordinates = __webpack_require__(810);
var toadCoordinates = __webpack_require__(811);

var styles = {

    mainContent: {
        marginTop: 75
    },
    rules: {
        backgroundColor: 'rgba(240,248,255,.7)'

    },
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
    video: {
        textAlign: 'center',
        fontFamily: 'Open Sans',
        fallbacks: {
            fontFamily: 'sans-serif'
        },
        marginTop: 30
    },
    boardsSection: {
        display: 'inline-block',
        marginTop: 30
    },
    link: {
        'text-decoration': 'underline !important',
        'overflow-wrap': 'break-word',
        'word-wrap': 'break-word'
    }
};

var About = function (_Component) {
    (0, _inherits3.default)(About, _Component);

    function About(props) {
        var _parameters;

        (0, _classCallCheck3.default)(this, About);

        var _this = (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).call(this, props));

        _this.handleWindowSizeChange = function () {
            _this.examples[_boardNames.boardNames.GUN].grid.handleWindowSizeChange(_this.examples[_boardNames.boardNames.GUN].canvas);
        };

        var squareSize = 12;
        var parameters = (_parameters = {}, (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.BEACON, {
            width: 6,
            height: 6,
            coordinates: createCellsList(beaconCoordinates),
            wrapped: true,
            name: "Beacon"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.BEEHIVE, {
            width: 6,
            height: 5,
            coordinates: createCellsList(beehiveCoordinates),
            wrapped: true,
            name: "Beehive"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.BLINKER, {
            width: 5,
            height: 5,
            coordinates: createCellsList(blinkerCoordinates),
            wrapped: true,
            name: "Blinker"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.BLOCK, {
            width: 4,
            height: 4,
            coordinates: createCellsList(blockCoordinates),
            wrapped: true,
            name: "Block"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.BOAT, {
            width: 5,
            height: 5,
            coordinates: createCellsList(boatCoordinates),
            wrapped: true,
            name: "Boat"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.GLIDER, {
            width: 10,
            height: 10,
            coordinates: createCellsList(gliderCoordinates),
            wrapped: true,
            name: "Glider"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.GUN, {
            width: 40,
            height: 20,
            coordinates: createCellsList(gunCoordinates),
            wrapped: false,
            name: "The Gosper Glider Gun"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.LOAF, {
            width: 6,
            height: 6,
            coordinates: createCellsList(loafCoordinates),
            wrapped: true,
            name: "Loaf"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.SPACESHIP, {
            width: 12,
            height: 12,
            coordinates: createCellsList(lspaceshipCoordinates),
            wrapped: true,
            name: "Lightweight Spaceship"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.GLASSES, {
            width: 20,
            height: 13,
            coordinates: createCellsList(oscGlassesCoordinates),
            wrapped: true,
            name: "Glasses"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.QUAD, {
            width: 8,
            height: 8,
            coordinates: createCellsList(oscQuadCoordinates),
            wrapped: true,
            name: "Quad"
        }), (0, _defineProperty3.default)(_parameters, _boardNames.boardNames.TOAD, {
            width: 6,
            height: 6,
            coordinates: createCellsList(toadCoordinates),
            wrapped: true,
            name: "Toad"
        }), _parameters);

        _this.examples = {};
        for (var name in parameters) {
            _this.examples[name] = {
                grid: new _GameGrid2.default(name, parameters[name].width, parameters[name].height, squareSize, !parameters[name].wrapped),
                cells: name == _boardNames.boardNames.GUN ? (0, _helpers.shiftPattern)(parameters[name].coordinates, 1, 1) : (0, _helpers.shiftPatternToCenter)(parameters[name].coordinates, parameters[name].height, parameters[name].width),
                name: parameters[name].name
            };
        }

        _this.state = {
            reload: false,
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
                factor: window.innerWidth < 600 ? 3 : window.innerWidth < 960 ? 6 : 10
            }
        };

        for (var _name in parameters) {
            _this.examples[_name].canvasWidth = _this.getCanvasWidth(_this.examples[_name].grid);
        }

        _this.startedPatternsList = [];
        _this.rAF = null;

        _this.interval = 300;

        _this.setStopped = function (stopped, name) {
            return props.setStopped(stopped, name);
        };
        return _this;
    }

    (0, _createClass3.default)(About, [{
        key: 'getCanvasWidth',
        value: function getCanvasWidth(grid) {
            var screen = this.state.screen;
            var width = grid.width,
                squareSize = grid.squareSize;

            var w = (width + 1) * squareSize * screen.width / 100 * .7 / screen.factor;
            return w > screen.width * .6 ? screen.width * .6 : w;
        }
    }, {
        key: 'handlePlayToggle',
        value: function handlePlayToggle(pattern) {

            if (this.props.stopped[pattern.grid.name]) {
                this.start(pattern);
            } else {

                this.stop(pattern);
            }
        }
    }, {
        key: 'stop',
        value: function stop(pattern) {
            if (!this.props.stopped[pattern.grid.name]) {
                this.setStopped(true, pattern.grid.name);
                var index = this.startedPatternsList.indexOf(pattern);
                this.startedPatternsList.splice(index, 1);
                if (this.startedPatternsList.length === 0) {
                    cancelAnimationFrame(this.rAF);
                }
            }
        }
    }, {
        key: 'start',
        value: function start(pattern) {
            var _this2 = this;

            if (this.props.stopped[pattern.grid.name]) {
                this.setStopped(false, pattern.grid.name);
                this.startedPatternsList.push(pattern);
                this.then = Date.now();
                if (this.startedPatternsList.length === 1) {
                    this.rAF = requestAnimationFrame(function () {
                        _this2.update();
                    });
                }
            }
        }
    }, {
        key: 'update',
        value: function update() {
            var _this3 = this;

            this.now = Date.now();
            this.delta = this.now - this.then;

            if (this.delta > this.interval) {
                this.then = this.now - this.delta % this.interval;

                this.startedPatternsList.forEach(function (p) {
                    return p.grid.update();
                });
            }
            this.rAF = requestAnimationFrame(function () {
                _this3.update();
            });
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            this.examples[_boardNames.boardNames.GUN].canvasWidth = this.examples[_boardNames.boardNames.GUN].canvasWidth > this.state.screen.width * .6 ? this.state.screen.width * .6 : this.examples[_boardNames.boardNames.GUN].canvasWidth;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            window.addEventListener('resize', this.handleWindowSizeChange);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var ratio = this.state.screen.ratio;
            for (var name in this.examples) {
                var _examples$name = this.examples[name],
                    grid = _examples$name.grid,
                    cells = _examples$name.cells,
                    canvas = _examples$name.canvas;

                grid.makeBoard(grid.width, grid.height, grid.squareSize, ratio, canvas, cells);
                grid.update();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {

            cancelAnimationFrame(this.rAF);
            this.setStopped(true, null);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var classes = this.props.classes;
            return _react2.default.createElement('div', { className: classes.mainContent, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 285
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 287
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: 1, sm: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 289
                }
            }, ' '), _react2.default.createElement(_Grid2.default, { item: true, xs: 10, sm: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 291
                }
            }, _react2.default.createElement('p', { className: classes.intro + ' ' + classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 293
                }
            }, _react2.default.createElement('strong', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 294
                }
            }, 'The Game of Life'), ' is the best-known two-dimensional "', _react2.default.createElement('a', { className: classes.link, href: 'https://en.wikipedia.org/wiki/Cellular_automaton', target: '_blank', title: 'Cellular automaton', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 295
                }
            }, 'cellular automaton'), '", invented in 1970 by the British mathematician ', _react2.default.createElement('a', { className: classes.link, href: 'https://en.wikipedia.org/wiki/John_Horton_Conway', title: 'John Conway', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 296
                }
            }, 'John Horton Conway'), '. The life is a cellular automaton, which is a model of a discrete abstract computational system, composed of a finite or infinite set of objects \u2013 "cells". The cell in the game of life has two states - \u201Calive\u201D and \u201Cdead\u201D, or "populated" and "unpopulated". The cells live on a two-dimensional grid and each cell has eight adjacent cells - "neighbors". All cells change their state simultaneously, according to update rules by taking into account the states of their neighbors.'), _react2.default.createElement('div', { className: classes.video, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 304
                }
            }, _react2.default.createElement(_reactYoutube2.default, {
                videoId: 'R9Plq-D1gEk',
                opts: { width: '100%', playerVars: { showinfo: 0, rel: 0 } },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 305
                }
            }), 'John H. Conway on the creation of his Game of Life'), _react2.default.createElement('div', { className: classes.video, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 314
                }
            }, _react2.default.createElement(_reactYoutube2.default, {
                videoId: 'CgOcEZinQ2I',
                opts: { width: '100%', playerVars: { showinfo: 0, rel: 0 } },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 315
                }
            }), 'Fragment from Stephen Hawking`s The Meaning of Life'), _react2.default.createElement('div', { className: classes.rulesPar, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 324
                }
            }, _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 325
                }
            }, 'Rules'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 328
                }
            }, 'Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:'), _react2.default.createElement('div', { className: classes.rules, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 333
                }
            }, _react2.default.createElement('ul', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 334
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 335
                }
            }, 'Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 336
                }
            }, 'Any live cell with two or three live neighbours lives on to the next generation.'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 337
                }
            }, 'Any live cell with more than three live neighbours dies, as if by overpopulation.'), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 338
                }
            }, 'Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.'))), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 341
                }
            }, 'The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed - births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.')), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 350
                }
            }, 'Examples of Patterns'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 353
                }
            }, 'In order to simulate infinite grid on the game board and in the examples below (except for the gun pattern), cells that are situated on the edges of the boards are handled in a toroidal manner, i.e. lower neighbor of a cell situated on the bottom edge of board will be a cell from the top edge on the same column and a neighbor to the right of a cell situated on the right edge will be from the left edge.'), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 361
                }
            }, 'Still Life'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 364
                }
            }, 'Stable finite patterns.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 367
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 16, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 368
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 372
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.BLOCK].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.BLOCK].name,
                withButton: false,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.BLOCK].canvas = el;
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 373
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 382
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.BOAT].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.BOAT].name,
                withButton: false,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.BOAT].canvas = el;
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 383
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 392
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.LOAF].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.LOAF].name,
                withButton: false,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.LOAF].canvas = el;
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 393
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 402
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.BEEHIVE].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.BEEHIVE].name,
                withButton: false,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.BEEHIVE].canvas = el;
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 403
                }
            })))), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 413
                }
            }, 'Oscillators'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 416
                }
            }, 'These patterns repeat their configuration periodically and infinitely. The basic oscillators have periods of two or three ticks. The most common period-2 oscillators include:'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 420
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 16, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 421
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 424
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.BLINKER].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.BLINKER].name,
                stopped: this.props.stopped[_boardNames.boardNames.BLINKER],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.BLINKER].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.BLINKER]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 425
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 437
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.BEACON].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.BEACON].name,
                stopped: this.props.stopped[_boardNames.boardNames.BEACON],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.BEACON].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.BEACON]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 438
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 450
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.TOAD].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.TOAD].name,
                stopped: this.props.stopped[_boardNames.boardNames.TOAD],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.TOAD].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.TOAD]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 451
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 462
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.GLASSES].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.GLASSES].name,
                stopped: this.props.stopped[_boardNames.boardNames.GLASSES],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.GLASSES].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.GLASSES]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 463
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 474
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.QUAD].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.QUAD].name,
                stopped: this.props.stopped[_boardNames.boardNames.QUAD],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.QUAD].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.QUAD]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 475
                }
            })))), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 488
                }
            }, 'Gliders and Spaceships'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 491
                }
            }, 'A spaceship is more complex oscillator, returning to the same configuration but shifted after a finite number of generations. The glider is a simple spaceship that has period 4, i.e. repeats every four generations, but moves diagonally one cell every four generations. Other examples of simple spaceships include lightweight, medium weight, and heavyweight spaceships. They each move in a straight line.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 498
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 16, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 499
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 502
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.GLIDER].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.GLIDER].name,
                stopped: this.props.stopped[_boardNames.boardNames.GLIDER],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.GLIDER].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.GLIDER]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 503
                }
            })), _react2.default.createElement(_Grid2.default, { item: true, xs: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 515
                }
            }, _react2.default.createElement(BoardElement, {
                width: this.examples[_boardNames.boardNames.SPACESHIP].canvasWidth,
                patternName: this.examples[_boardNames.boardNames.SPACESHIP].name,
                stopped: this.props.stopped[_boardNames.boardNames.SPACESHIP],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.SPACESHIP].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.SPACESHIP]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 516
                }
            })))), _react2.default.createElement('h4', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 530
                }
            }, 'Guns'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 533
                }
            }, 'Conway offered a prize for any example of patterns that grow forever. Conway\'s prize was collected soon after its announcement, when two different ways were discovered for designing a pattern that grows forever. The first of these patterns is the period-30 glider gun, which is based on the interaction of two queen bee shuttles. Where these shuttles collide, instead of producing beehives, they produce a new glider. This glider moves away in time for the process to repeat itself 30 steps later.'), _react2.default.createElement('div', { className: classes.boardsSection, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 541
                }
            }, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 542
                }
            }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 545
                }
            }, _react2.default.createElement(BoardElement, {
                patternName: this.examples[_boardNames.boardNames.GUN].name,
                stopped: this.props.stopped[_boardNames.boardNames.GUN],
                buttonColor: _colors.colors.BUTTON,
                withButton: true,
                setCanvas: function setCanvas(el) {
                    return _this4.examples[_boardNames.boardNames.GUN].canvas = el;
                },
                handlePlayToggle: function handlePlayToggle() {
                    return _this4.handlePlayToggle(_this4.examples[_boardNames.boardNames.GUN]);
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 546
                }
            })))), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 559
                }
            }, 'Origins'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 563
                }
            }, 'Conway was interested in a problem presented in the 1940s by mathematician ', _react2.default.createElement('a', { className: classes.link, href: 'https://en.wikipedia.org/wiki/John_von_Neumann', title: 'John von Neumann', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 564
                }
            }, 'John von Neumann'), ', who attempted to find a hypothetical machine that could build copies of itself and succeeded when he found a mathematical model for such a machine with very complicated rules on a rectangular grid. The Game of Life emerged as Conway\'s successful attempt to drastically simplify von Neumann\'s ideas.'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 572
                }
            }, 'The game made its first public appearance in the October 1970 issue of ', _react2.default.createElement('i', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 572
                }
            }, 'Scientific American'), ', in Martin Gardner\'s column. From a theoretical point of view, it is interesting because it has the power of a universal Turing machine: that is, anything that can be computed algorithmically can be computed within Conway\'s Game of Life. Gardner wrote:'), _react2.default.createElement('blockquote', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 577
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 578
                }
            }, 'The game made Conway instantly famous, but it also opened up a whole new field of mathematical research, the field of cellular automata\xA0... Because of Life\'s analogies with the rise, fall and alterations of a society of living organisms, it belongs to a growing class of what are called "simulation games" (games that resemble real life processes).')), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 585
                }
            }, 'References'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 588
                }
            }, 'Wikipedia. 2017. Conway\'s Game of Life. [ONLINE] Available at: ', _react2.default.createElement('a', { className: classes.link, href: 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 589
                }
            }, 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'), '. Overview of history, rules and examples of patterns of the Game of Life'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 592
                }
            }, 'www.ericweisstein.com. 1996-2005. Eric Weisstein\'s Treasure Trove of the Life C.A. [ONLINE] Available at: ', _react2.default.createElement('a', { className: classes.link, href: 'http://www.ericweisstein.com/encyclopedias/life/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 593
                }
            }, 'http://www.ericweisstein.com/encyclopedias/life/'), '. This source includes large collection of examples of possible patterns.'), _react2.default.createElement('h2', { className: classes.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 596
                }
            }, 'Links'), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 599
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.scholarpedia.org/article/Game_of_Life', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 600
                }
            }, 'www.scholarpedia.org/article/Game_of_Life')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 602
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'https://www.ibiblio.org/lifepatterns/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 603
                }
            }, 'www.ibiblio.org/lifepatterns/')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 605
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://mathworld.wolfram.com/GameofLife.html', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 606
                }
            }, 'http://mathworld.wolfram.com/GameofLife.html')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 608
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.conwaylife.com/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 609
                }
            }, 'http://www.conwaylife.com/')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 611
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://golly.sourceforge.net/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 612
                }
            }, 'http://golly.sourceforge.net/')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 614
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.math.com/students/wonders/life/life.html', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 615
                }
            }, 'http://www.math.com/students/wonders/life/life.html')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 617
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.cuug.ab.ca/dewara/life/life.html', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 618
                }
            }, 'http://www.cuug.ab.ca/dewara/life/life.html')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 620
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.radicaleye.com/lifepage/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 621
                }
            }, 'http://www.radicaleye.com/lifepage/')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 623
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 624
                }
            }, 'https://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 626
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://www.instructables.com/id/OTCA-Metapixel-Conways-Game-of-Life/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 627
                }
            }, 'http://www.instructables.com/id/OTCA-Metapixel-Conways-Game-of-Life/')), _react2.default.createElement('p', { className: classes.text, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 629
                }
            }, _react2.default.createElement('a', { className: classes.link, href: 'http://natureofcode.com/book/chapter-7-cellular-automata/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 630
                }
            }, 'http://natureofcode.com/book/chapter-7-cellular-automata/'))), _react2.default.createElement(_Grid2.default, { item: true, xs: 1, sm: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 633
                }
            }, ' ')));
        }
    }]);
    return About;
}(_react.Component);

About.propTypes = {
    classes: _propTypes2.default.object.isRequired,
    setStopped: _propTypes2.default.func.isRequired,
    stopped: _propTypes2.default.shape((_PropTypes$shape = {}, (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.MAIN, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BLOCK, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BOAT, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.LOAF, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BEEHIVE, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BLINKER, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.BEACON, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.TOAD, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.GLIDER, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.SPACESHIP, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.GUN, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.GLASSES, _propTypes2.default.bool), (0, _defineProperty3.default)(_PropTypes$shape, _boardNames.boardNames.QUAD, _propTypes2.default.bool), _PropTypes$shape)).isRequired
};

exports.default = (0, _styles.withStyles)(styles)(About);

var patternBoard = function patternBoard(grid, cellsList) {
    return { grid: grid, cellsList: cellsList };
};

var BoardElement = function BoardElement(_ref) {
    var width = _ref.width,
        patternName = _ref.patternName,
        stopped = _ref.stopped,
        buttonColor = _ref.buttonColor,
        withButton = _ref.withButton,
        props = (0, _objectWithoutProperties3.default)(_ref, ['width', 'patternName', 'stopped', 'buttonColor', 'withButton']);

    return _react2.default.createElement('div', { style: { width: width, height: "100%" }, className: 'jsx-1941372934' + ' ' + 'board',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 671
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1941372934' + ' ' + 'item',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 672
        }
    }, _react2.default.createElement('div', {
        className: 'jsx-1941372934' + ' ' + 'canvas',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 673
        }
    }, _react2.default.createElement('canvas', {
        ref: props.setCanvas,
        className: 'jsx-1941372934',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 674
        }
    })), withButton ? _react2.default.createElement(_IconButton2.default, { className: 'button', title: stopped ? "Start" : "Pause", onClick: props.handlePlayToggle, __source: {
            fileName: _jsxFileName,
            lineNumber: 679
        }
    }, _react2.default.createElement(_materialUiToggleIcon2.default, {
        on: stopped,
        onIcon: _react2.default.createElement(_PlayArrow2.default, { className: 'icon', __source: {
                fileName: _jsxFileName,
                lineNumber: 682
            }
        }),
        offIcon: _react2.default.createElement(_Pause2.default, { className: 'icon', __source: {
                fileName: _jsxFileName,
                lineNumber: 683
            }
        }),

        __source: {
            fileName: _jsxFileName,
            lineNumber: 680
        }
    })) : _react2.default.createElement('div', {
        className: 'jsx-1941372934',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 689
        }
    }), _react2.default.createElement('div', {
        className: 'jsx-1941372934',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 694
        }
    }, patternName)), _react2.default.createElement(_style2.default, {
        styleId: '1941372934',
        css: '.board{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:.7em;text-align:center;font-family:\'Open Sans\',sans-serif;}.item{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.button{width:35px;height:35px;color:' + _colors.colors.BUTTON + ';}.icon{width:25px;height:25px;}.canvas{background-color:' + _colors.colors.BOARD + ';}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTByQjJCLEFBRzhCLEFBT08sQUFHVCxBQU1BLEFBS21DLFdBVmxDLEFBTUEsWUFMc0IsQUFPdEMsdUJBR0EsWUFSQSxjQU5BLEVBUG1CLGVBQ0csa0JBQ2tCLG1DQUV4QyIsImZpbGUiOiJjb21wb25lbnRzXFxBYm91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9mb2xkZXIvbmV3L2dvbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdtYXRlcmlhbC11aS9HcmlkJztcclxuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XHJcbmltcG9ydCBHYW1lR3JpZCBmcm9tICcuLi9oZWxwZXJzL0dhbWVHcmlkJztcclxuaW1wb3J0IEljb24gZnJvbSAnbWF0ZXJpYWwtdWkvSWNvbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgVG9nZ2xlSWNvbiBmcm9tICdtYXRlcmlhbC11aS10b2dnbGUtaWNvbic7XHJcbmltcG9ydCBQbGF5QXJyb3cgZnJvbSAnbWF0ZXJpYWwtdWktaWNvbnMvUGxheUFycm93JztcclxuaW1wb3J0IFBhdXNlIGZyb20gJ21hdGVyaWFsLXVpLWljb25zL1BhdXNlJztcclxuaW1wb3J0IHtib2FyZE5hbWVzIGFzIGJvYXJkTmFtZX0gZnJvbSAnLi4vaGVscGVycy9ib2FyZE5hbWVzJ1xyXG5pbXBvcnQgeyBzaGlmdFBhdHRlcm5Ub0NlbnRlciwgc2hpZnRQYXR0ZXJuIH0gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IHtjb2xvcnMgYXMgY29sb3J9IGZyb20gJy4uL2hlbHBlcnMvY29sb3JzJztcclxuXHJcbnZhciBiZWFjb25Db29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9iZWFjb24udHh0Jyk7XHJcbnZhciBiZWVoaXZlQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvYmVlaGl2ZS50eHQnKTtcclxudmFyIGJsaW5rZXJDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ibGlua2VyLnR4dCcpO1xyXG52YXIgYmxvY2tDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ibG9jay50eHQnKTtcclxudmFyIGJvYXRDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9ib2F0LnR4dCcpO1xyXG52YXIgZ2xpZGVyQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvZ2xpZGVyLnR4dCcpO1xyXG52YXIgZ3VuQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvZ3VuLnR4dCcpO1xyXG52YXIgbG9hZkNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL2xvYWYudHh0Jyk7XHJcbnZhciBsc3BhY2VzaGlwQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvbHNwYWNlc2hpcC50eHQnKTtcclxudmFyIG9zY0dsYXNzZXNDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9vc2NHbGFzc2VzLnR4dCcpO1xyXG52YXIgb3NjUXVhZENvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL29zY1F1YWQudHh0Jyk7XHJcbnZhciB0b2FkQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvdG9hZC50eHQnKTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuXHJcblx0bWFpbkNvbnRlbnQ6IHtcclxuXHRcdG1hcmdpblRvcDogNzVcclxuXHR9LFxyXG4gICAgcnVsZXM6IHtcclxuICAgIFx0YmFja2dyb3VuZENvbG9yOidyZ2JhKDI0MCwyNDgsMjU1LC43KScsXHJcbiAgICBcdFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICBmb250RmFtaWx5OiAnT3BlbiBTYW5zJywgXHJcbiAgICAgICAgZmFsbGJhY2tzOntcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLFxyXG4gICAgICAgIH0sICAgICBcdFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIFxyXG4gICAgICAgIGZhbGxiYWNrczp7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcclxuICAgICAgICBtYXJnaW5Ub3A6IDQwXHJcbiAgICB9LFxyXG4gICAgdmlkZW86IHtcclxuICAgIFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIFx0Zm9udEZhbWlseTogJ09wZW4gU2FucycsIFxyXG4gICAgICAgIGZhbGxiYWNrczp7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcclxuICAgICAgICB9LFxyXG4gICAgXHRtYXJnaW5Ub3A6MzAsXHJcbiAgICB9LFxyXG4gICAgYm9hcmRzU2VjdGlvbjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgXHRtYXJnaW5Ub3A6MzAsXHJcbiAgICB9LFxyXG4gICAgbGluazoge1xyXG4gICAgICAgICd0ZXh0LWRlY29yYXRpb24nOiAndW5kZXJsaW5lICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICdvdmVyZmxvdy13cmFwJzogJ2JyZWFrLXdvcmQnLFxyXG4gICAgICAgICd3b3JkLXdyYXAnOiAnYnJlYWstd29yZCcsXHJcbiAgICB9LCAgICBcclxufTtcclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIEFib3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgbGV0IHNxdWFyZVNpemUgPSAxMjtcclxuICAgICAgICBsZXQgcGFyYW1ldGVycyA9IHtcclxuICAgICAgICAgICAgW2JvYXJkTmFtZS5CRUFDT05dOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNiwgXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KGJlYWNvbkNvb3JkaW5hdGVzKSwgICAgXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCAgIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJCZWFjb25cIiwgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWUuQkVFSElWRV06IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChiZWVoaXZlQ29vcmRpbmF0ZXMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJlZWhpdmVcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZS5CTElOS0VSXToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KGJsaW5rZXJDb29yZGluYXRlcyksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmxpbmtlclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lLkJMT0NLXToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KGJsb2NrQ29vcmRpbmF0ZXMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJsb2NrXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWUuQk9BVF06IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChib2F0Q29vcmRpbmF0ZXMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJvYXRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZS5HTElERVJdOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChnbGlkZXJDb29yZGluYXRlcyksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiR2xpZGVyXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWUuR1VOXToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoZ3VuQ29vcmRpbmF0ZXMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogZmFsc2UsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJUaGUgR29zcGVyIEdsaWRlciBHdW5cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZS5MT0FGXToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KGxvYWZDb29yZGluYXRlcyksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTG9hZlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lLlNQQUNFU0hJUF06IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTIsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KGxzcGFjZXNoaXBDb29yZGluYXRlcyksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTGlnaHR3ZWlnaHQgU3BhY2VzaGlwXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWUuR0xBU1NFU106IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTMsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KG9zY0dsYXNzZXNDb29yZGluYXRlcyksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiR2xhc3Nlc1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lLlFVQURdOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3Qob3NjUXVhZENvb3JkaW5hdGVzKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJRdWFkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWUuVE9BRF06IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdCh0b2FkQ29vcmRpbmF0ZXMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRvYWRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICB0aGlzLmV4YW1wbGVzID0ge307XHJcbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHBhcmFtZXRlcnMpe1xyXG4gICAgICAgICAgICB0aGlzLmV4YW1wbGVzW25hbWVdID0ge1xyXG4gICAgICAgICAgICAgICAgZ3JpZDogbmV3IEdhbWVHcmlkKG5hbWUsIHBhcmFtZXRlcnNbbmFtZV0ud2lkdGgsIHBhcmFtZXRlcnNbbmFtZV0uaGVpZ2h0LCBzcXVhcmVTaXplLCAhcGFyYW1ldGVyc1tuYW1lXS53cmFwcGVkKSxcclxuICAgICAgICAgICAgICAgIGNlbGxzOiBuYW1lID09IGJvYXJkTmFtZS5HVU4gPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFBhdHRlcm4ocGFyYW1ldGVyc1tuYW1lXS5jb29yZGluYXRlcywgMSwgMSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0UGF0dGVyblRvQ2VudGVyKHBhcmFtZXRlcnNbbmFtZV0uY29vcmRpbmF0ZXMsIHBhcmFtZXRlcnNbbmFtZV0uaGVpZ2h0LCBwYXJhbWV0ZXJzW25hbWVdLndpZHRoKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHBhcmFtZXRlcnNbbmFtZV0ubmFtZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcmVsb2FkOmZhbHNlLFxyXG4gICAgICAgICAgICBzY3JlZW46IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgcmF0aW86IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsXHJcbiAgICAgICAgICAgICAgICBmYWN0b3I6IHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwID8gMyA6IHdpbmRvdy5pbm5lcldpZHRoIDwgOTYwID8gNiA6IDEwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBuYW1lIGluIHBhcmFtZXRlcnMpe1xyXG4gICAgICAgICAgICB0aGlzLmV4YW1wbGVzW25hbWVdLmNhbnZhc1dpZHRoID0gdGhpcy5nZXRDYW52YXNXaWR0aCh0aGlzLmV4YW1wbGVzW25hbWVdLmdyaWQpIFxyXG4gICAgICAgIH1cclxuXHJcblx0XHR0aGlzLnN0YXJ0ZWRQYXR0ZXJuc0xpc3QgPSBbXTtcclxuXHRcdHRoaXMuckFGID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLmludGVydmFsPTMwMDtcclxuXHRcclxuICAgICAgICB0aGlzLnNldFN0b3BwZWQgPSAoc3RvcHBlZCwgbmFtZSkgPT4gcHJvcHMuc2V0U3RvcHBlZChzdG9wcGVkLCBuYW1lKTtcclxuXHR9XHJcblxyXG4gICAgZ2V0Q2FudmFzV2lkdGgoZ3JpZCl7XHJcbiAgICAgICAgbGV0IHtzY3JlZW59ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQge3dpZHRoLCBzcXVhcmVTaXplfSA9IGdyaWQ7XHJcbiAgICAgICAgbGV0IHcgPSAoKHdpZHRoICsgMSkgKiBzcXVhcmVTaXplICogc2NyZWVuLndpZHRoLzEwMCAqIC43KS9zY3JlZW4uZmFjdG9yO1xyXG4gICAgICAgIHJldHVybiB3ID4gc2NyZWVuLndpZHRoICogLjYgPyBzY3JlZW4ud2lkdGggKiAuNiA6IHc7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGxheVRvZ2dsZShwYXR0ZXJuKXtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnByb3BzLnN0b3BwZWRbcGF0dGVybi5ncmlkLm5hbWVdKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFydChwYXR0ZXJuKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdG9wKHBhdHRlcm4pO1xyXG4gICAgICAgIH1cclxuICAgIH0gIFxyXG5cclxuICAgIHN0b3AocGF0dGVybil7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMuc3RvcHBlZFtwYXR0ZXJuLmdyaWQubmFtZV0pe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3BwZWQodHJ1ZSwgcGF0dGVybi5ncmlkLm5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN0YXJ0ZWRQYXR0ZXJuc0xpc3QuaW5kZXhPZihwYXR0ZXJuKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydGVkUGF0dGVybnNMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhcnRlZFBhdHRlcm5zTGlzdC5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuckFGKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXJ0KHBhdHRlcm4pe1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3RvcHBlZFtwYXR0ZXJuLmdyaWQubmFtZV0pe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0b3BwZWQoZmFsc2UsIHBhdHRlcm4uZ3JpZC5uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydGVkUGF0dGVybnNMaXN0LnB1c2gocGF0dGVybik7XHJcbiAgICAgICAgICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhcnRlZFBhdHRlcm5zTGlzdC5sZW5ndGggPT09IDEpe1xyXG4gICAgICAgICAgICBcdHRoaXMuckFGID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+e3RoaXMudXBkYXRlKCl9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0dXBkYXRlKCl7XHJcbiAgICAgICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5kZWx0YSA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlbHRhID4gdGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5kZWx0YSAlIHRoaXMuaW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZFBhdHRlcm5zTGlzdC5mb3JFYWNoKHAgPT4gcC5ncmlkLnVwZGF0ZSgpKVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIHRoaXMuckFGID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+e3RoaXMudXBkYXRlKCl9KTsgXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlV2luZG93U2l6ZUNoYW5nZSA9ICgpID0+IHtcclxuXHRcdHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdVTl0uZ3JpZC5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdVTl0uY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xyXG5cdFx0dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuR1VOXS5jYW52YXNXaWR0aCA9IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdVTl0uY2FudmFzV2lkdGggPiB0aGlzLnN0YXRlLnNjcmVlbi53aWR0aCAqIC42ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNjcmVlbi53aWR0aCAqIC42IDogdGhpcy5leGFtcGxlc1tib2FyZE5hbWUuR1VOXS5jYW52YXNXaWR0aFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVXaW5kb3dTaXplQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgcmF0aW8gPSB0aGlzLnN0YXRlLnNjcmVlbi5yYXRpb1xyXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiB0aGlzLmV4YW1wbGVzKXtcclxuICAgICAgICAgICAgbGV0IHtncmlkLCBjZWxscywgY2FudmFzfSA9IHRoaXMuZXhhbXBsZXNbbmFtZV07XHJcbiAgICAgICAgICAgIGdyaWQubWFrZUJvYXJkKGdyaWQud2lkdGgsIGdyaWQuaGVpZ2h0LCBncmlkLnNxdWFyZVNpemUsIHJhdGlvLCBjYW52YXMsIGNlbGxzKTtcclxuICAgICAgICAgICAgZ3JpZC51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yQUYpOyAgICBcclxuICAgICAgICB0aGlzLnNldFN0b3BwZWQodHJ1ZSwgbnVsbClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkgeyAgICBcclxuICAgIFx0Y29uc3QgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3NlcztcclxuICAgIFx0cmV0dXJuKFxyXG4gICAgXHQgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkNvbnRlbnR9PlxyXG4gICAgICAgICAgICBcclxuICAgIFx0ICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgIFx0ICAgXHJcbiAgICBcdCAgICA8R3JpZCBpdGVtIHhzPXsxfSBzbT17Mn0gPiA8L0dyaWQ+XHJcbiAgICBcdCAgICBcclxuICAgIFx0ICAgIDxHcmlkIGl0ZW0geHM9ezEwfSAgc209ezh9ID5cclxuICAgIFx0ICAgIFxyXG4gICAgXHQgICAgXHQ8cCBjbGFzc05hbWU9e2Ake2NsYXNzZXMuaW50cm99ICR7Y2xhc3Nlcy50ZXh0fWB9PlxyXG4gICAgXHQgICAgXHQ8c3Ryb25nPlRoZSBHYW1lIG9mIExpZmU8L3N0cm9uZz4gaXMgdGhlIGJlc3Qta25vd24gdHdvLWRpbWVuc2lvbmFsICBcclxuICAgICAgICAgICAgICAgIFwiPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DZWxsdWxhcl9hdXRvbWF0b25cIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIkNlbGx1bGFyIGF1dG9tYXRvblwiPmNlbGx1bGFyIGF1dG9tYXRvbjwvYT5cIiwgXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRlZCBpbiAxOTcwIGJ5IHRoZSBCcml0aXNoIG1hdGhlbWF0aWNpYW4gPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Kb2huX0hvcnRvbl9Db253YXlcIiB0aXRsZT1cIkpvaG4gQ29ud2F5XCI+Sm9obiBIb3J0b24gQ29ud2F5PC9hPi4gXHJcbiAgICAgICAgICAgICAgICBUaGUgbGlmZSBpcyBhIGNlbGx1bGFyIGF1dG9tYXRvbiwgd2hpY2ggaXMgYSBtb2RlbCBvZiBhIGRpc2NyZXRlIGFic3RyYWN0IGNvbXB1dGF0aW9uYWwgc3lzdGVtLCBcclxuICAgICAgICAgICAgICAgIGNvbXBvc2VkIG9mIGEgZmluaXRlIG9yIGluZmluaXRlIHNldCBvZiBvYmplY3RzIOKAkyBcImNlbGxzXCIuIFRoZSBjZWxsIGluIHRoZSBnYW1lIG9mIGxpZmUgaGFzIHR3byBzdGF0ZXMgLSBcclxuICAgICAgICAgICAgICAgIOKAnGFsaXZl4oCdIGFuZCDigJxkZWFk4oCdLCBvciBcInBvcHVsYXRlZFwiIGFuZCBcInVucG9wdWxhdGVkXCIuIFRoZSBjZWxscyBsaXZlIG9uIGEgdHdvLWRpbWVuc2lvbmFsIGdyaWQgYW5kIGVhY2ggY2VsbCBcclxuICAgICAgICAgICAgICAgIGhhcyBlaWdodCBhZGphY2VudCBjZWxscyAtIFwibmVpZ2hib3JzXCIuIEFsbCBjZWxscyBjaGFuZ2UgdGhlaXIgc3RhdGUgc2ltdWx0YW5lb3VzbHksIGFjY29yZGluZyB0byB1cGRhdGUgXHJcbiAgICAgICAgICAgICAgICBydWxlcyBieSB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBzdGF0ZXMgb2YgdGhlaXIgbmVpZ2hib3JzLlxyXG4gICAgXHQgICAgXHQ8L3A+XHJcbiAgICBcdCAgICBcdFxyXG4gICAgXHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy52aWRlb30+XHJcbiAgICAgICAgICAgICAgICA8WW91VHViZVxyXG4gICAgICAgICAgICAgICAgICB2aWRlb0lkPVwiUjlQbHEtRDFnRWtcIiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBvcHRzPXt7d2lkdGg6JzEwMCUnLCBwbGF5ZXJWYXJzOiB7c2hvd2luZm86MCwgcmVsOjB9fX0gICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIEpvaG4gSC4gQ29ud2F5IG9uIHRoZSBjcmVhdGlvbiBvZiBoaXMgR2FtZSBvZiBMaWZlXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy52aWRlb30+XHJcbiAgICAgICAgICAgICAgICA8WW91VHViZVxyXG4gICAgICAgICAgICAgICAgICB2aWRlb0lkPVwiQ2dPY0VaaW5RMklcIiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBvcHRzPXt7d2lkdGg6JzEwMCUnLCBwbGF5ZXJWYXJzOiB7c2hvd2luZm86MCwgcmVsOjB9fX0gICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIEZyYWdtZW50IGZyb20gU3RlcGhlbiBIYXdraW5nYHMgVGhlIE1lYW5pbmcgb2YgTGlmZVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgXHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ydWxlc1Bhcn0+XHJcbiAgICBcdCAgICBcdDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgXHQgICAgXHRSdWxlc1xyXG4gICAgXHQgICAgXHQ8L2gyPlxyXG4gICAgXHQgICAgXHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICBcdCAgICBcdEV2ZXJ5IGNlbGwgaW50ZXJhY3RzIHdpdGggaXRzIGVpZ2h0IG5laWdoYm91cnMsIFxyXG4gICAgXHQgICAgXHR3aGljaCBhcmUgdGhlIGNlbGxzIHRoYXQgYXJlIGhvcml6b250YWxseSwgdmVydGljYWxseSwgb3IgZGlhZ29uYWxseSBhZGphY2VudC4gXHJcbiAgICBcdCAgICBcdEF0IGVhY2ggc3RlcCBpbiB0aW1lLCB0aGUgZm9sbG93aW5nIHRyYW5zaXRpb25zIG9jY3VyOlxyXG4gICAgXHQgICAgXHQ8L3A+XHJcbiAgICBcdCAgICBcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJ1bGVzfT5cclxuICAgIFx0ICAgIFx0PHVsPlxyXG4gICAgXHRcdFx0XHQ8bGk+QW55IGxpdmUgY2VsbCB3aXRoIGZld2VyIHRoYW4gdHdvIGxpdmUgbmVpZ2hib3VycyBkaWVzLCBhcyBpZiBjYXVzZWQgYnkgdW5kZXJwb3B1bGF0aW9uLjwvbGk+XHJcbiAgICBcdFx0XHRcdDxsaT5BbnkgbGl2ZSBjZWxsIHdpdGggdHdvIG9yIHRocmVlIGxpdmUgbmVpZ2hib3VycyBsaXZlcyBvbiB0byB0aGUgbmV4dCBnZW5lcmF0aW9uLjwvbGk+XHJcbiAgICBcdFx0XHRcdDxsaT5BbnkgbGl2ZSBjZWxsIHdpdGggbW9yZSB0aGFuIHRocmVlIGxpdmUgbmVpZ2hib3VycyBkaWVzLCBhcyBpZiBieSBvdmVycG9wdWxhdGlvbi48L2xpPlxyXG4gICAgXHRcdFx0XHQ8bGk+QW55IGRlYWQgY2VsbCB3aXRoIGV4YWN0bHkgdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGJlY29tZXMgYSBsaXZlIGNlbGwsIGFzIGlmIGJ5IHJlcHJvZHVjdGlvbi48L2xpPlxyXG4gICAgXHRcdFx0PC91bD5cclxuICAgIFx0XHRcdDwvZGl2PlxyXG4gICAgXHRcdFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgXHRcdFx0VGhlIGluaXRpYWwgcGF0dGVybiBjb25zdGl0dXRlcyB0aGUgc2VlZCBvZiB0aGUgc3lzdGVtLiBcclxuICAgIFx0XHRcdFRoZSBmaXJzdCBnZW5lcmF0aW9uIGlzIGNyZWF0ZWQgYnkgYXBwbHlpbmcgdGhlIGFib3ZlIHJ1bGVzIFxyXG4gICAgXHRcdFx0c2ltdWx0YW5lb3VzbHkgdG8gZXZlcnkgY2VsbCBpbiB0aGUgc2VlZCAtIGJpcnRocyBhbmQgZGVhdGhzIG9jY3VyIHNpbXVsdGFuZW91c2x5LCBcclxuICAgIFx0XHRcdGFuZCB0aGUgZGlzY3JldGUgbW9tZW50IGF0IHdoaWNoIHRoaXMgaGFwcGVucyBpcyBzb21ldGltZXMgY2FsbGVkIGEgdGljayBcclxuICAgIFx0XHRcdChpbiBvdGhlciB3b3JkcywgZWFjaCBnZW5lcmF0aW9uIGlzIGEgcHVyZSBmdW5jdGlvbiBvZiB0aGUgcHJlY2VkaW5nIG9uZSkuIFxyXG4gICAgXHRcdFx0VGhlIHJ1bGVzIGNvbnRpbnVlIHRvIGJlIGFwcGxpZWQgcmVwZWF0ZWRseSB0byBjcmVhdGUgZnVydGhlciBnZW5lcmF0aW9ucy5cclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHQ8L2Rpdj5cclxuICAgIFx0ICAgIFx0PGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICBcdCAgICBcdEV4YW1wbGVzIG9mIFBhdHRlcm5zXHJcbiAgICBcdCAgICBcdDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICBJbiBvcmRlciB0byBzaW11bGF0ZSBpbmZpbml0ZSBncmlkIG9uIHRoZSBnYW1lIGJvYXJkIGFuZCBpbiB0aGUgZXhhbXBsZXMgYmVsb3cgKGV4Y2VwdCBmb3IgdGhlIGd1biBwYXR0ZXJuKSwgXHJcbiAgICAgICAgICAgICAgICBjZWxscyB0aGF0IGFyZSBzaXR1YXRlZCBvbiB0aGUgZWRnZXMgb2YgdGhlIGJvYXJkcyBhcmUgaGFuZGxlZCBpbiBhIHRvcm9pZGFsIG1hbm5lciwgXHJcbiAgICAgICAgICAgICAgICBpLmUuIGxvd2VyIG5laWdoYm9yIG9mIGEgY2VsbCBzaXR1YXRlZCBvbiB0aGUgYm90dG9tIGVkZ2Ugb2YgYm9hcmQgd2lsbCBiZSBhIGNlbGwgZnJvbSBcclxuICAgICAgICAgICAgICAgIHRoZSB0b3AgZWRnZSBvbiB0aGUgc2FtZSBjb2x1bW4gYW5kIGEgbmVpZ2hib3IgdG8gdGhlIHJpZ2h0IG9mIGEgY2VsbCBzaXR1YXRlZCBvbiB0aGUgcmlnaHQgXHJcbiAgICAgICAgICAgICAgICBlZGdlIHdpbGwgYmUgZnJvbSB0aGUgbGVmdCBlZGdlLiBcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICBcdCAgICBcdDxoNCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgXHQgICAgXHRTdGlsbCBMaWZlXHJcbiAgICBcdCAgICBcdDwvaDQ+XHJcbiAgICBcdCAgICBcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgIFx0ICAgIFx0U3RhYmxlIGZpbml0ZSBwYXR0ZXJucy5cclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHQ8ZGl2ICBjbGFzc05hbWU9e2NsYXNzZXMuYm9hcmRzU2VjdGlvbn0gPlxyXG4gICAgXHQgICAgXHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17MTZ9ID5cclxuICAgIFx0ICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkJMT0NLXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkJMT0NLXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CTE9DS10uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CT0FUXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkJPQVRdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkJPQVRdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5MT0FGXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkxPQUZdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkxPQUZdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuQkVFSElWRV0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CRUVISVZFXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CRUVISVZFXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgIFx0ICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgXHJcbiAgICBcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHQgICAgPC9kaXY+XHJcbiAgICBcdFx0XHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0XHQgICAgT3NjaWxsYXRvcnMgXHJcbiAgICBcdFx0ICAgIDwvaDQ+XHJcbiAgICBcdFx0ICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgIFx0ICAgIFx0VGhlc2UgcGF0dGVybnMgcmVwZWF0IHRoZWlyIGNvbmZpZ3VyYXRpb24gcGVyaW9kaWNhbGx5IGFuZCBpbmZpbml0ZWx5LiBUaGUgYmFzaWMgb3NjaWxsYXRvcnMgaGF2ZSBwZXJpb2RzIG9mIHR3byBvciB0aHJlZSB0aWNrcy4gXHJcbiAgICAgICAgICAgICAgICBUaGUgbW9zdCBjb21tb24gcGVyaW9kLTIgb3NjaWxsYXRvcnMgaW5jbHVkZTpcclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHQ8ZGl2ICBjbGFzc05hbWU9e2NsYXNzZXMuYm9hcmRzU2VjdGlvbn0gPlxyXG4gICAgXHQgICAgXHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17MTZ9PlxyXG4gICAgXHQgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuQkxJTktFUl0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CTElOS0VSXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lLkJMSU5LRVJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3IgPSB7Y29sb3IuQlVUVE9OfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CTElOS0VSXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkJMSU5LRVJdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CRUFDT05dLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuQkVBQ09OXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lLkJFQUNPTl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHtjb2xvci5CVVRUT059IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkJFQUNPTl0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CRUFDT05dKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHMgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuVE9BRF0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5UT0FEXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lLlRPQURdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3IgPSB7Y29sb3IuQlVUVE9OfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5UT0FEXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLlRPQURdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5HTEFTU0VTXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdMQVNTRVNdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWUuR0xBU1NFU119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHtjb2xvci5CVVRUT059IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdMQVNTRVNdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWUuR0xBU1NFU10pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLlFVQURdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuUVVBRF0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BwZWQgPSB7dGhpcy5wcm9wcy5zdG9wcGVkW2JvYXJkTmFtZS5RVUFEXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge2NvbG9yLkJVVFRPTn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWUuUVVBRF0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5RVUFEXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHQgICAgPC9kaXY+XHJcbiAgICBcdFx0XHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0XHQgICAgR2xpZGVycyBhbmQgU3BhY2VzaGlwc1xyXG4gICAgXHRcdCAgICA8L2g0PlxyXG4gICAgXHRcdCAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICBcdCAgICBcdEEgc3BhY2VzaGlwIGlzIG1vcmUgY29tcGxleCBvc2NpbGxhdG9yLCByZXR1cm5pbmcgdG8gdGhlIHNhbWUgY29uZmlndXJhdGlvbiBidXQgc2hpZnRlZCBhZnRlciBhIGZpbml0ZSBudW1iZXIgb2YgZ2VuZXJhdGlvbnMuIFxyXG4gICAgXHQgICAgXHRUaGUgZ2xpZGVyIGlzIGEgc2ltcGxlIHNwYWNlc2hpcCB0aGF0IGhhcyBwZXJpb2QgNCwgaS5lLiByZXBlYXRzIGV2ZXJ5IGZvdXIgZ2VuZXJhdGlvbnMsIGJ1dCBcclxuICAgICAgICAgICAgICAgIG1vdmVzIGRpYWdvbmFsbHkgb25lIGNlbGwgZXZlcnkgZm91ciBnZW5lcmF0aW9ucy5cclxuICAgIFx0ICAgIFx0T3RoZXIgZXhhbXBsZXMgb2Ygc2ltcGxlIHNwYWNlc2hpcHMgaW5jbHVkZSBsaWdodHdlaWdodCwgbWVkaXVtIHdlaWdodCwgYW5kIGhlYXZ5d2VpZ2h0IHNwYWNlc2hpcHMuIFxyXG4gICAgXHQgICAgXHRUaGV5IGVhY2ggbW92ZSBpbiBhIHN0cmFpZ2h0IGxpbmUuXHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuICAgIFx0ICAgIFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezE2fT5cclxuICAgIFx0ICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5HTElERVJdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuR0xJREVSXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lLkdMSURFUl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHtjb2xvci5CVVRUT059IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdMSURFUl0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5HTElERVJdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgIFxyXG5cclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLlNQQUNFU0hJUF0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5TUEFDRVNISVBdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWUuU1BBQ0VTSElQXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge2NvbG9yLkJVVFRPTn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWUuU1BBQ0VTSElQXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLlNQQUNFU0hJUF0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG5cclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHQgICAgPC9HcmlkPlx0ICAgXHJcbiAgICBcdFx0ICAgIDwvZGl2PiBcdFxyXG4gICAgXHRcdFx0PGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICBcdFx0ICAgIEd1bnNcclxuICAgIFx0XHQgICAgPC9oND5cclxuICAgIFx0XHQgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgXHRcdFx0Q29ud2F5IG9mZmVyZWQgYSBwcml6ZSBmb3IgYW55IGV4YW1wbGUgb2YgcGF0dGVybnMgdGhhdCBncm93IGZvcmV2ZXIuIFxyXG4gICAgXHRcdFx0Q29ud2F5J3MgcHJpemUgd2FzIGNvbGxlY3RlZCBzb29uIGFmdGVyIGl0cyBhbm5vdW5jZW1lbnQsIHdoZW4gdHdvIGRpZmZlcmVudCB3YXlzIHdlcmUgZGlzY292ZXJlZCBmb3IgZGVzaWduaW5nIGEgcGF0dGVybiB0aGF0IGdyb3dzIGZvcmV2ZXIuXHJcblxyXG4gICAgXHRcdFx0VGhlIGZpcnN0IG9mIHRoZXNlIHBhdHRlcm5zIGlzIHRoZSBwZXJpb2QtMzAgZ2xpZGVyIGd1biwgd2hpY2ggaXMgYmFzZWQgb24gdGhlIGludGVyYWN0aW9uIG9mIHR3byBxdWVlbiBiZWUgc2h1dHRsZXMuIFxyXG4gICAgXHRcdFx0V2hlcmUgdGhlc2Ugc2h1dHRsZXMgY29sbGlkZSwgaW5zdGVhZCBvZiBwcm9kdWNpbmcgYmVlaGl2ZXMsIHRoZXkgcHJvZHVjZSBhIG5ldyBnbGlkZXIuIFxyXG4gICAgXHRcdFx0VGhpcyBnbGlkZXIgbW92ZXMgYXdheSBpbiB0aW1lIGZvciB0aGUgcHJvY2VzcyB0byByZXBlYXQgaXRzZWxmIDMwIHN0ZXBzIGxhdGVyLlxyXG4gICAgXHRcdFx0PC9wPlxyXG4gICAgXHRcdFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuICAgIFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cclxuICAgIFx0ICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz17MTJ9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0gIHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5HVU5dLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWUuR1VOXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge2NvbG9yLkJVVFRPTn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWUuR1VOXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdVTl0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcblxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdCAgICA8L0dyaWQ+XHRcclxuICAgIFx0XHQgICAgPC9kaXY+XHJcbiAgICBcdCAgICBcdDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgXHQgICAgXHRPcmlnaW5zXHJcbiAgICBcdCAgICBcdDwvaDI+XHJcblxyXG4gICAgXHQgICAgXHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+Q29ud2F5IHdhcyBpbnRlcmVzdGVkIGluIGEgcHJvYmxlbSBwcmVzZW50ZWQgaW4gdGhlIDE5NDBzIGJ5IFxyXG4gICAgXHQgICAgXHRtYXRoZW1hdGljaWFuIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSm9obl92b25fTmV1bWFublwiIHRpdGxlPVwiSm9obiB2b24gTmV1bWFublwiPkpvaG4gdm9uIE5ldW1hbm48L2E+LCBcclxuICAgIFx0ICAgIFx0d2hvIGF0dGVtcHRlZCB0byBmaW5kIGEgaHlwb3RoZXRpY2FsIG1hY2hpbmUgdGhhdCBjb3VsZCBidWlsZCBjb3BpZXMgb2YgaXRzZWxmIFxyXG4gICAgXHQgICAgXHRhbmQgc3VjY2VlZGVkIHdoZW4gaGUgZm91bmQgYSBtYXRoZW1hdGljYWwgbW9kZWwgZm9yIHN1Y2ggYSBtYWNoaW5lIHdpdGggdmVyeSBcclxuICAgIFx0ICAgIFx0Y29tcGxpY2F0ZWQgcnVsZXMgb24gYSByZWN0YW5ndWxhciBncmlkLiBUaGUgR2FtZSBvZiBMaWZlIGVtZXJnZWQgYXMgQ29ud2F5J3MgXHJcbiAgICBcdCAgICBcdHN1Y2Nlc3NmdWwgYXR0ZW1wdCB0byBkcmFzdGljYWxseSBzaW1wbGlmeSB2b24gTmV1bWFubidzIGlkZWFzLlxyXG5cclxuICAgIFx0ICAgIFx0PC9wPlxyXG5cclxuICAgIFx0ICAgIFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlRoZSBnYW1lIG1hZGUgaXRzIGZpcnN0IHB1YmxpYyBhcHBlYXJhbmNlIGluIHRoZSBPY3RvYmVyIDE5NzAgaXNzdWUgb2YgPGk+U2NpZW50aWZpYyBBbWVyaWNhbjwvaT4sIGluIE1hcnRpbiBHYXJkbmVyJ3MgY29sdW1uLiBcclxuICAgIFx0ICAgIFx0RnJvbSBhIHRoZW9yZXRpY2FsIHBvaW50IG9mIHZpZXcsIGl0IGlzIGludGVyZXN0aW5nIGJlY2F1c2UgaXQgaGFzIHRoZSBwb3dlciBvZiBcclxuICAgIFx0ICAgIFx0YSB1bml2ZXJzYWwgVHVyaW5nIG1hY2hpbmU6IHRoYXQgaXMsIGFueXRoaW5nIHRoYXQgY2FuIGJlIGNvbXB1dGVkIGFsZ29yaXRobWljYWxseSBcclxuICAgIFx0ICAgIFx0Y2FuIGJlIGNvbXB1dGVkIHdpdGhpbiBDb253YXkncyBHYW1lIG9mIExpZmUuIEdhcmRuZXIgd3JvdGU6XHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PGJsb2NrcXVvdGU+XHJcbiAgICBcdFx0XHQ8cD5UaGUgZ2FtZSBtYWRlIENvbndheSBpbnN0YW50bHkgZmFtb3VzLCBidXQgaXQgYWxzbyBvcGVuZWQgdXAgYSB3aG9sZSBuZXcgXHJcbiAgICBcdFx0XHRmaWVsZCBvZiBtYXRoZW1hdGljYWwgcmVzZWFyY2gsIHRoZSBmaWVsZCBvZiBjZWxsdWxhciBhdXRvbWF0YSZuYnNwOy4uLiBCZWNhdXNlIG9mIExpZmUncyBhbmFsb2dpZXMgd2l0aCB0aGUgcmlzZSwgXHJcbiAgICBcdFx0XHRmYWxsIGFuZCBhbHRlcmF0aW9ucyBvZiBhIHNvY2lldHkgb2YgbGl2aW5nIG9yZ2FuaXNtcywgaXQgYmVsb25ncyB0byBhIFxyXG4gICAgXHRcdFx0Z3Jvd2luZyBjbGFzcyBvZiB3aGF0IGFyZSBjYWxsZWQgXCJzaW11bGF0aW9uIGdhbWVzXCIgKGdhbWVzIHRoYXQgcmVzZW1ibGUgcmVhbCBsaWZlIHByb2Nlc3NlcykuXHJcbiAgICBcdFx0XHQ8L3A+XHJcbiAgICBcdFx0XHQ8L2Jsb2NrcXVvdGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICBSZWZlcmVuY2VzXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgV2lraXBlZGlhLiAyMDE3LiBDb253YXkncyBHYW1lIG9mIExpZmUuIFtPTkxJTkVdIEF2YWlsYWJsZSBhdDogPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db253YXklMjdzX0dhbWVfb2ZfTGlmZVwiPmh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbndheSUyN3NfR2FtZV9vZl9MaWZlPC9hPi4gXHJcbiAgICAgICAgICAgICAgICBPdmVydmlldyBvZiBoaXN0b3J5LCBydWxlcyBhbmQgZXhhbXBsZXMgb2YgcGF0dGVybnMgb2YgdGhlIEdhbWUgb2YgTGlmZVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgd3d3LmVyaWN3ZWlzc3RlaW4uY29tLiAxOTk2LTIwMDUuIEVyaWMgV2Vpc3N0ZWluJ3MgVHJlYXN1cmUgVHJvdmUgb2YgdGhlIExpZmUgQy5BLiBbT05MSU5FXSBBdmFpbGFibGUgYXQ6IDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL3d3dy5lcmljd2Vpc3N0ZWluLmNvbS9lbmN5Y2xvcGVkaWFzL2xpZmUvXCI+aHR0cDovL3d3dy5lcmljd2Vpc3N0ZWluLmNvbS9lbmN5Y2xvcGVkaWFzL2xpZmUvPC9hPi4gXHJcbiAgICAgICAgICAgICAgICBUaGlzIHNvdXJjZSBpbmNsdWRlcyBsYXJnZSBjb2xsZWN0aW9uIG9mIGV4YW1wbGVzIG9mIHBvc3NpYmxlIHBhdHRlcm5zLlxyXG4gICAgICAgICAgICAgICAgPC9wPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgTGlua3NcclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHA6Ly93d3cuc2Nob2xhcnBlZGlhLm9yZy9hcnRpY2xlL0dhbWVfb2ZfTGlmZVwiPnd3dy5zY2hvbGFycGVkaWEub3JnL2FydGljbGUvR2FtZV9vZl9MaWZlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPiBcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cHM6Ly93d3cuaWJpYmxpby5vcmcvbGlmZXBhdHRlcm5zL1wiPnd3dy5pYmlibGlvLm9yZy9saWZlcGF0dGVybnMvPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPiAgIFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwOi8vbWF0aHdvcmxkLndvbGZyYW0uY29tL0dhbWVvZkxpZmUuaHRtbFwiPmh0dHA6Ly9tYXRod29ybGQud29sZnJhbS5jb20vR2FtZW9mTGlmZS5odG1sPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPiAgIFx0XHRcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL3d3dy5jb253YXlsaWZlLmNvbS9cIj5odHRwOi8vd3d3LmNvbndheWxpZmUuY29tLzwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cdFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwOi8vZ29sbHkuc291cmNlZm9yZ2UubmV0L1wiPmh0dHA6Ly9nb2xseS5zb3VyY2Vmb3JnZS5uZXQvPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwOi8vd3d3Lm1hdGguY29tL3N0dWRlbnRzL3dvbmRlcnMvbGlmZS9saWZlLmh0bWxcIj5odHRwOi8vd3d3Lm1hdGguY29tL3N0dWRlbnRzL3dvbmRlcnMvbGlmZS9saWZlLmh0bWw8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHA6Ly93d3cuY3V1Zy5hYi5jYS9kZXdhcmEvbGlmZS9saWZlLmh0bWxcIj5odHRwOi8vd3d3LmN1dWcuYWIuY2EvZGV3YXJhL2xpZmUvbGlmZS5odG1sPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwOi8vd3d3LnJhZGljYWxleWUuY29tL2xpZmVwYWdlL1wiID5odHRwOi8vd3d3LnJhZGljYWxleWUuY29tL2xpZmVwYWdlLzwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cHM6Ly93d3cudGhlZ3VhcmRpYW4uY29tL3NjaWVuY2UvYWxleHMtYWR2ZW50dXJlcy1pbi1udW1iZXJsYW5kLzIwMTQvZGVjLzE1L3RoZS1nYW1lLW9mLWxpZmUtYS1iZWdpbm5lcnMtZ3VpZGVcIj5odHRwczovL3d3dy50aGVndWFyZGlhbi5jb20vc2NpZW5jZS9hbGV4cy1hZHZlbnR1cmVzLWluLW51bWJlcmxhbmQvMjAxNC9kZWMvMTUvdGhlLWdhbWUtb2YtbGlmZS1hLWJlZ2lubmVycy1ndWlkZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL3d3dy5pbnN0cnVjdGFibGVzLmNvbS9pZC9PVENBLU1ldGFwaXhlbC1Db253YXlzLUdhbWUtb2YtTGlmZS9cIj5odHRwOi8vd3d3Lmluc3RydWN0YWJsZXMuY29tL2lkL09UQ0EtTWV0YXBpeGVsLUNvbndheXMtR2FtZS1vZi1MaWZlLzwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL25hdHVyZW9mY29kZS5jb20vYm9vay9jaGFwdGVyLTctY2VsbHVsYXItYXV0b21hdGEvXCI+aHR0cDovL25hdHVyZW9mY29kZS5jb20vYm9vay9jaGFwdGVyLTctY2VsbHVsYXItYXV0b21hdGEvPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgXHRcdFx0PC9HcmlkPlxyXG4gICAgXHRcdFx0PEdyaWQgaXRlbSB4cz17MX0gc209ezJ9ID4gPC9HcmlkPlxyXG4gICAgXHRcdFx0PC9HcmlkPlxyXG4gICAgXHQgICAgIFxyXG4gICAgXHQgICAgPC9kaXY+XHJcbiAgICBcdCk7IFxyXG5cdH1cclxufVxyXG5cclxuQWJvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgc2V0U3RvcHBlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHN0b3BwZWQ6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgW2JvYXJkTmFtZS5NQUlOXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZS5CTE9DS106IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuQk9BVF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuTE9BRl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuQkVFSElWRV06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuQkxJTktFUl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuQkVBQ09OXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZS5UT0FEXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZS5HTElERVJdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lLlNQQUNFU0hJUF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuR1VOXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZS5HTEFTU0VTXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZS5RVUFEXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShBYm91dCk7XHJcblxyXG5cclxuY29uc3QgcGF0dGVybkJvYXJkID0gKGdyaWQsY2VsbHNMaXN0KSA9PiAoe2dyaWQsY2VsbHNMaXN0fSlcclxuXHJcblxyXG5jb25zdCBCb2FyZEVsZW1lbnQgPSAoe3dpZHRoLCBwYXR0ZXJuTmFtZSwgc3RvcHBlZCwgYnV0dG9uQ29sb3IsIHdpdGhCdXR0b24sIC4uLnByb3BzfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIiBzdHlsZT17e3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBcIjEwMCVcIn19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbnZhc1wiPlxyXG4gICAgICAgICAgICA8Y2FudmFzIFxyXG4gICAgICAgICAgICAgICAgcmVmPXtwcm9wcy5zZXRDYW52YXN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7d2l0aEJ1dHRvbiA/IChcclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHRpdGxlPXtzdG9wcGVkP1wiU3RhcnRcIjpcIlBhdXNlXCJ9IG9uQ2xpY2sgPSB7cHJvcHMuaGFuZGxlUGxheVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb249e3N0b3BwZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSWNvbj17PFBsYXlBcnJvdyBjbGFzc05hbWU9XCJpY29uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZkljb249ezxQYXVzZSBjbGFzc05hbWU9XCJpY29uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtwYXR0ZXJuTmFtZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAuYm9hcmQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6JHtjb2xvci5CVVRUT059O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FudmFzIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuQk9BUkR9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+ICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlQ2VsbHNMaXN0ID0gKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICByZXR1cm4gY29vcmRpbmF0ZXMuc3BsaXQoXCJcXHJcXG5cIikucmVkdWNlKGZ1bmN0aW9uKGFjYywgdmFsLCBZKXtcclxuICAgICAgICB2YWwuc3BsaXQoJ2MnKS5yZWR1Y2UoKGFjY1gsIHZhbFgsIFgpID0+IHtcclxuICAgICAgICAgICAgaWYodmFsWCAhPT0gXCJcIilcclxuICAgICAgICAgICAgcmV0dXJuIGFjYy5wdXNoKFtZLCArdmFsWF0pXHJcbiAgICAgICAgfSxbXSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sW10pXHJcbn1cclxuIl19 */\n/*@ sourceURL=components\\About.js */'
    }));
};

var createCellsList = function createCellsList(coordinates) {
    return coordinates.split("\r\n").reduce(function (acc, val, Y) {
        val.split('c').reduce(function (accX, valX, X) {
            if (valX !== "") return acc.push([Y, +valX]);
        }, []);

        return acc;
    }, []);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFib3V0LmpzIl0sIm5hbWVzIjpbImJlYWNvbkNvb3JkaW5hdGVzIiwicmVxdWlyZSIsImJlZWhpdmVDb29yZGluYXRlcyIsImJsaW5rZXJDb29yZGluYXRlcyIsImJsb2NrQ29vcmRpbmF0ZXMiLCJib2F0Q29vcmRpbmF0ZXMiLCJnbGlkZXJDb29yZGluYXRlcyIsImd1bkNvb3JkaW5hdGVzIiwibG9hZkNvb3JkaW5hdGVzIiwibHNwYWNlc2hpcENvb3JkaW5hdGVzIiwib3NjR2xhc3Nlc0Nvb3JkaW5hdGVzIiwib3NjUXVhZENvb3JkaW5hdGVzIiwidG9hZENvb3JkaW5hdGVzIiwic3R5bGVzIiwibWFpbkNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJydWxlcyIsImJhY2tncm91bmRDb2xvciIsInRleHQiLCJmb250RmFtaWx5IiwiZmFsbGJhY2tzIiwidGl0bGUiLCJmb250V2VpZ2h0IiwidmlkZW8iLCJ0ZXh0QWxpZ24iLCJib2FyZHNTZWN0aW9uIiwiZGlzcGxheSIsImxpbmsiLCJBYm91dCIsInByb3BzIiwiaGFuZGxlV2luZG93U2l6ZUNoYW5nZSIsImV4YW1wbGVzIiwiR1VOIiwiZ3JpZCIsImNhbnZhcyIsInNxdWFyZVNpemUiLCJwYXJhbWV0ZXJzIiwiQkVBQ09OIiwid2lkdGgiLCJoZWlnaHQiLCJjb29yZGluYXRlcyIsImNyZWF0ZUNlbGxzTGlzdCIsIndyYXBwZWQiLCJuYW1lIiwiQkVFSElWRSIsIkJMSU5LRVIiLCJCTE9DSyIsIkJPQVQiLCJHTElERVIiLCJMT0FGIiwiU1BBQ0VTSElQIiwiR0xBU1NFUyIsIlFVQUQiLCJUT0FEIiwiY2VsbHMiLCJzdGF0ZSIsInJlbG9hZCIsInNjcmVlbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImZhY3RvciIsImNhbnZhc1dpZHRoIiwiZ2V0Q2FudmFzV2lkdGgiLCJzdGFydGVkUGF0dGVybnNMaXN0IiwickFGIiwiaW50ZXJ2YWwiLCJzZXRTdG9wcGVkIiwic3RvcHBlZCIsInciLCJwYXR0ZXJuIiwic3RhcnQiLCJzdG9wIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwibGVuZ3RoIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwdXNoIiwidGhlbiIsIkRhdGUiLCJub3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJkZWx0YSIsImZvckVhY2giLCJwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ha2VCb2FyZCIsImNsYXNzZXMiLCJpbnRybyIsInBsYXllclZhcnMiLCJzaG93aW5mbyIsInJlbCIsInJ1bGVzUGFyIiwiZWwiLCJCVVRUT04iLCJoYW5kbGVQbGF5VG9nZ2xlIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJzaGFwZSIsIk1BSU4iLCJib29sIiwicGF0dGVybkJvYXJkIiwiY2VsbHNMaXN0IiwiQm9hcmRFbGVtZW50IiwicGF0dGVybk5hbWUiLCJidXR0b25Db2xvciIsIndpdGhCdXR0b24iLCJzZXRDYW52YXMiLCJCT0FSRCIsInNwbGl0IiwicmVkdWNlIiwiYWNjIiwidmFsIiwiWSIsImFjY1giLCJ2YWxYIiwiWCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFJLG9CQUFvQixRQUF4QjtBQUNBLElBQUkscUJBQXFCLFFBQXpCO0FBQ0EsSUFBSSxxQkFBcUIsUUFBekI7QUFDQSxJQUFJLG1CQUFtQixRQUF2QjtBQUNBLElBQUksa0JBQWtCLFFBQXRCO0FBQ0EsSUFBSSxvQkFBb0IsUUFBeEI7QUFDQSxJQUFJLGlCQUFpQixRQUFyQjtBQUNBLElBQUksa0JBQWtCLFFBQXRCO0FBQ0EsSUFB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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\folder\\new\\gol\\components\\About.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\folder\\new\\gol\\components\\About.js"); } } })();

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isEqual__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_youtube_player__ = __webpack_require__(788);
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

/***/ 787:
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

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _sister = __webpack_require__(789);

var _sister2 = _interopRequireDefault(_sister);

var _loadYouTubeIframeApi = __webpack_require__(790);

var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);

var _YouTubePlayer = __webpack_require__(792);

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

/***/ 789:
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

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadScript = __webpack_require__(791);

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

/***/ 791:
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

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debug = __webpack_require__(793);

var _debug2 = _interopRequireDefault(_debug);

var _functionNames = __webpack_require__(796);

var _functionNames2 = _interopRequireDefault(_functionNames);

var _eventNames = __webpack_require__(797);

var _eventNames2 = _interopRequireDefault(_eventNames);

var _FunctionStateMap = __webpack_require__(798);

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

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(794);
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

/***/ 794:
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
exports.humanize = __webpack_require__(795);

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

/***/ 795:
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

/***/ 796:
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

/***/ 797:
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

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlayerStates = __webpack_require__(799);

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

/***/ 799:
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

/***/ 800:
/***/ (function(module, exports) {

module.exports = "0c1\r\n0c1\r\n2c3\r\n2c3"

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = "1c2\r\n0c3\r\n1c2"

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = "0c1c2"

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = "0c1\r\n0c1"

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = "0c1\r\n0c2\r\n1"

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = "2\r\n0c2\r\n1c2"

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = "24\r\n22c24\r\n12c13c20c21c34c35\r\n11c15c20c21c34c35\r\n0c1c10c16c20c21\r\n0c1c10c14c16c17c22c24\r\n10c16c24\r\n11c15\r\n12c13"

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = "1c2\r\n0c3\r\n1c3\r\n2"

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = "1c2c3c4\r\n0c4\r\n4\r\n0c3 "

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = "4c13\r\n2c3c4c13c14c15\r\n1c16\r\n1c4c5c6c11c12c13c16\r\n0c1c3c5c7c10c12c14c16c17\r\n3c4c6c7c10c11c13c14\r\n3c5c7c10c12c14\r\n4c5c6c11c12c13\r\n\r\n4c5c7c10c12c13\r\n4c6c7c10c11c13"

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = "0c1c4c5\r\n0c2c5\r\n4\r\n1\r\n0c3c5\r\n0c1c4c5"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = "1c2c3\r\n0c1c2"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2NvbnRhaW5lcnNfQWJvdXRfMjNkYjgxM2NlMWMyMTFmZTQ3ZGRlYzdiM2YzYTZmZjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlLmpzPzQ0NmNlMDciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzPzQ0NmNlMDciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzPzQ0NmNlMDciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcz80NDZjZTA3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcz80NDZjZTA3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hcERhdGEuanM/NDQ2Y2UwNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanM/NDQ2Y2UwNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXAuanM/NDQ2Y2UwNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcz80NDZjZTA3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanM/NDQ2Y2UwNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0luZGV4LmpzPzQ0NmNlMDciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcz80NDZjZTA3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N0YWNrLmpzPzQ0NmNlMDciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzPzQ0NmNlMDciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanM/NDQ2Y2UwNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNFcXVhbC5qcz80NDZjZTA3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzPzQ0NmNlMDciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0Q2FjaGUuanM/NDQ2Y2UwNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYWNoZUhhcy5qcz80NDZjZTA3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UHVzaC5qcz80NDZjZTA3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanM/NmE4OTM2NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzVHlwZWRBcnJheS5qcz82YTg5MzY0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcz82YTg5MzY0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzPzZhODkzNjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanM/NmE4OTM2NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanM/NmE4OTM2NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVHZXQuanM/NmE4OTM2NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanM/NmE4OTM2NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanM/NmE4OTM2NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0NsZWFyLmpzPzZhODkzNjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanM/NmE4OTM2NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0dldC5qcz82YTg5MzY0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrSGFzLmpzPzZhODkzNjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanM/NmE4OTM2NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYXRpdmUuanM/NmE4OTM2NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcz82YTg5MzY0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanM/NmE4OTM2NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRWYWx1ZS5qcz82YTg5MzY0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanM/NmE4OTM2NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19IYXNoLmpzPzZhODkzNjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzPzZhODkzNjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qcz82YTg5MzY0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanM/NmE4OTM2NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzPzQwM2FmY2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qcz80MDNhZmNkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzPzQwM2FmY2QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzPzJjMGQ0ZWYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanM/MmMwZDRlZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcz8yYzBkNGVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzPzJjMGQ0ZWYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzPzJjMGQ0ZWYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVBZGQuanM/MmMwZDRlZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qcz8yYzBkNGVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qcz8yYzBkNGVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanM/MmMwZDRlZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19VaW50OEFycmF5LmpzPzJjMGQ0ZWYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwVG9BcnJheS5qcz8yYzBkNGVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFRvQXJyYXkuanM/MmMwZDRlZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbE9iamVjdHMuanM/MmMwZDRlZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzLmpzPzJjMGQ0ZWYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanM/MmMwZDRlZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRTeW1ib2xzLmpzPzJjMGQ0ZWYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlGaWx0ZXIuanM/MmMwZDRlZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcz8yYzBkNGVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanM/MmMwZDRlZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanM/MmMwZDRlZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanM/MmMwZDRlZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcz8yYzBkNGVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanM/MmMwZDRlZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcz8yYzBkNGVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzLmpzP2ExZjliNjUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qcz9hMWY5YjY1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanM/YTFmOWI2NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRUYWcuanM/YTFmOWI2NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19EYXRhVmlldy5qcz9hMWY5YjY1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanM/YTFmOWI2NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXQuanM/YTFmOWI2NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzP2ExZjliNjUiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9BYm91dC5qcz9hMWY5YjY1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcz9hMWY5YjY1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXQuanM/YTFmOWI2NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QteW91dHViZS9lcy9Zb3VUdWJlLmpzP2ExZjliNjUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0VxdWFsLmpzP2ExZjliNjUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3lvdXR1YmUtcGxheWVyL2Rpc3QvaW5kZXguanM/YTFmOWI2NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2lzdGVyL3NyYy9zaXN0ZXIuanM/YTFmOWI2NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveW91dHViZS1wbGF5ZXIvZGlzdC9sb2FkWW91VHViZUlmcmFtZUFwaS5qcz9hMWY5YjY1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2FkLXNjcmlwdC9pbmRleC5qcz9hMWY5YjY1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95b3V0dWJlLXBsYXllci9kaXN0L1lvdVR1YmVQbGF5ZXIuanM/YTFmOWI2NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanM/YTFmOWI2NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2RlYnVnLmpzP2ExZjliNjUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzP2ExZjliNjUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3lvdXR1YmUtcGxheWVyL2Rpc3QvZnVuY3Rpb25OYW1lcy5qcz9hMWY5YjY1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy95b3V0dWJlLXBsYXllci9kaXN0L2V2ZW50TmFtZXMuanM/YTFmOWI2NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveW91dHViZS1wbGF5ZXIvZGlzdC9GdW5jdGlvblN0YXRlTWFwLmpzP2ExZjliNjUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3lvdXR1YmUtcGxheWVyL2Rpc3QvY29uc3RhbnRzL1BsYXllclN0YXRlcy5qcz9hMWY5YjY1Iiwid2VicGFjazovLy8uL3N0YXRpYy9iZWFjb24udHh0P2QxNjRhMGIiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2JlZWhpdmUudHh0P2QxNjRhMGIiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2JsaW5rZXIudHh0P2QxNjRhMGIiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2Jsb2NrLnR4dD9kMTY0YTBiIiwid2VicGFjazovLy8uL3N0YXRpYy9ib2F0LnR4dD9kMTY0YTBiIiwid2VicGFjazovLy8uL3N0YXRpYy9nbGlkZXIudHh0P2QxNjRhMGIiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2d1bi50eHQ/ZDE2NGEwYiIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvbG9hZi50eHQ/ZDE2NGEwYiIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvbHNwYWNlc2hpcC50eHQ/ZDE2NGEwYiIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvb3NjR2xhc3Nlcy50eHQ/ZDE2NGEwYiIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvb3NjUXVhZC50eHQ/ZDE2NGEwYiIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvdG9hZC50eHQ/ZDE2NGEwYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanM/ZDE2NGEwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanNcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VxLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVDcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hcERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDE1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXAuanNcbi8vIG1vZHVsZSBpZCA9IDE5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDE5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N0YWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDIxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDIxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDIyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbEFycmF5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDIyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UHVzaC5qc1xuLy8gbW9kdWxlIGlkID0gMjI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDIyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc1Byb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gMjI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMjg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDI4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gMjg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gMjg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDI5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0NsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAyOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMjk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAyOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDI5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qc1xuLy8gbW9kdWxlIGlkID0gMjk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMzAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDMwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19IYXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDMwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDMwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDMwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qc1xuLy8gbW9kdWxlIGlkID0gMzA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gMzExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gMzEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanNcbi8vIG1vZHVsZSBpZCA9IDMxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUFkZC5qc1xuLy8gbW9kdWxlIGlkID0gMzE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gMzE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qc1xuLy8gbW9kdWxlIGlkID0gMzE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbEJ5VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19VaW50OEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDMyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0VG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMzIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDMyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDMyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHMuanNcbi8vIG1vZHVsZSBpZCA9IDMyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlGaWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMzI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qc1xuLy8gbW9kdWxlIGlkID0gMzMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDMzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAzMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDMzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qc1xuLy8gbW9kdWxlIGlkID0gMzM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA1IiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDMzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSAzMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19Qcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXQuanNcbi8vIG1vZHVsZSBpZCA9IDM0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1dlYWtNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDM0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNSIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldFN0b3BwZWQgfSBmcm9tICdhY3Rpb25zJ1xyXG4vLyBpbXBvcnQgeyBhZGRDb3VudCB9IGZyb20gJ2FjdGlvbnMnXHJcbi8vIGltcG9ydCB7IHNlbGVjdExpZ2h0LCBzZWxlY3RMYXN0VXBkYXRlLCBzZWxlY3RDb3VudCB9IGZyb20gJ3NlbGVjdG9ycydcclxuLy8gaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XHJcbmltcG9ydCB7IGNvbXBvc2UsIHNldERpc3BsYXlOYW1lLCBwdXJlIH0gZnJvbSAncmVjb21wb3NlJztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQWJvdXQnO1xyXG5cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2V0U3RvcHBlZDogKHN0b3BwZWQsIG5hbWUpID0+IHtcclxuICAgIFx0ZGlzcGF0Y2goc2V0U3RvcHBlZChzdG9wcGVkLCBuYW1lKSlcclxuICAgIH0sXHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXHJcbiAgc2V0RGlzcGxheU5hbWUoJ0Fib3V0Q29udGFpbmVyJyksXHJcbiAgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSwgbWFwRGlzcGF0Y2hUb1Byb3BzKSxcclxuICBwdXJlXHJcbikoQWJvdXQpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29udGFpbmVycy9BYm91dC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnbWF0ZXJpYWwtdWkvR3JpZCc7XHJcbmltcG9ydCBZb3VUdWJlIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xyXG5pbXBvcnQgR2FtZUdyaWQgZnJvbSAnLi4vaGVscGVycy9HYW1lR3JpZCc7XHJcbmltcG9ydCBJY29uIGZyb20gJ21hdGVyaWFsLXVpL0ljb24nO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFRvZ2dsZUljb24gZnJvbSAnbWF0ZXJpYWwtdWktdG9nZ2xlLWljb24nO1xyXG5pbXBvcnQgUGxheUFycm93IGZyb20gJ21hdGVyaWFsLXVpLWljb25zL1BsYXlBcnJvdyc7XHJcbmltcG9ydCBQYXVzZSBmcm9tICdtYXRlcmlhbC11aS1pY29ucy9QYXVzZSc7XHJcbmltcG9ydCB7Ym9hcmROYW1lcyBhcyBib2FyZE5hbWV9IGZyb20gJy4uL2hlbHBlcnMvYm9hcmROYW1lcydcclxuaW1wb3J0IHsgc2hpZnRQYXR0ZXJuVG9DZW50ZXIsIHNoaWZ0UGF0dGVybiB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcbmltcG9ydCB7Y29sb3JzIGFzIGNvbG9yfSBmcm9tICcuLi9oZWxwZXJzL2NvbG9ycyc7XHJcblxyXG52YXIgYmVhY29uQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvYmVhY29uLnR4dCcpO1xyXG52YXIgYmVlaGl2ZUNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL2JlZWhpdmUudHh0Jyk7XHJcbnZhciBibGlua2VyQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvYmxpbmtlci50eHQnKTtcclxudmFyIGJsb2NrQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvYmxvY2sudHh0Jyk7XHJcbnZhciBib2F0Q29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvYm9hdC50eHQnKTtcclxudmFyIGdsaWRlckNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL2dsaWRlci50eHQnKTtcclxudmFyIGd1bkNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL2d1bi50eHQnKTtcclxudmFyIGxvYWZDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9sb2FmLnR4dCcpO1xyXG52YXIgbHNwYWNlc2hpcENvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL2xzcGFjZXNoaXAudHh0Jyk7XHJcbnZhciBvc2NHbGFzc2VzQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi9zdGF0aWMvb3NjR2xhc3Nlcy50eHQnKTtcclxudmFyIG9zY1F1YWRDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4uL3N0YXRpYy9vc2NRdWFkLnR4dCcpO1xyXG52YXIgdG9hZENvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vc3RhdGljL3RvYWQudHh0Jyk7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcblxyXG5cdG1haW5Db250ZW50OiB7XHJcblx0XHRtYXJnaW5Ub3A6IDc1XHJcblx0fSxcclxuICAgIHJ1bGVzOiB7XHJcbiAgICBcdGJhY2tncm91bmRDb2xvcjoncmdiYSgyNDAsMjQ4LDI1NSwuNyknLFxyXG4gICAgXHRcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgICAgZm9udEZhbWlseTogJ09wZW4gU2FucycsIFxyXG4gICAgICAgIGZhbGxiYWNrczp7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyxcclxuICAgICAgICB9LCAgICAgXHRcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBcclxuICAgICAgICBmYWxsYmFja3M6e1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb250V2VpZ2h0OiA5MDAsXHJcbiAgICAgICAgbWFyZ2luVG9wOiA0MFxyXG4gICAgfSxcclxuICAgIHZpZGVvOiB7XHJcbiAgICBcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBcdGZvbnRGYW1pbHk6ICdPcGVuIFNhbnMnLCBcclxuICAgICAgICBmYWxsYmFja3M6e1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXHJcbiAgICAgICAgfSxcclxuICAgIFx0bWFyZ2luVG9wOjMwLFxyXG4gICAgfSxcclxuICAgIGJvYXJkc1NlY3Rpb246IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIFx0bWFyZ2luVG9wOjMwLFxyXG4gICAgfSxcclxuICAgIGxpbms6IHtcclxuICAgICAgICAndGV4dC1kZWNvcmF0aW9uJzogJ3VuZGVybGluZSAhaW1wb3J0YW50JyxcclxuICAgICAgICAnb3ZlcmZsb3ctd3JhcCc6ICdicmVhay13b3JkJyxcclxuICAgICAgICAnd29yZC13cmFwJzogJ2JyZWFrLXdvcmQnLFxyXG4gICAgfSwgICAgXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBBYm91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGxldCBzcXVhcmVTaXplID0gMTI7XHJcbiAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSB7XHJcbiAgICAgICAgICAgIFtib2FyZE5hbWUuQkVBQ09OXToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYsIFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChiZWFjb25Db29yZGluYXRlcyksICAgIFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgICBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmVhY29uXCIsICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lLkJFRUhJVkVdOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNSxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoYmVlaGl2ZUNvb3JkaW5hdGVzKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJCZWVoaXZlXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWUuQkxJTktFUl06IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChibGlua2VyQ29vcmRpbmF0ZXMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJsaW5rZXJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZS5CTE9DS106IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChibG9ja0Nvb3JkaW5hdGVzKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJCbG9ja1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lLkJPQVRdOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNSxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoYm9hdENvb3JkaW5hdGVzKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJCb2F0XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWUuR0xJREVSXToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QoZ2xpZGVyQ29vcmRpbmF0ZXMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkdsaWRlclwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lLkdVTl06IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KGd1bkNvb3JkaW5hdGVzKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IGZhbHNlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVGhlIEdvc3BlciBHbGlkZXIgR3VuXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFtib2FyZE5hbWUuTE9BRl06IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2LFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChsb2FmQ29vcmRpbmF0ZXMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxvYWZcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZS5TUEFDRVNISVBdOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChsc3BhY2VzaGlwQ29vcmRpbmF0ZXMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxpZ2h0d2VpZ2h0IFNwYWNlc2hpcFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lLkdMQVNTRVNdOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNyZWF0ZUNlbGxzTGlzdChvc2NHbGFzc2VzQ29vcmRpbmF0ZXMpLFxyXG4gICAgICAgICAgICAgICAgd3JhcHBlZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkdsYXNzZXNcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW2JvYXJkTmFtZS5RVUFEXToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogY3JlYXRlQ2VsbHNMaXN0KG9zY1F1YWRDb29yZGluYXRlcyksXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVkOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUXVhZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbYm9hcmROYW1lLlRPQURdOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNixcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBjcmVhdGVDZWxsc0xpc3QodG9hZENvb3JkaW5hdGVzKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJUb2FkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgdGhpcy5leGFtcGxlcyA9IHt9O1xyXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiBwYXJhbWV0ZXJzKXtcclxuICAgICAgICAgICAgdGhpcy5leGFtcGxlc1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IG5ldyBHYW1lR3JpZChuYW1lLCBwYXJhbWV0ZXJzW25hbWVdLndpZHRoLCBwYXJhbWV0ZXJzW25hbWVdLmhlaWdodCwgc3F1YXJlU2l6ZSwgIXBhcmFtZXRlcnNbbmFtZV0ud3JhcHBlZCksXHJcbiAgICAgICAgICAgICAgICBjZWxsczogbmFtZSA9PSBib2FyZE5hbWUuR1VOID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRQYXR0ZXJuKHBhcmFtZXRlcnNbbmFtZV0uY29vcmRpbmF0ZXMsIDEsIDEpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFBhdHRlcm5Ub0NlbnRlcihwYXJhbWV0ZXJzW25hbWVdLmNvb3JkaW5hdGVzLCBwYXJhbWV0ZXJzW25hbWVdLmhlaWdodCwgcGFyYW1ldGVyc1tuYW1lXS53aWR0aCksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBwYXJhbWV0ZXJzW25hbWVdLm5hbWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJlbG9hZDpmYWxzZSxcclxuICAgICAgICAgICAgc2NyZWVuOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgICAgIHJhdGlvOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxyXG4gICAgICAgICAgICAgICAgZmFjdG9yOiB3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCA/IDMgOiB3aW5kb3cuaW5uZXJXaWR0aCA8IDk2MCA/IDYgOiAxMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgbmFtZSBpbiBwYXJhbWV0ZXJzKXtcclxuICAgICAgICAgICAgdGhpcy5leGFtcGxlc1tuYW1lXS5jYW52YXNXaWR0aCA9IHRoaXMuZ2V0Q2FudmFzV2lkdGgodGhpcy5leGFtcGxlc1tuYW1lXS5ncmlkKSBcclxuICAgICAgICB9XHJcblxyXG5cdFx0dGhpcy5zdGFydGVkUGF0dGVybnNMaXN0ID0gW107XHJcblx0XHR0aGlzLnJBRiA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5pbnRlcnZhbD0zMDA7XHJcblx0XHJcbiAgICAgICAgdGhpcy5zZXRTdG9wcGVkID0gKHN0b3BwZWQsIG5hbWUpID0+IHByb3BzLnNldFN0b3BwZWQoc3RvcHBlZCwgbmFtZSk7XHJcblx0fVxyXG5cclxuICAgIGdldENhbnZhc1dpZHRoKGdyaWQpe1xyXG4gICAgICAgIGxldCB7c2NyZWVufSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IHt3aWR0aCwgc3F1YXJlU2l6ZX0gPSBncmlkO1xyXG4gICAgICAgIGxldCB3ID0gKCh3aWR0aCArIDEpICogc3F1YXJlU2l6ZSAqIHNjcmVlbi53aWR0aC8xMDAgKiAuNykvc2NyZWVuLmZhY3RvcjtcclxuICAgICAgICByZXR1cm4gdyA+IHNjcmVlbi53aWR0aCAqIC42ID8gc2NyZWVuLndpZHRoICogLjYgOiB3O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBsYXlUb2dnbGUocGF0dGVybil7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdG9wcGVkW3BhdHRlcm4uZ3JpZC5uYW1lXSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQocGF0dGVybik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcChwYXR0ZXJuKTtcclxuICAgICAgICB9XHJcbiAgICB9ICBcclxuXHJcbiAgICBzdG9wKHBhdHRlcm4pe1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLnN0b3BwZWRbcGF0dGVybi5ncmlkLm5hbWVdKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9wcGVkKHRydWUsIHBhdHRlcm4uZ3JpZC5uYW1lKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGFydGVkUGF0dGVybnNMaXN0LmluZGV4T2YocGF0dGVybik7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZFBhdHRlcm5zTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXJ0ZWRQYXR0ZXJuc0xpc3QubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgXHRjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGFydChwYXR0ZXJuKXtcclxuICAgICAgICBpZih0aGlzLnByb3BzLnN0b3BwZWRbcGF0dGVybi5ncmlkLm5hbWVdKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdG9wcGVkKGZhbHNlLCBwYXR0ZXJuLmdyaWQubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZFBhdHRlcm5zTGlzdC5wdXNoKHBhdHRlcm4pO1xyXG4gICAgICAgICAgICB0aGlzLnRoZW4gPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXJ0ZWRQYXR0ZXJuc0xpc3QubGVuZ3RoID09PSAxKXtcclxuICAgICAgICAgICAgXHR0aGlzLnJBRiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9Pnt0aGlzLnVwZGF0ZSgpfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdHVwZGF0ZSgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsdGEgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWx0YSA+IHRoaXMuaW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZGVsdGEgJSB0aGlzLmludGVydmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0ZWRQYXR0ZXJuc0xpc3QuZm9yRWFjaChwID0+IHAuZ3JpZC51cGRhdGUoKSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICB0aGlzLnJBRiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9Pnt0aGlzLnVwZGF0ZSgpfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVdpbmRvd1NpemVDaGFuZ2UgPSAoKSA9PiB7XHJcblx0XHR0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5HVU5dLmdyaWQuaGFuZGxlV2luZG93U2l6ZUNoYW5nZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5HVU5dLmNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcclxuXHRcdHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdVTl0uY2FudmFzV2lkdGggPSB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5HVU5dLmNhbnZhc1dpZHRoID4gdGhpcy5zdGF0ZS5zY3JlZW4ud2lkdGggKiAuNiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zY3JlZW4ud2lkdGggKiAuNiA6IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdVTl0uY2FudmFzV2lkdGhcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlV2luZG93U2l6ZUNoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgbGV0IHJhdGlvID0gdGhpcy5zdGF0ZS5zY3JlZW4ucmF0aW9cclxuICAgICAgICBmb3IobGV0IG5hbWUgaW4gdGhpcy5leGFtcGxlcyl7XHJcbiAgICAgICAgICAgIGxldCB7Z3JpZCwgY2VsbHMsIGNhbnZhc30gPSB0aGlzLmV4YW1wbGVzW25hbWVdO1xyXG4gICAgICAgICAgICBncmlkLm1ha2VCb2FyZChncmlkLndpZHRoLCBncmlkLmhlaWdodCwgZ3JpZC5zcXVhcmVTaXplLCByYXRpbywgY2FudmFzLCBjZWxscyk7XHJcbiAgICAgICAgICAgIGdyaWQudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuckFGKTsgICAgXHJcbiAgICAgICAgdGhpcy5zZXRTdG9wcGVkKHRydWUsIG51bGwpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHsgICAgXHJcbiAgICBcdGNvbnN0IGNsYXNzZXMgPSB0aGlzLnByb3BzLmNsYXNzZXM7XHJcbiAgICBcdHJldHVybihcclxuICAgIFx0ICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5Db250ZW50fT5cclxuICAgICAgICAgICAgXHJcbiAgICBcdCAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XHJcbiAgICBcdCAgIFxyXG4gICAgXHQgICAgPEdyaWQgaXRlbSB4cz17MX0gc209ezJ9ID4gPC9HcmlkPlxyXG4gICAgXHQgICAgXHJcbiAgICBcdCAgICA8R3JpZCBpdGVtIHhzPXsxMH0gIHNtPXs4fSA+XHJcbiAgICBcdCAgICBcclxuICAgIFx0ICAgIFx0PHAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmludHJvfSAke2NsYXNzZXMudGV4dH1gfT5cclxuICAgIFx0ICAgIFx0PHN0cm9uZz5UaGUgR2FtZSBvZiBMaWZlPC9zdHJvbmc+IGlzIHRoZSBiZXN0LWtub3duIHR3by1kaW1lbnNpb25hbCAgXHJcbiAgICAgICAgICAgICAgICBcIjxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2VsbHVsYXJfYXV0b21hdG9uXCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJDZWxsdWxhciBhdXRvbWF0b25cIj5jZWxsdWxhciBhdXRvbWF0b248L2E+XCIsIFxyXG4gICAgICAgICAgICAgICAgaW52ZW50ZWQgaW4gMTk3MCBieSB0aGUgQnJpdGlzaCBtYXRoZW1hdGljaWFuIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSm9obl9Ib3J0b25fQ29ud2F5XCIgdGl0bGU9XCJKb2huIENvbndheVwiPkpvaG4gSG9ydG9uIENvbndheTwvYT4uIFxyXG4gICAgICAgICAgICAgICAgVGhlIGxpZmUgaXMgYSBjZWxsdWxhciBhdXRvbWF0b24sIHdoaWNoIGlzIGEgbW9kZWwgb2YgYSBkaXNjcmV0ZSBhYnN0cmFjdCBjb21wdXRhdGlvbmFsIHN5c3RlbSwgXHJcbiAgICAgICAgICAgICAgICBjb21wb3NlZCBvZiBhIGZpbml0ZSBvciBpbmZpbml0ZSBzZXQgb2Ygb2JqZWN0cyDigJMgXCJjZWxsc1wiLiBUaGUgY2VsbCBpbiB0aGUgZ2FtZSBvZiBsaWZlIGhhcyB0d28gc3RhdGVzIC0gXHJcbiAgICAgICAgICAgICAgICDigJxhbGl2ZeKAnSBhbmQg4oCcZGVhZOKAnSwgb3IgXCJwb3B1bGF0ZWRcIiBhbmQgXCJ1bnBvcHVsYXRlZFwiLiBUaGUgY2VsbHMgbGl2ZSBvbiBhIHR3by1kaW1lbnNpb25hbCBncmlkIGFuZCBlYWNoIGNlbGwgXHJcbiAgICAgICAgICAgICAgICBoYXMgZWlnaHQgYWRqYWNlbnQgY2VsbHMgLSBcIm5laWdoYm9yc1wiLiBBbGwgY2VsbHMgY2hhbmdlIHRoZWlyIHN0YXRlIHNpbXVsdGFuZW91c2x5LCBhY2NvcmRpbmcgdG8gdXBkYXRlIFxyXG4gICAgICAgICAgICAgICAgcnVsZXMgYnkgdGFraW5nIGludG8gYWNjb3VudCB0aGUgc3RhdGVzIG9mIHRoZWlyIG5laWdoYm9ycy5cclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHRcclxuICAgIFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudmlkZW99PlxyXG4gICAgICAgICAgICAgICAgPFlvdVR1YmVcclxuICAgICAgICAgICAgICAgICAgdmlkZW9JZD1cIlI5UGxxLUQxZ0VrXCIgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgb3B0cz17e3dpZHRoOicxMDAlJywgcGxheWVyVmFyczoge3Nob3dpbmZvOjAsIHJlbDowfX19ICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBKb2huIEguIENvbndheSBvbiB0aGUgY3JlYXRpb24gb2YgaGlzIEdhbWUgb2YgTGlmZVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudmlkZW99PlxyXG4gICAgICAgICAgICAgICAgPFlvdVR1YmVcclxuICAgICAgICAgICAgICAgICAgdmlkZW9JZD1cIkNnT2NFWmluUTJJXCIgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgb3B0cz17e3dpZHRoOicxMDAlJywgcGxheWVyVmFyczoge3Nob3dpbmZvOjAsIHJlbDowfX19ICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBGcmFnbWVudCBmcm9tIFN0ZXBoZW4gSGF3a2luZ2BzIFRoZSBNZWFuaW5nIG9mIExpZmVcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIFx0ICAgIFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucnVsZXNQYXJ9PlxyXG4gICAgXHQgICAgXHQ8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0ICAgIFx0UnVsZXNcclxuICAgIFx0ICAgIFx0PC9oMj5cclxuICAgIFx0ICAgIFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgXHQgICAgXHRFdmVyeSBjZWxsIGludGVyYWN0cyB3aXRoIGl0cyBlaWdodCBuZWlnaGJvdXJzLCBcclxuICAgIFx0ICAgIFx0d2hpY2ggYXJlIHRoZSBjZWxscyB0aGF0IGFyZSBob3Jpem9udGFsbHksIHZlcnRpY2FsbHksIG9yIGRpYWdvbmFsbHkgYWRqYWNlbnQuIFxyXG4gICAgXHQgICAgXHRBdCBlYWNoIHN0ZXAgaW4gdGltZSwgdGhlIGZvbGxvd2luZyB0cmFuc2l0aW9ucyBvY2N1cjpcclxuICAgIFx0ICAgIFx0PC9wPlxyXG4gICAgXHQgICAgXHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ydWxlc30+XHJcbiAgICBcdCAgICBcdDx1bD5cclxuICAgIFx0XHRcdFx0PGxpPkFueSBsaXZlIGNlbGwgd2l0aCBmZXdlciB0aGFuIHR3byBsaXZlIG5laWdoYm91cnMgZGllcywgYXMgaWYgY2F1c2VkIGJ5IHVuZGVycG9wdWxhdGlvbi48L2xpPlxyXG4gICAgXHRcdFx0XHQ8bGk+QW55IGxpdmUgY2VsbCB3aXRoIHR3byBvciB0aHJlZSBsaXZlIG5laWdoYm91cnMgbGl2ZXMgb24gdG8gdGhlIG5leHQgZ2VuZXJhdGlvbi48L2xpPlxyXG4gICAgXHRcdFx0XHQ8bGk+QW55IGxpdmUgY2VsbCB3aXRoIG1vcmUgdGhhbiB0aHJlZSBsaXZlIG5laWdoYm91cnMgZGllcywgYXMgaWYgYnkgb3ZlcnBvcHVsYXRpb24uPC9saT5cclxuICAgIFx0XHRcdFx0PGxpPkFueSBkZWFkIGNlbGwgd2l0aCBleGFjdGx5IHRocmVlIGxpdmUgbmVpZ2hib3VycyBiZWNvbWVzIGEgbGl2ZSBjZWxsLCBhcyBpZiBieSByZXByb2R1Y3Rpb24uPC9saT5cclxuICAgIFx0XHRcdDwvdWw+XHJcbiAgICBcdFx0XHQ8L2Rpdj5cclxuICAgIFx0XHRcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgIFx0XHRcdFRoZSBpbml0aWFsIHBhdHRlcm4gY29uc3RpdHV0ZXMgdGhlIHNlZWQgb2YgdGhlIHN5c3RlbS4gXHJcbiAgICBcdFx0XHRUaGUgZmlyc3QgZ2VuZXJhdGlvbiBpcyBjcmVhdGVkIGJ5IGFwcGx5aW5nIHRoZSBhYm92ZSBydWxlcyBcclxuICAgIFx0XHRcdHNpbXVsdGFuZW91c2x5IHRvIGV2ZXJ5IGNlbGwgaW4gdGhlIHNlZWQgLSBiaXJ0aHMgYW5kIGRlYXRocyBvY2N1ciBzaW11bHRhbmVvdXNseSwgXHJcbiAgICBcdFx0XHRhbmQgdGhlIGRpc2NyZXRlIG1vbWVudCBhdCB3aGljaCB0aGlzIGhhcHBlbnMgaXMgc29tZXRpbWVzIGNhbGxlZCBhIHRpY2sgXHJcbiAgICBcdFx0XHQoaW4gb3RoZXIgd29yZHMsIGVhY2ggZ2VuZXJhdGlvbiBpcyBhIHB1cmUgZnVuY3Rpb24gb2YgdGhlIHByZWNlZGluZyBvbmUpLiBcclxuICAgIFx0XHRcdFRoZSBydWxlcyBjb250aW51ZSB0byBiZSBhcHBsaWVkIHJlcGVhdGVkbHkgdG8gY3JlYXRlIGZ1cnRoZXIgZ2VuZXJhdGlvbnMuXHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PC9kaXY+XHJcbiAgICBcdCAgICBcdDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgXHQgICAgXHRFeGFtcGxlcyBvZiBQYXR0ZXJuc1xyXG4gICAgXHQgICAgXHQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgSW4gb3JkZXIgdG8gc2ltdWxhdGUgaW5maW5pdGUgZ3JpZCBvbiB0aGUgZ2FtZSBib2FyZCBhbmQgaW4gdGhlIGV4YW1wbGVzIGJlbG93IChleGNlcHQgZm9yIHRoZSBndW4gcGF0dGVybiksIFxyXG4gICAgICAgICAgICAgICAgY2VsbHMgdGhhdCBhcmUgc2l0dWF0ZWQgb24gdGhlIGVkZ2VzIG9mIHRoZSBib2FyZHMgYXJlIGhhbmRsZWQgaW4gYSB0b3JvaWRhbCBtYW5uZXIsIFxyXG4gICAgICAgICAgICAgICAgaS5lLiBsb3dlciBuZWlnaGJvciBvZiBhIGNlbGwgc2l0dWF0ZWQgb24gdGhlIGJvdHRvbSBlZGdlIG9mIGJvYXJkIHdpbGwgYmUgYSBjZWxsIGZyb20gXHJcbiAgICAgICAgICAgICAgICB0aGUgdG9wIGVkZ2Ugb24gdGhlIHNhbWUgY29sdW1uIGFuZCBhIG5laWdoYm9yIHRvIHRoZSByaWdodCBvZiBhIGNlbGwgc2l0dWF0ZWQgb24gdGhlIHJpZ2h0IFxyXG4gICAgICAgICAgICAgICAgZWRnZSB3aWxsIGJlIGZyb20gdGhlIGxlZnQgZWRnZS4gXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgXHQgICAgXHQ8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0ICAgIFx0U3RpbGwgTGlmZVxyXG4gICAgXHQgICAgXHQ8L2g0PlxyXG4gICAgXHQgICAgXHQ8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICBcdCAgICBcdFN0YWJsZSBmaW5pdGUgcGF0dGVybnMuXHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuICAgIFx0ICAgIFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezE2fSA+XHJcbiAgICBcdCAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CTE9DS10uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CTE9DS10ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWUuQkxPQ0tdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuQk9BVF0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CT0FUXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CT0FUXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICBcclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuTE9BRl0uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5MT0FGXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5MT0FGXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkJFRUhJVkVdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuQkVFSElWRV0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWUuQkVFSElWRV0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICBcdCAgICAgICAgICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgIFxyXG4gICAgXHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0ICAgIDwvZGl2PlxyXG4gICAgXHRcdFx0PGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICBcdFx0ICAgIE9zY2lsbGF0b3JzIFxyXG4gICAgXHRcdCAgICA8L2g0PlxyXG4gICAgXHRcdCAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICBcdCAgICBcdFRoZXNlIHBhdHRlcm5zIHJlcGVhdCB0aGVpciBjb25maWd1cmF0aW9uIHBlcmlvZGljYWxseSBhbmQgaW5maW5pdGVseS4gVGhlIGJhc2ljIG9zY2lsbGF0b3JzIGhhdmUgcGVyaW9kcyBvZiB0d28gb3IgdGhyZWUgdGlja3MuIFxyXG4gICAgICAgICAgICAgICAgVGhlIG1vc3QgY29tbW9uIHBlcmlvZC0yIG9zY2lsbGF0b3JzIGluY2x1ZGU6XHJcbiAgICBcdCAgICBcdDwvcD5cclxuICAgIFx0ICAgIFx0PGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvYXJkc1NlY3Rpb259ID5cclxuICAgIFx0ICAgIFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezE2fT5cclxuICAgIFx0ICAgXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkJMSU5LRVJdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuQkxJTktFUl0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BwZWQgPSB7dGhpcy5wcm9wcy5zdG9wcGVkW2JvYXJkTmFtZS5CTElOS0VSXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge2NvbG9yLkJVVFRPTn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWUuQkxJTktFUl0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CTElOS0VSXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICBcdFx0XHQgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuQkVBQ09OXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkJFQUNPTl0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BwZWQgPSB7dGhpcy5wcm9wcy5zdG9wcGVkW2JvYXJkTmFtZS5CRUFDT05dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3IgPSB7Y29sb3IuQlVUVE9OfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5CRUFDT05dLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWUuQkVBQ09OXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHRcdCAgICA8R3JpZCBpdGVtIHhzID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkRWxlbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLlRPQURdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuVE9BRF0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BwZWQgPSB7dGhpcy5wcm9wcy5zdG9wcGVkW2JvYXJkTmFtZS5UT0FEXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yID0ge2NvbG9yLkJVVFRPTn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoQnV0dG9uID0ge3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYW52YXMgPSB7ZWwgPT4gdGhpcy5leGFtcGxlc1tib2FyZE5hbWUuVE9BRF0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5UT0FEXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHMgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuR0xBU1NFU10uY2FudmFzV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5HTEFTU0VTXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lLkdMQVNTRVNdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3IgPSB7Y29sb3IuQlVUVE9OfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5HTEFTU0VTXS5jYW52YXMgPSBlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlUb2dnbGUgPSB7KCkgPT4gdGhpcy5oYW5kbGVQbGF5VG9nZ2xlKHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdMQVNTRVNdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5RVUFEXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLlFVQURdLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0ge3RoaXMucHJvcHMuc3RvcHBlZFtib2FyZE5hbWUuUVVBRF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHtjb2xvci5CVVRUT059IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLlFVQURdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWUuUVVBRF0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0ICAgIDwvZGl2PlxyXG4gICAgXHRcdFx0PGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICBcdFx0ICAgIEdsaWRlcnMgYW5kIFNwYWNlc2hpcHNcclxuICAgIFx0XHQgICAgPC9oND5cclxuICAgIFx0XHQgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgXHQgICAgXHRBIHNwYWNlc2hpcCBpcyBtb3JlIGNvbXBsZXggb3NjaWxsYXRvciwgcmV0dXJuaW5nIHRvIHRoZSBzYW1lIGNvbmZpZ3VyYXRpb24gYnV0IHNoaWZ0ZWQgYWZ0ZXIgYSBmaW5pdGUgbnVtYmVyIG9mIGdlbmVyYXRpb25zLiBcclxuICAgIFx0ICAgIFx0VGhlIGdsaWRlciBpcyBhIHNpbXBsZSBzcGFjZXNoaXAgdGhhdCBoYXMgcGVyaW9kIDQsIGkuZS4gcmVwZWF0cyBldmVyeSBmb3VyIGdlbmVyYXRpb25zLCBidXQgXHJcbiAgICAgICAgICAgICAgICBtb3ZlcyBkaWFnb25hbGx5IG9uZSBjZWxsIGV2ZXJ5IGZvdXIgZ2VuZXJhdGlvbnMuXHJcbiAgICBcdCAgICBcdE90aGVyIGV4YW1wbGVzIG9mIHNpbXBsZSBzcGFjZXNoaXBzIGluY2x1ZGUgbGlnaHR3ZWlnaHQsIG1lZGl1bSB3ZWlnaHQsIGFuZCBoZWF2eXdlaWdodCBzcGFjZXNoaXBzLiBcclxuICAgIFx0ICAgIFx0VGhleSBlYWNoIG1vdmUgaW4gYSBzdHJhaWdodCBsaW5lLlxyXG4gICAgXHQgICAgXHQ8L3A+XHJcbiAgICBcdCAgICBcdDxkaXYgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2FyZHNTZWN0aW9ufSA+XHJcbiAgICBcdCAgICBcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxNn0+XHJcbiAgICBcdCAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9hcmRFbGVtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuR0xJREVSXS5jYW52YXNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lID0ge3RoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdMSURFUl0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BwZWQgPSB7dGhpcy5wcm9wcy5zdG9wcGVkW2JvYXJkTmFtZS5HTElERVJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29sb3IgPSB7Y29sb3IuQlVUVE9OfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhCdXR0b24gPSB7dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhbnZhcyA9IHtlbCA9PiB0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5HTElERVJdLmNhbnZhcyA9IGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxheVRvZ2dsZSA9IHsoKSA9PiB0aGlzLmhhbmRsZVBsYXlUb2dnbGUodGhpcy5leGFtcGxlc1tib2FyZE5hbWUuR0xJREVSXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICBcclxuICAgIFx0XHRcdCAgICA8L0dyaWQ+XHJcbiAgICBcdFx0XHQgICBcclxuXHJcbiAgICBcdFx0XHQgICAgPEdyaWQgaXRlbSB4cz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHt0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5TUEFDRVNISVBdLmNhbnZhc1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybk5hbWUgPSB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuU1BBQ0VTSElQXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lLlNQQUNFU0hJUF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHtjb2xvci5CVVRUT059IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLlNQQUNFU0hJUF0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5TUEFDRVNISVBdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHRcdFx0ICAgIDwvR3JpZD5cclxuXHJcbiAgICBcdFx0XHQgICAgXHJcbiAgICBcdFx0ICAgIDwvR3JpZD5cdCAgIFxyXG4gICAgXHRcdCAgICA8L2Rpdj4gXHRcclxuICAgIFx0XHRcdDxoNCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgXHRcdCAgICBHdW5zXHJcbiAgICBcdFx0ICAgIDwvaDQ+XHJcbiAgICBcdFx0ICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgIFx0XHRcdENvbndheSBvZmZlcmVkIGEgcHJpemUgZm9yIGFueSBleGFtcGxlIG9mIHBhdHRlcm5zIHRoYXQgZ3JvdyBmb3JldmVyLiBcclxuICAgIFx0XHRcdENvbndheSdzIHByaXplIHdhcyBjb2xsZWN0ZWQgc29vbiBhZnRlciBpdHMgYW5ub3VuY2VtZW50LCB3aGVuIHR3byBkaWZmZXJlbnQgd2F5cyB3ZXJlIGRpc2NvdmVyZWQgZm9yIGRlc2lnbmluZyBhIHBhdHRlcm4gdGhhdCBncm93cyBmb3JldmVyLlxyXG5cclxuICAgIFx0XHRcdFRoZSBmaXJzdCBvZiB0aGVzZSBwYXR0ZXJucyBpcyB0aGUgcGVyaW9kLTMwIGdsaWRlciBndW4sIHdoaWNoIGlzIGJhc2VkIG9uIHRoZSBpbnRlcmFjdGlvbiBvZiB0d28gcXVlZW4gYmVlIHNodXR0bGVzLiBcclxuICAgIFx0XHRcdFdoZXJlIHRoZXNlIHNodXR0bGVzIGNvbGxpZGUsIGluc3RlYWQgb2YgcHJvZHVjaW5nIGJlZWhpdmVzLCB0aGV5IHByb2R1Y2UgYSBuZXcgZ2xpZGVyLiBcclxuICAgIFx0XHRcdFRoaXMgZ2xpZGVyIG1vdmVzIGF3YXkgaW4gdGltZSBmb3IgdGhlIHByb2Nlc3MgdG8gcmVwZWF0IGl0c2VsZiAzMCBzdGVwcyBsYXRlci5cclxuICAgIFx0XHRcdDwvcD5cclxuICAgIFx0XHRcdDxkaXYgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2FyZHNTZWN0aW9ufSA+XHJcbiAgICBcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XHJcbiAgICBcdCAgIFxyXG4gICAgXHRcdFx0ICAgIFxyXG4gICAgXHRcdFx0ICAgIDxHcmlkIGl0ZW0geHM9ezEyfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZEVsZW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZSA9ICB7dGhpcy5leGFtcGxlc1tib2FyZE5hbWUuR1VOXS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHt0aGlzLnByb3BzLnN0b3BwZWRbYm9hcmROYW1lLkdVTl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvciA9IHtjb2xvci5CVVRUT059IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEJ1dHRvbiA9IHt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FudmFzID0ge2VsID0+IHRoaXMuZXhhbXBsZXNbYm9hcmROYW1lLkdVTl0uY2FudmFzID0gZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5VG9nZ2xlID0geygpID0+IHRoaXMuaGFuZGxlUGxheVRvZ2dsZSh0aGlzLmV4YW1wbGVzW2JvYXJkTmFtZS5HVU5dKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICBcdFx0XHQgICAgPC9HcmlkPlxyXG5cclxuICAgIFx0XHRcdCAgICBcclxuICAgIFx0XHQgICAgPC9HcmlkPlx0XHJcbiAgICBcdFx0ICAgIDwvZGl2PlxyXG4gICAgXHQgICAgXHQ8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgIFx0ICAgIFx0T3JpZ2luc1xyXG4gICAgXHQgICAgXHQ8L2gyPlxyXG5cclxuICAgIFx0ICAgIFx0PHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PkNvbndheSB3YXMgaW50ZXJlc3RlZCBpbiBhIHByb2JsZW0gcHJlc2VudGVkIGluIHRoZSAxOTQwcyBieSBcclxuICAgIFx0ICAgIFx0bWF0aGVtYXRpY2lhbiA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0pvaG5fdm9uX05ldW1hbm5cIiB0aXRsZT1cIkpvaG4gdm9uIE5ldW1hbm5cIj5Kb2huIHZvbiBOZXVtYW5uPC9hPiwgXHJcbiAgICBcdCAgICBcdHdobyBhdHRlbXB0ZWQgdG8gZmluZCBhIGh5cG90aGV0aWNhbCBtYWNoaW5lIHRoYXQgY291bGQgYnVpbGQgY29waWVzIG9mIGl0c2VsZiBcclxuICAgIFx0ICAgIFx0YW5kIHN1Y2NlZWRlZCB3aGVuIGhlIGZvdW5kIGEgbWF0aGVtYXRpY2FsIG1vZGVsIGZvciBzdWNoIGEgbWFjaGluZSB3aXRoIHZlcnkgXHJcbiAgICBcdCAgICBcdGNvbXBsaWNhdGVkIHJ1bGVzIG9uIGEgcmVjdGFuZ3VsYXIgZ3JpZC4gVGhlIEdhbWUgb2YgTGlmZSBlbWVyZ2VkIGFzIENvbndheSdzIFxyXG4gICAgXHQgICAgXHRzdWNjZXNzZnVsIGF0dGVtcHQgdG8gZHJhc3RpY2FsbHkgc2ltcGxpZnkgdm9uIE5ldW1hbm4ncyBpZGVhcy5cclxuXHJcbiAgICBcdCAgICBcdDwvcD5cclxuXHJcbiAgICBcdCAgICBcdDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5UaGUgZ2FtZSBtYWRlIGl0cyBmaXJzdCBwdWJsaWMgYXBwZWFyYW5jZSBpbiB0aGUgT2N0b2JlciAxOTcwIGlzc3VlIG9mIDxpPlNjaWVudGlmaWMgQW1lcmljYW48L2k+LCBpbiBNYXJ0aW4gR2FyZG5lcidzIGNvbHVtbi4gXHJcbiAgICBcdCAgICBcdEZyb20gYSB0aGVvcmV0aWNhbCBwb2ludCBvZiB2aWV3LCBpdCBpcyBpbnRlcmVzdGluZyBiZWNhdXNlIGl0IGhhcyB0aGUgcG93ZXIgb2YgXHJcbiAgICBcdCAgICBcdGEgdW5pdmVyc2FsIFR1cmluZyBtYWNoaW5lOiB0aGF0IGlzLCBhbnl0aGluZyB0aGF0IGNhbiBiZSBjb21wdXRlZCBhbGdvcml0aG1pY2FsbHkgXHJcbiAgICBcdCAgICBcdGNhbiBiZSBjb21wdXRlZCB3aXRoaW4gQ29ud2F5J3MgR2FtZSBvZiBMaWZlLiBHYXJkbmVyIHdyb3RlOlxyXG4gICAgXHQgICAgXHQ8L3A+XHJcbiAgICBcdCAgICBcdDxibG9ja3F1b3RlPlxyXG4gICAgXHRcdFx0PHA+VGhlIGdhbWUgbWFkZSBDb253YXkgaW5zdGFudGx5IGZhbW91cywgYnV0IGl0IGFsc28gb3BlbmVkIHVwIGEgd2hvbGUgbmV3IFxyXG4gICAgXHRcdFx0ZmllbGQgb2YgbWF0aGVtYXRpY2FsIHJlc2VhcmNoLCB0aGUgZmllbGQgb2YgY2VsbHVsYXIgYXV0b21hdGEmbmJzcDsuLi4gQmVjYXVzZSBvZiBMaWZlJ3MgYW5hbG9naWVzIHdpdGggdGhlIHJpc2UsIFxyXG4gICAgXHRcdFx0ZmFsbCBhbmQgYWx0ZXJhdGlvbnMgb2YgYSBzb2NpZXR5IG9mIGxpdmluZyBvcmdhbmlzbXMsIGl0IGJlbG9uZ3MgdG8gYSBcclxuICAgIFx0XHRcdGdyb3dpbmcgY2xhc3Mgb2Ygd2hhdCBhcmUgY2FsbGVkIFwic2ltdWxhdGlvbiBnYW1lc1wiIChnYW1lcyB0aGF0IHJlc2VtYmxlIHJlYWwgbGlmZSBwcm9jZXNzZXMpLlxyXG4gICAgXHRcdFx0PC9wPlxyXG4gICAgXHRcdFx0PC9ibG9ja3F1b3RlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgUmVmZXJlbmNlc1xyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIFdpa2lwZWRpYS4gMjAxNy4gQ29ud2F5J3MgR2FtZSBvZiBMaWZlLiBbT05MSU5FXSBBdmFpbGFibGUgYXQ6IDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29ud2F5JTI3c19HYW1lX29mX0xpZmVcIj5odHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db253YXklMjdzX0dhbWVfb2ZfTGlmZTwvYT4uIFxyXG4gICAgICAgICAgICAgICAgT3ZlcnZpZXcgb2YgaGlzdG9yeSwgcnVsZXMgYW5kIGV4YW1wbGVzIG9mIHBhdHRlcm5zIG9mIHRoZSBHYW1lIG9mIExpZmVcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIHd3dy5lcmljd2Vpc3N0ZWluLmNvbS4gMTk5Ni0yMDA1LiBFcmljIFdlaXNzdGVpbidzIFRyZWFzdXJlIFRyb3ZlIG9mIHRoZSBMaWZlIEMuQS4gW09OTElORV0gQXZhaWxhYmxlIGF0OiA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHA6Ly93d3cuZXJpY3dlaXNzdGVpbi5jb20vZW5jeWNsb3BlZGlhcy9saWZlL1wiPmh0dHA6Ly93d3cuZXJpY3dlaXNzdGVpbi5jb20vZW5jeWNsb3BlZGlhcy9saWZlLzwvYT4uIFxyXG4gICAgICAgICAgICAgICAgVGhpcyBzb3VyY2UgaW5jbHVkZXMgbGFyZ2UgY29sbGVjdGlvbiBvZiBleGFtcGxlcyBvZiBwb3NzaWJsZSBwYXR0ZXJucy5cclxuICAgICAgICAgICAgICAgIDwvcD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIExpbmtzXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwOi8vd3d3LnNjaG9sYXJwZWRpYS5vcmcvYXJ0aWNsZS9HYW1lX29mX0xpZmVcIj53d3cuc2Nob2xhcnBlZGlhLm9yZy9hcnRpY2xlL0dhbWVfb2ZfTGlmZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD4gXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHBzOi8vd3d3LmliaWJsaW8ub3JnL2xpZmVwYXR0ZXJucy9cIj53d3cuaWJpYmxpby5vcmcvbGlmZXBhdHRlcm5zLzwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD4gICBcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL21hdGh3b3JsZC53b2xmcmFtLmNvbS9HYW1lb2ZMaWZlLmh0bWxcIj5odHRwOi8vbWF0aHdvcmxkLndvbGZyYW0uY29tL0dhbWVvZkxpZmUuaHRtbDwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD4gICBcdFx0XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHA6Ly93d3cuY29ud2F5bGlmZS5jb20vXCI+aHR0cDovL3d3dy5jb253YXlsaWZlLmNvbS88L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHRcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL2dvbGx5LnNvdXJjZWZvcmdlLm5ldC9cIj5odHRwOi8vZ29sbHkuc291cmNlZm9yZ2UubmV0LzwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL3d3dy5tYXRoLmNvbS9zdHVkZW50cy93b25kZXJzL2xpZmUvbGlmZS5odG1sXCI+aHR0cDovL3d3dy5tYXRoLmNvbS9zdHVkZW50cy93b25kZXJzL2xpZmUvbGlmZS5odG1sPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCJodHRwOi8vd3d3LmN1dWcuYWIuY2EvZGV3YXJhL2xpZmUvbGlmZS5odG1sXCI+aHR0cDovL3d3dy5jdXVnLmFiLmNhL2Rld2FyYS9saWZlL2xpZmUuaHRtbDwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiaHR0cDovL3d3dy5yYWRpY2FsZXllLmNvbS9saWZlcGFnZS9cIiA+aHR0cDovL3d3dy5yYWRpY2FsZXllLmNvbS9saWZlcGFnZS88L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS9zY2llbmNlL2FsZXhzLWFkdmVudHVyZXMtaW4tbnVtYmVybGFuZC8yMDE0L2RlYy8xNS90aGUtZ2FtZS1vZi1saWZlLWEtYmVnaW5uZXJzLWd1aWRlXCI+aHR0cHM6Ly93d3cudGhlZ3VhcmRpYW4uY29tL3NjaWVuY2UvYWxleHMtYWR2ZW50dXJlcy1pbi1udW1iZXJsYW5kLzIwMTQvZGVjLzE1L3RoZS1nYW1lLW9mLWxpZmUtYS1iZWdpbm5lcnMtZ3VpZGU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHA6Ly93d3cuaW5zdHJ1Y3RhYmxlcy5jb20vaWQvT1RDQS1NZXRhcGl4ZWwtQ29ud2F5cy1HYW1lLW9mLUxpZmUvXCI+aHR0cDovL3d3dy5pbnN0cnVjdGFibGVzLmNvbS9pZC9PVENBLU1ldGFwaXhlbC1Db253YXlzLUdhbWUtb2YtTGlmZS88L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cImh0dHA6Ly9uYXR1cmVvZmNvZGUuY29tL2Jvb2svY2hhcHRlci03LWNlbGx1bGFyLWF1dG9tYXRhL1wiPmh0dHA6Ly9uYXR1cmVvZmNvZGUuY29tL2Jvb2svY2hhcHRlci03LWNlbGx1bGFyLWF1dG9tYXRhLzwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgIFx0XHRcdDwvR3JpZD5cclxuICAgIFx0XHRcdDxHcmlkIGl0ZW0geHM9ezF9IHNtPXsyfSA+IDwvR3JpZD5cclxuICAgIFx0XHRcdDwvR3JpZD5cclxuICAgIFx0ICAgICBcclxuICAgIFx0ICAgIDwvZGl2PlxyXG4gICAgXHQpOyBcclxuXHR9XHJcbn1cclxuXHJcbkFib3V0LnByb3BUeXBlcyA9IHtcclxuICAgIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgIHNldFN0b3BwZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBzdG9wcGVkOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIFtib2FyZE5hbWUuTUFJTl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuQkxPQ0tdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lLkJPQVRdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lLkxPQUZdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lLkJFRUhJVkVdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lLkJMSU5LRVJdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lLkJFQUNPTl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuVE9BRF06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuR0xJREVSXTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgW2JvYXJkTmFtZS5TUEFDRVNISVBdOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBbYm9hcmROYW1lLkdVTl06IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuR0xBU1NFU106IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIFtib2FyZE5hbWUuUVVBRF06IFByb3BUeXBlcy5ib29sLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQWJvdXQpO1xyXG5cclxuXHJcbmNvbnN0IHBhdHRlcm5Cb2FyZCA9IChncmlkLGNlbGxzTGlzdCkgPT4gKHtncmlkLGNlbGxzTGlzdH0pXHJcblxyXG5cclxuY29uc3QgQm9hcmRFbGVtZW50ID0gKHt3aWR0aCwgcGF0dGVybk5hbWUsIHN0b3BwZWQsIGJ1dHRvbkNvbG9yLCB3aXRoQnV0dG9uLCAuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCIgc3R5bGU9e3t3aWR0aDogd2lkdGgsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW52YXNcIj5cclxuICAgICAgICAgICAgPGNhbnZhcyBcclxuICAgICAgICAgICAgICAgIHJlZj17cHJvcHMuc2V0Q2FudmFzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3dpdGhCdXR0b24gPyAoXHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0aXRsZT17c3RvcHBlZD9cIlN0YXJ0XCI6XCJQYXVzZVwifSBvbkNsaWNrID0ge3Byb3BzLmhhbmRsZVBsYXlUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb2dnbGVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uPXtzdG9wcGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkljb249ezxQbGF5QXJyb3cgY2xhc3NOYW1lPVwiaWNvblwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZJY29uPXs8UGF1c2UgY2xhc3NOYW1lPVwiaWNvblwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cGF0dGVybk5hbWV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgLmJvYXJkIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiR7Y29sb3IuQlVUVE9OfTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLkJPQVJEfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PiAgICBcclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUNlbGxzTGlzdCA9IChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzLnNwbGl0KFwiXFxyXFxuXCIpLnJlZHVjZShmdW5jdGlvbihhY2MsIHZhbCwgWSl7XHJcbiAgICAgICAgdmFsLnNwbGl0KCdjJykucmVkdWNlKChhY2NYLCB2YWxYLCBYKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHZhbFggIT09IFwiXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBhY2MucHVzaChbWSwgK3ZhbFhdKVxyXG4gICAgICAgIH0sW10pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LFtdKVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoL2lzRXF1YWwnO1xuaW1wb3J0IHlvdVR1YmVQbGF5ZXIgZnJvbSAneW91dHViZS1wbGF5ZXInO1xuXG4vKipcclxuICogQ2hlY2sgd2hldGhlciBhIGBwcm9wc2AgY2hhbmdlIHNob3VsZCByZXN1bHQgaW4gdGhlIHZpZGVvIGJlaW5nIHVwZGF0ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcmV2UHJvcHNcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xuZnVuY3Rpb24gc2hvdWxkVXBkYXRlVmlkZW8ocHJldlByb3BzLCBwcm9wcykge1xuICAvLyBBIGNoYW5naW5nIHZpZGVvIHNob3VsZCBhbHdheXMgdHJpZ2dlciBhbiB1cGRhdGVcbiAgaWYgKHByZXZQcm9wcy52aWRlb0lkICE9PSBwcm9wcy52aWRlb0lkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBPdGhlcndpc2UsIGEgY2hhbmdlIGluIHRoZSBzdGFydC9lbmQgdGltZSBwbGF5ZXJWYXJzIGFsc28gcmVxdWlyZXMgYSBwbGF5ZXJcbiAgLy8gdXBkYXRlLlxuICB2YXIgcHJldlZhcnMgPSBwcmV2UHJvcHMub3B0cy5wbGF5ZXJWYXJzIHx8IHt9O1xuICB2YXIgdmFycyA9IHByb3BzLm9wdHMucGxheWVyVmFycyB8fCB7fTtcblxuICByZXR1cm4gcHJldlZhcnMuc3RhcnQgIT09IHZhcnMuc3RhcnQgfHwgcHJldlZhcnMuZW5kICE9PSB2YXJzLmVuZDtcbn1cblxuLyoqXHJcbiAqIE5ldXRyYWxpc2UgQVBJIG9wdGlvbnMgdGhhdCBvbmx5IHJlcXVpcmUgYSB2aWRlbyB1cGRhdGUsIGxlYXZpbmcgb25seSBvcHRpb25zXHJcbiAqIHRoYXQgcmVxdWlyZSBhIHBsYXllciByZXNldC4gVGhlIHJlc3VsdHMgY2FuIHRoZW4gYmUgY29tcGFyZWQgdG8gc2VlIGlmIGFcclxuICogcGxheWVyIHJlc2V0IGlzIG5lY2Vzc2FyeS5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICovXG5mdW5jdGlvbiBmaWx0ZXJSZXNldE9wdGlvbnMob3B0cykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIG9wdHMsIHtcbiAgICBwbGF5ZXJWYXJzOiBfZXh0ZW5kcyh7fSwgb3B0cy5wbGF5ZXJWYXJzLCB7XG4gICAgICBhdXRvcGxheTogMCxcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZW5kOiAwXG4gICAgfSlcbiAgfSk7XG59XG5cbi8qKlxyXG4gKiBDaGVjayB3aGV0aGVyIGEgYHByb3BzYCBjaGFuZ2Ugc2hvdWxkIHJlc3VsdCBpbiB0aGUgcGxheWVyIGJlaW5nIHJlc2V0LlxyXG4gKiBUaGUgcGxheWVyIGlzIHJlc2V0IHdoZW4gdGhlIGBwcm9wcy5vcHRzYCBjaGFuZ2UsIGV4Y2VwdCBpZiB0aGUgb25seSBjaGFuZ2VcclxuICogaXMgaW4gdGhlIGBzdGFydGAgYW5kIGBlbmRgIHBsYXllclZhcnMsIGJlY2F1c2UgYSB2aWRlbyB1cGRhdGUgY2FuIGRlYWwgd2l0aFxyXG4gKiB0aG9zZS5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByZXZQcm9wc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICovXG5mdW5jdGlvbiBzaG91bGRSZXNldFBsYXllcihwcmV2UHJvcHMsIHByb3BzKSB7XG4gIHJldHVybiAhaXNFcXVhbChmaWx0ZXJSZXNldE9wdGlvbnMocHJldlByb3BzLm9wdHMpLCBmaWx0ZXJSZXNldE9wdGlvbnMocHJvcHMub3B0cykpO1xufVxuXG4vKipcclxuICogQ2hlY2sgd2hldGhlciBhIHByb3BzIGNoYW5nZSBzaG91bGQgcmVzdWx0IGluIGFuIGlkIG9yIGNsYXNzTmFtZSB1cGRhdGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcmV2UHJvcHNcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqL1xuZnVuY3Rpb24gc2hvdWxkVXBkYXRlUGxheWVyKHByZXZQcm9wcywgcHJvcHMpIHtcbiAgcmV0dXJuIHByZXZQcm9wcy5pZCA9PT0gcHJvcHMuaWQgfHwgcHJldlByb3BzLmNsYXNzTmFtZSA9PT0gcHJvcHMuY2xhc3NOYW1lO1xufVxuXG52YXIgWW91VHViZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhZb3VUdWJlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBZb3VUdWJlKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFlvdVR1YmUpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFlvdVR1YmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihZb3VUdWJlKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMub25QbGF5ZXJSZWFkeSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uUmVhZHkoZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblBsYXllckVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMub25FcnJvcihldmVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uUGxheWVyU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnByb3BzLm9uU3RhdGVDaGFuZ2UoZXZlbnQpO1xuICAgICAgc3dpdGNoIChldmVudC5kYXRhKSB7XG5cbiAgICAgICAgY2FzZSBZb3VUdWJlLlBsYXllclN0YXRlLkVOREVEOlxuICAgICAgICAgIF90aGlzLnByb3BzLm9uRW5kKGV2ZW50KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFlvdVR1YmUuUGxheWVyU3RhdGUuUExBWUlORzpcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vblBsYXkoZXZlbnQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgWW91VHViZS5QbGF5ZXJTdGF0ZS5QQVVTRUQ6XG4gICAgICAgICAgX3RoaXMucHJvcHMub25QYXVzZShldmVudCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uUGxheWVyUGxheWJhY2tSYXRlQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMub25QbGF5YmFja1JhdGVDaGFuZ2UoZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblBsYXllclBsYXliYWNrUXVhbGl0eUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uUGxheWJhY2tRdWFsaXR5Q2hhbmdlKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY3JlYXRlUGxheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZG8gbm90IGF0dGVtcHQgdG8gY3JlYXRlIGEgcGxheWVyIHNlcnZlci1zaWRlLCBpdCB3b24ndCB3b3JrXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgICAgLy8gY3JlYXRlIHBsYXllclxuICAgICAgdmFyIHBsYXllck9wdHMgPSBfZXh0ZW5kcyh7fSwgX3RoaXMucHJvcHMub3B0cywge1xuICAgICAgICAvLyBwcmVsb2FkIHRoZSBgdmlkZW9JZGAgdmlkZW8gaWYgb25lIGlzIGFscmVhZHkgZ2l2ZW5cbiAgICAgICAgdmlkZW9JZDogX3RoaXMucHJvcHMudmlkZW9JZFxuICAgICAgfSk7XG4gICAgICBfdGhpcy5pbnRlcm5hbFBsYXllciA9IHlvdVR1YmVQbGF5ZXIoX3RoaXMuY29udGFpbmVyLCBwbGF5ZXJPcHRzKTtcbiAgICAgIC8vIGF0dGFjaCBldmVudCBoYW5kbGVyc1xuICAgICAgX3RoaXMuaW50ZXJuYWxQbGF5ZXIub24oJ3JlYWR5JywgX3RoaXMub25QbGF5ZXJSZWFkeSk7XG4gICAgICBfdGhpcy5pbnRlcm5hbFBsYXllci5vbignZXJyb3InLCBfdGhpcy5vblBsYXllckVycm9yKTtcbiAgICAgIF90aGlzLmludGVybmFsUGxheWVyLm9uKCdzdGF0ZUNoYW5nZScsIF90aGlzLm9uUGxheWVyU3RhdGVDaGFuZ2UpO1xuICAgICAgX3RoaXMuaW50ZXJuYWxQbGF5ZXIub24oJ3BsYXliYWNrUmF0ZUNoYW5nZScsIF90aGlzLm9uUGxheWVyUGxheWJhY2tSYXRlQ2hhbmdlKTtcbiAgICAgIF90aGlzLmludGVybmFsUGxheWVyLm9uKCdwbGF5YmFja1F1YWxpdHlDaGFuZ2UnLCBfdGhpcy5vblBsYXllclBsYXliYWNrUXVhbGl0eUNoYW5nZSk7XG4gICAgfTtcblxuICAgIF90aGlzLnJlc2V0UGxheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmludGVybmFsUGxheWVyLmRlc3Ryb3koKS50aGVuKF90aGlzLmNyZWF0ZVBsYXllcik7XG4gICAgfTtcblxuICAgIF90aGlzLnVwZGF0ZVBsYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmludGVybmFsUGxheWVyLmdldElmcmFtZSgpLnRoZW4oZnVuY3Rpb24gKGlmcmFtZSkge1xuICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdpZCcsIF90aGlzLnByb3BzLmlkKTtcbiAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBfdGhpcy5wcm9wcy5jbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnVwZGF0ZVZpZGVvID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy52aWRlb0lkID09PSAndW5kZWZpbmVkJyB8fCBfdGhpcy5wcm9wcy52aWRlb0lkID09PSBudWxsKSB7XG4gICAgICAgIF90aGlzLmludGVybmFsUGxheWVyLnN0b3BWaWRlbygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCBxdWV1ZWluZyBvcHRpb25zXG4gICAgICB2YXIgYXV0b3BsYXkgPSBmYWxzZTtcbiAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICB2aWRlb0lkOiBfdGhpcy5wcm9wcy52aWRlb0lkXG4gICAgICB9O1xuICAgICAgaWYgKCdwbGF5ZXJWYXJzJyBpbiBfdGhpcy5wcm9wcy5vcHRzKSB7XG4gICAgICAgIGF1dG9wbGF5ID0gX3RoaXMucHJvcHMub3B0cy5wbGF5ZXJWYXJzLmF1dG9wbGF5ID09PSAxO1xuICAgICAgICBpZiAoJ3N0YXJ0JyBpbiBfdGhpcy5wcm9wcy5vcHRzLnBsYXllclZhcnMpIHtcbiAgICAgICAgICBvcHRzLnN0YXJ0U2Vjb25kcyA9IF90aGlzLnByb3BzLm9wdHMucGxheWVyVmFycy5zdGFydDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2VuZCcgaW4gX3RoaXMucHJvcHMub3B0cy5wbGF5ZXJWYXJzKSB7XG4gICAgICAgICAgb3B0cy5lbmRTZWNvbmRzID0gX3RoaXMucHJvcHMub3B0cy5wbGF5ZXJWYXJzLmVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBpZiBhdXRvcGxheSBpcyBlbmFibGVkIGxvYWRWaWRlb0J5SWRcbiAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICBfdGhpcy5pbnRlcm5hbFBsYXllci5sb2FkVmlkZW9CeUlkKG9wdHMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBkZWZhdWx0IGJlaGF2aW91ciBqdXN0IGN1ZXMgdGhlIHZpZGVvXG4gICAgICBfdGhpcy5pbnRlcm5hbFBsYXllci5jdWVWaWRlb0J5SWQob3B0cyk7XG4gICAgfTtcblxuICAgIF90aGlzLnJlZkNvbnRhaW5lciA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAgIF90aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgX3RoaXMuY29udGFpbmVyID0gbnVsbDtcbiAgICBfdGhpcy5pbnRlcm5hbFBsYXllciA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyoqXHJcbiAgICAqIEV4cG9zZSBQbGF5ZXJTdGF0ZSBjb25zdGFudHMgZm9yIGNvbnZlbmllbmNlLiBUaGVzZSBjb25zdGFudHMgY2FuIGFsc28gYmVcclxuICAgICogYWNjZXNzZWQgdGhyb3VnaCB0aGUgZ2xvYmFsIFlUIG9iamVjdCBhZnRlciB0aGUgWW91VHViZSBJRnJhbWUgQVBJIGlzIGluc3RhbnRpYXRlZC5cclxuICAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9pZnJhbWVfYXBpX3JlZmVyZW5jZSNvblN0YXRlQ2hhbmdlXHJcbiAgICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFlvdVR1YmUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuY3JlYXRlUGxheWVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgaWYgKHNob3VsZFVwZGF0ZVBsYXllcihwcmV2UHJvcHMsIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUGxheWVyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG91bGRSZXNldFBsYXllcihwcmV2UHJvcHMsIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMucmVzZXRQbGF5ZXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZFVwZGF0ZVZpZGVvKHByZXZQcm9wcywgdGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWRlbygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAvKipcclxuICAgICAgICogTm90ZTogVGhlIGB5b3V0dWJlLXBsYXllcmAgcGFja2FnZSB0aGF0IGlzIHVzZWQgcHJvbWlzaWZpZXMgYWxsIFlvdXR1YmVcclxuICAgICAgICogUGxheWVyIEFQSSBjYWxscywgd2hpY2ggaW50cm9kdWNlcyBhIGRlbGF5IG9mIGEgdGljayBiZWZvcmUgaXQgYWN0dWFsbHlcclxuICAgICAgICogZ2V0cyBkZXN0cm95ZWQuIFNpbmNlIFJlYWN0IGF0dGVtcHRzIHRvIHJlbW92ZSB0aGUgZWxlbWVudCBpbnN0YW50bHlcclxuICAgICAgICogdGhpcyBtZXRob2QgaXNuJ3QgcXVpY2sgZW5vdWdoIHRvIHJlc2V0IHRoZSBjb250YWluZXIgZWxlbWVudC5cclxuICAgICAgICovXG4gICAgICB0aGlzLmludGVybmFsUGxheWVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvaWZyYW1lX2FwaV9yZWZlcmVuY2Ujb25SZWFkeVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxyXG4gICAgICogICBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gcGxheWVyIG9iamVjdFxyXG4gICAgICovXG5cblxuICAgIC8qKlxyXG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9pZnJhbWVfYXBpX3JlZmVyZW5jZSNvbkVycm9yXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XHJcbiAgICAgKiAgIEBwYXJhbSB7SW50ZWdlcn0gZGF0YSAgLSBlcnJvciB0eXBlXHJcbiAgICAgKiAgIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgLSBwbGF5ZXIgb2JqZWN0XHJcbiAgICAgKi9cblxuXG4gICAgLyoqXHJcbiAgICAgKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL2lmcmFtZV9hcGlfcmVmZXJlbmNlI29uU3RhdGVDaGFuZ2VcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcclxuICAgICAqICAgQHBhcmFtIHtJbnRlZ2VyfSBkYXRhICAtIHN0YXR1cyBjaGFuZ2UgdHlwZVxyXG4gICAgICogICBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gYWN0dWFsIFlUIHBsYXllclxyXG4gICAgICovXG5cblxuICAgIC8qKlxyXG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9pZnJhbWVfYXBpX3JlZmVyZW5jZSNvblBsYXliYWNrUmF0ZUNoYW5nZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxyXG4gICAgICogICBAcGFyYW0ge0Zsb2F0fSBkYXRhICAgIC0gcGxheWJhY2sgcmF0ZVxyXG4gICAgICogICBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gYWN0dWFsIFlUIHBsYXllclxyXG4gICAgICovXG5cblxuICAgIC8qKlxyXG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9pZnJhbWVfYXBpX3JlZmVyZW5jZSNvblBsYXliYWNrUXVhbGl0eUNoYW5nZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxyXG4gICAgICogICBAcGFyYW0ge1N0cmluZ30gZGF0YSAgIC0gcGxheWJhY2sgcXVhbGl0eVxyXG4gICAgICogICBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gYWN0dWFsIFlUIHBsYXllclxyXG4gICAgICovXG5cblxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgWW91dHViZSBQbGF5ZXIgQVBJIG9uIHRoZSBjb250YWluZXIgYW5kIGF0dGFjaCBldmVudCBoYW5kbGVyc1xyXG4gICAgICovXG5cblxuICAgIC8qKlxyXG4gICAgICogU2hvcnRoYW5kIGZvciBkZXN0cm95aW5nIGFuZCB0aGVuIHJlLWNyZWF0aW5nIHRoZSBZb3V0dWJlIFBsYXllclxyXG4gICAgICovXG5cblxuICAgIC8qKlxyXG4gICAgICogTWV0aG9kIHRvIHVwZGF0ZSB0aGUgaWQgYW5kIGNsYXNzIG9mIHRoZSBZb3V0dWJlIFBsYXllciBpZnJhbWUuXHJcbiAgICAgKiBSZWFjdCBzaG91bGQgdXBkYXRlIHRoaXMgYXV0b21hdGljYWxseSBidXQgc2luY2UgdGhlIFlvdXR1YmUgUGxheWVyIEFQSVxyXG4gICAgICogcmVwbGFjZWQgdGhlIERJViB0aGF0IGlzIG1vdW50ZWQgYnkgUmVhY3Qgd2UgbmVlZCB0byBkbyB0aGlzIG1hbnVhbGx5LlxyXG4gICAgICovXG5cblxuICAgIC8qKlxyXG4gICAgICogQ2FsbCBZb3V0dWJlIFBsYXllciBBUEkgbWV0aG9kcyB0byB1cGRhdGUgdGhlIGN1cnJlbnRseSBwbGF5aW5nIHZpZGVvLlxyXG4gICAgICogRGVwZWRpbmcgb24gdGhlIGBvcHRzLnBsYXllclZhcnMuYXV0b3BsYXlgIHRoaXMgZnVuY3Rpb24gdXNlcyBvbmUgb2YgdHdvXHJcbiAgICAgKiBZb3V0dWJlIFBsYXllciBBUEkgbWV0aG9kcyB0byB1cGRhdGUgdGhlIHZpZGVvLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWUsIHJlZjogdGhpcy5yZWZDb250YWluZXIgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFlvdVR1YmU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbllvdVR1YmUucHJvcFR5cGVzID0ge1xuICB2aWRlb0lkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8vIGN1c3RvbSBJRCBmb3IgcGxheWVyIGVsZW1lbnRcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLy8gY3VzdG9tIGNsYXNzIG5hbWUgZm9yIHBsYXllciBlbGVtZW50XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL2lmcmFtZV9hcGlfcmVmZXJlbmNlI0xvYWRpbmdfYV9WaWRlb19QbGF5ZXJcbiAgb3B0czogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvLyBldmVudCBzdWJzY3JpcHRpb25zXG4gIG9uUmVhZHk6IFByb3BUeXBlcy5mdW5jLFxuICBvbkVycm9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25QbGF5OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25QYXVzZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TdGF0ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUGxheWJhY2tSYXRlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25QbGF5YmFja1F1YWxpdHlDaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG59O1xuWW91VHViZS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9wdHM6IHt9LFxuICBvblJlYWR5OiBmdW5jdGlvbiBvblJlYWR5KCkge30sXG4gIG9uRXJyb3I6IGZ1bmN0aW9uIG9uRXJyb3IoKSB7fSxcbiAgb25QbGF5OiBmdW5jdGlvbiBvblBsYXkoKSB7fSxcbiAgb25QYXVzZTogZnVuY3Rpb24gb25QYXVzZSgpIHt9LFxuICBvbkVuZDogZnVuY3Rpb24gb25FbmQoKSB7fSxcbiAgb25TdGF0ZUNoYW5nZTogZnVuY3Rpb24gb25TdGF0ZUNoYW5nZSgpIHt9LFxuICBvblBsYXliYWNrUmF0ZUNoYW5nZTogZnVuY3Rpb24gb25QbGF5YmFja1JhdGVDaGFuZ2UoKSB7fSxcbiAgb25QbGF5YmFja1F1YWxpdHlDaGFuZ2U6IGZ1bmN0aW9uIG9uUGxheWJhY2tRdWFsaXR5Q2hhbmdlKCkge31cbn07XG5Zb3VUdWJlLlBsYXllclN0YXRlID0ge1xuICBVTlNUQVJURUQ6IC0xLFxuICBFTkRFRDogMCxcbiAgUExBWUlORzogMSxcbiAgUEFVU0VEOiAyLFxuICBCVUZGRVJJTkc6IDMsXG4gIENVRUQ6IDVcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgWW91VHViZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC15b3V0dWJlL2VzL1lvdVR1YmUuanNcbi8vIG1vZHVsZSBpZCA9IDc4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmVcbiAqIGVxdWl2YWxlbnQuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIHN1cHBvcnRzIGNvbXBhcmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLFxuICogZGF0ZSBvYmplY3RzLCBlcnJvciBvYmplY3RzLCBtYXBzLCBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLFxuICogc2V0cywgc3RyaW5ncywgc3ltYm9scywgYW5kIHR5cGVkIGFycmF5cy4gYE9iamVjdGAgb2JqZWN0cyBhcmUgY29tcGFyZWRcbiAqIGJ5IHRoZWlyIG93biwgbm90IGluaGVyaXRlZCwgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBGdW5jdGlvbnMgYW5kIERPTVxuICogbm9kZXMgYXJlIGNvbXBhcmVkIGJ5IHN0cmljdCBlcXVhbGl0eSwgaS5lLiBgPT09YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5pc0VxdWFsKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIG9iamVjdCA9PT0gb3RoZXI7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VxdWFsKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VxdWFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDc4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9zaXN0ZXIgPSByZXF1aXJlKCdzaXN0ZXInKTtcblxudmFyIF9zaXN0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2lzdGVyKTtcblxudmFyIF9sb2FkWW91VHViZUlmcmFtZUFwaSA9IHJlcXVpcmUoJy4vbG9hZFlvdVR1YmVJZnJhbWVBcGknKTtcblxudmFyIF9sb2FkWW91VHViZUlmcmFtZUFwaTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2FkWW91VHViZUlmcmFtZUFwaSk7XG5cbnZhciBfWW91VHViZVBsYXllciA9IHJlcXVpcmUoJy4vWW91VHViZVBsYXllcicpO1xuXG52YXIgX1lvdVR1YmVQbGF5ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfWW91VHViZVBsYXllcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQHR5cGVkZWYgWVQuUGxheWVyXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvaWZyYW1lX2FwaV9yZWZlcmVuY2VcbiAqICovXG5cbi8qKlxuICogQHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL2lmcmFtZV9hcGlfcmVmZXJlbmNlI0xvYWRpbmdfYV9WaWRlb19QbGF5ZXJcbiAqL1xudmFyIHlvdXR1YmVJZnJhbWVBUEkgPSB2b2lkIDA7XG5cbi8qKlxuICogQSBmYWN0b3J5IGZ1bmN0aW9uIHVzZWQgdG8gcHJvZHVjZSBhbiBpbnN0YW5jZSBvZiBZVC5QbGF5ZXIgYW5kIHF1ZXVlIGZ1bmN0aW9uIGNhbGxzIGFuZCBwcm94eSBldmVudHMgb2YgdGhlIHJlc3VsdGluZyBvYmplY3QuXG4gKlxuICogQHBhcmFtIGVsZW1lbnRJZCBFaXRoZXIgQW4gZXhpc3RpbmcgWVQuUGxheWVyIGluc3RhbmNlLFxuICogdGhlIERPTSBlbGVtZW50IG9yIHRoZSBpZCBvZiB0aGUgSFRNTCBlbGVtZW50IHdoZXJlIHRoZSBBUEkgd2lsbCBpbnNlcnQgYW4gPGlmcmFtZT4uXG4gKiBAcGFyYW0gb3B0aW9ucyBTZWUgYG9wdGlvbnNgIChJZ25vcmVkIHdoZW4gdXNpbmcgYW4gZXhpc3RpbmcgWVQuUGxheWVyIGluc3RhbmNlKS5cbiAqIEBwYXJhbSBzdHJpY3RTdGF0ZSBBIGZsYWcgZGVzaWduYXRpbmcgd2hldGhlciBvciBub3QgdG8gd2FpdCBmb3JcbiAqIGFuIGFjY2VwdGFibGUgc3RhdGUgd2hlbiBjYWxsaW5nIHN1cHBvcnRlZCBmdW5jdGlvbnMuIERlZmF1bHQ6IGBmYWxzZWAuXG4gKiBTZWUgYEZ1bmN0aW9uU3RhdGVNYXAuanNgIGZvciBzdXBwb3J0ZWQgZnVuY3Rpb25zIGFuZCBhY2NlcHRhYmxlIHN0YXRlcy5cbiAqL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAobWF5YmVFbGVtZW50SWQpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgc3RyaWN0U3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gIHZhciBlbWl0dGVyID0gKDAsIF9zaXN0ZXIyLmRlZmF1bHQpKCk7XG5cbiAgaWYgKCF5b3V0dWJlSWZyYW1lQVBJKSB7XG4gICAgeW91dHViZUlmcmFtZUFQSSA9ICgwLCBfbG9hZFlvdVR1YmVJZnJhbWVBcGkyLmRlZmF1bHQpKCk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5ldmVudHMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V2ZW50IGhhbmRsZXJzIGNhbm5vdCBiZSBvdmVyd3JpdHRlbi4nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbWF5YmVFbGVtZW50SWQgPT09ICdzdHJpbmcnICYmICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtYXliZUVsZW1lbnRJZCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgXCInICsgbWF5YmVFbGVtZW50SWQgKyAnXCIgZG9lcyBub3QgZXhpc3QuJyk7XG4gIH1cblxuICBvcHRpb25zLmV2ZW50cyA9IF9Zb3VUdWJlUGxheWVyMi5kZWZhdWx0LnByb3h5RXZlbnRzKGVtaXR0ZXIpO1xuXG4gIHZhciBwbGF5ZXJBUElSZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgaWYgKHR5cGVvZiBtYXliZUVsZW1lbnRJZCA9PT0gJ3N0cmluZycgfHwgbWF5YmVFbGVtZW50SWQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2UvY2F0Y2gtb3ItcmV0dXJuXG4gICAgICB5b3V0dWJlSWZyYW1lQVBJLnRoZW4oZnVuY3Rpb24gKFlUKSB7XG4gICAgICAgIHZhciBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKG1heWJlRWxlbWVudElkLCBvcHRpb25zKTtcblxuICAgICAgICBlbWl0dGVyLm9uKCdyZWFkeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXNvbHZlKHBsYXllcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICgodHlwZW9mIG1heWJlRWxlbWVudElkID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtYXliZUVsZW1lbnRJZCkpID09PSAnb2JqZWN0JyAmJiBtYXliZUVsZW1lbnRJZC5wbGF5VmlkZW8gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgdmFyIHBsYXllciA9IG1heWJlRWxlbWVudElkO1xuXG4gICAgICByZXNvbHZlKHBsYXllcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VuZXhwZWN0ZWQgc3RhdGUuJyk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgcGxheWVyQXBpID0gX1lvdVR1YmVQbGF5ZXIyLmRlZmF1bHQucHJvbWlzaWZ5UGxheWVyKHBsYXllckFQSVJlYWR5LCBzdHJpY3RTdGF0ZSk7XG5cbiAgcGxheWVyQXBpLm9uID0gZW1pdHRlci5vbjtcbiAgcGxheWVyQXBpLm9mZiA9IGVtaXR0ZXIub2ZmO1xuXG4gIHJldHVybiBwbGF5ZXJBcGk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy95b3V0dWJlLXBsYXllci9kaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3ODhcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLyoqXG4qIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9nYWp1cy9zaXN0ZXIgZm9yIHRoZSBjYW5vbmljYWwgc291cmNlIHJlcG9zaXRvcnlcbiogQGxpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL2dhanVzL3Npc3Rlci9ibG9iL21hc3Rlci9MSUNFTlNFIEJTRCAzLUNsYXVzZVxuKi9cbmZ1bmN0aW9uIFNpc3RlciAoKSB7XG4gICAgdmFyIHNpc3RlciA9IHt9LFxuICAgICAgICBldmVudHMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGhhbmRsZXJcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBFdmVudCBkYXRhLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgRXZlbnQgbmFtZS5cbiAgICAgKiBAcGFyYW0ge2hhbmRsZXJ9IGhhbmRsZXJcbiAgICAgKiBAcmV0dXJuIHtsaXN0ZW5lcn1cbiAgICAgKi9cbiAgICBzaXN0ZXIub24gPSBmdW5jdGlvbiAobmFtZSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB7bmFtZTogbmFtZSwgaGFuZGxlcjogaGFuZGxlcn07XG4gICAgICAgIGV2ZW50c1tuYW1lXSA9IGV2ZW50c1tuYW1lXSB8fCBbXTtcbiAgICAgICAgZXZlbnRzW25hbWVdLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bGlzdGVuZXJ9XG4gICAgICovXG4gICAgc2lzdGVyLm9mZiA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICB2YXIgaW5kZXggPSBldmVudHNbbGlzdGVuZXIubmFtZV0uaW5kZXhPZihsaXN0ZW5lcik7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XG4gICAgICAgICAgICBldmVudHNbbGlzdGVuZXIubmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBFdmVudCBuYW1lLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIEV2ZW50IGRhdGEuXG4gICAgICovXG4gICAgc2lzdGVyLnRyaWdnZXIgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSkge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gZXZlbnRzW25hbWVdLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBpID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbaV0uaGFuZGxlcihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gc2lzdGVyO1xufVxuXG5nbG9iYWwuZ2FqdXMgPSBnbG9iYWwuZ2FqdXMgfHwge307XG5nbG9iYWwuZ2FqdXMuU2lzdGVyID0gU2lzdGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpc3RlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaXN0ZXIvc3JjL3Npc3Rlci5qc1xuLy8gbW9kdWxlIGlkID0gNzg5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9sb2FkU2NyaXB0ID0gcmVxdWlyZSgnbG9hZC1zY3JpcHQnKTtcblxudmFyIF9sb2FkU2NyaXB0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvYWRTY3JpcHQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBBIHByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSBpcyBjYWxsZWQuXG4gICAqIFRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggYSByZWZlcmVuY2UgdG8gd2luZG93LllUIG9iamVjdC5cbiAgICovXG4gIHZhciBpZnJhbWVBUElSZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgaWYgKHdpbmRvdy5ZVCAmJiB3aW5kb3cuWVQuUGxheWVyICYmIHdpbmRvdy5ZVC5QbGF5ZXIgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmVzb2x2ZSh3aW5kb3cuWVQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzID0gd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5O1xuXG4gICAgLy8gVGhlIEFQSSB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbiB3aGVuIHBhZ2UgaGFzIGZpbmlzaGVkIGRvd25sb2FkaW5nXG4gICAgLy8gdGhlIEphdmFTY3JpcHQgZm9yIHRoZSBwbGF5ZXIgQVBJLlxuICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICBwcmV2aW91cygpO1xuICAgICAgfVxuXG4gICAgICByZXNvbHZlKHdpbmRvdy5ZVCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgdmFyIHByb3RvY29sID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cDonID8gJ2h0dHA6JyA6ICdodHRwczonO1xuXG4gICgwLCBfbG9hZFNjcmlwdDIuZGVmYXVsdCkocHJvdG9jb2wgKyAnLy93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaScpO1xuXG4gIHJldHVybiBpZnJhbWVBUElSZWFkeTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3lvdXR1YmUtcGxheWVyL2Rpc3QvbG9hZFlvdVR1YmVJZnJhbWVBcGkuanNcbi8vIG1vZHVsZSBpZCA9IDc5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbG9hZCAoc3JjLCBvcHRzLCBjYikge1xuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IG9wdHNcbiAgICBvcHRzID0ge31cbiAgfVxuXG4gIG9wdHMgPSBvcHRzIHx8IHt9XG4gIGNiID0gY2IgfHwgZnVuY3Rpb24oKSB7fVxuXG4gIHNjcmlwdC50eXBlID0gb3B0cy50eXBlIHx8ICd0ZXh0L2phdmFzY3JpcHQnXG4gIHNjcmlwdC5jaGFyc2V0ID0gb3B0cy5jaGFyc2V0IHx8ICd1dGY4JztcbiAgc2NyaXB0LmFzeW5jID0gJ2FzeW5jJyBpbiBvcHRzID8gISFvcHRzLmFzeW5jIDogdHJ1ZVxuICBzY3JpcHQuc3JjID0gc3JjXG5cbiAgaWYgKG9wdHMuYXR0cnMpIHtcbiAgICBzZXRBdHRyaWJ1dGVzKHNjcmlwdCwgb3B0cy5hdHRycylcbiAgfVxuXG4gIGlmIChvcHRzLnRleHQpIHtcbiAgICBzY3JpcHQudGV4dCA9ICcnICsgb3B0cy50ZXh0XG4gIH1cblxuICB2YXIgb25lbmQgPSAnb25sb2FkJyBpbiBzY3JpcHQgPyBzdGRPbkVuZCA6IGllT25FbmRcbiAgb25lbmQoc2NyaXB0LCBjYilcblxuICAvLyBzb21lIGdvb2QgbGVnYWN5IGJyb3dzZXJzIChmaXJlZm94KSBmYWlsIHRoZSAnaW4nIGRldGVjdGlvbiBhYm92ZVxuICAvLyBzbyBhcyBhIGZhbGxiYWNrIHdlIGFsd2F5cyBzZXQgb25sb2FkXG4gIC8vIG9sZCBJRSB3aWxsIGlnbm9yZSB0aGlzIGFuZCBuZXcgSUUgd2lsbCBzZXQgb25sb2FkXG4gIGlmICghc2NyaXB0Lm9ubG9hZCkge1xuICAgIHN0ZE9uRW5kKHNjcmlwdCwgY2IpO1xuICB9XG5cbiAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpXG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoc2NyaXB0LCBhdHRycykge1xuICBmb3IgKHZhciBhdHRyIGluIGF0dHJzKSB7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyc1thdHRyXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RkT25FbmQgKHNjcmlwdCwgY2IpIHtcbiAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm9uZXJyb3IgPSB0aGlzLm9ubG9hZCA9IG51bGxcbiAgICBjYihudWxsLCBzY3JpcHQpXG4gIH1cbiAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gdGhpcy5vbmxvYWQgPSBudWxsIGhlcmUgaXMgbmVjZXNzYXJ5XG4gICAgLy8gYmVjYXVzZSBldmVuIElFOSB3b3JrcyBub3QgbGlrZSBvdGhlcnNcbiAgICB0aGlzLm9uZXJyb3IgPSB0aGlzLm9ubG9hZCA9IG51bGxcbiAgICBjYihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkICcgKyB0aGlzLnNyYyksIHNjcmlwdClcbiAgfVxufVxuXG5mdW5jdGlvbiBpZU9uRW5kIChzY3JpcHQsIGNiKSB7XG4gIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPSAnY29tcGxldGUnICYmIHRoaXMucmVhZHlTdGF0ZSAhPSAnbG9hZGVkJykgcmV0dXJuXG4gICAgdGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsXG4gICAgY2IobnVsbCwgc2NyaXB0KSAvLyB0aGVyZSBpcyBubyB3YXkgdG8gY2F0Y2ggbG9hZGluZyBlcnJvcnMgaW4gSUU4XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvYWQtc2NyaXB0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3OTFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlYnVnID0gcmVxdWlyZSgnZGVidWcnKTtcblxudmFyIF9kZWJ1ZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWJ1Zyk7XG5cbnZhciBfZnVuY3Rpb25OYW1lcyA9IHJlcXVpcmUoJy4vZnVuY3Rpb25OYW1lcycpO1xuXG52YXIgX2Z1bmN0aW9uTmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnVuY3Rpb25OYW1lcyk7XG5cbnZhciBfZXZlbnROYW1lcyA9IHJlcXVpcmUoJy4vZXZlbnROYW1lcycpO1xuXG52YXIgX2V2ZW50TmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXZlbnROYW1lcyk7XG5cbnZhciBfRnVuY3Rpb25TdGF0ZU1hcCA9IHJlcXVpcmUoJy4vRnVuY3Rpb25TdGF0ZU1hcCcpO1xuXG52YXIgX0Z1bmN0aW9uU3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRnVuY3Rpb25TdGF0ZU1hcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWJ1ZyA9ICgwLCBfZGVidWcyLmRlZmF1bHQpKCd5b3V0dWJlLXBsYXllcicpO1xuXG52YXIgWW91VHViZVBsYXllciA9IHt9O1xuXG4vKipcbiAqIENvbnN0cnVjdCBhbiBvYmplY3QgdGhhdCBkZWZpbmVzIGFuIGV2ZW50IGhhbmRsZXIgZm9yIGFsbCBvZiB0aGUgWW91VHViZVxuICogcGxheWVyIGV2ZW50cy4gUHJveHkgY2FwdHVyZWQgZXZlbnRzIHRocm91Z2ggYW4gZXZlbnQgZW1pdHRlci5cbiAqXG4gKiBAdG9kbyBDYXB0dXJlIGV2ZW50IHBhcmFtZXRlcnMuXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvaWZyYW1lX2FwaV9yZWZlcmVuY2UjRXZlbnRzXG4gKi9cbllvdVR1YmVQbGF5ZXIucHJveHlFdmVudHMgPSBmdW5jdGlvbiAoZW1pdHRlcikge1xuICB2YXIgZXZlbnRzID0ge307XG5cbiAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoZXZlbnROYW1lKSB7XG4gICAgdmFyIG9uRXZlbnROYW1lID0gJ29uJyArIGV2ZW50TmFtZS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgZXZlbnROYW1lLnNsaWNlKDEpO1xuXG4gICAgZXZlbnRzW29uRXZlbnROYW1lXSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZGVidWcoJ2V2ZW50IFwiJXNcIicsIG9uRXZlbnROYW1lLCBldmVudCk7XG5cbiAgICAgIGVtaXR0ZXIudHJpZ2dlcihldmVudE5hbWUsIGV2ZW50KTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9ldmVudE5hbWVzMi5kZWZhdWx0W1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgdmFyIGV2ZW50TmFtZSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICBfbG9vcChldmVudE5hbWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXZlbnRzO1xufTtcblxuLyoqXG4gKiBEZWxheXMgcGxheWVyIEFQSSBtZXRob2QgZXhlY3V0aW9uIHVudGlsIHBsYXllciBzdGF0ZSBpcyByZWFkeS5cbiAqXG4gKiBAdG9kbyBQcm94eSBhbGwgb2YgdGhlIG1ldGhvZHMgdXNpbmcgT2JqZWN0LmtleXMuXG4gKiBAdG9kbyBTZWUgVFJJQ0tZIGJlbG93LlxuICogQHBhcmFtIHBsYXllckFQSVJlYWR5IFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHBsYXllciBpcyByZWFkeS5cbiAqIEBwYXJhbSBzdHJpY3RTdGF0ZSBBIGZsYWcgZGVzaWduYXRpbmcgd2hldGhlciBvciBub3QgdG8gd2FpdCBmb3JcbiAqIGFuIGFjY2VwdGFibGUgc3RhdGUgd2hlbiBjYWxsaW5nIHN1cHBvcnRlZCBmdW5jdGlvbnMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5Zb3VUdWJlUGxheWVyLnByb21pc2lmeVBsYXllciA9IGZ1bmN0aW9uIChwbGF5ZXJBUElSZWFkeSkge1xuICB2YXIgc3RyaWN0U3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gIHZhciBmdW5jdGlvbnMgPSB7fTtcblxuICB2YXIgX2xvb3AyID0gZnVuY3Rpb24gX2xvb3AyKGZ1bmN0aW9uTmFtZSkge1xuICAgIGlmIChzdHJpY3RTdGF0ZSAmJiBfRnVuY3Rpb25TdGF0ZU1hcDIuZGVmYXVsdFtmdW5jdGlvbk5hbWVdKSB7XG4gICAgICBmdW5jdGlvbnNbZnVuY3Rpb25OYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBsYXllckFQSVJlYWR5LnRoZW4oZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgICAgIHZhciBzdGF0ZUluZm8gPSBfRnVuY3Rpb25TdGF0ZU1hcDIuZGVmYXVsdFtmdW5jdGlvbk5hbWVdO1xuICAgICAgICAgIHZhciBwbGF5ZXJTdGF0ZSA9IHBsYXllci5nZXRQbGF5ZXJTdGF0ZSgpO1xuXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXdhcm5pbmctY29tbWVudHNcbiAgICAgICAgICAvLyBUT0RPOiBKdXN0IHNwcmVhZCB0aGUgYXJncyBpbnRvIHRoZSBmdW5jdGlvbiBvbmNlIEJhYmVsIGlzIGZpeGVkOlxuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNDI3MFxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICAgICAgICB2YXIgdmFsdWUgPSBwbGF5ZXJbZnVuY3Rpb25OYW1lXS5hcHBseShwbGF5ZXIsIGFyZ3MpO1xuXG4gICAgICAgICAgLy8gVFJJQ0tZOiBGb3IgZnVuY3Rpb25zIGxpa2UgYHNlZWtUb2AsIGEgY2hhbmdlIGluIHN0YXRlIG11c3QgYmVcbiAgICAgICAgICAvLyB0cmlnZ2VyZWQgZ2l2ZW4gdGhhdCB0aGUgcmVzdWx0aW5nIHN0YXRlIGNvdWxkIG1hdGNoIHRoZSBpbml0aWFsXG4gICAgICAgICAgLy8gc3RhdGUuXG4gICAgICAgICAgaWYgKHN0YXRlSW5mby5zdGF0ZUNoYW5nZVJlcXVpcmVkIHx8XG5cbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0cmEtcGFyZW5zXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShzdGF0ZUluZm8uYWNjZXB0YWJsZVN0YXRlcykgJiYgc3RhdGVJbmZvLmFjY2VwdGFibGVTdGF0ZXMuaW5kZXhPZihwbGF5ZXJTdGF0ZSkgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgdmFyIG9uUGxheWVyU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiBvblBsYXllclN0YXRlQ2hhbmdlKCkge1xuICAgICAgICAgICAgICAgIHZhciBwbGF5ZXJTdGF0ZUFmdGVyQ2hhbmdlID0gcGxheWVyLmdldFBsYXllclN0YXRlKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGltZW91dCA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGVJbmZvLnRpbWVvdXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdvblN0YXRlQ2hhbmdlJywgb25QbGF5ZXJTdGF0ZUNoYW5nZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgfSwgc3RhdGVJbmZvLnRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0YXRlSW5mby5hY2NlcHRhYmxlU3RhdGVzKSAmJiBzdGF0ZUluZm8uYWNjZXB0YWJsZVN0YXRlcy5pbmRleE9mKHBsYXllclN0YXRlQWZ0ZXJDaGFuZ2UpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29uU3RhdGVDaGFuZ2UnLCBvblBsYXllclN0YXRlQ2hhbmdlKTtcblxuICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKCdvblN0YXRlQ2hhbmdlJywgb25QbGF5ZXJTdGF0ZUNoYW5nZSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bmN0aW9uc1tmdW5jdGlvbk5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwbGF5ZXJBUElSZWFkeS50aGVuKGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8td2FybmluZy1jb21tZW50c1xuICAgICAgICAgIC8vIFRPRE86IEp1c3Qgc3ByZWFkIHRoZSBhcmdzIGludG8gdGhlIGZ1bmN0aW9uIG9uY2UgQmFiZWwgaXMgZml4ZWQ6XG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy80MjcwXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgICAgICAgIHJldHVybiBwbGF5ZXJbZnVuY3Rpb25OYW1lXS5hcHBseShwbGF5ZXIsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBfZnVuY3Rpb25OYW1lczIuZGVmYXVsdFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgX2xvb3AyKGZ1bmN0aW9uTmFtZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyLnJldHVybikge1xuICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb25zO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gWW91VHViZVBsYXllcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3lvdXR1YmUtcGxheWVyL2Rpc3QvWW91VHViZVBsYXllci5qc1xuLy8gbW9kdWxlIGlkID0gNzkyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJ2xpZ2h0c2VhZ3JlZW4nLFxuICAnZm9yZXN0Z3JlZW4nLFxuICAnZ29sZGVucm9kJyxcbiAgJ2RvZGdlcmJsdWUnLFxuICAnZGFya29yY2hpZCcsXG4gICdjcmltc29uJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcbiAgLy8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2VcbiAgLy8gZXhwbGljaXRseVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgd2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG4gICAgLy8gaXMgZmlyZWZveCA+PSB2MzE/XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gIGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpXG5cbiAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgaW5kZXgrKztcbiAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlXG4gICAgJiYgY29uc29sZS5sb2dcbiAgICAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgfVxuICB9IGNhdGNoKGUpIHt9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG4gIHRyeSB7XG4gICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3OTNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWdbJ2RlZmF1bHQnXSA9IGNyZWF0ZURlYnVnO1xuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG5leHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xuZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuZXhwb3J0cy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gKi9cblxuZXhwb3J0cy5uYW1lcyA9IFtdO1xuZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAqXG4gKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzID0ge307XG5cbi8qKlxuICogUHJldmlvdXMgbG9nIHRpbWVzdGFtcC5cbiAqL1xuXG52YXIgcHJldlRpbWU7XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgdmFyIGhhc2ggPSAwLCBpO1xuXG4gIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIC8vIGRpc2FibGVkP1xuICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNlbGYgPSBkZWJ1ZztcblxuICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24obWF0Y2gsIGZvcm1hdCkge1xuICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpbmRleCsrO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIGRlYnVnLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXG4gIC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZXhwb3J0cy5pbml0KSB7XG4gICAgZXhwb3J0cy5pbml0KGRlYnVnKTtcbiAgfVxuXG4gIHJldHVybiBkZWJ1Zztcbn1cblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICB2YXIgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9kZWJ1Zy5qc1xuLy8gbW9kdWxlIGlkID0gNzk0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigoPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIGlmIChtcyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtcyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICByZXR1cm4gcGx1cmFsKG1zLCBkLCAnZGF5JykgfHxcbiAgICBwbHVyYWwobXMsIGgsICdob3VyJykgfHxcbiAgICBwbHVyYWwobXMsIG0sICdtaW51dGUnKSB8fFxuICAgIHBsdXJhbChtcywgcywgJ3NlY29uZCcpIHx8XG4gICAgbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG4sIG5hbWUpIHtcbiAgaWYgKG1zIDwgbikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobXMgPCBuICogMS41KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobXMgLyBuKSArICcgJyArIG5hbWU7XG4gIH1cbiAgcmV0dXJuIE1hdGguY2VpbChtcyAvIG4pICsgJyAnICsgbmFtZSArICdzJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3OTVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5cbi8qKlxuICogQHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL2lmcmFtZV9hcGlfcmVmZXJlbmNlI0Z1bmN0aW9uc1xuICovXG5leHBvcnRzLmRlZmF1bHQgPSBbJ2N1ZVZpZGVvQnlJZCcsICdsb2FkVmlkZW9CeUlkJywgJ2N1ZVZpZGVvQnlVcmwnLCAnbG9hZFZpZGVvQnlVcmwnLCAncGxheVZpZGVvJywgJ3BhdXNlVmlkZW8nLCAnc3RvcFZpZGVvJywgJ2dldFZpZGVvTG9hZGVkRnJhY3Rpb24nLCAnY3VlUGxheWxpc3QnLCAnbG9hZFBsYXlsaXN0JywgJ25leHRWaWRlbycsICdwcmV2aW91c1ZpZGVvJywgJ3BsYXlWaWRlb0F0JywgJ3NldFNodWZmbGUnLCAnc2V0TG9vcCcsICdnZXRQbGF5bGlzdCcsICdnZXRQbGF5bGlzdEluZGV4JywgJ3NldE9wdGlvbicsICdtdXRlJywgJ3VuTXV0ZScsICdpc011dGVkJywgJ3NldFZvbHVtZScsICdnZXRWb2x1bWUnLCAnc2Vla1RvJywgJ2dldFBsYXllclN0YXRlJywgJ2dldFBsYXliYWNrUmF0ZScsICdzZXRQbGF5YmFja1JhdGUnLCAnZ2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcycsICdnZXRQbGF5YmFja1F1YWxpdHknLCAnc2V0UGxheWJhY2tRdWFsaXR5JywgJ2dldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMnLCAnZ2V0Q3VycmVudFRpbWUnLCAnZ2V0RHVyYXRpb24nLCAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsICdnZXRWaWRlb1VybCcsICdnZXRWaWRlb0VtYmVkQ29kZScsICdnZXRPcHRpb25zJywgJ2dldE9wdGlvbicsICdhZGRFdmVudExpc3RlbmVyJywgJ2Rlc3Ryb3knLCAnc2V0U2l6ZScsICdnZXRJZnJhbWUnXTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3lvdXR1YmUtcGxheWVyL2Rpc3QvZnVuY3Rpb25OYW1lcy5qc1xuLy8gbW9kdWxlIGlkID0gNzk2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9pZnJhbWVfYXBpX3JlZmVyZW5jZSNFdmVudHNcbiAqIGB2b2x1bWVDaGFuZ2VgIGlzIG5vdCBvZmZpY2lhbGx5IHN1cHBvcnRlZCBidXQgc2VlbXMgdG8gd29ya1xuICogaXQgZW1pdHMgYW4gb2JqZWN0OiBge3ZvbHVtZTogODIuNjkyMzA3NjkyMzA3NywgbXV0ZWQ6IGZhbHNlfWBcbiAqL1xuZXhwb3J0cy5kZWZhdWx0ID0gWydyZWFkeScsICdzdGF0ZUNoYW5nZScsICdwbGF5YmFja1F1YWxpdHlDaGFuZ2UnLCAncGxheWJhY2tSYXRlQ2hhbmdlJywgJ2Vycm9yJywgJ2FwaUNoYW5nZScsICd2b2x1bWVDaGFuZ2UnXTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3lvdXR1YmUtcGxheWVyL2Rpc3QvZXZlbnROYW1lcy5qc1xuLy8gbW9kdWxlIGlkID0gNzk3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9QbGF5ZXJTdGF0ZXMgPSByZXF1aXJlKCcuL2NvbnN0YW50cy9QbGF5ZXJTdGF0ZXMnKTtcblxudmFyIF9QbGF5ZXJTdGF0ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGxheWVyU3RhdGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBwYXVzZVZpZGVvOiB7XG4gICAgYWNjZXB0YWJsZVN0YXRlczogW19QbGF5ZXJTdGF0ZXMyLmRlZmF1bHQuRU5ERUQsIF9QbGF5ZXJTdGF0ZXMyLmRlZmF1bHQuUEFVU0VEXSxcbiAgICBzdGF0ZUNoYW5nZVJlcXVpcmVkOiBmYWxzZVxuICB9LFxuICBwbGF5VmlkZW86IHtcbiAgICBhY2NlcHRhYmxlU3RhdGVzOiBbX1BsYXllclN0YXRlczIuZGVmYXVsdC5FTkRFRCwgX1BsYXllclN0YXRlczIuZGVmYXVsdC5QTEFZSU5HXSxcbiAgICBzdGF0ZUNoYW5nZVJlcXVpcmVkOiBmYWxzZVxuICB9LFxuICBzZWVrVG86IHtcbiAgICBhY2NlcHRhYmxlU3RhdGVzOiBbX1BsYXllclN0YXRlczIuZGVmYXVsdC5FTkRFRCwgX1BsYXllclN0YXRlczIuZGVmYXVsdC5QTEFZSU5HLCBfUGxheWVyU3RhdGVzMi5kZWZhdWx0LlBBVVNFRF0sXG4gICAgc3RhdGVDaGFuZ2VSZXF1aXJlZDogdHJ1ZSxcblxuICAgIC8vIFRSSUNLWTogYHNlZWtUb2AgbWF5IG5vdCBjYXVzZSBhIHN0YXRlIGNoYW5nZSBpZiBubyBidWZmZXJpbmcgaXNcbiAgICAvLyByZXF1aXJlZC5cbiAgICB0aW1lb3V0OiAzMDAwXG4gIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy95b3V0dWJlLXBsYXllci9kaXN0L0Z1bmN0aW9uU3RhdGVNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDc5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgQlVGRkVSSU5HOiAzLFxuICBFTkRFRDogMCxcbiAgUEFVU0VEOiAyLFxuICBQTEFZSU5HOiAxLFxuICBVTlNUQVJURUQ6IC0xLFxuICBWSURFT19DVUVEOiA1XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy95b3V0dWJlLXBsYXllci9kaXN0L2NvbnN0YW50cy9QbGF5ZXJTdGF0ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IFwiMGMxXFxyXFxuMGMxXFxyXFxuMmMzXFxyXFxuMmMzXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0YXRpYy9iZWFjb24udHh0XG4vLyBtb2R1bGUgaWQgPSA4MDBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBcIjFjMlxcclxcbjBjM1xcclxcbjFjMlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdGF0aWMvYmVlaGl2ZS50eHRcbi8vIG1vZHVsZSBpZCA9IDgwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IFwiMGMxYzJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3RhdGljL2JsaW5rZXIudHh0XG4vLyBtb2R1bGUgaWQgPSA4MDJcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBcIjBjMVxcclxcbjBjMVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdGF0aWMvYmxvY2sudHh0XG4vLyBtb2R1bGUgaWQgPSA4MDNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBcIjBjMVxcclxcbjBjMlxcclxcbjFcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3RhdGljL2JvYXQudHh0XG4vLyBtb2R1bGUgaWQgPSA4MDRcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBcIjJcXHJcXG4wYzJcXHJcXG4xYzJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3RhdGljL2dsaWRlci50eHRcbi8vIG1vZHVsZSBpZCA9IDgwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IFwiMjRcXHJcXG4yMmMyNFxcclxcbjEyYzEzYzIwYzIxYzM0YzM1XFxyXFxuMTFjMTVjMjBjMjFjMzRjMzVcXHJcXG4wYzFjMTBjMTZjMjBjMjFcXHJcXG4wYzFjMTBjMTRjMTZjMTdjMjJjMjRcXHJcXG4xMGMxNmMyNFxcclxcbjExYzE1XFxyXFxuMTJjMTNcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3RhdGljL2d1bi50eHRcbi8vIG1vZHVsZSBpZCA9IDgwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IFwiMWMyXFxyXFxuMGMzXFxyXFxuMWMzXFxyXFxuMlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdGF0aWMvbG9hZi50eHRcbi8vIG1vZHVsZSBpZCA9IDgwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IFwiMWMyYzNjNFxcclxcbjBjNFxcclxcbjRcXHJcXG4wYzMgXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0YXRpYy9sc3BhY2VzaGlwLnR4dFxuLy8gbW9kdWxlIGlkID0gODA4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0gXCI0YzEzXFxyXFxuMmMzYzRjMTNjMTRjMTVcXHJcXG4xYzE2XFxyXFxuMWM0YzVjNmMxMWMxMmMxM2MxNlxcclxcbjBjMWMzYzVjN2MxMGMxMmMxNGMxNmMxN1xcclxcbjNjNGM2YzdjMTBjMTFjMTNjMTRcXHJcXG4zYzVjN2MxMGMxMmMxNFxcclxcbjRjNWM2YzExYzEyYzEzXFxyXFxuXFxyXFxuNGM1YzdjMTBjMTJjMTNcXHJcXG40YzZjN2MxMGMxMWMxM1wiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdGF0aWMvb3NjR2xhc3Nlcy50eHRcbi8vIG1vZHVsZSBpZCA9IDgwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IFwiMGMxYzRjNVxcclxcbjBjMmM1XFxyXFxuNFxcclxcbjFcXHJcXG4wYzNjNVxcclxcbjBjMWM0YzVcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3RhdGljL29zY1F1YWQudHh0XG4vLyBtb2R1bGUgaWQgPSA4MTBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSBcIjFjMmMzXFxyXFxuMGMxYzJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3RhdGljL3RvYWQudHh0XG4vLyBtb2R1bGUgaWQgPSA4MTFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE5hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBTEE7QUFDQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFOQTtBQUZBO0FBQ0E7QUFTQTtBQUVBO0FBQUE7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFGQTs7QUFNQTtBQUNBO0FBSkE7O0FBS0E7O0FBSUE7QUFIQTtBQUZBOztBQU9BOztBQUdBO0FBRkE7QUFHQTtBQUVBO0FBUEE7O0FBU0E7QUFDQTs7QUFHQTtBQUZBO0FBSUE7QUFQQTs7QUFTQTtBQUVBO0FBSEE7O0FBS0E7QUFDQTtBQUFBO0FBRkE7QUFsQ0E7QUFDQTs7QUEyQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBK0tBO0FBQ0E7QUFoTEE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBUUE7QUFDQTtBQURBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBQ0E7QUFRQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7OztBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7O0FBT0E7QUFBQTs7OztBQUtBO0FBQUE7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBOzs7O0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBREE7O0FBR0E7QUFBQTtBQUNBOztBQUhBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQURBOztBQUdBO0FBQUE7QUFDQTs7QUFIQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFKQTs7QUFBQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUpBOztBQUFBO0FBU0E7QUFUQTtBQUNBO0FBUUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBSkE7O0FBQUE7QUFTQTtBQVRBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFKQTs7QUFBQTtBQVVBO0FBVkE7QUFDQTtBQVNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVBBOztBQUFBO0FBWUE7QUFaQTtBQUNBO0FBV0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVBBOztBQUFBO0FBWUE7QUFaQTtBQUNBO0FBV0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVBBOztBQUFBO0FBV0E7QUFYQTtBQUNBO0FBVUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVBBOztBQUFBO0FBV0E7QUFYQTtBQUNBO0FBVUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVBBOztBQUFBO0FBYUE7QUFiQTtBQUNBO0FBWUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7O0FBQUE7QUFZQTtBQVpBO0FBQ0E7QUFXQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7O0FBQUE7QUFjQTtBQWRBO0FBQ0E7QUFhQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7O0FBQUE7QUFhQTtBQWJBO0FBQ0E7QUFZQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQWtCQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFEQTs7QUFBQTtBQUlBO0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUpBO0FBQUE7QUFBQTtBQUNBO0FBUUE7O0FBQUE7QUFLQTtBQUxBO0FBQUE7QUFLQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQXZCQTtBQTBDQTtBQTFDQTtBQUpBO0FBQ0E7QUE2REE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFQQTtBQURBOzs7Ozs7Ozs7OztBQ3h0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDek1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
          })
        