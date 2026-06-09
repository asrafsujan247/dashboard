import { createSafeContext } from "@/utils/createSafeContext";
import { ThemeConfig } from "@/configs/@types/theme";

export interface ThemeContextValue extends ThemeConfig {
  isDark: boolean;
}

export const [ThemeContext, useThemeContext] =
  createSafeContext<ThemeContextValue>(
    "useThemeContext must be used within ThemeProvider"
  );
