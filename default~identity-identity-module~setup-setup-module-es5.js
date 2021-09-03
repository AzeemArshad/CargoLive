(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~identity-identity-module~setup-setup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/contact-detail/contact-detail.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/contact-detail/contact-detail.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"table-responsive\">\r\n        <table class=\"table table-contact table-striped mb-1\">\r\n        <thead class=\"custom-table-header\">\r\n            <tr>\r\n                <th class=\"p-1\">Sr#</th>\r\n                <th class=\"p-1\">Type</th>\r\n                <th class=\"p-1\">Value</th>\r\n                <th class=\"p-1\">Action</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let item of contacts;let i=index\">\r\n                <td class=\"pt-2 text-center\">{{i+1}}</td>\r\n                <td> \r\n                    <input type=\"text\" class=\"form-control\"  id=\"id_item_type{{i}}\"  name=\"item_type{{i}}\" placeholder=\"Type..\" [ngbTypeahead]=\"searchType(i, instance)\" [editable]=\"false\" (focus)=\"focus$[i].next($any($event).target.value)\" (click)=\"click$[i].next($any($event).target.value)\" #instance=\"ngbTypeahead\" [(ngModel)]=\"item.type\" required>\r\n                </td>\r\n                <td><input type=\"text\" class=\"form-control\" name=\"value{{i}}\" [(ngModel)]=\"item.value\"></td>\r\n                <td class=\"mr-0\"><button type=\"button\" class=\"btn btn-danger btn-sm\" style=\"margin-top: 2px;\" (click)=\"this.removeContactitem(i)\"><i class=\"feather icon-minus\"></i></button></td>\r\n            </tr>\r\n        </tbody>\r\n        </table>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"form-group col-12\">\r\n        <button type=\"button\" class=\"btn btn-success btn-sm float-right\" (click)=\"this.insertContactitem()\"><i class=\"feather icon-plus\"></i> Add Row</button>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ui-modal #lookupTableModal [dialogClass]=\"'modal-lg'\">\r\n    <div class=\"app-modal-header\">\r\n      <h5 class=\"modal-title\">{{modalTitle}}</h5>\r\n      <small class=\"text-info\">{{modalSubtitle}}</small>\r\n      <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"lookupTableModal.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n       <div class=\"lookup-table\">\r\n        <div class=\"input-group mb-3\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"filter\" (keyup)=\"search()\" [(ngModel)]=\"filterText\">\r\n          <div class=\"input-group-append\">\r\n            <span class=\"btn btn-primary\" id=\"basic-addon2\" (click)=\"search()\"><i class=\"feather icon-search\"></i></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th width=\"20\">Action</th>\r\n                    <th width=\"20\">#</th>\r\n                    <th *ngFor=\"let cell of tableHeader\" [hidden]=\"cell.hide\">{{cell.title}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let record of recordList | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize; let i = index\">\r\n                    <td>\r\n                        <button (click)=\"setAndSelect(record)\" class=\"btn btn-primary btn-sm\" title=\"Edit Record\">Select</button>\r\n                    </td>\r\n                    <td>{{i+1}}</td>\r\n                    <td *ngFor=\"let cell of tableHeader\" [hidden]=\"cell.hide\" innerHTML=\"{{record[cell.field]}}\" ></td>\r\n                </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"d-flex justify-content-between\">\r\n          <select class=\"custom-select\" style=\"width: auto;\" [(ngModel)]=\"pageSize\">\r\n            <option [ngValue]=\"5\">5 items per page</option>\r\n            <option [ngValue]=\"10\">10 items per page</option>\r\n            <option [ngValue]=\"20\">20 items per page</option>\r\n            <option [ngValue]=\"30\">30 items per page</option>\r\n          </select>\r\n          <ngb-pagination class=\"nav-tabs-top\" [collectionSize]=\"collectionSize\" [(page)]=\"page\" [maxSize]=\"5\" [boundaryLinks]=\"true\" [pageSize]=\"pageSize\">\r\n          </ngb-pagination>\r\n        </div>\r\n       </div>\r\n    </div>\r\n    <div class=\"app-modal-footer  mr-4\">\r\n      <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"lookupTableModal.hide()\"><i class=\"feather icon-x\"></i> Close </button>\r\n    </div>\r\n</app-ui-modal>"

/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ }),

/***/ "./src/app/shared/components/cargo-shared-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/cargo-shared-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CargoSharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoSharedRoutingModule", function() { return CargoSharedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var CargoSharedRoutingModule = /** @class */ (function () {
    function CargoSharedRoutingModule() {
    }
    CargoSharedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CargoSharedRoutingModule);
    return CargoSharedRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/components/cargo-shared.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/cargo-shared.module.ts ***!
  \**********************************************************/
/*! exports provided: CargoSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoSharedModule", function() { return CargoSharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cargo_shared_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cargo-shared-routing.module */ "./src/app/shared/components/cargo-shared-routing.module.ts");
/* harmony import */ var _lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lookup-table-modal/lookup-table-modal.component */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-detail/contact-detail.component */ "./src/app/shared/components/contact-detail/contact-detail.component.ts");








