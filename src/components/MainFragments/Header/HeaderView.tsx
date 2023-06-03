import { HomeFilled } from "@ant-design/icons";
import classNames from "classnames";

import styles from "./Header.module.scss";
import { FC } from "react";

interface Props {
  goHome: () => void;
}

const HeaderView: FC<Props> = (props) => {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 mt-6 z-30">
      <HomeFilled
        className={classNames(
          "text-portfolio-white/30 text-2xl h-fit justify-center transition-all duration-300 cursor-pointer",
          "hover:text-portfolio-purple",
          styles.showHeader
        )}
        onClick={props.goHome}
      />
    </header>
  );
};

export default HeaderView;
