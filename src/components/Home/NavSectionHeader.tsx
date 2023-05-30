import classNames from "classnames";
import { FC, HTMLAttributes, useMemo } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  
}

const NavSectionHeader: FC<Props> = ({ className, children, ...props }) => {
  const componentClassNames = useMemo(
    () => ({
      parent: classNames(
        "flex items-center justify-center w-full h-full select-none text-gray-500 text-4xl font-bold transition-colors duration-[350ms] group-hover:text-portfolio-purple",
        className
      ),
      header:
        "after:transition-all after:delay-[100ms] after:content-[''] after:mt-1 after:block after:bg-gray-500 after:w-0 after:h-1 group-hover:after:w-full group-hover:after:bg-portfolio-purple",
    }),
    [className]
  );
  return (
    <div className={componentClassNames.parent} {...props}>
      <h1 className={componentClassNames.header}>{children}</h1>
    </div>
  );
};

export default NavSectionHeader;
