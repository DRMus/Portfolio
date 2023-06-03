import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare, faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import TextParagraph from "../templates/TextParagraph";
import TextLabel from "../templates/TextLabel";
import DivideLine from "../templates/DivideLine";
import LinkIcon from "../templates/LinkIcon";
import ImageIcon from "../templates/ImageIcon";

import ProjectIconsList from "./ProjectIconsList";
import ProjectSection from "./ProjectSection";

import KonvaIcon from "../../assets/Konva.png";
import ElectronIcon from "../../assets/electron.ico";
import DungeonGameGif from "../../assets/dungeon_game.gif";
import FileManagerGif from "../../assets/file_manager.gif";
import AutomatedPlaceOfTheCuratorGif from "../../assets/automated_place_of_the_curator.gif";

const DungeonGame = () => {
  return (
    <ProjectSection image={DungeonGameGif} header="Dungeon game">
      <TextLabel>Description:</TextLabel>
      <TextParagraph>
        This game for simple studing programming. The meaning of the game is to move the character
        around the level, collect coins and bypass obstacles by writing code. The project has a
        level constructor, which helps the user to create a trial at his own discretion.
      </TextParagraph>
      <TextLabel>Stack:</TextLabel>
      <ProjectIconsList>
        <FontAwesomeIcon
          icon={faJsSquare}
          style={{ color: "#ffd500" }}
          size="2xl"
          title="JavaScript"
        />
        <FontAwesomeIcon icon={faReact} style={{ color: "#61dbfb" }} size="2xl" title="React" />
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
    <ProjectSection image={FileManagerGif} header="File Manager">
      <TextLabel>Description:</TextLabel>
      <TextParagraph>
        This project was created to convert the metadata of a selected files or folder to JSON
        format.
      </TextParagraph>
      <TextLabel>Stack:</TextLabel>
      <ProjectIconsList>
        <FontAwesomeIcon
          icon={faJsSquare}
          style={{ color: "#ffd500" }}
          size="2xl"
          title="JavaScript"
        />
        <FontAwesomeIcon icon={faReact} style={{ color: "#61dbfb" }} size="2xl" title="React" />
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
    <ProjectSection image={AutomatedPlaceOfTheCuratorGif} header="Automated place of the curator">
      <TextLabel>Description:</TextLabel>
      <TextParagraph>
        The project makes it possible to finance the work of the curator of a group of students at
        the university. This desktop application is a curator report template with data entry fields. It is
        also possible to upload an .xlsx file with curators, groups and students of these groups.
      </TextParagraph>
      <TextLabel>Stack:</TextLabel>
      <ProjectIconsList>
        <FontAwesomeIcon
          icon={faJsSquare}
          style={{ color: "#ffd500" }}
          size="2xl"
          title="JavaScript"
        />
        <FontAwesomeIcon icon={faReact} style={{ color: "#61dbfb" }} size="2xl" title="React" />
        <ImageIcon src={ElectronIcon} title="Electron" />
      </ProjectIconsList>
      <TextLabel>Links:</TextLabel>
      <ProjectIconsList>
        <LinkIcon href="https://github.com/DRMus/docx-templater/" icon={faGithub} />
      </ProjectIconsList>
    </ProjectSection>
  );
};

const ProjectsList = () => {
  return (
    <div className="text w-full">
      <DungeonGame />
      <DivideLine />
      <FileManager />
      <DivideLine />
      <AutomatedPlaceOfTheCurator/>
    </div>
  );
};

export default ProjectsList;
