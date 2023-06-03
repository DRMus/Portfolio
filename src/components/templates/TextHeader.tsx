import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

const TextHeader: FC<Props> = ({ children, className, ...props }) => {
  return (
    <h1 className={classNames("text-portfolio-purple font-bold text-4xl", className)} {...props}>
      {children}
    </h1>
  );
};

export default TextHeader;
