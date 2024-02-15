import styled, { css } from "styled-components";
import { colorsMapping } from "./colors-mapping";
import { IStylesProps } from "./text-types";


export const CustomSpan = styled.span<IStylesProps>`
  color: ${({ color }) => colorsMapping(color)};
  font-family: ${({ theme }) => theme.Font.font};

  ${({ transitionTiming }) =>
    transitionTiming &&
    css`
      transition: ${transitionTiming}s;
    `}
`;