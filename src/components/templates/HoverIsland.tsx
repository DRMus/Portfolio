import classNames from "classnames";
import { HTMLAttributes, forwardRef } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const HoverIsland = forwardRef<HTMLDivElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        "group transition-all duration-300",
        "hover:bg-gray-700/20 hover:backdrop-blur-sm",
        "max-lg:bg-gray-700/20 max-lg:backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export default HoverIsland;