import classNames from "classnames";
import { FC, HTMLAttributes } from "react";
import { Link, To } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLElement> {
  to: To;
}

const FooterMenuItem: FC<Props> = ({ children, className, ...props }) => {
  return (
    <Link
      className={classNames(
        "font-bold text-portfolio-white/30 text-2xl transition-all duration-300",
        "group-hover:text-portfolio-white/70 hover:!text-portfolio-purple hover:!text-3xl",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default FooterMenuItem;
