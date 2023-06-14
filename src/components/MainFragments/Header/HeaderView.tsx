import classNames from "classnames";

import styles from "./Header.module.scss";
import { FC } from "react";
import HoverIsland from "../../templates/HoverIsland";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

interface Props {
  goHome: () => void;
}

const HeaderView: FC<Props> = (props) => {
  const componentClassNames = {
    header: classNames(
      "fixed top-0 left-1/2 -translate-x-1/2 mt-6 z-30 px-3 pb-3 pt-2.5 cursor-pointer rounded-full ",
    ),
    icon: classNames(
      "text-portfolio-white/30 justify-center transition-all duration-300",
      "group-hover:text-portfolio-purple",
      styles.showHeader
    ),
  };
  return (
    <HoverIsland onClick={props.goHome} className={componentClassNames.header}>
      <FontAwesomeIcon icon={faHouse} className={componentClassNames.icon} size="xl"/>
    </HoverIsland>
  );
};

export default HeaderView;
