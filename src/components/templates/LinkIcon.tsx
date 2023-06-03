import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { FC, AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconProp,
  size?: SizeProp
}

const LinkIcon: FC<Props> = ({ children, className, icon, size, target, ...props }) => {
  return (
    <a
      className={classNames(
        "text-slate-200 transition-colors duration-300 hover:text-portfolio-purple-light",
        className
      )}
      target={target ? target : "_blank"}
      {...props}
    >
      <FontAwesomeIcon icon={icon} size={size ? size : "2xl"} />
    </a>
  );
};

export default LinkIcon;
