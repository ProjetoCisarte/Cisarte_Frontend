import { CustomSpan } from "../text/textStyles";
import { IText } from "./textTypes";

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