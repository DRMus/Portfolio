import ProjectSection from "./ProjectSection";
import DungeonGameGif from "../../assets/dungeon_game.gif";
import FileManagerGif from "../../assets/file_manager.gif";
import TextHeader from "../templates/TextHeader";
import TextParagraph from "../templates/TextParagraph";
import TextLabel from "../templates/TextLabel";
import ProjectIconsList from "./ProjectIconsList";
import DivideLine from "../templates/DivideLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare, faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import KonvaIcon from "../../assets/Konva.png";
import LinkIcon from "../templates/LinkIcon";

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
        <img src={KonvaIcon} alt="KonvaIcon" className="h-[32px] w-[32px]" title="Konva" />
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

const ProjectsList = () => {
  return (
    <div className="text w-full">
      <DungeonGame />
      <DivideLine />
      <FileManager />
      <DivideLine />
    </div>
  );
};

export default ProjectsList;