var CargoSharedModule = /** @class */ (function () {
    function CargoSharedModule() {
    }
    CargoSharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__["LookupTableModalComponent"],
                _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_7__["ContactDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
                _cargo_shared_routing_module__WEBPACK_IMPORTED_MODULE_3__["CargoSharedRoutingModule"],
            ],
            exports: [
                _lookup_table_modal_lookup_table_modal_component__WEBPACK_IMPORTED_MODULE_4__["LookupTableModalComponent"],
                _contact_detail_contact_detail_component__WEBPACK_IMPORTED_MODULE_7__["ContactDetailComponent"]
            ]
        })
    ], CargoSharedModule);
    return CargoSharedModule;
}());



/***/ }),

/***/ "./src/app/shared/components/contact-detail/contact-detail.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/contact-detail/contact-detail.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbnRhY3QtZGV0YWlsL2NvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/contact-detail/contact-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/contact-detail/contact-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: ContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function() { return ContactDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var items = ['Home', 'Office', 'Mobile', 'Fax', 'Email', 'Skype', 'WhatsApp', 'Twitter', 'Extension', 'Web-Site', 'Other'];
var ContactDetailComponent = /** @class */ (function () {
    function ContactDetailComponent() {
        this.focus$ = [];
        this.click$ = [];
        this.contacts = [];
    }
    ContactDetailComponent.prototype.searchType = function (index, instance) {
        var _this = this;
        this.focus$.push(new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]());
        this.click$.push(new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]());
        return function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            var clicksWithClosedPopup$ = _this.click$[index].pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return !instance.isPopupOpen(); }));
            var inputFocus$ = _this.focus$[index];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) {
                return (term === ""
                    ? items
                    : items.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10);
            }));
        };
    };
    ContactDetailComponent.prototype.ngOnInit = function () {
        this.insertContactitem();
    };
    ContactDetailComponent.prototype.insertContactitem = function () {
        var contact = {};
        this.contacts.push(contact);
    };
    ContactDetailComponent.prototype.removeContactitem = function (index) {
        this.contacts.splice(index, 1);
    };
    ContactDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-detail',
            template: __webpack_require__(/*! raw-loader!./contact-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/contact-detail/contact-detail.component.html"),
            styles: [__webpack_require__(/*! ./contact-detail.component.scss */ "./src/app/shared/components/contact-detail/contact-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table th,\n.table td {\n  padding: 0.3rem 0.75rem !important;\n}\n\n.modal-header {\n  padding: 5px 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9va3VwLXRhYmxlLW1vZGFsL0U6XFxGcmFtZVdvcmtzXFxDYXJnb1xcQ2FyZ29XZWIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbG9va3VwLXRhYmxlLW1vZGFsXFxsb29rdXAtdGFibGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvb2t1cC10YWJsZS1tb2RhbC9sb29rdXAtdGFibGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsa0NBQUE7QUNDRjs7QURDQTtFQUNFLDRCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb29rdXAtdGFibGUtbW9kYWwvbG9va3VwLXRhYmxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHRoLFxyXG4udGFibGUgdGQge1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogNXB4IDI1cHggIWltcG9ydGFudDtcclxufVxyXG4iLCIudGFibGUgdGgsXG4udGFibGUgdGQge1xuICBwYWRkaW5nOiAwLjNyZW0gMC43NXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogNXB4IDI1cHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LookupTableModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupTableModalComponent", function() { return LookupTableModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/shared/components/modal/ui-modal/ui-modal.component */ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts");
/* harmony import */ var _common_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/app-component-base */ "./src/app/shared/common/app-component-base.ts");




var LookupTableModalComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LookupTableModalComponent, _super);
    function LookupTableModalComponent(injector) {
        var _this = _super.call(this, injector) || this;
        _this.modalSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.page = 1;
        _this.pageSize = 5;
        _this.collectionSize = 0;
        return _this;
    }
    LookupTableModalComponent.prototype.ngOnInit = function () {
    };
    LookupTableModalComponent.prototype.getTableHeader = function () {
        this.tableHeader = [];
        if (this.recordList.length > 0) {
            var record = this.recordList[0];
            for (var key in record) {
                debugger;
                if (record.hasOwnProperty(key)) {
                    this.tableHeader.push(key);
                }
            }
        }
    };
    LookupTableModalComponent.prototype.show = function (headers, records) {
        debugger;
        this.tableHeader = headers;
        this.recordList = records;
        this.allRecordList = this.recordList;
        this.collectionSize = this.recordList.length;
        //this.getTableHeader();
        this.modal.show();
    };
    LookupTableModalComponent.prototype.search = function () {
        var _this = this;
        debugger;
        var items = this.allRecordList;
        if (!this.filterText) {
            return this.recordList = this.allRecordList;
        }
        this.recordList = [];
        var searchText = this.filterText.toLowerCase();
        items = items.filter(function (item) {
            for (var i = 0; i < _this.tableHeader.length; i++) {
                var element = _this.tableHeader[i];
                if (item[element].toLowerCase().includes(searchText)) {
                    return _this.recordList.push(item);
                }
            }
        });
        if (this.recordList.length > 0) {
            this.collectionSize = this.recordList.length;
        }
    };
    // search1() {debugger
    //   let searchText = this.filterText.toLowerCase();
    //   this.recordList=this.allRecordList;
    //      this.recordList = this.recordList.filter((item) => {
    //        return item.toLowerCase().includes(searchText);
    //     });
    //     if(this.recordList.length>0){
    //       this.collectionSize=this.recordList.length;
    //     }
    // }
    LookupTableModalComponent.prototype.setAndSelect = function (record) {
        debugger;
        this.modal.hide();
        this.modalSelect.emit(record);
    };
    LookupTableModalComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lookupTableModal', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_2__["UiModalComponent"])
    ], LookupTableModalComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LookupTableModalComponent.prototype, "modalTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LookupTableModalComponent.prototype, "modalSubtitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LookupTableModalComponent.prototype, "modalSelect", void 0);
    LookupTableModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lookup-table-modal',
            template: __webpack_require__(/*! raw-loader!./lookup-table-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./lookup-table-modal.component.scss */ "./src/app/shared/components/lookup-table-modal/lookup-table-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], LookupTableModalComponent);
    return LookupTableModalComponent;
}(_common_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/shared/services/identity.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/identity.service.ts ***!
  \*****************************************************/
/*! exports provided: IdentityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityService", function() { return IdentityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var IdentityService = /** @class */ (function () {
    function IdentityService(_router, http) {
        this._router = _router;
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
        this.token = localStorage.getItem("token");
    }
    IdentityService.prototype.getData = function (endPoint) {
        var _this = this;
        var url_ = this.baseUrl + endPoint;
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json",
                "Authorization": "Bearer " + this.token
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            debugger;
            return _this.processGetData(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetData(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    IdentityService.prototype.getDataById = function (endPoint) {
        var _this = this;
        var url_ = this.baseUrl + endPoint;
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json",
                "Authorization": "Bearer " + this.token
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetData(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetData(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    IdentityService.prototype.processGetData = function (response) {
        var _this = this;
        var e_1, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        ;
        if (status === 200 || status === 201) {
            return this.blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            this.sessionExpired();
        }
        else {
            return this.blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var resultData = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(resultData);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param id (optional)
     * @return Success
     */
    IdentityService.prototype.delete = function (endPoint) {
        var _this = this;
        var url_ = this.baseUrl + endPoint;
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token
            })
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processCreateOrEdit(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processCreateOrEdit(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    IdentityService.prototype.processDelete = function (response) {
        var _this = this;
        var e_2, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        ;
        if (status === 200 || status === 201) {
            return this.blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status === 401) {
            this.sessionExpired();
        }
        else {
            return this.blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var resultData = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(resultData);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
    * @param input (optional)
    * @return Success
    */
    IdentityService.prototype.create = function (endPoint, input) {
        var _this = this;
        debugger;
        var url_ = this.baseUrl + endPoint;
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            })
        };
        return this.http.request("POST", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processCreateOrEdit(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processCreateOrEdit(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    /**
     * @param input (optional)
     * @return Success
     */
    IdentityService.prototype.patch = function (endPoint, input) {
        var _this = this;
        debugger;
        var url_ = this.baseUrl + endPoint;
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token
            })
        };
        return this.http.request("PATCH", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processCreateOrEdit(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processCreateOrEdit(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    IdentityService.prototype.processCreateOrEdit = function (response) {
        var _this = this;
        var e_3, _a;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](response.headers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _headers[key] = response.headers.get(key);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        ;
        if (status === 200 || status === 201) {
            return this.blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status === 401) {
            this.sessionExpired();
        }
        else {
            return this.blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var resultData = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(resultData);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    /**
     * @param input (optional)
     * @return Success
     */
    IdentityService.prototype.uploadFile = function (endPoint, input) {
        var url_ = this.baseUrl + endPoint;
        url_ = url_.replace(/[?&]$/, "");
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpRequest"]('POST', url_, input, {
            reportProgress: true,
            responseType: 'json',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Authorization": "Bearer " + this.token
            })
        });
        return this.http.request(req);
    };
    IdentityService.prototype.sessionExpired = function () {
        return;
        localStorage.clear();
        this._router.navigate(["/auth/signin"]);
        localStorage.setItem("expiryMsg", "Session expired please signin again, Thank you.");
    };
    IdentityService.prototype.throwException = function (message, status, response, headers, result) {
        if (result !== null && result !== undefined)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(result);
    };
    IdentityService.prototype.blobToText = function (blob) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            if (!blob) {
                observer.next("");
                observer.complete();
            }
            else {
                var reader = new FileReader();
                reader.onload = function (event) {
                    observer.next(event.target.result);
                    observer.complete();
                };
                reader.readAsText(blob);
            }
        });
    };
    IdentityService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],] }] }
    ]; };
    IdentityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], IdentityService);
    return IdentityService;
}());



/***/ })

}]);
//# sourceMappingURL=default~identity-identity-module~setup-setup-module-es5.js.map