import { RefObject } from "react";


export interface IPosition {
  x: number;
  y: number;
}

export type TOutletContext = [RefObject<HtmlElement>]

export type TCounterOptions = {
  timeout?: number,
  isEaseOut?: boolean,
}
  

