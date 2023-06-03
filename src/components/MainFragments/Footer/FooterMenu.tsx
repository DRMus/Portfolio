import FooterMenuItem from "./FooterMenuItem";

import styles from "./FooterMenu.module.scss";
import classNames from "classnames";

const FooterMenu = () => {
  return (
    <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-6 z-30">
      <div
        className={classNames(
          "group w-fit flex space-x-6 my-0 px-6 py-3 mx-auto items-center transition-all duration-300 rounded-lg text-center","hover:bg-gray-700/20 hover:backdrop-blur-sm",
          styles.showFooter
        )}
      >
        <FooterMenuItem to="about">About Me</FooterMenuItem>
        <FooterMenuItem to="projects">Projects</FooterMenuItem>
        <FooterMenuItem to="contacts">Contacts</FooterMenuItem>
      </div>
    </footer>
  );
};

export default FooterMenu;
