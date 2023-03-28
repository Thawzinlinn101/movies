"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DeviceUtils = void 0;
var _reactNative = require("react-native");
var _reactNativeDeviceInfo = _interopRequireDefault(require("react-native-device-info"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  StatusBarManager,
  AndroidSoftInputMode
} = _reactNative.NativeModules;
const DeviceUtils = {
  getDeviceDimension: () => {
    return _reactNative.Dimensions.get('window');
  },
  getStatusBarHeight: () => {
    return StatusBarManager.HEIGHT || _reactNative.StatusBar.currentHeight;
  },
  getAndroidAssetUrl: () => {
    return 'file:///android_asset/';
  },
  isIOS: () => {
    return _reactNative.Platform.OS === 'ios';
  },
  isAndroid: () => {
    return _reactNative.Platform.OS === 'android';
  },
  isTablet: () => {
    return _reactNativeDeviceInfo.default.isTablet();
  },
  isLandscape: () => {
    return _reactNativeDeviceInfo.default.isLandscapeSync();
  },
  dismissKeyboard: () => {
    _reactNative.Keyboard.dismiss();
    return false;
  },
  runWithLayoutAnimation: callback => {
    _reactNative.LayoutAnimation.configureNext({
      duration: 200,
      create: {
        type: _reactNative.LayoutAnimation.Types.easeInEaseOut,
        property: _reactNative.LayoutAnimation.Properties.opacity
      },
      update: {
        type: _reactNative.LayoutAnimation.Types.easeInEaseOut,
        property: _reactNative.LayoutAnimation.Properties.opacity
      },
      delete: {
        type: _reactNative.LayoutAnimation.Types.easeInEaseOut,
        property: _reactNative.LayoutAnimation.Properties.opacity
      }
    }, () => callback());
  },
  setAndroidInputMode: type => {
    _reactNative.Platform.OS === 'android' && AndroidSoftInputMode.set(type);
  }
};
exports.DeviceUtils = DeviceUtils;
var _default = DeviceUtils;
exports.default = _default;
//# sourceMappingURL=DeviceUtils.js.map