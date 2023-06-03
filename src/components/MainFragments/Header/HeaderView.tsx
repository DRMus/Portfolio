import { HomeFilled } from "@ant-design/icons";
import classNames from "classnames";

import styles from "./Header.module.scss";
import { FC } from "react";

interface Props {
  goHome: () => void;
}

const HeaderView: FC<Props> = (props) => {
  const componentClassNames = {
    header: classNames(
      "group fixed top-0 left-1/2 -translate-x-1/2 mt-6 z-30 px-3 pb-3 pt-1 cursor-pointer transition-all duration-300 rounded-full ",
      "hover:bg-gray-700/20 hover:backdrop-blur-sm"
    ),
    icon: classNames(
      "text-portfolio-white/30 text-2xl h-fit justify-center transition-all duration-300",
      "group-hover:text-portfolio-purple",
      styles.showHeader
    ),
  };
  return (
    <header onClick={props.goHome} className={componentClassNames.header}>
      <HomeFilled className={componentClassNames.icon} />
    </header>
  );
};

export default HeaderView;
