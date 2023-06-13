import { FC, useEffect, useState } from "react";
import TextHeader from "../templates/TextHeader";

import "./HelloHeader.scss";

interface Props {
  isWelcomeAnimationPlaying: boolean;
}

const welcomeText = ["Hello", "My name is Damir", "That`s my portfolio", "Enjoy"];

const HelloHeader: FC<Props> = ({ isWelcomeAnimationPlaying }) => {
  const [currentText, setCurrentText] = useState<string>("");

  const textChanger = () => {
    setTimeout(() => {
      setCurrentText(welcomeText[0]);
    }, 700);
  };

  useEffect(() => {
    if (isWelcomeAnimationPlaying) {
      textChanger();
    }
  }, [isWelcomeAnimationPlaying]);
  return (
    <div>
      <TextHeader
        className="!text-6xl textAnimation"
        style={{
          animation: `typing ${0.15 * currentText.length}s steps(${
            currentText.length
          }) .7s, caret 0.4s step-end infinite alternate`,
        }}
      >
        {currentText}
        {/* Hello, My name is <span className="text-portfolio-white">Damir</span> */}
      </TextHeader>
    </div>
  );
};

export default HelloHeader;
