import classNames from "classnames";
import { HTMLAttributes, forwardRef } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  deleteColor?: boolean;
  deleteFont?: boolean;
}

const TextParagraph = forwardRef<HTMLParagraphElement, Props>(
  ({ children, className, deleteColor, deleteFont, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={classNames(
          "font-medium leading-normal",
          { "text-portfolio-white": !deleteColor },
          { "text-2xl": !deleteFont },
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

export default TextParagraph;
