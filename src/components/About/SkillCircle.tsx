import { useRef, FC, useLayoutEffect, useContext, useEffect } from "react";
import { asyncCounter } from "../../utils/asyncCounter";

import "./AboutView.scss";
import { ISkillCircleProps } from "../../interfaces";
import CircleSvg from "./CircleSvg";
import { SkillCircleContextValues } from "./SkillsGroup";

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
    if (isComponentInter) {
      asyncCounter(counterOperations, props.percent, { timeout: 1500, isEaseOut: true });
    }
  }, [isComponentInter]);

  return (
    <div className="flex basis-1/3 justify-center">
      <div className="relative w-[190px] h-[190px]">
        <CircleSvg {...props} />

        <div
          className="absolute flex flex-col gap-1 text-center text-2xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
