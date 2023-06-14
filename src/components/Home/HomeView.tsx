import { forwardRef, useContext, useEffect } from "react";

import { MainContextValues } from "../../contexts/MainContext";
import NavSection from "./NavSection";
import NavSectionHeader from "./NavSectionHeader";
import PageSection from "../templates/PageSection";

import "./HomeView.scss";
import { useLocation, useNavigationType } from "react-router";
import HelloHeader from "./HelloHeader";
import classNames from "classnames";
import { WelcomeAnimationContextValues } from "../../contexts/WelcomeAnimationContext";

const HomeView = forwardRef<HTMLElement>((_, ref) => {
  const { isScrollAnimationPlaying } = useContext(MainContextValues);
  const { changeIsWelcomeAnimationPlaying, isWelcomeAnimationPlaying } = useContext(WelcomeAnimationContextValues);

  // const firstRender = useRef<boolean>(true);

  const navigationType = useNavigationType();
  const location = useLocation();

  const welcomeAnimation = () => {
    changeIsWelcomeAnimationPlaying(true);
  };

  useEffect(() => {
    if (navigationType === "POP" && !isScrollAnimationPlaying && location.pathname === "/") {
      welcomeAnimation();
    } else {
      changeIsWelcomeAnimationPlaying(false);
    }
  }, [navigationType]);

  const componentClassNames = {
    pageSection: "COMP_HomeView flex flex-col h-portfolio-block w-full !py-16",
    helloSection: "h-1/2 w-full flex items-center grow justify-center",
    navSection: classNames("transition-all duration-500 p-4 overflow-hidden", {
      "h-1/4": !isWelcomeAnimationPlaying,
      "h-0 opacity-0": isWelcomeAnimationPlaying,
    }),
    navBar: "flex items-center justify-between h-full w-full space-x-8"
  }
  return (
    <PageSection ref={ref} className={componentClassNames.pageSection}>
      <section className={componentClassNames.helloSection}>
        <HelloHeader />
      </section>
      <section
        className={componentClassNames.navSection}
      >
        <nav className={componentClassNames.navBar}>
          <NavSection page="about">
            <NavSectionHeader>About Me</NavSectionHeader>
          </NavSection>
          <NavSection page="projects">
            <NavSectionHeader>Projects</NavSectionHeader>
          </NavSection>
          <NavSection page="contacts">
            <NavSectionHeader>Contacts</NavSectionHeader>
          </NavSection>
        </nav>
      </section>
    </PageSection>
  );
});

export default HomeView;
