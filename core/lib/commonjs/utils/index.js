"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  convertJsonToFormData: true,
  isNumber: true
};
exports.convertJsonToFormData = convertJsonToFormData;
exports.isNumber = void 0;
var _DeviceUtils = require("./DeviceUtils");
Object.keys(_DeviceUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _DeviceUtils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DeviceUtils[key];
    }
  });
});
var _ScaleUtils = require("./ScaleUtils");
Object.keys(_ScaleUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ScaleUtils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ScaleUtils[key];
    }
  });
});
var _MergeObject = require("./MergeObject");
Object.keys(_MergeObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MergeObject[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MergeObject[key];
    }
  });
});
function convertJsonToFormData(data) {
  const formData = new FormData();
  for (const i in data) formData.append(i, data[i]);
  return formData;
}
const isNumber = value => {
  return value != null && value !== '' && !isNaN(Number(value.toString()));
};
exports.isNumber = isNumber;
//# sourceMappingURL=index.js.map