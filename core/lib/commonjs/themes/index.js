"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ThemeProvider = require("./ThemeProvider");
Object.keys(_ThemeProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ThemeProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ThemeProvider[key];
    }
  });
});
var _Types = require("./Types");
Object.keys(_Types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Types[key];
    }
  });
});
//# sourceMappingURL=index.js.map