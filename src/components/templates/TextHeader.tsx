import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  deleteColor?: boolean;
}

const TextHeader: FC<Props> = ({ children, className, deleteColor, ...props }) => {
  return (
    <h1
      className={classNames(
        "font-bold text-4xl",
        { "text-portfolio-purple": !deleteColor },
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default TextHeader;
