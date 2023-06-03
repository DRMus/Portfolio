import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes, forwardRef } from "react";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const PageSection = forwardRef<HTMLElement, Props>(({ className, children, ...props }, ref) => {
  return (
    <article
      ref={ref}
      className={classNames("w-portfolio-main min-h-portfolio-block my-0 mx-auto pt-[200px]", className)}
      {...props}
    >
      {children}
    </article>
  );
});

export default PageSection;
