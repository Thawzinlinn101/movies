"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslation = exports.useStyleSheet = exports.useDimension = exports.useColor = exports.useBackHandler = exports.onChangeLanguage = void 0;
var _react = require("react");
var _reactI18next = require("react-i18next");
var _themes = require("../themes");
var _reactNative = require("react-native");
var _i18next = require("i18next");
const useTranslation = () => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  return t;
};
exports.useTranslation = useTranslation;
const onChangeLanguage = lng => {
  (0, _i18next.changeLanguage)(lng);
};
exports.onChangeLanguage = onChangeLanguage;
const useColor = () => {
  const {
    theme
  } = (0, _themes.useTheme)();
  return theme.color;
};
exports.useColor = useColor;
const useDimension = () => {
  const {
    theme
  } = (0, _themes.useTheme)();
  return theme.dimension;
};
exports.useDimension = useDimension;
const useStyleSheet = fn => {
  const {
    theme
  } = (0, _themes.useTheme)();
  const ThemeAwareObject = (0, _react.useMemo)(() => fn(theme), [fn, theme]);
  return ThemeAwareObject;
};
exports.useStyleSheet = useStyleSheet;
const useBackHandler = handler => {
  (0, _react.useEffect)(() => {
    _reactNative.BackHandler.addEventListener('hardwareBackPress', handler);
    return () => _reactNative.BackHandler.removeEventListener('hardwareBackPress', handler);
  }, [handler]);
};
exports.useBackHandler = useBackHandler;
//# sourceMappingURL=index.js.map