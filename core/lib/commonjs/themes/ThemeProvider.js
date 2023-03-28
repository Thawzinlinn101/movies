"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.ThemeProvider = exports.ThemeContext = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ThemeContext = /*#__PURE__*/(0, _react.createContext)({});
exports.ThemeContext = ThemeContext;
const ThemeProvider = /*#__PURE__*/(0, _react.memo)(props => {
  const {
    initial,
    children
  } = props;
  const [theme, setTheme] = (0, _react.useState)(props.initial.themeDefault);
  const SetThemeCallback = (0, _react.useCallback)(newTheme => {
    setTheme(currentTheme => {
      if (currentTheme.id === newTheme.id) {
        return currentTheme;
      }
      return newTheme;
    });
  }, []);
  const toggleThemeCallback = (0, _react.useCallback)(id => {
    setTheme(currentTheme => {
      if (currentTheme.id === id) {
        return currentTheme;
      } else {
        let newTheme = currentTheme;
        Object.entries(initial.resources).forEach(_ref => {
          let [key, value] = _ref;
          if (key === id) {
            newTheme = value;
            return;
          }
        });
        return newTheme;
      }
    });
  }, [initial.resources]);
  const memoizedValue = (0, _react.useMemo)(() => {
    const value = {
      theme,
      setTheme: SetThemeCallback,
      changeTheme: toggleThemeCallback
    };
    return value;
  }, [theme, SetThemeCallback, toggleThemeCallback]);
  return /*#__PURE__*/_react.default.createElement(ThemeContext.Provider, {
    value: memoizedValue
  }, children);
});
exports.ThemeProvider = ThemeProvider;
const useTheme = () => _react.default.useContext(ThemeContext);
exports.useTheme = useTheme;
//# sourceMappingURL=ThemeProvider.js.map