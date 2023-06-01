import classNames from "classnames";
import { FC, HTMLAttributes, useContext, useMemo, useState } from "react";
import { IPosition } from "../../interfaces";
import { Link } from "react-router-dom";
import { LOCATION_STATES } from "../../utils/constants";
import { MainContextValues } from "../../contexts/MainContext";

interface Props extends HTMLAttributes<HTMLElement> {
  page: string;
}

const NavSection: FC<Props> = ({
  children,
  className,
  page,
  onMouseMove,
  onMouseLeave,
  onClick,
  ...props
}) => {
  const { isScrollAnimationPlaying } = useContext(MainContextValues);

  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<IPosition>({ x: 0, y: 0 });

  const handlerMouseMove = (event: React.MouseEvent<HTMLElement, MouseEvent> | any) => {
    if (!isMouseOver) {
      setIsMouseOver(true);
    }
    setMousePosition({ x: event.nativeEvent.layerX, y: event.nativeEvent.layerY });
    onMouseMove && onMouseMove(event);
  };

  const handlerMouseLeave = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setIsMouseOver(false);
    onMouseLeave && onMouseLeave(event);
  };

  const handlerMouseClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (isScrollAnimationPlaying) {
      event.preventDefault();
    }
    onClick && onClick(event);
  };

  const componentClassNames = useMemo(
    () => ({
      parent:
        "relative overflow-hidden grow h-full w-full rounded-lg cursor-pointer transition-all duration-[350ms] hover:shadow-portfolio-purple",
      mouseHover:
        "mouse absolute z-[-1] bg-gray-300/10 w-52 h-52 rounded-full -translate-x-1/2 -translate-y-1/2",
      section: classNames(
        "group h-full w-full rounded-lg border-4 border-gray-500/30 bg-gray-500/30 transition-colors duration-[350ms] backdrop-blur-2xl",
        "hover:border-portfolio-purple/50 hover:bg-portfolio-purple/20",
        className
      ),
    }),
    [className]
  );

  return (
    <Link
      to={page}
      state={LOCATION_STATES.BY_NAV_BAR}
      className={componentClassNames.parent}
      onMouseMove={handlerMouseMove}
      onMouseLeave={handlerMouseLeave}
      onClick={handlerMouseClick}
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
    </Link>
  );
};

export default NavSection;
