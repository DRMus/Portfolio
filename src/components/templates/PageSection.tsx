import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes, forwardRef } from "react";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const PageSection = forwardRef<HTMLElement, Props>(({ className, children, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={classNames("w-portfolio-main min-h-portfolio-block my-0 mx-auto", className)}
      {...props}
    >
      {children}
    </section>
  );
});

export default PageSection;
