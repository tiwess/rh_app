/* eslint-disable @typescript-eslint/no-empty-object-type */
import { theme } from "./theme";
export type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
