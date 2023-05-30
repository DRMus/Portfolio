import {useContext} from 'react'

import { MainContextValues } from "../../contexts/MainContext";
import NavSection from "./NavSection";
import NavSectionHeader from "./NavSectionHeader";
import PageSection from '../templates/PageSection';

const HomeView = () => {
  const {showSelectedPage} = useContext(MainContextValues)
  return (
    <PageSection className="COMP_HomeView flex items-center h-portfolio-block w-full">
      <nav className="flex items-center justify-between h-3/4 w-full space-x-8">
        <NavSection page='about' onClick={() => showSelectedPage(true)}>
          <NavSectionHeader>About Me</NavSectionHeader>
        </NavSection>
        <NavSection page='projects'>
          <NavSectionHeader>Projects</NavSectionHeader>
        </NavSection>
        <NavSection page='contacts'>
          <NavSectionHeader>Contacts</NavSectionHeader>
        </NavSection>
      </nav>
    </PageSection>
  );
};

export default HomeView;
