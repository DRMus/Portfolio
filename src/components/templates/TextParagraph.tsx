import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {}

const TextParagraph: FC<Props> = ({ children, className, ...props }) => {
  return (
    <p className={classNames("text-2xl text-portfolio-white font-medium leading-normal", className)} {...props}>
      {children}
    </p>
  );
};

export default TextParagraph;
