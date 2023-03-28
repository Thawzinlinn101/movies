import {
    useMemo,
    useEffect,
} from "react";
import type { ResourceKey } from "../PropsTypes";
import { useTranslation as useTranslationI18next } from 'react-i18next';
import { useTheme as useThemeApp, Theme } from "../themes";
import { BackHandler } from "react-native";
import { changeLanguage } from "i18next";

export const useTranslation = () => {
    const { t } = useTranslationI18next();
    return t;
};

export const onChangeLanguage = (lng?: string) => {
    changeLanguage(lng);
};

export const useColor = <T extends ResourceKey = {}>() => {
    const { theme } = useThemeApp();
    return theme.color as T;
};

export const useDimension = () => {
    const { theme } = useThemeApp();
    return theme.dimension;
};

export const useStyleSheet = <T extends {}>(fn: (theme: Theme) => T) => {
    const { theme } = useThemeApp();
    const ThemeAwareObject = useMemo(() => fn(theme), [fn, theme]);
    return ThemeAwareObject;
};

export const useBackHandler = (handler: () => boolean) => {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handler);

        return () => BackHandler.removeEventListener('hardwareBackPress', handler);
    }, [handler]);
};