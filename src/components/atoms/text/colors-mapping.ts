import { theme } from "./themes";

export type TColors =
  | "yellow"
  | "green"
  | "white"
  | "black"

export const colorsMapping = (color: TColors) => {
  const colorsMap = {
    yellow: theme.colors.yellow,
    green: theme.colors.green,
    white: theme.colors.white,
    black: theme.colors.black,
  };

  return colorsMap[color];
};
