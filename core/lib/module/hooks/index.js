import { useMemo, useEffect } from "react";
import { useTranslation as useTranslationI18next } from 'react-i18next';
import { useTheme as useThemeApp } from "../themes";
import { BackHandler } from "react-native";
import { changeLanguage } from "i18next";
export const useTranslation = () => {
  const {
    t
  } = useTranslationI18next();
  return t;
};
export const onChangeLanguage = lng => {
  changeLanguage(lng);
};
export const useColor = () => {
  const {
    theme
  } = useThemeApp();
  return theme.color;
};
export const useDimension = () => {
  const {
    theme
  } = useThemeApp();
  return theme.dimension;
};
export const useStyleSheet = fn => {
  const {
    theme
  } = useThemeApp();
  const ThemeAwareObject = useMemo(() => fn(theme), [fn, theme]);
  return ThemeAwareObject;
};
export const useBackHandler = handler => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);
    return () => BackHandler.removeEventListener('hardwareBackPress', handler);
  }, [handler]);
};
//# sourceMappingURL=index.js.map