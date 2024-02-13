import styled, { css } from "styled-components";
import { colorsMapping } from "../text/colorsMapping";
import { IStylesProps } from "../text/textTypes";


export const CustomSpan = styled.span<IStylesProps>`
  color: ${({ color }) => colorsMapping(color)};
  font-family: ${({ theme }) => theme.Font.font};

  ${({ transitionTiming }) =>
    transitionTiming &&
    css`
      transition: ${transitionTiming}s;
    `}
`;