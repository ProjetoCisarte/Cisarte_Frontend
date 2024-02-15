import { ReactNode } from "react";
import { TColors } from "./colors-mapping";


export interface IText {
    color: TColors;
    children: ReactNode;
    transitionTiming?: number;
  }
  
  export interface IStylesProps {
    color: TColors;
    transitionTiming?: number;
  }