"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontSizeCcale = fontSizeCcale;
exports.vs = exports.verticalScale = exports.scale = exports.s = exports.mvs = exports.ms = exports.moderateVerticalScale = exports.moderateScale = exports.moderateNonStandardScale = exports.mnss = exports.fs = void 0;
var _DeviceUtils = require("./DeviceUtils");
var _ = require(".");
var _reactNative = require("react-native");
var _reactNativeConfig = _interopRequireDefault(require("react-native-config"));
var _reactNativeDeviceInfo = _interopRequireDefault(require("react-native-device-info"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  width,
  height
} = _reactNative.Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];
//Default guideline sizes are based on standard ~5" screen mobile device
const guidBaseWidthPhone = Number(_reactNativeConfig.default.SIZE_BASE_WIDTH_PHONE) || 360;
const guidBaseHeightPhone = Number(_reactNativeConfig.default.SIZE_BASE_HEIGHT_PHONE) || 720;
const guidBaseWidthTablet = Number(_reactNativeConfig.default.SIZE_BASE_WIDTH_TABLET) || 768;
const guidBaseHeightTablet = Number(_reactNativeConfig.default.SIZE_BASE_HEIGHT_TABLET) || 1024;
const baseWidth = _DeviceUtils.DeviceUtils.isTablet() ? guidBaseWidthTablet : guidBaseWidthPhone;
const baseHeight = _DeviceUtils.DeviceUtils.isTablet() ? guidBaseHeightTablet : guidBaseHeightPhone;
const scale = (sizePhone, sizeTablet) => {
  if (!sizeTablet || !(0, _.isNumber)(sizeTablet)) {
    sizeTablet = sizePhone;
  }
  const size = _DeviceUtils.DeviceUtils.isTablet() ? sizeTablet : sizePhone;
  return shortDimension / baseWidth * size;
};
exports.scale = scale;
const moderateScale = function (size) {
  let factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return size + (scale(size) - size) * factor;
};
exports.moderateScale = moderateScale;
const moderateNonStandardScale = function (sizePhone, sizeTablet) {
  let factor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
  if (!sizeTablet || !(0, _.isNumber)(sizeTablet)) {
    sizeTablet = sizePhone;
  }
  const size = _DeviceUtils.DeviceUtils.isTablet() ? sizeTablet : sizePhone;
  return size + (scale(size) - size) * factor;
};
exports.moderateNonStandardScale = moderateNonStandardScale;
const verticalScale = size => longDimension / baseHeight * size;
exports.verticalScale = verticalScale;
const moderateVerticalScale = function (size) {
  let factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return size + (verticalScale(size) - size) * factor;
};
exports.moderateVerticalScale = moderateVerticalScale;
function fontSizeCcale(fontSize) {
  let standardScreenHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : baseHeight;
  const offset = width > height ? 0 : _reactNative.Platform.OS === 'ios' ? 78 : _DeviceUtils.DeviceUtils.getStatusBarHeight(); // iPhone X style SafeAreaView size in portrait
  const deviceHeight = _reactNativeDeviceInfo.default.hasNotch() || _reactNative.Platform.OS === 'android' ? longDimension - offset : longDimension;
  const heightPercent = fontSize * deviceHeight / standardScreenHeight;
  return Number(heightPercent.toFixed(2));
}
const fs = fontSizeCcale;
exports.fs = fs;
const s = scale;
exports.s = s;
const vs = verticalScale;
exports.vs = vs;
const ms = moderateScale;
exports.ms = ms;
const mnss = moderateNonStandardScale;
exports.mnss = mnss;
const mvs = moderateVerticalScale;
exports.mvs = mvs;
//# sourceMappingURL=ScaleUtils.js.map