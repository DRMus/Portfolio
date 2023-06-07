import { TCounterOptions } from "../interfaces";

const initialCounterOptions: TCounterOptions = {
  timeout: 50,
  isEaseOut: false,
};

export function asyncCounter(
  operationFunc: (count: number) => void,
  maxCount: number,
  options?: TCounterOptions,
  startNumber: number = 0
) {
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
}
