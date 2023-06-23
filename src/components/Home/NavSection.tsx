import { FC, HTMLAttributes, useContext } from "react";
import { Link } from "react-router-dom";
import { LOCATION_STATES } from "../../utils/constants";
import { MainContextValues } from "../../contexts/MainContext";

import "./HomeView.scss";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLElement> {
  page: string;
}

const NavSection: FC<Props> = ({ children, className, page, onClick, ...props }) => {
  const { isScrollAnimationPlaying, showSelectedPage } = useContext(MainContextValues);

  const handlerMouseClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (isScrollAnimationPlaying) {
      event.preventDefault();
    }
    showSelectedPage(true);
    onClick && onClick(event);
  };

  const componentClassNames = {
    link: classNames("group relative w-full navbarBorderGradient"),
    child: classNames(
      "navChild bg-portfolio-bg py-3.5 transition-colors duration-[350ms]",
      "lg:hover:bg-portfolio-bg/90",
      "max-md:py-5",
      className
    ),
  };

  return (
    <Link
      to={page}
      state={LOCATION_STATES.BY_NAV_BAR}
      className={componentClassNames.link}
      onClick={handlerMouseClick}
    >
      <div className={componentClassNames.child} {...props}>
        {children}
      </div>
    </Link>
  );
};

export default NavSection;
