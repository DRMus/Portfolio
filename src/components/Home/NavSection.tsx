import { FC, HTMLAttributes, useContext } from "react";
import { Link } from "react-router-dom";
import { LOCATION_STATES } from "../../utils/constants";
import { MainContextValues } from "../../contexts/MainContext";

import "./HomeView.scss";
import BluredBlock from "../templates/BluredBlock";
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

  return (
    <Link
      to={page}
      state={LOCATION_STATES.BY_NAV_BAR}
      className="h-full w-full grow"
      onClick={handlerMouseClick}
    >
      <BluredBlock
        className={classNames(
          "lg:hover:shadow-portfolio-purple lg:hover:border-portfolio-purple/50 lg:hover:bg-portfolio-purple/20",
          "max-sm:text",
          className
        )}
        {...props}
      >
        {children}
      </BluredBlock>
    </Link>
  );
};

export default NavSection;
