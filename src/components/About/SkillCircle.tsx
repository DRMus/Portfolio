import { useRef, FC, useLayoutEffect, useContext } from "react";
import { asyncCounter } from "../../utils/asyncCounter";

import "./AboutView.scss";
import { ISkillCircleProps } from "../../interfaces";
import CircleSvg from "./CircleSvg";
import { SkillCircleContextValues } from "./SkillsGroup";
import classNames from "classnames";

const SkillCircle: FC<ISkillCircleProps> = (props) => {
  const { isComponentInter } = useContext(SkillCircleContextValues);
  const counterRef = useRef<HTMLSpanElement>(null);

  const counterOperations = (count: number) => {
    if (!counterRef.current) {
      throw new Error("counterRef.current is undefined");
    }
    counterRef.current.innerHTML = `${count}%`;
  };

  useLayoutEffect(() => {
    let intervalId = -1;
    if (isComponentInter) {
      intervalId = asyncCounter(counterOperations, props.percent, { timeout: 1500, isEaseOut: true });
    }
    return () => {
      clearInterval(intervalId);
    }
  }, [isComponentInter]);

  return (
    <div className={classNames("flex basis-1/3 justify-center items-center", "sm:max-md:basis-1/2")}>
      <div className="relative w-[175px] h-[175px]">
        <CircleSvg {...props} />

        <div
          className="absolute flex flex-col gap-1 text-center text-xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ color: props.gradientColorStop || "" }}
        >
          <span>{props.name}</span>
          <span ref={counterRef}>0%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillCircle;
