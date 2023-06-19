import { useRef, FC, useContext, useEffect, useMemo, useState } from "react";
import { asyncCounter } from "../../utils/asyncCounter";

import "./AboutView.scss";
import { ISkillCircleProps, TObserverCallback } from "../../interfaces";
import CircleSvg from "./CircleSvg";
import classNames from "classnames";
import { AboutContextValues } from "../../contexts/AboutContext";

const SkillCircle: FC<ISkillCircleProps> = (props) => {
  
  const counterRef = useRef<HTMLSpanElement>(null);

  const { getSectionKey, addSectionCallBack } = useContext(AboutContextValues);

  const [isComponentInter, setIsComponentInter] = useState<boolean>(false);
  const sectionKey: number = useMemo(() => getSectionKey(), []);

  const sectionCallback: TObserverCallback = (state: boolean, intersectionRatio?: number) => {
    if (state && intersectionRatio && intersectionRatio > 0.2) {
      setIsComponentInter(true);
    }
  };

  useEffect(() => {
    addSectionCallBack(sectionCallback);
  }, []);

  const counterOperations = (count: number) => {
    if (!counterRef.current) {
      throw new Error("counterRef.current is undefined");
    }
    counterRef.current.innerHTML = `${count}%`;
  };

  useEffect(() => {
    let intervalId = -1;
    if (isComponentInter) {
      intervalId = asyncCounter(counterOperations, props.percent, { timeout: 1500, isEaseOut: true });
    }
    return () => {
      clearInterval(intervalId);
    }
  }, [isComponentInter]);

  return (
    <div data-aboutsection={sectionKey} className={classNames("flex basis-1/3 justify-center items-center", "sm:max-md:basis-1/2", "max-sm:basis-1/2")}>
      <div className="relative w-[175px] h-[175px]">
        <CircleSvg {...props} isComponentInter={isComponentInter}/>

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
