import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  deleteColor?: boolean;
}

const TextParagraph: FC<Props> = ({ children, className, deleteColor, ...props }) => {
  return (
    <p
      className={classNames(
        "text-2xl font-medium leading-normal",
        { "text-portfolio-white": !deleteColor },
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default TextParagraph;
