/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.fs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/.fable/fable-library.3.2.9/Util.js":
/*!************************************************!*\
  !*** ./src/.fable/fable-library.3.2.9/Util.js ***!
  \************************************************/
/*! exports provided: isIterable, isArrayLike, isDisposable, sameConstructor, Enumerator, getEnumerator, toIterator, Comparer, comparerFromEqualityComparer, assertEqual, assertNotEqual, Lazy, lazyFromValue, padWithZeros, padLeftAndRightWithZeros, dateOffset, int16ToString, int32ToString, ObjectRef, stringHash, numberHash, combineHashCodes, physicalHash, identityHash, dateHash, arrayHash, structuralHash, fastStructuralHash, safeHash, equalArraysWith, equalArrays, equals, compareDates, comparePrimitives, compareArraysWith, compareArrays, compare, min, max, clamp, createAtom, createObj, jsOptions, round, sign, randomNext, randomBytes, unescapeDataString, escapeDataString, escapeUriString, count, clear, uncurry, curry, checkArity, partialApply, mapCurriedArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isIterable\", function() { return isIterable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArrayLike\", function() { return isArrayLike; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDisposable\", function() { return isDisposable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sameConstructor\", function() { return sameConstructor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Enumerator\", function() { return Enumerator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEnumerator\", function() { return getEnumerator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toIterator\", function() { return toIterator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Comparer\", function() { return Comparer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"comparerFromEqualityComparer\", function() { return comparerFromEqualityComparer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assertEqual\", function() { return assertEqual; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assertNotEqual\", function() { return assertNotEqual; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Lazy\", function() { return Lazy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lazyFromValue\", function() { return lazyFromValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"padWithZeros\", function() { return padWithZeros; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"padLeftAndRightWithZeros\", function() { return padLeftAndRightWithZeros; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dateOffset\", function() { return dateOffset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"int16ToString\", function() { return int16ToString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"int32ToString\", function() { return int32ToString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjectRef\", function() { return ObjectRef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringHash\", function() { return stringHash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"numberHash\", function() { return numberHash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"combineHashCodes\", function() { return combineHashCodes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"physicalHash\", function() { return physicalHash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"identityHash\", function() { return identityHash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dateHash\", function() { return dateHash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrayHash\", function() { return arrayHash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"structuralHash\", function() { return structuralHash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fastStructuralHash\", function() { return fastStructuralHash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"safeHash\", function() { return safeHash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"equalArraysWith\", function() { return equalArraysWith; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"equalArrays\", function() { return equalArrays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"equals\", function() { return equals; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compareDates\", function() { return compareDates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"comparePrimitives\", function() { return comparePrimitives; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compareArraysWith\", function() { return compareArraysWith; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compareArrays\", function() { return compareArrays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compare\", function() { return compare; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"min\", function() { return min; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"max\", function() { return max; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clamp\", function() { return clamp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAtom\", function() { return createAtom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createObj\", function() { return createObj; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jsOptions\", function() { return jsOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"round\", function() { return round; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sign\", function() { return sign; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomNext\", function() { return randomNext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomBytes\", function() { return randomBytes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unescapeDataString\", function() { return unescapeDataString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escapeDataString\", function() { return escapeDataString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escapeUriString\", function() { return escapeUriString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"count\", function() { return count; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clear\", function() { return clear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uncurry\", function() { return uncurry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"curry\", function() { return curry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkArity\", function() { return checkArity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"partialApply\", function() { return partialApply; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapCurriedArgs\", function() { return mapCurriedArgs; });\n// tslint:disable:ban-types\nfunction isIterable(x) {\n    return x != null && typeof x === \"object\" && Symbol.iterator in x;\n}\nfunction isArrayLike(x) {\n    return Array.isArray(x) || ArrayBuffer.isView(x);\n}\nfunction isComparer(x) {\n    return typeof x.Compare === \"function\";\n}\nfunction isComparable(x) {\n    return typeof x.CompareTo === \"function\";\n}\nfunction isEquatable(x) {\n    return typeof x.Equals === \"function\";\n}\nfunction isHashable(x) {\n    return typeof x.GetHashCode === \"function\";\n}\nfunction isDisposable(x) {\n    return x != null && typeof x.Dispose === \"function\";\n}\nfunction sameConstructor(x, y) {\n    return Object.getPrototypeOf(x).constructor === Object.getPrototypeOf(y).constructor;\n}\nclass Enumerator {\n    constructor(iter) {\n        this.iter = iter;\n    }\n    [\"System.Collections.Generic.IEnumerator`1.get_Current\"]() {\n        return this.current;\n    }\n    [\"System.Collections.IEnumerator.get_Current\"]() {\n        return this.current;\n    }\n    [\"System.Collections.IEnumerator.MoveNext\"]() {\n        const cur = this.iter.next();\n        this.current = cur.value;\n        return !cur.done;\n    }\n    [\"System.Collections.IEnumerator.Reset\"]() {\n        throw new Error(\"JS iterators cannot be reset\");\n    }\n    Dispose() {\n        return;\n    }\n}\nfunction getEnumerator(o) {\n    return typeof o.GetEnumerator === \"function\"\n        ? o.GetEnumerator()\n        : new Enumerator(o[Symbol.iterator]());\n}\nfunction toIterator(en) {\n    return {\n        [Symbol.iterator]() { return this; },\n        next() {\n            const hasNext = en[\"System.Collections.IEnumerator.MoveNext\"]();\n            const current = hasNext ? en[\"System.Collections.IEnumerator.get_Current\"]() : undefined;\n            return { done: !hasNext, value: current };\n        },\n    };\n}\nclass Comparer {\n    constructor(f) {\n        this.Compare = f || compare;\n    }\n}\nfunction comparerFromEqualityComparer(comparer) {\n    // Sometimes IEqualityComparer also implements IComparer\n    if (isComparer(comparer)) {\n        return new Comparer(comparer.Compare);\n    }\n    else {\n        return new Comparer((x, y) => {\n            const xhash = comparer.GetHashCode(x);\n            const yhash = comparer.GetHashCode(y);\n            if (xhash === yhash) {\n                return comparer.Equals(x, y) ? 0 : -1;\n            }\n            else {\n                return xhash < yhash ? -1 : 1;\n            }\n        });\n    }\n}\nfunction assertEqual(actual, expected, msg) {\n    if (!equals(actual, expected)) {\n        throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {\n            actual,\n            expected,\n        });\n    }\n}\nfunction assertNotEqual(actual, expected, msg) {\n    if (equals(actual, expected)) {\n        throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {\n            actual,\n            expected,\n        });\n    }\n}\nclass Lazy {\n    constructor(factory) {\n        this.factory = factory;\n        this.isValueCreated = false;\n    }\n    get Value() {\n        if (!this.isValueCreated) {\n            this.createdValue = this.factory();\n            this.isValueCreated = true;\n        }\n        return this.createdValue;\n    }\n    get IsValueCreated() {\n        return this.isValueCreated;\n    }\n}\nfunction lazyFromValue(v) {\n    return new Lazy(() => v);\n}\nfunction padWithZeros(i, length) {\n    let str = i.toString(10);\n    while (str.length < length) {\n        str = \"0\" + str;\n    }\n    return str;\n}\nfunction padLeftAndRightWithZeros(i, lengthLeft, lengthRight) {\n    let str = i.toString(10);\n    while (str.length < lengthLeft) {\n        str = \"0\" + str;\n    }\n    while (str.length < lengthRight) {\n        str = str + \"0\";\n    }\n    return str;\n}\nfunction dateOffset(date) {\n    const date1 = date;\n    return typeof date1.offset === \"number\"\n        ? date1.offset\n        : (date.kind === 1 /* UTC */\n            ? 0 : date.getTimezoneOffset() * -60000);\n}\nfunction int16ToString(i, radix) {\n    i = i < 0 && radix != null && radix !== 10 ? 0xFFFF + i + 1 : i;\n    return i.toString(radix);\n}\nfunction int32ToString(i, radix) {\n    i = i < 0 && radix != null && radix !== 10 ? 0xFFFFFFFF + i + 1 : i;\n    return i.toString(radix);\n}\nclass ObjectRef {\n    static id(o) {\n        if (!ObjectRef.idMap.has(o)) {\n            ObjectRef.idMap.set(o, ++ObjectRef.count);\n        }\n        return ObjectRef.idMap.get(o);\n    }\n}\nObjectRef.idMap = new WeakMap();\nObjectRef.count = 0;\nfunction stringHash(s) {\n    let i = 0;\n    let h = 5381;\n    const len = s.length;\n    while (i < len) {\n        h = (h * 33) ^ s.charCodeAt(i++);\n    }\n    return h;\n}\nfunction numberHash(x) {\n    return x * 2654435761 | 0;\n}\n// From https://stackoverflow.com/a/37449594\nfunction combineHashCodes(hashes) {\n    if (hashes.length === 0) {\n        return 0;\n    }\n    return hashes.reduce((h1, h2) => {\n        return ((h1 << 5) + h1) ^ h2;\n    });\n}\nfunction physicalHash(x) {\n    if (x == null) {\n        return 0;\n    }\n    switch (typeof x) {\n        case \"boolean\":\n            return x ? 1 : 0;\n        case \"number\":\n            return numberHash(x);\n        case \"string\":\n            return stringHash(x);\n        default:\n            return numberHash(ObjectRef.id(x));\n    }\n}\nfunction identityHash(x) {\n    if (x == null) {\n        return 0;\n    }\n    else if (isHashable(x)) {\n        return x.GetHashCode();\n    }\n    else {\n        return physicalHash(x);\n    }\n}\nfunction dateHash(x) {\n    return x.getTime();\n}\nfunction arrayHash(x) {\n    const len = x.length;\n    const hashes = new Array(len);\n    for (let i = 0; i < len; i++) {\n        hashes[i] = structuralHash(x[i]);\n    }\n    return combineHashCodes(hashes);\n}\nfunction structuralHash(x) {\n    if (x == null) {\n        return 0;\n    }\n    switch (typeof x) {\n        case \"boolean\":\n            return x ? 1 : 0;\n        case \"number\":\n            return numberHash(x);\n        case \"string\":\n            return stringHash(x);\n        default: {\n            if (isHashable(x)) {\n                return x.GetHashCode();\n            }\n            else if (isArrayLike(x)) {\n                return arrayHash(x);\n            }\n            else if (x instanceof Date) {\n                return dateHash(x);\n            }\n            else if (Object.getPrototypeOf(x).constructor === Object) {\n                // TODO: check call-stack to prevent cyclic objects?\n                const hashes = Object.values(x).map((v) => structuralHash(v));\n                return combineHashCodes(hashes);\n            }\n            else {\n                // Classes don't implement GetHashCode by default, but must use identity hashing\n                return numberHash(ObjectRef.id(x));\n                // return stringHash(String(x));\n            }\n        }\n    }\n}\n// Intended for custom numeric types, like long or decimal\nfunction fastStructuralHash(x) {\n    return stringHash(String(x));\n}\n// Intended for declared types that may or may not implement GetHashCode\nfunction safeHash(x) {\n    return x == null ? 0 : isHashable(x) ? x.GetHashCode() : numberHash(ObjectRef.id(x));\n}\nfunction equalArraysWith(x, y, eq) {\n    if (x == null) {\n        return y == null;\n    }\n    if (y == null) {\n        return false;\n    }\n    if (x.length !== y.length) {\n        return false;\n    }\n    for (let i = 0; i < x.length; i++) {\n        if (!eq(x[i], y[i])) {\n            return false;\n        }\n    }\n    return true;\n}\nfunction equalArrays(x, y) {\n    return equalArraysWith(x, y, equals);\n}\nfunction equalObjects(x, y) {\n    const xKeys = Object.keys(x);\n    const yKeys = Object.keys(y);\n    if (xKeys.length !== yKeys.length) {\n        return false;\n    }\n    xKeys.sort();\n    yKeys.sort();\n    for (let i = 0; i < xKeys.length; i++) {\n        if (xKeys[i] !== yKeys[i] || !equals(x[xKeys[i]], y[yKeys[i]])) {\n            return false;\n        }\n    }\n    return true;\n}\nfunction equals(x, y) {\n    if (x === y) {\n        return true;\n    }\n    else if (x == null) {\n        return y == null;\n    }\n    else if (y == null) {\n        return false;\n    }\n    else if (typeof x !== \"object\") {\n        return false;\n    }\n    else if (isEquatable(x)) {\n        return x.Equals(y);\n    }\n    else if (isArrayLike(x)) {\n        return isArrayLike(y) && equalArrays(x, y);\n    }\n    else if (x instanceof Date) {\n        return (y instanceof Date) && compareDates(x, y) === 0;\n    }\n    else {\n        return Object.getPrototypeOf(x).constructor === Object && equalObjects(x, y);\n    }\n}\nfunction compareDates(x, y) {\n    let xtime;\n    let ytime;\n    // DateTimeOffset and DateTime deals with equality differently.\n    if (\"offset\" in x && \"offset\" in y) {\n        xtime = x.getTime();\n        ytime = y.getTime();\n    }\n    else {\n        xtime = x.getTime() + dateOffset(x);\n        ytime = y.getTime() + dateOffset(y);\n    }\n    return xtime === ytime ? 0 : (xtime < ytime ? -1 : 1);\n}\nfunction comparePrimitives(x, y) {\n    return x === y ? 0 : (x < y ? -1 : 1);\n}\nfunction compareArraysWith(x, y, comp) {\n    if (x == null) {\n        return y == null ? 0 : 1;\n    }\n    if (y == null) {\n        return -1;\n    }\n    if (x.length !== y.length) {\n        return x.length < y.length ? -1 : 1;\n    }\n    for (let i = 0, j = 0; i < x.length; i++) {\n        j = comp(x[i], y[i]);\n        if (j !== 0) {\n            return j;\n        }\n    }\n    return 0;\n}\nfunction compareArrays(x, y) {\n    return compareArraysWith(x, y, compare);\n}\nfunction compareObjects(x, y) {\n    const xKeys = Object.keys(x);\n    const yKeys = Object.keys(y);\n    if (xKeys.length !== yKeys.length) {\n        return xKeys.length < yKeys.length ? -1 : 1;\n    }\n    xKeys.sort();\n    yKeys.sort();\n    for (let i = 0, j = 0; i < xKeys.length; i++) {\n        const key = xKeys[i];\n        if (key !== yKeys[i]) {\n            return key < yKeys[i] ? -1 : 1;\n        }\n        else {\n            j = compare(x[key], y[key]);\n            if (j !== 0) {\n                return j;\n            }\n        }\n    }\n    return 0;\n}\nfunction compare(x, y) {\n    if (x === y) {\n        return 0;\n    }\n    else if (x == null) {\n        return y == null ? 0 : -1;\n    }\n    else if (y == null) {\n        return 1;\n    }\n    else if (typeof x !== \"object\") {\n        return x < y ? -1 : 1;\n    }\n    else if (isComparable(x)) {\n        return x.CompareTo(y);\n    }\n    else if (isArrayLike(x)) {\n        return isArrayLike(y) ? compareArrays(x, y) : -1;\n    }\n    else if (x instanceof Date) {\n        return y instanceof Date ? compareDates(x, y) : -1;\n    }\n    else {\n        return Object.getPrototypeOf(x).constructor === Object ? compareObjects(x, y) : -1;\n    }\n}\nfunction min(comparer, x, y) {\n    return comparer(x, y) < 0 ? x : y;\n}\nfunction max(comparer, x, y) {\n    return comparer(x, y) > 0 ? x : y;\n}\nfunction clamp(comparer, value, min, max) {\n    return (comparer(value, min) < 0) ? min : (comparer(value, max) > 0) ? max : value;\n}\nfunction createAtom(value) {\n    let atom = value;\n    return (value, isSetter) => {\n        if (!isSetter) {\n            return atom;\n        }\n        else {\n            atom = value;\n            return void 0;\n        }\n    };\n}\nfunction createObj(fields) {\n    const obj = {};\n    for (const kv of fields) {\n        obj[kv[0]] = kv[1];\n    }\n    return obj;\n}\nfunction jsOptions(mutator) {\n    const opts = {};\n    mutator(opts);\n    return opts;\n}\nfunction round(value, digits = 0) {\n    const m = Math.pow(10, digits);\n    const n = +(digits ? value * m : value).toFixed(8);\n    const i = Math.floor(n);\n    const f = n - i;\n    const e = 1e-8;\n    const r = (f > 0.5 - e && f < 0.5 + e) ? ((i % 2 === 0) ? i : i + 1) : Math.round(n);\n    return digits ? r / m : r;\n}\nfunction sign(x) {\n    return x > 0 ? 1 : x < 0 ? -1 : 0;\n}\nfunction randomNext(min, max) {\n    return Math.floor(Math.random() * (max - min)) + min;\n}\nfunction randomBytes(buffer) {\n    if (buffer == null) {\n        throw new Error(\"Buffer cannot be null\");\n    }\n    for (let i = 0; i < buffer.length; i += 6) {\n        // Pick random 48-bit number. Fill buffer in 2 24-bit chunks to avoid bitwise truncation.\n        let r = Math.floor(Math.random() * 281474976710656); // Low 24 bits = chunk 1.\n        const rhi = Math.floor(r / 16777216); // High 24 bits shifted via division = chunk 2.\n        for (let j = 0; j < 6 && i + j < buffer.length; j++) {\n            if (j === 3) {\n                r = rhi;\n            }\n            buffer[i + j] = r & 255;\n            r >>>= 8;\n        }\n    }\n}\nfunction unescapeDataString(s) {\n    // https://stackoverflow.com/a/4458580/524236\n    return decodeURIComponent((s).replace(/\\+/g, \"%20\"));\n}\nfunction escapeDataString(s) {\n    return encodeURIComponent(s).replace(/!/g, \"%21\")\n        .replace(/'/g, \"%27\")\n        .replace(/\\(/g, \"%28\")\n        .replace(/\\)/g, \"%29\")\n        .replace(/\\*/g, \"%2A\");\n}\nfunction escapeUriString(s) {\n    return encodeURI(s);\n}\n// ICollection.Clear and Count members can be called on Arrays\n// or Dictionaries so we need a runtime check (see #1120)\nfunction count(col) {\n    if (isArrayLike(col)) {\n        return col.length;\n    }\n    else {\n        let count = 0;\n        for (const _ of col) {\n            count++;\n        }\n        return count;\n    }\n}\nfunction clear(col) {\n    if (isArrayLike(col)) {\n        col.splice(0);\n    }\n    else {\n        col.clear();\n    }\n}\nconst CURRIED_KEY = \"__CURRIED__\";\nfunction uncurry(arity, f) {\n    // f may be a function option with None value\n    if (f == null || f.length > 1) {\n        return f;\n    }\n    let uncurriedFn;\n    switch (arity) {\n        case 2:\n            uncurriedFn = (a1, a2) => f(a1)(a2);\n            break;\n        case 3:\n            uncurriedFn = (a1, a2, a3) => f(a1)(a2)(a3);\n            break;\n        case 4:\n            uncurriedFn = (a1, a2, a3, a4) => f(a1)(a2)(a3)(a4);\n            break;\n        case 5:\n            uncurriedFn = (a1, a2, a3, a4, a5) => f(a1)(a2)(a3)(a4)(a5);\n            break;\n        case 6:\n            uncurriedFn = (a1, a2, a3, a4, a5, a6) => f(a1)(a2)(a3)(a4)(a5)(a6);\n            break;\n        case 7:\n            uncurriedFn = (a1, a2, a3, a4, a5, a6, a7) => f(a1)(a2)(a3)(a4)(a5)(a6)(a7);\n            break;\n        case 8:\n            uncurriedFn = (a1, a2, a3, a4, a5, a6, a7, a8) => f(a1)(a2)(a3)(a4)(a5)(a6)(a7)(a8);\n            break;\n        default:\n            throw new Error(\"Uncurrying to more than 8-arity is not supported: \" + arity);\n    }\n    uncurriedFn[CURRIED_KEY] = f;\n    return uncurriedFn;\n}\nfunction curry(arity, f) {\n    if (f == null || f.length === 1) {\n        return f;\n    }\n    if (CURRIED_KEY in f) {\n        return f[CURRIED_KEY];\n    }\n    switch (arity) {\n        case 2:\n            return (a1) => (a2) => f(a1, a2);\n        case 3:\n            return (a1) => (a2) => (a3) => f(a1, a2, a3);\n        case 4:\n            return (a1) => (a2) => (a3) => (a4) => f(a1, a2, a3, a4);\n        case 5:\n            return (a1) => (a2) => (a3) => (a4) => (a5) => f(a1, a2, a3, a4, a5);\n        case 6:\n            return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => f(a1, a2, a3, a4, a5, a6);\n        case 7:\n            return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => f(a1, a2, a3, a4, a5, a6, a7);\n        case 8:\n            return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => (a8) => f(a1, a2, a3, a4, a5, a6, a7, a8);\n        default:\n            throw new Error(\"Currying to more than 8-arity is not supported: \" + arity);\n    }\n}\nfunction checkArity(arity, f) {\n    return f.length > arity\n        ? (...args1) => (...args2) => f.apply(undefined, args1.concat(args2))\n        : f;\n}\nfunction partialApply(arity, f, args) {\n    if (f == null) {\n        return undefined;\n    }\n    else if (CURRIED_KEY in f) {\n        f = f[CURRIED_KEY];\n        for (let i = 0; i < args.length; i++) {\n            f = f(args[i]);\n        }\n        return f;\n    }\n    else {\n        switch (arity) {\n            case 1:\n                // Wrap arguments to make sure .concat doesn't destruct arrays. Example\n                // [1,2].concat([3,4],5)   --> [1,2,3,4,5]    // fails\n                // [1,2].concat([[3,4],5]) --> [1,2,[3,4],5]  // ok\n                return (a1) => f.apply(undefined, args.concat([a1]));\n            case 2:\n                return (a1) => (a2) => f.apply(undefined, args.concat([a1, a2]));\n            case 3:\n                return (a1) => (a2) => (a3) => f.apply(undefined, args.concat([a1, a2, a3]));\n            case 4:\n                return (a1) => (a2) => (a3) => (a4) => f.apply(undefined, args.concat([a1, a2, a3, a4]));\n            case 5:\n                return (a1) => (a2) => (a3) => (a4) => (a5) => f.apply(undefined, args.concat([a1, a2, a3, a4, a5]));\n            case 6:\n                return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => f.apply(undefined, args.concat([a1, a2, a3, a4, a5, a6]));\n            case 7:\n                return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => f.apply(undefined, args.concat([a1, a2, a3, a4, a5, a6, a7]));\n            case 8:\n                return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => (a8) => f.apply(undefined, args.concat([a1, a2, a3, a4, a5, a6, a7, a8]));\n            default:\n                throw new Error(\"Partially applying to more than 8-arity is not supported: \" + arity);\n        }\n    }\n}\nfunction mapCurriedArgs(fn, mappings) {\n    function mapArg(fn, arg, mappings, idx) {\n        const mapping = mappings[idx];\n        if (mapping !== 0) {\n            const expectedArity = mapping[0];\n            const actualArity = mapping[1];\n            if (expectedArity > 1) {\n                arg = curry(expectedArity, arg);\n            }\n            if (actualArity > 1) {\n                arg = uncurry(actualArity, arg);\n            }\n        }\n        const res = fn(arg);\n        if (idx + 1 === mappings.length) {\n            return res;\n        }\n        else {\n            return (arg) => mapArg(res, arg, mappings, idx + 1);\n        }\n    }\n    return (arg) => mapArg(fn, arg, mappings, 0);\n}\n\n\n//# sourceURL=webpack:///./src/.fable/fable-library.3.2.9/Util.js?");

/***/ }),

/***/ "./src/App.fs.js":
/*!***********************!*\
  !*** ./src/App.fs.js ***!
  \***********************/
/*! exports provided: count, myButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"count\", function() { return count; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myButton\", function() { return myButton; });\n/* harmony import */ var _fable_fable_library_3_2_9_Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.fable/fable-library.3.2.9/Util.js */ \"./src/.fable/fable-library.3.2.9/Util.js\");\n\r\n\r\nlet count = Object(_fable_fable_library_3_2_9_Util_js__WEBPACK_IMPORTED_MODULE_0__[\"createAtom\"])(0);\r\n\r\nconst myButton = document.querySelector(\".down-button\");\r\n\r\nmyButton.onclick = ((_arg1) => {\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/App.fs.js?");

/***/ })

/******/ });