import { FC } from "react";
import TextHeader from "../templates/TextHeader";

interface Props {
  isWelcomeAnimationPlaying: boolean
}

const HelloHeader: FC<Props> = (props) => {
  return (
    <div>
      <TextHeader className="!text-5xl">
        Hello, My name is <span className="text-portfolio-white">Damir</span>
      </TextHeader>
    </div>
  );
};

export default HelloHeader;
