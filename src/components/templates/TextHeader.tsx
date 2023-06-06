import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  deleteStyles?: boolean;
}

const TextHeader: FC<Props> = ({ children, className, deleteStyles, ...props }) => {
  return (
    <h1
      className={classNames(
        "font-bold text-4xl",
        { "text-portfolio-purple text-4xl": !deleteStyles },
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default TextHeader;
