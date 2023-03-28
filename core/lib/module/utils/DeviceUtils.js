import { Dimensions, Keyboard, LayoutAnimation, NativeModules, Platform, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';
const {
  StatusBarManager,
  AndroidSoftInputMode
} = NativeModules;
export const DeviceUtils = {
  getDeviceDimension: () => {
    return Dimensions.get('window');
  },
  getStatusBarHeight: () => {
    return StatusBarManager.HEIGHT || StatusBar.currentHeight;
  },
  getAndroidAssetUrl: () => {
    return 'file:///android_asset/';
  },
  isIOS: () => {
    return Platform.OS === 'ios';
  },
  isAndroid: () => {
    return Platform.OS === 'android';
  },
  isTablet: () => {
    return DeviceInfo.isTablet();
  },
  isLandscape: () => {
    return DeviceInfo.isLandscapeSync();
  },
  dismissKeyboard: () => {
    Keyboard.dismiss();
    return false;
  },
  runWithLayoutAnimation: callback => {
    LayoutAnimation.configureNext({
      duration: 200,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity
      },
      delete: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity
      }
    }, () => callback());
  },
  setAndroidInputMode: type => {
    Platform.OS === 'android' && AndroidSoftInputMode.set(type);
  }
};
export default DeviceUtils;
//# sourceMappingURL=DeviceUtils.js.map