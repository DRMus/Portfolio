import classNames from "classnames";
import { DetailedHTMLProps, FC, HTMLAttributes, forwardRef } from "react";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const PageSection = forwardRef<HTMLElement, Props>(({ className, children, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={classNames("w-portfolio-main my-0 mx-auto", className)}
      {...props}
    >
      {children}
    </section>
  );
});

export default PageSection;
