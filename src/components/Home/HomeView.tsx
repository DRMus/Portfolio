import { forwardRef, useContext, useEffect } from "react";

import { MainContextValues } from "../../contexts/MainContext";
import NavSection from "./NavSection";
import NavSectionHeader from "./NavSectionHeader";
import PageSection from "../templates/PageSection";

import "./HomeView.scss";
import { useNavigationType } from "react-router";
import HelloHeader from "./HelloHeader";
import classNames from "classnames";

const HomeView = forwardRef<HTMLElement>((_, ref) => {
  const { isWelcomeAnimationPlaying, changeIsWelcomeAnimationPlaying } =
    useContext(MainContextValues);

  const navigationType = useNavigationType();

  const welcomeAnimation = () => {
    changeIsWelcomeAnimationPlaying(true);
  };

  useEffect(() => {
    if (navigationType === "POP") {
      welcomeAnimation();
    }
  }, [navigationType]);
  return (
    <PageSection ref={ref} className="COMP_HomeView flex flex-col h-portfolio-block w-full !py-16">
      <section className="h-1/2 w-full flex items-center grow justify-center">
        <HelloHeader isWelcomeAnimationPlaying={isWelcomeAnimationPlaying} />
      </section>
      <section
        className={classNames("transition-all duration-500 p-4 overflow-hidden", {
          "h-1/4": navigationType != "POP",
          "h-0 opacity-0": navigationType === "POP",
        })}
      >
        <nav className="flex items-center justify-between h-full w-full space-x-8">
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
