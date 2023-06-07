import { useRef, useEffect, FC, useState, useMemo, useLayoutEffect } from "react";
import { asyncCounter } from "../../utils/asyncCounter";
import TextParagraph from "../templates/TextParagraph";

import "./AboutView.scss";

interface Props {
  percent: number;
  index: number;
  gradientColorStart?: string;
  gradientColorStop?: string;
}

const SkillCircle: FC<Props> = (props) => {
  const gradientId = useMemo<string>(() => `gradientStyle${props.index}`, []);

  const counterRef = useRef<HTMLSpanElement>(null);
  const sliderRef = useRef<SVGCircleElement>(null);

  const counterOperations = (count: number) => {
    if (!counterRef.current) {
      throw new Error("counterRef.current is undefined");
    }

    counterRef.current.innerHTML = `${count}%`;
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      if (!sliderRef.current) {
        return;
      }
      sliderRef.current.style.strokeDashoffset = `${503 - 503 * (props.percent / 100)}`;
    },100);
    asyncCounter(counterOperations, props.percent, { timeout: 1500, isEaseOut: true });
  }, [sliderRef]);

  return (
    <div className="relative w-[180px] h-[180px]">
      <span ref={counterRef} className="absolute text-portfolio-white font-medium">
        0%
      </span>
      <svg className="circle-bg">
        <defs>
          <linearGradient id={gradientId}>
            <stop offset="0%" stopColor={props.gradientColorStart || "#565656"} />
            <stop offset="100%" stopColor={props.gradientColorStop || "#b7b5b5"} />
          </linearGradient>
        </defs>
        <circle
          ref={sliderRef}
          className="circle"
          cx="90"
          cy="90"
          r="80"
          style={{ stroke: `url(#${gradientId})` }}
        />
      </svg>
    </div>
  );
};

export default SkillCircle;
