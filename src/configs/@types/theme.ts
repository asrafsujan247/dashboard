import { ToasterProps } from "sonner";

// Define color options
export type LightColor = "slate" | "gray" | "neutral";
export type PrimaryColor =
  | "indigo"
  | "blue"
  | "green"
  | "amber"
  | "purple"
  | "rose";

export type ThemeMode = "light";
export type ThemeLayout = "main-layout";
export type CardSkin = "bordered" | "shadow";

export interface LightColorScheme {
  name: LightColor;
  [key: string]: string;
}

export interface PrimaryColorScheme {
  name: PrimaryColor;
  [key: string]: string;
}

export interface Notification {
  isExpanded: boolean;
  position: ToasterProps["position"];
  visibleToasts: number;
}

export interface ThemeConfig {
  themeMode: ThemeMode;
  themeLayout: ThemeLayout;
  cardSkin: CardSkin;
  lightColorScheme: LightColorScheme;
  primaryColorScheme: PrimaryColorScheme;
  notification: Notification;
}
