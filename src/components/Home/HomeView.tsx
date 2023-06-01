import { forwardRef, useContext } from "react";

import { MainContextValues } from "../../contexts/MainContext";
import NavSection from "./NavSection";
import NavSectionHeader from "./NavSectionHeader";
import PageSection from "../templates/PageSection";

const HomeView = forwardRef<HTMLElement>((_, ref) => {
  const { showSelectedPage } = useContext(MainContextValues);
  return (
    <PageSection ref={ref} className="COMP_HomeView flex items-center h-portfolio-block w-full">
      <nav className="flex items-center justify-between h-3/4 w-full space-x-8">
        <NavSection page="about" onClick={() => showSelectedPage(true)}>
          <NavSectionHeader>About Me</NavSectionHeader>
        </NavSection>
        <NavSection page="projects" onClick={() => showSelectedPage(true)}>
          <NavSectionHeader>Projects</NavSectionHeader>
        </NavSection>
        <NavSection page="contacts" onClick={() => showSelectedPage(true)}>
          <NavSectionHeader>Contacts</NavSectionHeader>
        </NavSection>
      </nav>
    </PageSection>
  );
});

export default HomeView;
