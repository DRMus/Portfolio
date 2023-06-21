import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes, ReactNode, forwardRef } from "react";
import TextHeader from "./TextHeader";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  header?: ReactNode;
}

const PageSection = forwardRef<HTMLElement, Props>(
  ({ className, children, header, ...props }, ref) => {
    return (
      <article
        ref={ref}
        className={classNames(
          "max-w-portfolio-main min-h-portfolio-block my-0 mx-auto pt-[200px] pb-[100px] px-[20px]",
          "md:max-lg:pt-[100px] md:max-lg:pb-[100px]",
          "sm:max-md:pt-[100px] sm:max-md:pb-[100px]",
          "max-sm:pt-[80px] max-sm:pb-[80px]",
          className
        )}
        {...props}
      >
        {header && (
          <div className={classNames("mb-32", "max-lg:hidden")}>
            <TextHeader className="text-5xl ">{header}</TextHeader>
          </div>
        )}
        {children}
      </article>
    );
  }
);

export default PageSection;
