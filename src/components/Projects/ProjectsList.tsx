import ProjectSection from "./ProjectSection";
import DungeonGameGif from "../../assets/dungeon_game.gif";
import TextHeader from "../templates/TextHeader";
import TextParagraph from "../templates/TextParagraph";

const ProjectsList = () => {
  return (
    <div className="text w-full">
      <ProjectSection image={DungeonGameGif}>
        <TextHeader className="mb-6">Dungeon game</TextHeader>
        <TextParagraph>
          This game for simple studing programming. The meaning of the game is to move the character
          around the level, collect coins and bypass obstacles by writing code. The project has a
          level constructor, which helps the user to create a test at his own discretion.
        </TextParagraph>
      </ProjectSection>
      <div className="w-full grid place-items-center">
        <div className="h-0.5 w-1/4 rounded-full bg-portfolio-purple/50"></div>
      </div>
      <ProjectSection image={DungeonGameGif}>
        <TextHeader className="mb-6">Dungeon game</TextHeader>
        <TextParagraph>
          This game for simple studing programming. The meaning of the game is to move the character
          around the level, collect coins and bypass obstacles by writing code. The project has a
          level constructor, which helps the user to create a test at his own discretion.
        </TextParagraph>
      </ProjectSection>
    </div>
  );
};

export default ProjectsList;
