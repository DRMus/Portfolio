import { FC, useLayoutEffect, useMemo, useRef } from "react";
import { ISkillCircleProps } from "../../interfaces";

const CircleSvg: FC<ISkillCircleProps> = (props) => {
  const gradientId = useMemo<string>(() => `gradientStyle${Math.random()}`, []);
  
  const sliderRef = useRef<SVGCircleElement>(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      if (!sliderRef.current) {
        return;
      }
      sliderRef.current.style.strokeDashoffset = `${565 - 565 * (props.percent / 100)}`;
    }, 100);
  }, [sliderRef, props.percent]);
  
  return (
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
            cx="95"
            cy="95"
            r="90"
            style={{ stroke: `url(#${gradientId})` }}
          />
          <circle
            className="circle-static"
            cx="95"
            cy="95"
            r="90"
            style={{ stroke: `url(#${gradientId})` }}
          />
        </svg>
  )
}

export default CircleSvg