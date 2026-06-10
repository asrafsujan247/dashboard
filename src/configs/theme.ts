import { colors } from "@/constants/colors";
import {
  LightColor,
  PrimaryColor,
  ThemeConfig,
} from "./@types/theme";

const DEFAULT_LIGHT_COLOR: LightColor = "slate";
const DEFAULT_PRIMARY_COLOR: PrimaryColor = "amber";

// Default theme configuration
export const defaultTheme: ThemeConfig = {
  themeMode: "light",
  themeLayout: "main-layout",
  cardSkin: "bordered",

  lightColorScheme: {
    name: DEFAULT_LIGHT_COLOR,
    ...colors[DEFAULT_LIGHT_COLOR],
  },

  primaryColorScheme: {
    name: DEFAULT_PRIMARY_COLOR,
    ...colors[DEFAULT_PRIMARY_COLOR],
  },

  notification: {
    isExpanded: false,
    position: "top-right",
    visibleToasts: 2,
  },
};
