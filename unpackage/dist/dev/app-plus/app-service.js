var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
(function(vue) {
  "use strict";
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
    if (e) {
      Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function() {
              return e[k];
            }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }
  var vue__namespace = /* @__PURE__ */ _interopNamespace(vue);
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$f = {
    emits: ["changeSidebarType"],
    setup(__props, { emit: emits }) {
      const showSidebar = () => {
        emits("changeSidebarType", true);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "header" }, [
          vue.createElementVNode("text", {
            class: "iconfont icon-hanbaobao hamburger",
            onClick: showSidebar
          }),
          vue.createElementVNode("view", { class: "search" }, [
            vue.createElementVNode("input", {
              type: "text",
              value: "",
              placeholder: "\u65B0\u4EBA\u5FC5\u542C",
              class: "search-input"
            }),
            vue.createElementVNode("text", { class: "iconfont icon-sousuo search-icon" })
          ]),
          vue.createElementVNode("text", { class: "iconfont icon-maikefeng-xue maikefeng" })
        ]);
      };
    }
  };
  var Header = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-5a9854c0"]]);
  const _sfc_main$e = {
    props: {
      banners: {
        required: true,
        type: Array
      }
    },
    setup(__props) {
      const props = __props;
      vue.watch(() => props.banners, (value) => {
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "swiper" }, [
          vue.createElementVNode("swiper", {
            class: "swiper-wrapper",
            "indicator-dots": true,
            "indicator-active-color": "#fff",
            autoplay: true,
            interval: 5e3,
            duration: 500,
            circular: true
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(props.banners, (item) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", {
                class: "wrapper-item",
                key: item.bannerId
              }, [
                vue.createElementVNode("image", {
                  src: item.pic
                }, null, 8, ["src"]),
                vue.createElementVNode("text", {
                  class: vue.normalizeClass(item.titleColor === "blue" ? "message title-color2" : "message title-color1")
                }, vue.toDisplayString(item.typeTitle), 3)
              ]);
            }), 128))
          ])
        ]);
      };
    }
  };
  var Banner = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-b188ec42"]]);
  var axios$2 = { exports: {} };
  var bind$4 = function bind2(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };
  var bind$3 = bind$4;
  var toString$1 = Object.prototype.toString;
  function isArray$1(val) {
    return Array.isArray(val);
  }
  function isUndefined$1(val) {
    return typeof val === "undefined";
  }
  function isBuffer$1(val) {
    return val !== null && !isUndefined$1(val) && val.constructor !== null && !isUndefined$1(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
  }
  function isArrayBuffer$1(val) {
    return toString$1.call(val) === "[object ArrayBuffer]";
  }
  function isFormData$1(val) {
    return toString$1.call(val) === "[object FormData]";
  }
  function isArrayBufferView$1(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer$1(val.buffer);
    }
    return result;
  }
  function isString$1(val) {
    return typeof val === "string";
  }
  function isNumber$1(val) {
    return typeof val === "number";
  }
  function isObject$2(val) {
    return val !== null && typeof val === "object";
  }
  function isPlainObject$1(val) {
    if (toString$1.call(val) !== "[object Object]") {
      return false;
    }
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
  }
  function isDate$1(val) {
    return toString$1.call(val) === "[object Date]";
  }
  function isFile$1(val) {
    return toString$1.call(val) === "[object File]";
  }
  function isBlob$1(val) {
    return toString$1.call(val) === "[object Blob]";
  }
  function isFunction$1(val) {
    return toString$1.call(val) === "[object Function]";
  }
  function isStream$1(val) {
    return isObject$2(val) && isFunction$1(val.pipe);
  }
  function isURLSearchParams$1(val) {
    return toString$1.call(val) === "[object URLSearchParams]";
  }
  function trim$1(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
  }
  function isStandardBrowserEnv$1() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  }
  function forEach$1(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray$1(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function merge$1() {
    var result = {};
    function assignValue(val, key) {
      if (isPlainObject$1(result[key]) && isPlainObject$1(val)) {
        result[key] = merge$1(result[key], val);
      } else if (isPlainObject$1(val)) {
        result[key] = merge$1({}, val);
      } else if (isArray$1(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }
    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach$1(arguments[i], assignValue);
    }
    return result;
  }
  function extend$1(a, b, thisArg) {
    forEach$1(b, function assignValue(val, key) {
      if (thisArg && typeof val === "function") {
        a[key] = bind$3(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }
  function stripBOM$1(content) {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  }
  var utils$g = {
    isArray: isArray$1,
    isArrayBuffer: isArrayBuffer$1,
    isBuffer: isBuffer$1,
    isFormData: isFormData$1,
    isArrayBufferView: isArrayBufferView$1,
    isString: isString$1,
    isNumber: isNumber$1,
    isObject: isObject$2,
    isPlainObject: isPlainObject$1,
    isUndefined: isUndefined$1,
    isDate: isDate$1,
    isFile: isFile$1,
    isBlob: isBlob$1,
    isFunction: isFunction$1,
    isStream: isStream$1,
    isURLSearchParams: isURLSearchParams$1,
    isStandardBrowserEnv: isStandardBrowserEnv$1,
    forEach: forEach$1,
    merge: merge$1,
    extend: extend$1,
    trim: trim$1,
    stripBOM: stripBOM$1
  };
  var utils$f = utils$g;
  function encode$1(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  var buildURL$4 = function buildURL2(url, params, paramsSerializer) {
    if (!params) {
      return url;
    }
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils$f.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      utils$f.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (utils$f.isArray(val)) {
          key = key + "[]";
        } else {
          val = [val];
        }
        utils$f.forEach(val, function parseValue(v) {
          if (utils$f.isDate(v)) {
            v = v.toISOString();
          } else if (utils$f.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode$1(key) + "=" + encode$1(v));
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      var hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  };
  var utils$e = utils$g;
  function InterceptorManager$1() {
    this.handlers = [];
  }
  InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  };
  InterceptorManager$1.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager$1.prototype.forEach = function forEach2(fn) {
    utils$e.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };
  var InterceptorManager_1 = InterceptorManager$1;
  var utils$d = utils$g;
  var normalizeHeaderName$1 = function normalizeHeaderName2(headers, normalizedName) {
    utils$d.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };
  var enhanceError$4 = function enhanceError2(error, config, code, request, response) {
    error.config = config;
    if (code) {
      error.code = code;
    }
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    };
    return error;
  };
  var transitional = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };
  var enhanceError$3 = enhanceError$4;
  var createError$4 = function createError2(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError$3(error, config, code, request, response);
  };
  var createError$3 = createError$4;
  var settle$3 = function settle2(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(createError$3("Request failed with status code " + response.status, response.config, null, response.request, response));
    }
  };
  var utils$c = utils$g;
  var cookies$1 = utils$c.isStandardBrowserEnv() ? function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + "=" + encodeURIComponent(value));
        if (utils$c.isNumber(expires)) {
          cookie.push("expires=" + new Date(expires).toGMTString());
        }
        if (utils$c.isString(path)) {
          cookie.push("path=" + path);
        }
        if (utils$c.isString(domain)) {
          cookie.push("domain=" + domain);
        }
        if (secure === true) {
          cookie.push("secure");
        }
        document.cookie = cookie.join("; ");
      },
      read: function read(name) {
        var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    };
  }() : function nonStandardBrowserEnv() {
    return {
      write: function write() {
      },
      read: function read() {
        return null;
      },
      remove: function remove() {
      }
    };
  }();
  var isAbsoluteURL$3 = function isAbsoluteURL2(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  };
  var combineURLs$3 = function combineURLs2(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  };
  var isAbsoluteURL$2 = isAbsoluteURL$3;
  var combineURLs$2 = combineURLs$3;
  var buildFullPath$3 = function buildFullPath2(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL$2(requestedURL)) {
      return combineURLs$2(baseURL, requestedURL);
    }
    return requestedURL;
  };
  var utils$b = utils$g;
  var ignoreDuplicateOf = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  var parseHeaders$1 = function parseHeaders2(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) {
      return parsed;
    }
    utils$b.forEach(headers.split("\n"), function parser(line) {
      i = line.indexOf(":");
      key = utils$b.trim(line.substr(0, i)).toLowerCase();
      val = utils$b.trim(line.substr(i + 1));
      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }
        if (key === "set-cookie") {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
      }
    });
    return parsed;
  };
  var utils$a = utils$g;
  var isURLSameOrigin$1 = utils$a.isStandardBrowserEnv() ? function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement("a");
    var originURL;
    function resolveURL(url) {
      var href = url;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin2(requestURL) {
      var parsed = utils$a.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }() : function nonStandardBrowserEnv() {
    return function isURLSameOrigin2() {
      return true;
    };
  }();
  function Cancel$3(message) {
    this.message = message;
  }
  Cancel$3.prototype.toString = function toString2() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  };
  Cancel$3.prototype.__CANCEL__ = true;
  var Cancel_1 = Cancel$3;
  var utils$9 = utils$g;
  var settle$2 = settle$3;
  var cookies = cookies$1;
  var buildURL$3 = buildURL$4;
  var buildFullPath$2 = buildFullPath$3;
  var parseHeaders = parseHeaders$1;
  var isURLSameOrigin = isURLSameOrigin$1;
  var createError$2 = createError$4;
  var transitionalDefaults$1 = transitional;
  var Cancel$2 = Cancel_1;
  var xhr = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;
      var responseType = config.responseType;
      var onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener("abort", onCanceled);
        }
      }
      if (utils$9.isFormData(requestData)) {
        delete requestHeaders["Content-Type"];
      }
      var request = new XMLHttpRequest();
      if (config.auth) {
        var username = config.auth.username || "";
        var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
      }
      var fullPath = buildFullPath$2(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL$3(fullPath, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
        var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle$2(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(createError$2("Request aborted", config, "ECONNABORTED", request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(createError$2("Network Error", config, null, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
        var transitional2 = config.transitional || transitionalDefaults$1;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(createError$2(timeoutErrorMessage, config, transitional2.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
        request = null;
      };
      if (utils$9.isStandardBrowserEnv()) {
        var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }
      if ("setRequestHeader" in request) {
        utils$9.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
            delete requestHeaders[key];
          } else {
            request.setRequestHeader(key, val);
          }
        });
      }
      if (!utils$9.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = config.responseType;
      }
      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", config.onDownloadProgress);
      }
      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", config.onUploadProgress);
      }
      if (config.cancelToken || config.signal) {
        onCanceled = function(cancel) {
          if (!request) {
            return;
          }
          reject(!cancel || cancel && cancel.type ? new Cancel$2("canceled") : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
      }
      if (!requestData) {
        requestData = null;
      }
      request.send(requestData);
    });
  };
  var utils$8 = utils$g;
  var normalizeHeaderName = normalizeHeaderName$1;
  var enhanceError$2 = enhanceError$4;
  var transitionalDefaults = transitional;
  var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  function setContentTypeIfUnset(headers, value) {
    if (!utils$8.isUndefined(headers) && utils$8.isUndefined(headers["Content-Type"])) {
      headers["Content-Type"] = value;
    }
  }
  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== "undefined") {
      adapter = xhr;
    } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
      adapter = xhr;
    }
    return adapter;
  }
  function stringifySafely(rawValue, parser, encoder) {
    if (utils$8.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils$8.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults$3 = {
    transitional: transitionalDefaults,
    adapter: getDefaultAdapter(),
    transformRequest: [function transformRequest(data2, headers) {
      normalizeHeaderName(headers, "Accept");
      normalizeHeaderName(headers, "Content-Type");
      if (utils$8.isFormData(data2) || utils$8.isArrayBuffer(data2) || utils$8.isBuffer(data2) || utils$8.isStream(data2) || utils$8.isFile(data2) || utils$8.isBlob(data2)) {
        return data2;
      }
      if (utils$8.isArrayBufferView(data2)) {
        return data2.buffer;
      }
      if (utils$8.isURLSearchParams(data2)) {
        setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
        return data2.toString();
      }
      if (utils$8.isObject(data2) || headers && headers["Content-Type"] === "application/json") {
        setContentTypeIfUnset(headers, "application/json");
        return stringifySafely(data2);
      }
      return data2;
    }],
    transformResponse: [function transformResponse(data2) {
      var transitional2 = this.transitional || defaults$3.transitional;
      var silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      var forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
      if (strictJSONParsing || forcedJSONParsing && utils$8.isString(data2) && data2.length) {
        try {
          return JSON.parse(data2);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw enhanceError$2(e, this, "E_JSON_PARSE");
            }
            throw e;
          }
        }
      }
      return data2;
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    }
  };
  utils$8.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
    defaults$3.headers[method] = {};
  });
  utils$8.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    defaults$3.headers[method] = utils$8.merge(DEFAULT_CONTENT_TYPE);
  });
  var defaults_1 = defaults$3;
  var utils$7 = utils$g;
  var defaults$2 = defaults_1;
  var transformData$1 = function transformData2(data2, headers, fns) {
    var context = this || defaults$2;
    utils$7.forEach(fns, function transform(fn) {
      data2 = fn.call(context, data2, headers);
    });
    return data2;
  };
  var isCancel$1 = function isCancel2(value) {
    return !!(value && value.__CANCEL__);
  };
  var utils$6 = utils$g;
  var transformData = transformData$1;
  var isCancel = isCancel$1;
  var defaults$1 = defaults_1;
  var Cancel$1 = Cancel_1;
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new Cancel$1("canceled");
    }
  }
  var dispatchRequest$1 = function dispatchRequest2(config) {
    throwIfCancellationRequested(config);
    config.headers = config.headers || {};
    config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
    config.headers = utils$6.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils$6.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
      delete config.headers[method];
    });
    var adapter = config.adapter || defaults$1.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
        }
      }
      return Promise.reject(reason);
    });
  };
  var utils$5 = utils$g;
  var mergeConfig$2 = function mergeConfig2(config1, config2) {
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
      if (utils$5.isPlainObject(target) && utils$5.isPlainObject(source)) {
        return utils$5.merge(target, source);
      } else if (utils$5.isPlainObject(source)) {
        return utils$5.merge({}, source);
      } else if (utils$5.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(prop) {
      if (!utils$5.isUndefined(config2[prop])) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (!utils$5.isUndefined(config1[prop])) {
        return getMergedValue(void 0, config1[prop]);
      }
    }
    function valueFromConfig2(prop) {
      if (!utils$5.isUndefined(config2[prop])) {
        return getMergedValue(void 0, config2[prop]);
      }
    }
    function defaultToConfig2(prop) {
      if (!utils$5.isUndefined(config2[prop])) {
        return getMergedValue(void 0, config2[prop]);
      } else if (!utils$5.isUndefined(config1[prop])) {
        return getMergedValue(void 0, config1[prop]);
      }
    }
    function mergeDirectKeys(prop) {
      if (prop in config2) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (prop in config1) {
        return getMergedValue(void 0, config1[prop]);
      }
    }
    var mergeMap = {
      "url": valueFromConfig2,
      "method": valueFromConfig2,
      "data": valueFromConfig2,
      "baseURL": defaultToConfig2,
      "transformRequest": defaultToConfig2,
      "transformResponse": defaultToConfig2,
      "paramsSerializer": defaultToConfig2,
      "timeout": defaultToConfig2,
      "timeoutMessage": defaultToConfig2,
      "withCredentials": defaultToConfig2,
      "adapter": defaultToConfig2,
      "responseType": defaultToConfig2,
      "xsrfCookieName": defaultToConfig2,
      "xsrfHeaderName": defaultToConfig2,
      "onUploadProgress": defaultToConfig2,
      "onDownloadProgress": defaultToConfig2,
      "decompress": defaultToConfig2,
      "maxContentLength": defaultToConfig2,
      "maxBodyLength": defaultToConfig2,
      "transport": defaultToConfig2,
      "httpAgent": defaultToConfig2,
      "httpsAgent": defaultToConfig2,
      "cancelToken": defaultToConfig2,
      "socketPath": defaultToConfig2,
      "responseEncoding": defaultToConfig2,
      "validateStatus": mergeDirectKeys
    };
    utils$5.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
      var merge2 = mergeMap[prop] || mergeDeepProperties;
      var configValue = merge2(prop);
      utils$5.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  };
  Object.freeze({});
  Object.freeze([]);
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  const ON_LOAD = "onLoad";
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = toTypeString(v).toLowerCase();
      if (type2 === "[object object]" || type2 === "[object array]") {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  var data = {
    "version": "0.26.1"
  };
  var VERSION = data.version;
  var validators$1 = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
    validators$1[type] = function validator2(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  var deprecatedWarnings = {};
  validators$1.transitional = function transitional2(validator2, version, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return function(value, opt, opts) {
      if (validator2 === false) {
        throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        formatAppLog("warn", "at node_modules/axios/lib/helpers/validator.js:37", formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
      }
      return validator2 ? validator2(value, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new TypeError("options must be an object");
    }
    var keys = Object.keys(options);
    var i = keys.length;
    while (i-- > 0) {
      var opt = keys[i];
      var validator2 = schema[opt];
      if (validator2) {
        var value = options[opt];
        var result = value === void 0 || validator2(value, opt, options);
        if (result !== true) {
          throw new TypeError("option " + opt + " must be " + result);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw Error("Unknown option " + opt);
      }
    }
  }
  var validator$1 = {
    assertOptions,
    validators: validators$1
  };
  var utils$4 = utils$g;
  var buildURL$2 = buildURL$4;
  var InterceptorManager = InterceptorManager_1;
  var dispatchRequest = dispatchRequest$1;
  var mergeConfig$1 = mergeConfig$2;
  var validator = validator$1;
  var validators = validator.validators;
  function Axios$1(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  Axios$1.prototype.request = function request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig$1(this.defaults, config);
    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = "get";
    }
    var transitional2 = config.transitional;
    if (transitional2 !== void 0) {
      validator.assertOptions(transitional2, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
      var chain = [dispatchRequest, void 0];
      Array.prototype.unshift.apply(chain, requestInterceptorChain);
      chain = chain.concat(responseInterceptorChain);
      promise = Promise.resolve(config);
      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }
      return promise;
    }
    var newConfig = config;
    while (requestInterceptorChain.length) {
      var onFulfilled = requestInterceptorChain.shift();
      var onRejected = requestInterceptorChain.shift();
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected(error);
        break;
      }
    }
    try {
      promise = dispatchRequest(newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    while (responseInterceptorChain.length) {
      promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    }
    return promise;
  };
  Axios$1.prototype.getUri = function getUri(config) {
    config = mergeConfig$1(this.defaults, config);
    return buildURL$2(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
  };
  utils$4.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios$1.prototype[method] = function(url, config) {
      return this.request(mergeConfig$1(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils$4.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    Axios$1.prototype[method] = function(url, data2, config) {
      return this.request(mergeConfig$1(config || {}, {
        method,
        url,
        data: data2
      }));
    };
  });
  var Axios_1 = Axios$1;
  var Cancel = Cancel_1;
  function CancelToken(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    var token = this;
    this.promise.then(function(cancel) {
      if (!token._listeners)
        return;
      var i;
      var l = token._listeners.length;
      for (i = 0; i < l; i++) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = function(onfulfilled) {
      var _resolve;
      var promise = new Promise(function(resolve) {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message) {
      if (token.reason) {
        return;
      }
      token.reason = new Cancel(message);
      resolvePromise(token.reason);
    });
  }
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  };
  CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    var index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  };
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  };
  var CancelToken_1 = CancelToken;
  var spread = function spread2(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };
  var utils$3 = utils$g;
  var isAxiosError = function isAxiosError2(payload) {
    return utils$3.isObject(payload) && payload.isAxiosError === true;
  };
  var utils$2 = utils$g;
  var bind$2 = bind$4;
  var Axios = Axios_1;
  var mergeConfig = mergeConfig$2;
  var defaults = defaults_1;
  function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind$2(Axios.prototype.request, context);
    utils$2.extend(instance, Axios.prototype, context);
    utils$2.extend(instance, context);
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios$1 = createInstance(defaults);
  axios$1.Axios = Axios;
  axios$1.Cancel = Cancel_1;
  axios$1.CancelToken = CancelToken_1;
  axios$1.isCancel = isCancel$1;
  axios$1.VERSION = data.version;
  axios$1.all = function all(promises) {
    return Promise.all(promises);
  };
  axios$1.spread = spread;
  axios$1.isAxiosError = isAxiosError;
  axios$2.exports = axios$1;
  axios$2.exports.default = axios$1;
  var axios = axios$2.exports;
  var axiosAdapterUniapp$1 = { exports: {} };
  var isMultiUpload$1 = function isMultiUpload2(config) {
    return Array.isArray(config.files) && config.files.length > 0;
  };
  const isMultiUpload = isMultiUpload$1;
  var isUploadFile$2 = function isUploadFile2(config) {
    if (config.method === "post") {
      if (config.filePath && config.name)
        return true;
      if (isMultiUpload(config))
        return true;
    }
    return false;
  };
  var enhanceError$1 = function enhanceError2(error, config, code, request, response) {
    error.config = config;
    if (code) {
      error.code = code;
    }
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code
      };
    };
    return error;
  };
  var enhanceError = enhanceError$1;
  var createError$1 = function createError2(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
  };
  var createError = createError$1;
  var settle$1 = function settle2(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
    }
  };
  var bind$1 = function bind2(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };
  var bind = bind$1;
  var toString = Object.prototype.toString;
  function isArray(val) {
    return toString.call(val) === "[object Array]";
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
  }
  function isArrayBuffer(val) {
    return toString.call(val) === "[object ArrayBuffer]";
  }
  function isFormData(val) {
    return typeof FormData !== "undefined" && val instanceof FormData;
  }
  function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    }
    return result;
  }
  function isString(val) {
    return typeof val === "string";
  }
  function isNumber(val) {
    return typeof val === "number";
  }
  function isObject$1(val) {
    return val !== null && typeof val === "object";
  }
  function isPlainObject(val) {
    if (toString.call(val) !== "[object Object]") {
      return false;
    }
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
  }
  function isDate(val) {
    return toString.call(val) === "[object Date]";
  }
  function isFile(val) {
    return toString.call(val) === "[object File]";
  }
  function isBlob(val) {
    return toString.call(val) === "[object Blob]";
  }
  function isFunction(val) {
    return toString.call(val) === "[object Function]";
  }
  function isStream(val) {
    return isObject$1(val) && isFunction(val.pipe);
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
  }
  function isStandardBrowserEnv() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function merge() {
    var result = {};
    function assignValue(val, key) {
      if (isPlainObject(result[key]) && isPlainObject(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject(val)) {
        result[key] = merge({}, val);
      } else if (isArray(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }
    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === "function") {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }
  function stripBOM(content) {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  }
  var utils$1 = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isObject: isObject$1,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isFunction,
    isStream,
    isURLSearchParams,
    isStandardBrowserEnv,
    forEach,
    merge,
    extend,
    trim,
    stripBOM
  };
  var utils = utils$1;
  function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  var buildURL$1 = function buildURL2(url, params, paramsSerializer) {
    if (!params) {
      return url;
    }
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      utils.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (utils.isArray(val)) {
          key = key + "[]";
        } else {
          val = [val];
        }
        utils.forEach(val, function parseValue(v) {
          if (utils.isDate(v)) {
            v = v.toISOString();
          } else if (utils.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + "=" + encode(v));
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      var hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  };
  var isAbsoluteURL$1 = function isAbsoluteURL2(url) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };
  var combineURLs$1 = function combineURLs2(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  };
  var isAbsoluteURL = isAbsoluteURL$1;
  var combineURLs = combineURLs$1;
  var buildFullPath$1 = function buildFullPath2(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  };
  var settle = settle$1;
  var buildURL = buildURL$1;
  var buildFullPath = buildFullPath$1;
  const isUploadFile$1 = isUploadFile$2;
  var format$1 = function format2(config, resolve, reject) {
    const fullPath = buildFullPath(config.baseURL, config.url);
    const requestHeaders = config.headers;
    const uniConfig = __spreadProps(__spreadValues({}, config), {
      url: buildURL(fullPath, config.params, config.paramsSerializer),
      header: requestHeaders
    });
    if (isUploadFile$1(config)) {
      delete requestHeaders["Content-Type"];
      if (config.formData) {
        uniConfig.formData = config.formData;
      } else {
        if (typeof config.data === "string") {
          uniConfig.formData = JSON.parse(config.data);
        } else {
          uniConfig.formData = config.data;
        }
      }
    } else if (config.method === "get") {
      uniConfig.data = config.data ? config.data : config.params;
    } else {
      uniConfig.data = config.data;
    }
    if (config.auth) {
      var username = config.auth.username || "";
      var password = unescape(encodeURIComponent(config.auth.password)) || "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    uniConfig.complete = function(response) {
      var result = {
        data: response.data,
        status: response.statusCode,
        statusText: response.errMsg,
        header: response.header,
        config
      };
      settle(resolve, reject, result);
    };
    return uniConfig;
  };
  const isUploadFile = isUploadFile$2;
  const format = format$1;
  function uniappAdapter(config = {}) {
    return new Promise(function dispatchUniApp(resolve, reject) {
      const uniConfig = format(config, resolve, reject);
      let requestTask = null;
      if (config.cancelToken) {
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!requestTask) {
            return;
          }
          requestTask.abort();
          reject(cancel);
          requestTask = null;
        });
      }
      if (isUploadFile(config)) {
        requestTask = uni.uploadFile(uniConfig);
      } else {
        requestTask = uni.request(uniConfig);
      }
    });
  }
  axiosAdapterUniapp$1.exports = uniappAdapter;
  axiosAdapterUniapp$1.exports.default = uniappAdapter;
  var axiosAdapterUniapp = axiosAdapterUniapp$1.exports;
  const server = axios.create({
    baseURL: "http://124.223.193.250:3000",
    timeout: 5e3,
    withCredentials: true,
    adapter: axiosAdapterUniapp
  });
  server.interceptors.request.use(function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  });
  server.interceptors.response.use(function(response) {
    if (response.status === 200) {
      return response.data;
    } else if (response.data.code === 301) {
      uni.navigateTo({
        url: "/subpages/login/login"
      });
    }
  }, function(error) {
    return Promise.reject(error);
  });
  const getBanner = () => {
    return server({
      url: "/banner?type=1",
      method: "GET"
    });
  };
  const getDragon = () => {
    return server({
      url: "/homepage/dragon/ball"
    });
  };
  const getPersonalized = () => {
    return server({
      url: "/personalized?limit=6"
    });
  };
  const getSongs = (data2) => {
    return server({
      url: "/recommend/songs",
      method: "POST",
      data: data2
    });
  };
  const getSongsDetail = (id) => {
    return server({
      url: `/song/detail?ids=${id}`,
      method: "get"
    });
  };
  const getSongsPlay = (id) => {
    return server({
      url: `/song/url?id=${id}`,
      method: "get"
    });
  };
  const homepage = () => {
    return server({
      url: `/homepage/block/page`,
      method: "get"
    });
  };
  const _sfc_main$d = {
    setup(__props) {
      const dragonList = vue.ref([]);
      const initDragon = async () => {
        const res = await getDragon();
        dragonList.value = res.data;
      };
      initDragon();
      const goToDetail = (id) => {
        if (id === -1) {
          uni.navigateTo({
            url: "/subpages/recommendSongs/recommendSongs"
          });
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "dragon" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(dragonList.value, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "dragon-wrapper",
              key: item.id,
              onClick: ($event) => goToDetail(item.id)
            }, [
              vue.createElementVNode("view", { class: "dragon-top" }, [
                vue.createElementVNode("image", {
                  src: item.iconUrl
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("text", { class: "title" }, vue.toDisplayString(item.name), 1)
            ], 8, ["onClick"]);
          }), 128))
        ]);
      };
    }
  };
  var Dragon = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-7f120574"]]);
  const _sfc_main$c = {
    setup(__props) {
      const personalizedList = vue.ref([]);
      const initList = async () => {
        const res = await getPersonalized();
        personalizedList.value = res.result;
      };
      initList();
      const playCount = (count) => {
        return Math.floor(count / 1e4) + "\u4E07";
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "list" }, [
          vue.createElementVNode("view", { class: "header" }, [
            vue.createElementVNode("text", { class: "header-title" }, "\u63A8\u8350\u6B4C\u5355"),
            vue.createElementVNode("view", { class: "header-more" }, [
              vue.createElementVNode("button", { class: "more-btn" }, "\u66F4\u591A"),
              vue.createElementVNode("text", { class: "more-icon icon-right iconfont" })
            ])
          ]),
          vue.createElementVNode("view", { class: "content" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(personalizedList.value, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "wrapper",
                key: item.id
              }, [
                vue.createElementVNode("image", {
                  src: item.picUrl,
                  class: "wrapper-image"
                }, null, 8, ["src"]),
                vue.createElementVNode("text", { class: "wrapper-message" }, vue.toDisplayString(item.name), 1),
                vue.createElementVNode("text", { class: "iconfont wrapper-icon icon-bofang1" }, vue.toDisplayString(playCount(item.playCount)), 1)
              ]);
            }), 128))
          ])
        ]);
      };
    }
  };
  var MusicList = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-c41c0d00"]]);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = __spreadValues({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data2 = JSON.parse(raw);
        Object.assign(currentSettings, data2);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.0.2
   * (c) 2021 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function useStore(key) {
    if (key === void 0)
      key = null;
    return vue.inject(key !== null ? key : storeKey);
  }
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = Object.create(null);
    store2._mutations = Object.create(null);
    store2._wrappedGetters = Object.create(null);
    store2._modulesNamespaceMap = Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    store2.getters = {};
    store2._makeLocalGettersCache = Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    forEachValue(wrappedGetters, function(fn, key) {
      computedObj[key] = partial(fn, store2);
      Object.defineProperty(store2.getters, key, {
        get: function() {
          return computedObj[key]();
        },
        enumerable: true
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(local.state, local.getters, store3.state, store3.getters);
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app2, store2) {
    setupDevtoolsPlugin({
      id: "org.vuejs.vuex",
      app: app2,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    }, function(api) {
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: "Vuex Mutations",
        color: COLOR_LIME_500
      });
      api.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: "Vuex Actions",
        color: COLOR_LIME_500
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      });
      api.on.getInspectorTree(function(payload) {
        if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store2._modules.root, "")
            ];
          }
        }
      });
      api.on.getInspectorState(function(payload) {
        if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store2, modulePath);
          payload.state = formatStoreForInspectorState(getStoreModule(store2._modules, modulePath), modulePath === "root" ? store2.getters : store2._makeLocalGettersCache, modulePath);
        }
      });
      api.on.editInspectorState(function(payload) {
        if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== "root") {
            path = modulePath.split("/").filter(Boolean).concat(path);
          }
          store2._withCommit(function() {
            payload.set(store2._state.data, path, payload.state.value);
          });
        }
      });
      store2.subscribe(function(mutation, state) {
        var data2 = {};
        if (mutation.payload) {
          data2.payload = mutation.payload;
        }
        data2.state = state;
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data: data2
          }
        });
      });
      store2.subscribeAction({
        before: function(action, state) {
          var data2 = {};
          if (action.payload) {
            data2.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data2.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: "start",
              data: data2
            }
          });
        },
        after: function(action, state) {
          var data2 = {};
          var duration = Date.now() - action._time;
          data2.duration = {
            _custom: {
              type: "duration",
              display: duration + "ms",
              tooltip: "Action duration",
              value: duration
            }
          };
          if (action.payload) {
            data2.payload = action.payload;
          }
          data2.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: "end",
              data: data2
            }
          });
        }
      });
    });
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(function(moduleName) {
        return formatStoreForInspectorTree(module._children[moduleName], path + moduleName + "/");
      })
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters2, path) {
    getters2 = path === "root" ? getters2 : getters2[path];
    var gettersKeys = Object.keys(getters2);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters2);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters2) {
    var result = {};
    Object.keys(getters2).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters2[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters2[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(function(module, moduleName, i) {
      var child = module[moduleName];
      if (!child) {
        throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
      }
      return i === names.length - 1 ? child : child._children;
    }, path === "root" ? moduleMap : moduleMap.root._children);
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn("[vuex] trying to unregister module '" + key + "', which is not registered");
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed");
          }
          return;
        }
        update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions2 = assertTypes[key];
      forEachValue(rawModule[key], function(value, type) {
        assert(assertOptions2.assert(value), makeAssertionMessage(path, key, type, value, assertOptions2.expected));
      });
    });
  }
  function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = Object.create(null);
    this._actionSubscribers = [];
    this._mutations = Object.create(null);
    this._wrappedGetters = Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = Object.create(null);
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app2, injectKey) {
    app2.provide(injectKey || storeKey, this);
    app2.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app2, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools");
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  const _sfc_main$b = {
    props: {
      type: {
        type: Boolean,
        default: () => false,
        required: true
      }
    },
    emits: ["changeSidebarType"],
    setup(__props, { emit: emits }) {
      const props = __props;
      const store2 = useStore();
      const userInfo = store2.getters.userInfo;
      const closeSidebar = (event) => {
        if (event.target.dataset.id === "1") {
          return;
        } else {
          emits("changeSidebarType", !props.type);
        }
      };
      const loginOrMine = () => {
        if (!userInfo.nickname) {
          uni.navigateTo({
            url: "/subpages/login/login"
          });
        } else {
          uni.navigateTo({
            url: "/subpages/personalCenter/personalCenter"
          });
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "sidebar",
          "data-id": "0",
          onClick: vue.withModifiers(closeSidebar, ["stop"])
        }, [
          vue.createElementVNode("view", {
            class: "sidebar-left",
            "data-id": "1"
          }, [
            vue.createElementVNode("view", { class: "left-header" }, [
              vue.createElementVNode("image", {
                src: vue.unref(userInfo).avatarUrl
              }, null, 8, ["src"]),
              vue.createElementVNode("text", {
                class: "userName",
                onClick: loginOrMine
              }, vue.toDisplayString(vue.unref(userInfo).nickname ? vue.unref(userInfo).nickname : "\u8BF7\u767B\u5F55") + " >", 1)
            ]),
            vue.createElementVNode("view", { class: "left-floor" }, [
              vue.createElementVNode("view", { class: "floor-item" }, [
                vue.createElementVNode("text", { class: "iconfont left icon-xin" }),
                vue.createElementVNode("text", { class: "message" }, "\u6211\u7684\u6D88\u606F"),
                vue.createElementVNode("text", { class: "iconfont right icon-right" })
              ]),
              vue.createElementVNode("view", { class: "floor-item" }, [
                vue.createElementVNode("text", { class: "iconfont left icon-vynil" }),
                vue.createElementVNode("text", { class: "message" }, "\u4E91\u8D1D\u4E2D\u5FC3"),
                vue.createElementVNode("text", { class: "iconfont right icon-right" })
              ]),
              vue.createElementVNode("view", { class: "floor-item" }, [
                vue.createElementVNode("text", { class: "iconfont left icon-dengpao" }),
                vue.createElementVNode("text", { class: "message" }, "\u521B\u9020\u8005\u4E2D\u5FC3"),
                vue.createElementVNode("text", { class: "iconfont right icon-right" })
              ])
            ]),
            vue.createElementVNode("view", { class: "left-floor" }, [
              vue.createElementVNode("view", { class: "floor-item" }, [
                vue.createElementVNode("text", { class: "iconfont left icon-tianmaohuopiaotongxing" }),
                vue.createElementVNode("text", { class: "message" }, "\u4E91\u6751\u6709\u7968"),
                vue.createElementVNode("text", { class: "iconfont right icon-right" })
              ]),
              vue.createElementVNode("view", { class: "floor-item" }, [
                vue.createElementVNode("text", { class: "iconfont left icon-shangcheng" }),
                vue.createElementVNode("text", { class: "message" }, "\u5546\u57CE"),
                vue.createElementVNode("text", { class: "iconfont right icon-right" })
              ]),
              vue.createElementVNode("view", { class: "floor-item" }, [
                vue.createElementVNode("text", { class: "iconfont left icon-jiaoyi" }),
                vue.createElementVNode("text", { class: "message" }, "Beat\u4EA4\u6613\u5E73\u53F0"),
                vue.createElementVNode("text", { class: "iconfont right icon-right" })
              ]),
              vue.createElementVNode("view", { class: "floor-item" }, [
                vue.createElementVNode("text", { class: "iconfont left icon-youxi" }),
                vue.createElementVNode("text", { class: "message" }, "\u6E38\u620F\u4E13\u533A"),
                vue.createElementVNode("text", { class: "iconfont right icon-right" })
              ]),
              vue.createElementVNode("view", { class: "floor-item" }, [
                vue.createElementVNode("text", { class: "iconfont left icon-lingsheng" }),
                vue.createElementVNode("text", { class: "message" }, "\u53E3\u888B\u5F69\u94C3"),
                vue.createElementVNode("text", { class: "iconfont right icon-right" })
              ])
            ]),
            vue.createElementVNode("view", { class: "left-floor" }, [
              vue.createElementVNode("view", { class: "floor-item" }, [
                vue.createElementVNode("text", { class: "iconfont left icon-shezhi" }),
                vue.createElementVNode("text", { class: "message" }, "\u8BBE\u7F6E"),
                vue.createElementVNode("text", { class: "iconfont right icon-right" })
              ]),
              vue.createElementVNode("view", { class: "floor-item" }, [
                vue.createElementVNode("text", { class: "iconfont left icon-moonyueliang" }),
                vue.createElementVNode("text", { class: "message" }, "\u591C\u95F4\u6A21\u5F0F"),
                vue.createElementVNode("text", { class: "iconfont right icon-right" })
              ]),
              vue.createElementVNode("view", { class: "floor-item" }, [
                vue.createElementVNode("text", { class: "iconfont left icon-dingshi" }),
                vue.createElementVNode("text", { class: "message" }, "\u5B9A\u65F6\u5173\u95ED"),
                vue.createElementVNode("text", { class: "iconfont right icon-right" })
              ])
            ])
          ])
        ], 8, ["onClick"]);
      };
    }
  };
  var Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-c7fab58e"]]);
  const _sfc_main$a = {
    props: {
      songlistAlign: {
        type: Object,
        required: true
      }
    },
    setup(__props) {
      const props = __props;
      vue.watch(() => props.songlistAlign, (value) => {
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "header" }, [
            vue.createElementVNode("text", { class: "header-title" }, "\u97F3\u4E50\u699C\u5355\u63A8\u8350"),
            vue.createElementVNode("view", { class: "header-more" }, [
              vue.createElementVNode("button", { class: "more-btn" }, "\u66F4\u591A"),
              vue.createElementVNode("text", { class: "more-icon icon-right iconfont" })
            ])
          ]),
          props.songlistAlign.creatives && props.songlistAlign.creatives.length > 2 ? vue.renderSlot(_ctx.$slots, "align", { key: 0 }, () => [
            vue.createElementVNode("swiper", {
              class: "swiper",
              "indicator-dots": false,
              autoplay: false,
              "next-margin": "40px"
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(props.songlistAlign.creatives, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.resources, (sp, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "swiper-item",
                      key: index2
                    }, [
                      vue.createElementVNode("image", {
                        class: "align-image",
                        src: sp.resourceExtInfo.song.al.picUrl
                      }, null, 8, ["src"]),
                      vue.createElementVNode("view", { class: "song-info" }, [
                        vue.createElementVNode("text", { class: "info-name" }, vue.toDisplayString(sp.resourceExtInfo.song.al.name), 1),
                        vue.createElementVNode("text", { class: "info-detail" })
                      ])
                    ]);
                  }), 128))
                ]);
              }), 128))
            ])
          ], true) : vue.renderSlot(_ctx.$slots, "hotTopic", { key: 1 }, () => [
            vue.createElementVNode("swiper", {
              class: "swiper",
              "indicator-dots": false,
              autoplay: false,
              "next-margin": "40px"
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(props.songlistAlign.creatives, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.resources, (sp, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "swiper-item",
                      key: index2
                    }, [
                      vue.createElementVNode("image", {
                        src: sp.uiElement.mainTitle.titleImgUrl,
                        class: "hotTopic-image"
                      }, null, 8, ["src"]),
                      vue.createElementVNode("view", { class: "song-info" }, [
                        vue.createElementVNode("text", { class: "info-name hotTopic-name" }, vue.toDisplayString(sp.uiElement.mainTitle.title), 1),
                        vue.createElementVNode("text", { class: "info-detail hotTopic-detail" }, vue.toDisplayString(sp.uiElement.subTitle.title), 1)
                      ])
                    ]);
                  }), 128))
                ]);
              }), 128))
            ])
          ], true)
        ], 64);
      };
    }
  };
  var SonglistAlign = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-24813aa2"]]);
  const _sfc_main$9 = {
    setup(__props) {
      const sidebar = vue.ref(false);
      const banners = vue.ref([]);
      const songlistAlign = vue.ref({});
      const hotTopic = vue.ref({});
      const initBannerList = async () => {
        const res = await getBanner();
        const list = await homepage();
        banners.value = res.banners;
        songlistAlign.value = list.data.blocks[2];
        hotTopic.value = list.data.blocks[4];
      };
      const changeSidebarType = (value) => {
        sidebar.value = value;
      };
      initBannerList();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createVNode(Header, { onChangeSidebarType: changeSidebarType }),
          vue.createVNode(Banner, { banners: banners.value }, null, 8, ["banners"]),
          vue.createVNode(Dragon),
          vue.createVNode(MusicList),
          vue.createVNode(vue.unref(SonglistAlign), { songlistAlign: songlistAlign.value }, {
            align: vue.withCtx(() => []),
            _: 1
          }, 8, ["songlistAlign"]),
          vue.createVNode(vue.unref(SonglistAlign), { songlistAlign: hotTopic.value }, {
            hotTopic: vue.withCtx(() => []),
            _: 1
          }, 8, ["songlistAlign"]),
          sidebar.value ? (vue.openBlock(), vue.createBlock(vue.Transition, {
            key: 0,
            name: "fade"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(Sidebar, {
                onChangeSidebarType: changeSidebarType,
                type: sidebar.value,
                class: "sidebar"
              }, null, 8, ["type"])
            ]),
            _: 1
          })) : vue.createCommentVNode("v-if", true)
        ], 64);
      };
    }
  };
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-57280228"]]);
  const _sfc_main$8 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesPlayPlay = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$3]]);
  const _sfc_main$7 = {};
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$2]]);
  const _sfc_main$6 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesAttentionAttention = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$1]]);
  const _sfc_main$5 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesVillageVillage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render]]);
  const _sfc_main$4 = {
    setup(__props) {
      const phone = vue.ref("15181551844");
      const password = vue.ref("1008611deng");
      const store2 = useStore();
      const login2 = async () => {
        if (phone.value.length === 11 && password.value !== "") {
          await store2.dispatch("app/login", { phone: phone.value, password: password.value });
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "login" }, [
          vue.createElementVNode("view", { class: "login-form" }, [
            vue.createElementVNode("view", { class: "form-title" }, "\u624B\u673A\u53F7\u767B\u9646"),
            vue.withDirectives(vue.createElementVNode("input", {
              type: "number",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => phone.value = $event),
              placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
              class: "form-phone"
            }, null, 512), [
              [vue.vModelText, phone.value]
            ]),
            vue.withDirectives(vue.createElementVNode("input", {
              type: "password",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => password.value = $event),
              placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
              class: "password"
            }, null, 512), [
              [vue.vModelText, password.value]
            ]),
            vue.createElementVNode("view", {
              class: "form-btn",
              onClick: login2
            }, "\u767B\u9646")
          ])
        ]);
      };
    }
  };
  var SubpagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2463e1c6"]]);
  const _sfc_main$3 = {
    setup(__props) {
      const store2 = useStore();
      const songList = vue.ref([]);
      const months = vue.computed(() => {
        const count = new Date().getMonth() + 1;
        if (count < 10) {
          return "0" + count;
        }
        return count;
      });
      const day = vue.computed(() => {
        const count = new Date().getDate();
        if (count < 10) {
          return "0" + count;
        }
        return count;
      });
      const initSongList = async () => {
        const res = await getSongs({
          cookie: store2.getters.cookie
        });
        if (res.code === 200) {
          songList.value = res.data.dailySongs;
          let songIdList = [];
          res.data.dailySongs.forEach((item) => {
            songIdList.push(item.id);
          });
          store2.dispatch("app/allSongList", songIdList);
        }
      };
      initSongList();
      const goBack = () => {
        uni.navigateBack({
          delta: 2
        });
      };
      const toDetail = (id, index) => {
        uni.navigateTo({
          url: `/subpages/songDetail/songDetail?id=${id}&index=${index}`
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "recommendSongs" }, [
          vue.createElementVNode("view", { class: "recommendSongs-header" }, [
            vue.createElementVNode("view", { class: "title" }, [
              vue.createElementVNode("text", {
                class: "left icon-leftarrow iconfont",
                onClick: goBack
              }),
              vue.createElementVNode("text", { class: "message" }, "\u6BCF\u65E5\u63A8\u8350"),
              vue.createElementVNode("text", { class: "right iconfont icon-diandian" })
            ]),
            vue.createElementVNode("view", { class: "time" }, [
              vue.createElementVNode("text", { class: "time-months" }, vue.toDisplayString(vue.unref(months)), 1),
              vue.createElementVNode("text", { class: "time-day" }, "/" + vue.toDisplayString(vue.unref(day)), 1),
              vue.createElementVNode("view", { class: "time-like" }, "\u67E5\u770B\u4ECA\u65E5\u8FD0\u52BF>")
            ])
          ]),
          vue.createElementVNode("view", { class: "recommendSongs-wrapper" }, [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createElementVNode("text", { class: "iconfont icon-next paly" }),
              vue.createElementVNode("text", { class: "message" }, "\u64AD\u653E\u5168\u90E8"),
              vue.createElementVNode("text", { class: "iconfont icon-right1 change" })
            ]),
            vue.createElementVNode("view", { class: "list" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(songList.value, (song, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "list-item",
                  "data-id": song.al.id,
                  key: song.al.id,
                  onClick: ($event) => toDetail(song.id, index)
                }, [
                  vue.createElementVNode("image", {
                    src: song.al.picUrl
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "message" }, [
                    vue.createElementVNode("text", { class: "songName" }, vue.toDisplayString(song.name), 1),
                    vue.createElementVNode("view", { class: "songMessages" }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(song.ar, (a) => {
                        return vue.openBlock(), vue.createElementBlock("text", {
                          class: "songMessage",
                          key: a.id
                        }, vue.toDisplayString(a.name + " "), 1);
                      }), 128))
                    ])
                  ]),
                  vue.createElementVNode("text", { class: "play iconfont icon-Play" }),
                  vue.createElementVNode("text", { class: "more iconfont icon-diandian" })
                ], 8, ["data-id", "onClick"]);
              }), 128))
            ])
          ])
        ]);
      };
    }
  };
  var SubpagesRecommendSongsRecommendSongs = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8eb6411c"]]);
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const _sfc_main$2 = {
    setup(__props) {
      vue.useCssVars((_ctx) => ({
        "2fccaa72-playTime": playTime.value
      }));
      const id = vue.ref("");
      const index = vue.ref(0);
      const store2 = useStore();
      const songList = vue.ref({});
      const songsUrl = vue.ref("");
      const playType = vue.ref(false);
      const currentTime = vue.ref(0);
      const songTime = vue.ref(0);
      const playTime = vue.ref("0rpx");
      const startTime = vue.ref("00:00");
      const timer = vue.ref({});
      const innerAudioContext = uni.createInnerAudioContext();
      const initDetail = async (id2) => {
        const res = await getSongsDetail(id2);
        const url = await getSongsPlay(id2);
        songList.value = res.songs[0].al;
        songTime.value = (res.songs[0].dt / 1e3 / 60).toFixed(2);
        songsUrl.value = url.data[0].url;
        innerAudioContext.src = songsUrl.value;
        if (timer.value) {
          clearInterval(timer.value);
        }
        playSong();
      };
      onLoad((e) => {
        id.value = e.id;
        index.value = e.index;
        initDetail(id.value * 1);
      });
      const playSong = () => {
        playType.value = innerAudioContext.paused;
        if (!innerAudioContext.paused) {
          innerAudioContext.pause();
          clearInterval(timer.value);
        } else {
          innerAudioContext.play();
          timer.value = setInterval(() => {
            startTime.value = innerAudioContext.currentTime.toFixed(2);
            playTime.value = 224 / (songTime.value * 60) * innerAudioContext.currentTime + "px";
          }, 1e3);
        }
      };
      const songPrev = () => {
        innerAudioContext.destroy();
        const songIds = store2.getters.songList;
        if (index.value === 0) {
          initDetail(songIds[songIds.length - 1]);
          index.value = songIds.length - 1;
        } else {
          initDetail(songIds[index.value * 1 - 1]);
          index.value -= 1;
        }
      };
      const songNext = () => {
        playType.value = false;
        innerAudioContext.destroy();
        const songIds = store2.getters.songList;
        if (index.value === songIds[songIds.length - 1]) {
          initDetail(songIds[0] * 1);
          innerAudioContext.play();
          index.value = 0;
        } else {
          initDetail(songIds[index.value * 1 + 1]);
          innerAudioContext.play();
          index.value += 1;
        }
      };
      vue.onBeforeUnmount(() => {
        clearInterval(timer.value);
      });
      innerAudioContext.onEnded(() => {
        songNext();
      });
      innerAudioContext.onPause(() => {
        currentTime.value = innerAudioContext.currentTime;
      });
      innerAudioContext.onPlay(() => {
        innerAudioContext.seek(currentTime.value);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "detail-head" }, [
            vue.createElementVNode("text", { class: "head-message" }, vue.toDisplayString(songList.value.name), 1)
          ]),
          vue.createCommentVNode(" \u78C1\u76D8\u6307\u9488\u90E8\u5206 "),
          vue.createElementVNode("view", { class: "needle" }, [
            vue.createElementVNode("text", { class: "needle-round" }),
            vue.createElementVNode("image", {
              class: vue.normalizeClass(playType.value ? "needle-iamge needle-iamge-play" : "needle-iamge"),
              src: "/static/images/song/needle.png"
            }, null, 2)
          ]),
          vue.createCommentVNode(" \u78C1\u76D8\u90E8\u5206 "),
          vue.createElementVNode("view", { class: "disc" }, [
            vue.createElementVNode("image", {
              class: "disc-image",
              src: "/static/images/song/disc.png"
            }),
            vue.createElementVNode("image", {
              class: vue.normalizeClass(playType.value ? "disc-cover disc-cover-play" : "disc-cover"),
              src: songList.value.picUrl
            }, null, 10, ["src"])
          ]),
          vue.createCommentVNode(" \u8FDB\u5EA6\u6761\u90E8\u5206  progress bar"),
          vue.createElementVNode("view", { class: "progress-bar" }, [
            vue.createElementVNode("text", { class: "start-time" }, vue.toDisplayString(startTime.value), 1),
            vue.createElementVNode("view", { class: "progress" }, [
              vue.createElementVNode("view", { class: "current-progress" }, [
                vue.createElementVNode("view", { class: "circle" })
              ])
            ]),
            vue.createElementVNode("text", { class: "end-time" }, vue.toDisplayString(songTime.value), 1)
          ]),
          vue.createCommentVNode(" \u5E95\u90E8 "),
          vue.createElementVNode("view", { class: "detail-bottom" }, [
            vue.createElementVNode("text", { class: "iconfont icon-shunxu" }),
            vue.createElementVNode("text", {
              class: "iconfont icon-prev",
              bindtap: "changeMusic",
              id: "prev",
              onClick: songPrev
            }),
            vue.createElementVNode("text", {
              class: vue.normalizeClass(playType.value ? "play iconfont icon-zanting" : "play iconfont icon-bofang"),
              onClick: playSong
            }, null, 2),
            vue.createElementVNode("text", {
              class: "iconfont icon-next",
              bindtap: "changeMusic",
              id: "next",
              onClick: songNext
            }),
            vue.createElementVNode("text", { class: "iconfont icon-24gf-playlistHeart3" })
          ])
        ], 64);
      };
    }
  };
  var SubpagesSongDetailSongDetail = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2fccaa72"]]);
  const _sfc_main$1 = {
    setup(__props) {
      const store2 = useStore();
      const userInfo = store2.getters.userInfo;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "personalCenter" }, [
          vue.createElementVNode("view", { class: "header" }),
          vue.createElementVNode("div", { class: "userInfo" }, [
            vue.createElementVNode("image", {
              src: vue.unref(userInfo).avatarUrl
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "name" }, vue.toDisplayString(vue.unref(userInfo).nickname), 1)
          ])
        ]);
      };
    }
  };
  var SubpagesPersonalCenterPersonalCenter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1eae0712"]]);
  if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
    Promise.prototype.finally = function(callback) {
      const promise = this.constructor;
      return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      }));
    };
  }
  if (uni.restoreGlobal) {
    uni.restoreGlobal(vue__namespace, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
  }
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/play/play", PagesPlayPlay);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/attention/attention", PagesAttentionAttention);
  __definePage("pages/village/village", PagesVillageVillage);
  __definePage("subpages/login/login", SubpagesLoginLogin);
  __definePage("subpages/recommendSongs/recommendSongs", SubpagesRecommendSongsRecommendSongs);
  __definePage("subpages/songDetail/songDetail", SubpagesSongDetailSongDetail);
  __definePage("subpages/personalCenter/personalCenter", SubpagesPersonalCenterPersonalCenter);
  const _sfc_main = {};
  const login = (data2) => {
    return server({
      url: `/login/cellphone?phone=${data2.phone}&password=${data2.password}`,
      method: "GET"
    });
  };
  var app = {
    namespaced: true,
    state: {
      cookie: uni.getStorageSync("cookie") || "",
      songList: [],
      userInfo: uni.getStorageSync("userInfo") || {}
    },
    mutations: {
      setCookie(state, value) {
        state.cookie = value;
      },
      serSongList(state, value) {
        state.songList = value;
      },
      serUserInfo(state, value) {
        state.userInfo = value;
      }
    },
    actions: {
      async login({ commit }, data2) {
        const res = await login({
          phone: data2.phone * 1,
          password: data2.password
        });
        formatAppLog("log", "at store/moudle/app.js:27", res);
        if (res.code === 200) {
          commit("setCookie", res.cookie);
          commit("serUserInfo", res.profile);
          uni.setStorageSync("cookie", res.cookie);
          uni.setStorageSync("userInfo", res.profile);
          uni.switchTab({
            url: "/pages/index/index"
          });
        }
      },
      allSongList({ commit }, data2) {
        commit("serSongList", data2);
      }
    }
  };
  var getters = {
    cookie: (store2) => {
      return store2.app.cookie;
    },
    songList: (store2) => {
      return store2.app.songList;
    },
    userInfo: (store2) => {
      return store2.app.userInfo;
    }
  };
  const store = createStore({
    getters,
    modules: {
      app
    }
  });
  function createApp() {
    const app2 = vue.createVueApp(_sfc_main);
    app2.use(store);
    return {
      app: app2
    };
  }
  const __app__ = createApp().app;
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.use(uni.__vuePlugin).mount("#app");
})(Vue);
