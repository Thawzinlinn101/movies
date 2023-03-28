type AndroidSoftInputModeType = 'resize' | 'pan';
export declare const DeviceUtils: {
    getDeviceDimension: () => import("react-native").ScaledSize;
    getStatusBarHeight: () => any;
    getAndroidAssetUrl: () => string;
    isIOS: () => boolean;
    isAndroid: () => boolean;
    isTablet: () => boolean;
    isLandscape: () => boolean;
    dismissKeyboard: () => boolean;
    runWithLayoutAnimation: (callback: () => void) => void;
    setAndroidInputMode: (type?: AndroidSoftInputModeType) => void;
};
export default DeviceUtils;
//# sourceMappingURL=DeviceUtils.d.ts.map