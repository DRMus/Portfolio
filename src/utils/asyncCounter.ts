import { TCounterOptions } from "../interfaces";

const initialCounterOptions: TCounterOptions = {
  timeout: 50,
  isEaseOut: false,
};

/**
 * 
 * @param operationFunc 
 * @param maxCount 
 * @param options 
 * @param startNumber 
 * @returns setInterval id 
 */

export function asyncCounter(
  operationFunc: (count: number) => void,
  maxCount: number,
  options?: TCounterOptions,
  startNumber: number = 0
): number {
  let currentOptions = options
    ? Object.assign(initialCounterOptions, options)
    : initialCounterOptions;

  let delay = currentOptions.timeout as number;
  delay /= maxCount;

  let count = startNumber;

  let inter = setInterval(() => {
    count += 1;
    
    operationFunc(count);

    if (count + 1 > maxCount) {
      clearInterval(inter);
    }
  }, delay);

  return inter
}
