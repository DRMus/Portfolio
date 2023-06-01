import FooterMenuItem from "./FooterMenuItem";

import styles from "./FooterMenu.module.scss";
import classNames from "classnames";

const FooterMenu = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-6 z-30">
      <div
        className={classNames(
          "group w-fit flex space-x-6 my-0 mx-auto items-center transition-all duration-300 text-center",
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
