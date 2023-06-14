import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const HoverIsland: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div
      className={classNames(
        "group transition-all duration-300",
        "hover:bg-gray-700/20 hover:backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default HoverIsland;
