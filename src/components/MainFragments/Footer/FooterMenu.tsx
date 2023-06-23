import FooterMenuItem from "./FooterMenuItem";

import styles from "./FooterMenu.module.scss";
import classNames from "classnames";
import HoverIsland from "../../templates/HoverIsland";

const FooterMenu = () => {
  const componentClassNames = {
    footer: classNames("fixed bottom-0 z-30", "sm:left-1/2 sm:-translate-x-1/2 sm:mb-6", "max-sm:w-full max-sm:flex max-sm:items-center"),
    island: classNames(
      "w-fit flex gap-x-6 my-0 px-6 py-3 mx-auto items-center rounded-lg text-center",
      "max-md:px-4",
      "max-sm:px-4 max-sm:py-4 max-sm:w-full max-sm:justify-around max-sm:rounded-b-none max-sm:rounded-t-xl",
      styles.showFooter
    ),
  };
  return (
    <footer className={componentClassNames.footer}>
      <HoverIsland className={componentClassNames.island}>
        <FooterMenuItem to="about" className="max-md:whitespace-nowrap">
          About Me
        </FooterMenuItem>
        <FooterMenuItem to="projects">Projects</FooterMenuItem>
        <FooterMenuItem to="contacts">Contacts</FooterMenuItem>
      </HoverIsland>
    </footer>
  );
};

export default FooterMenu;
