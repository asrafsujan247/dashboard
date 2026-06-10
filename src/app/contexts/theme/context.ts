import { createSafeContext } from "@/utils/createSafeContext";
import { ThemeConfig } from "@/configs/@types/theme";

export type ThemeContextValue = ThemeConfig;

export const [ThemeContext, useThemeContext] = createSafeContext<ThemeContextValue>(
  "useThemeContext must be used within ThemeProvider"
);
