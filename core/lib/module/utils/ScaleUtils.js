import { DeviceUtils } from './DeviceUtils';
import { isNumber } from '.';
import { Dimensions, Platform } from 'react-native';
import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';
const {
  width,
  height
} = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];
//Default guideline sizes are based on standard ~5" screen mobile device
const guidBaseWidthPhone = Number(Config.SIZE_BASE_WIDTH_PHONE) || 360;
const guidBaseHeightPhone = Number(Config.SIZE_BASE_HEIGHT_PHONE) || 720;
const guidBaseWidthTablet = Number(Config.SIZE_BASE_WIDTH_TABLET) || 768;
const guidBaseHeightTablet = Number(Config.SIZE_BASE_HEIGHT_TABLET) || 1024;
const baseWidth = DeviceUtils.isTablet() ? guidBaseWidthTablet : guidBaseWidthPhone;
const baseHeight = DeviceUtils.isTablet() ? guidBaseHeightTablet : guidBaseHeightPhone;
export const scale = (sizePhone, sizeTablet) => {
  if (!sizeTablet || !isNumber(sizeTablet)) {
    sizeTablet = sizePhone;
  }
  const size = DeviceUtils.isTablet() ? sizeTablet : sizePhone;
  return shortDimension / baseWidth * size;
};
export const moderateScale = function (size) {
  let factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return size + (scale(size) - size) * factor;
};
export const moderateNonStandardScale = function (sizePhone, sizeTablet) {
  let factor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
  if (!sizeTablet || !isNumber(sizeTablet)) {
    sizeTablet = sizePhone;
  }
  const size = DeviceUtils.isTablet() ? sizeTablet : sizePhone;
  return size + (scale(size) - size) * factor;
};
export const verticalScale = size => longDimension / baseHeight * size;
export const moderateVerticalScale = function (size) {
  let factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return size + (verticalScale(size) - size) * factor;
};
export function fontSizeCcale(fontSize) {
  let standardScreenHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : baseHeight;
  const offset = width > height ? 0 : Platform.OS === 'ios' ? 78 : DeviceUtils.getStatusBarHeight(); // iPhone X style SafeAreaView size in portrait
  const deviceHeight = DeviceInfo.hasNotch() || Platform.OS === 'android' ? longDimension - offset : longDimension;
  const heightPercent = fontSize * deviceHeight / standardScreenHeight;
  return Number(heightPercent.toFixed(2));
}
export const fs = fontSizeCcale;
export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mnss = moderateNonStandardScale;
export const mvs = moderateVerticalScale;
//# sourceMappingURL=ScaleUtils.js.map