import { RefObject, SVGAttributes, RefAttributes } from "react";

export interface IPosition {
  x: number;
  y: number;
}

export type TOutletContext = [RefObject<HtmlElement>];

export type TCounterOptions = {
  timeout?: number;
  isEaseOut?: boolean;
};
export type TObserverCallback = (state: boolean, intersectionRatio?: number) => void;

export interface IFAIconProps
  extends BackwardCompatibleOmit<SVGAttributes<SVGSVGElement>, "children" | "mask" | "transform">,
    RefAttributes<SVGSVGElement> {
  mask?: IconProp;
  maskId?: string;
  className?: string;
  color?: string;
  spin?: boolean;
  spinPulse?: boolean;
  spinReverse?: boolean;
  pulse?: boolean;
  beat?: boolean;
  fade?: boolean;
  beatFade?: boolean;
  bounce?: boolean;
  shake?: boolean;
  border?: boolean;
  fixedWidth?: boolean;
  inverse?: boolean;
  listItem?: boolean;
  flip?: FlipProp;
  size?: SizeProp;
  pull?: PullProp;
  rotation?: RotateProp;
  transform?: string | Transform;
  symbol?: FaSymbol;
  style?: CSSProperties;
  tabIndex?: number;
  title?: string;
  titleId?: string;
  swapOpacity?: boolean;
}

export interface ISkillCircleProps {
  percent: number;
  name?: string;
  gradientColorStart?: string;
  gradientColorStop?: string;
}

export type TObserverAction = (
  element: any,
  changes: IntersectionObserverEntry,
  elementIndex: number
) => void;
