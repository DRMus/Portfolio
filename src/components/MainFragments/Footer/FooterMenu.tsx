import FooterMenuItem from "./FooterMenuItem";

import styles from "./FooterMenu.module.scss";
import classNames from "classnames";
import HoverIsland from "../../templates/HoverIsland";

const FooterMenu = () => {
  return (
    <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-6 z-30">
      <HoverIsland
        className={classNames(
          "w-fit flex space-x-6 my-0 px-6 py-3 mx-auto items-center rounded-lg text-center",
          styles.showFooter
        )}
      >
        <FooterMenuItem to="about">About Me</FooterMenuItem>
        <FooterMenuItem to="projects">Projects</FooterMenuItem>
        <FooterMenuItem to="contacts">Contacts</FooterMenuItem>
      </HoverIsland>
    </footer>
  );
};

export default FooterMenu;
