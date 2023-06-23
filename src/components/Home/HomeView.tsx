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
  const { changeIsWelcomeAnimationPlaying, isWelcomeAnimationPlaying } = useContext(
    WelcomeAnimationContextValues
  );

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
    helloSection: "w-full flex items-center grow justify-center",
    navSection: classNames(
      "transition-all duration-500 p-4 overflow-hidden min-h-1/4",
      "sm:max-md:min-h-3/6",
      "xs:max-sm:min-h-[45%]",
      "max-xs:min-h-[40%]",
      {
        showNavBar: navigationType === "POP" && document.body.clientWidth > 640,
        showNavBarForMobile: navigationType === "POP" && document.body.clientWidth < 640
      }
    ),
    navBar: classNames(
      "flex items-center justify-around h-full w-full",
      "md:gap-x-12",
      "sm:max-md:flex-col sm:max-md:space-y-8 sm:max-md:px-16",
      "xs:max-sm:flex-col xs:max-sm:space-y-6 xs:max-sm:px-4",
      "max-xs:flex-col max-xs:space-y-4 max-xs:px-2",
    ),
  };
  return (
    <PageSection ref={ref} className={componentClassNames.pageSection}>
      <section className={componentClassNames.helloSection}>
        <HelloHeader />
      </section>

      {!isWelcomeAnimationPlaying && (
        <section className={componentClassNames.navSection}>
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
      )}
    </PageSection>
  );
});

export default HomeView;
