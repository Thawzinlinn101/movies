import React, { memo, useMemo, createContext, useCallback, useState } from 'react';
export const ThemeContext = /*#__PURE__*/createContext({});
export const ThemeProvider = /*#__PURE__*/memo(props => {
  const {
    initial,
    children
  } = props;
  const [theme, setTheme] = useState(props.initial.themeDefault);
  const SetThemeCallback = useCallback(newTheme => {
    setTheme(currentTheme => {
      if (currentTheme.id === newTheme.id) {
        return currentTheme;
      }
      return newTheme;
    });
  }, []);
  const toggleThemeCallback = useCallback(id => {
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
  const memoizedValue = useMemo(() => {
    const value = {
      theme,
      setTheme: SetThemeCallback,
      changeTheme: toggleThemeCallback
    };
    return value;
  }, [theme, SetThemeCallback, toggleThemeCallback]);
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: memoizedValue
  }, children);
});
export const useTheme = () => React.useContext(ThemeContext);
//# sourceMappingURL=ThemeProvider.js.map