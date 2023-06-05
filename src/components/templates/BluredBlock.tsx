import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import { useNavigationType } from "react-router";
import { IPosition } from "../../interfaces";
import classNames from "classnames";

type THoverSize = "1x" | "2x" | "3x";

function changeHoverSize(hoverSize: THoverSize | undefined): string {
  switch (hoverSize) {
    case "1x":
      return "w-24 h-24";
    case "2x":
      return "w-32 h-32";
    case "3x":
      return "w-52 h-52";
    default:
      return "w-52 h-52";
  }
}

function changeHoverLight(hoverLight: THoverSize | undefined): string {
  switch (hoverLight) {
    case "1x":
      return "bg-gray-300/10";
    case "2x":
      return "bg-gray-300/20";
    case "3x":
      return "bg-gray-300/30";
    default:
      return "bg-gray-300/10";
  }
}

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  hoverSize?: THoverSize;
  hoverLight?: THoverSize;
}

const BluredBlock: FC<Props> = ({
  children,
  className,
  hoverSize,
  hoverLight,
  onMouseMove,
  onMouseLeave,
  ...props
}) => {
  const navigationType = useNavigationType();

  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<IPosition>({ x: 0, y: 0 });

  const handlerMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent> | any) => {
    if (!isMouseOver) {
      setIsMouseOver(true);
    }
    setMousePosition({ x: event.nativeEvent.layerX, y: event.nativeEvent.layerY });
    onMouseMove && onMouseMove(event);
  };

  const handlerMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsMouseOver(false);
    onMouseLeave && onMouseLeave(event);
  };

  const componentClassNames = {
    parent: classNames(
      "group relative overflow-hidden h-full w-full rounded-lg cursor-pointer bg-gray-500/30 border-4 border-gray-500/30 transition-all duration-[350ms]",
      { showNavBar: navigationType === "POP" },
      className
    ),
    mouseHover: classNames(
      "mouse absolute z-[-1] rounded-full -translate-x-1/2 -translate-y-1/2",
      changeHoverSize(hoverSize),
      changeHoverLight(hoverLight)
    ),
    section: classNames("h-full w-full backdrop-blur-2xl"),
  };

  return (
    <div
      className={componentClassNames.parent}
      onMouseMove={handlerMouseMove}
      onMouseLeave={handlerMouseLeave}
    >
      {isMouseOver && (
        <div
          className={componentClassNames.mouseHover}
          style={{ top: mousePosition.y, left: mousePosition.x }}
        ></div>
      )}
      <div className={componentClassNames.section} {...props}>
        {children}
      </div>
    </div>
  );
};

export default BluredBlock;
