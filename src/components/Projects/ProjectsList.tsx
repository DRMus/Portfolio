import { useContext, useLayoutEffect } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import TextParagraph from "../templates/TextParagraph";
import TextLabel from "../templates/TextLabel";
import DivideLine from "../templates/DivideLine";
import LinkIcon from "../templates/LinkIcon";
import ImageIcon from "../templates/ImageIcon";
import { JSIcon, ReactIcon } from "../templates/Icons";

import { ProjectContextValues } from "../../contexts/ProjectContext";

import { intersectionObserver } from "../../utils/intersectionObserver";

import ProjectIconsList from "./ProjectIconsList";
import ProjectSection from "./ProjectSection";

import KonvaIcon from "../../assets/Konva.png";
import ElectronIcon from "../../assets/electron.ico";
import ReduxIcon from "../../assets/redux.png";
import CIcon from "../../assets/C.png";

import DungeonGameVideo from "../../assets/dungeon_game.mp4";
import FileManagerVideo from "../../assets/file_manager.mp4";
import AutomatedPlaceOfTheCuratorVideo from "../../assets/automated_place_of_the_curator.mp4";
import BirdShopVideo from "../../assets/bird_shop.mp4";

import DungeonGameLoad from "../../assets/dungeon_game_load.png";
import FileManagerLoad from "../../assets/file_manager_load.png";
import AutomatedPlaceOfTheCuratorLoad from "../../assets/automated_place_of_the_curator_load.png";
import BirdShopLoad from "../../assets/bird_shop_load.png";

const DungeonGame = () => {
  return (
    <ProjectSection
      video={DungeonGameVideo}
      loadImage={DungeonGameLoad}
      header="Dungeon game"
      className="pt-0"
    >
      <TextLabel>Description:</TextLabel>
      <TextParagraph>
        This game for simple studing programming. The meaning of the game is to move the character
        around the level, collect coins and bypass obstacles by writing code. The project has a
        level constructor, which helps the user to create a trial at his own discretion.
      </TextParagraph>
      <TextLabel>Stack:</TextLabel>
      <ProjectIconsList>
        <JSIcon size="2xl" title="JavaScript" />
        <ReactIcon size="2xl" title="React" />
        <ImageIcon src={KonvaIcon} title="Konva" />
      </ProjectIconsList>
      <TextLabel>Links:</TextLabel>
      <ProjectIconsList>
        <LinkIcon href="https://github.com/DRMus/Dungeon-game/" icon={faGithub} />
        <LinkIcon href="https://drmus.github.io/Dungeon-game/" icon={faGlobe} />
      </ProjectIconsList>
    </ProjectSection>
  );
};

const FileManager = () => {
  return (
    <ProjectSection video={FileManagerVideo} loadImage={FileManagerLoad} header="File Manager">
      <TextLabel>Description:</TextLabel>
      <TextParagraph>
        This project was created to convert the metadata of a selected files or folder to JSON
        format.
      </TextParagraph>
      <TextLabel>Stack:</TextLabel>
      <ProjectIconsList>
        <JSIcon size="2xl" title="JavaScript" />
        <ReactIcon size="2xl" title="React" />
      </ProjectIconsList>
      <TextLabel>Links:</TextLabel>
      <ProjectIconsList>
        <LinkIcon href="https://github.com/DRMus/file-manager/" icon={faGithub} />
        <LinkIcon href="https://drmus.github.io/file-manager/" icon={faGlobe} />
      </ProjectIconsList>
    </ProjectSection>
  );
};

const AutomatedPlaceOfTheCurator = () => {
  return (
    <ProjectSection
      video={AutomatedPlaceOfTheCuratorVideo}
      loadImage={AutomatedPlaceOfTheCuratorLoad}
      header="Automated place of the curator"
    >
      <TextLabel>Description:</TextLabel>
      <TextParagraph>
        The project makes it possible to finance the work of the curator of a group of students at
        the university. This desktop application is a curator report template with data entry
        fields. It is also possible to upload an .xlsx file with curators, groups and students of
        these groups.
      </TextParagraph>
      <TextLabel>Stack:</TextLabel>
      <ProjectIconsList>
        <JSIcon size="2xl" title="JavaScript" />
        <ReactIcon size="2xl" title="React" />
        <ImageIcon src={ElectronIcon} title="Electron" />
      </ProjectIconsList>
      <TextLabel>Links:</TextLabel>
      <ProjectIconsList>
        <LinkIcon href="https://github.com/DRMus/docx-templater/" icon={faGithub} />
      </ProjectIconsList>
    </ProjectSection>
  );
};

const BirdShop = () => {
  return (
    <ProjectSection video={BirdShopVideo} loadImage={BirdShopLoad} header="Bird shop">
      <TextLabel>Description:</TextLabel>
      <TextParagraph>
        Simple online store with backend on C# and ASP.NET Core. Shop have a cart, user profile and
        his orders, catalog of products.
      </TextParagraph>
      <TextLabel>Stack:</TextLabel>
      <ProjectIconsList>
        <JSIcon size="2xl" title="JavaScript" />
        <ReactIcon size="2xl" title="React" />
        <ImageIcon src={ReduxIcon} title="Redux" />
        <ImageIcon src={CIcon} title="C#" />
      </ProjectIconsList>
      <TextLabel>Links:</TextLabel>
      <ProjectIconsList>
        <LinkIcon href="https://github.com/DRMus/bird_shop/" icon={faGithub} />
      </ProjectIconsList>
    </ProjectSection>
  );
};

const ProjectsList = () => {
  const { addObserverAction } = useContext(ProjectContextValues);
  useLayoutEffect(() => {
    intersectionObserver("projectscrollanimate", addObserverAction);
  }, []);
  return (
    <div className="text w-full">
      <DungeonGame />
      <DivideLine />
      <FileManager />
      <DivideLine />
      <AutomatedPlaceOfTheCurator />
      <DivideLine />
      <BirdShop />
    </div>
  );
};

export default ProjectsList;
