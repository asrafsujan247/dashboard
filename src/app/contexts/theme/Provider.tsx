import { ReactNode, useLayoutEffect } from "react";

// Local Imports
import { ThemeContext, type ThemeContextValue } from "./context";
import { defaultTheme } from "@/configs/theme";

// ----------------------------------------------------------------------

const _html = document?.documentElement;

const isDark = defaultTheme.themeMode === "dark";

const contextValue: ThemeContextValue = {
  ...defaultTheme,
  isDark,
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    if (isDark) _html?.classList.add("dark");
    else _html?.classList.remove("dark");

    _html!.dataset.themeLight = defaultTheme.lightColorScheme.name;
    _html!.dataset.themeDark = defaultTheme.darkColorScheme.name;
    _html!.dataset.themePrimary = defaultTheme.primaryColorScheme.name;
    _html!.dataset.cardSkin = defaultTheme.cardSkin;

    if (document) document.body.dataset.layout = defaultTheme.themeLayout;
  }, []);

  if (!children) return null;

  return <ThemeContext value={contextValue}>{children}</ThemeContext>;
}
