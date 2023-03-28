import React, { Fragment } from 'react';
import { StatusBar, View } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from './themes';
import { DeviceUtils } from './utils';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
export const MobileProvider = props => {
  const {
    children,
    i18next,
    theme,
    backgroundColor = 'green'
  } = props;
  if (!children) {
    return null;
  }
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    initial: theme
  }, /*#__PURE__*/React.createElement(I18nextProvider, {
    i18n: i18next
  }, /*#__PURE__*/React.createElement(SafeAreaProvider, {
    style: {
      backgroundColor: backgroundColor
    },
    initialMetrics: initialWindowMetrics
  }, /*#__PURE__*/React.createElement(StatusBar, {
    translucent: true,
    backgroundColor: 'transparent'
  }), /*#__PURE__*/React.createElement(View, {
    style: {
      flexGrow: 1
    },
    onStartShouldSetResponder: DeviceUtils.dismissKeyboard
  }, /*#__PURE__*/React.createElement(Fragment, null, children)))));
};
export default MobileProvider;
//# sourceMappingURL=MobileProvider.js.map