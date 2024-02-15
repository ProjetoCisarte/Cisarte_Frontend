import { CustomSpan } from "./text-styles";
import { IText } from "./text-types";

export const Text = ({
  color,
  children,
  transitionTiming,
}: IText) => {
  return (
    <CustomSpan
      transitionTiming={transitionTiming}
      color={color}
    >
      {children}
    </CustomSpan>
  );
};