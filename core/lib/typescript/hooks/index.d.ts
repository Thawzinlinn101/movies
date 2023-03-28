import type { ResourceKey } from "../PropsTypes";
import { Theme } from "../themes";
export declare const useTranslation: () => import("i18next").TFunction<"translation", undefined, "translation">;
export declare const onChangeLanguage: (lng?: string) => void;
export declare const useColor: <T extends ResourceKey = {}>() => T;
export declare const useDimension: () => ResourceKey;
export declare const useStyleSheet: <T extends {}>(fn: (theme: Theme) => T) => T;
export declare const useBackHandler: (handler: () => boolean) => void;
//# sourceMappingURL=index.d.ts.map