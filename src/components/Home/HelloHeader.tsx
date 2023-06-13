import { useContext, useEffect, useMemo, useRef, useState } from "react";
import TextHeader from "../templates/TextHeader";

import "./HelloHeader.scss";
import classNames from "classnames";
import { WelcomeAnimationContextValues } from "../../contexts/WelcomeAnimationContext";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainContextValues } from "../../contexts/MainContext";

type TCurrentText = {
  text: string;
  animationTime: number;
};

const welcomeText = ["Hello", "My name is Damir", "That's my portfolio", "Enjoy"];
const oneCharTime = 0.12;

const HelloHeader = () => {
  const { isWelcomeAnimationPlaying, changeIsWelcomeAnimationPlaying } = useContext(
    WelcomeAnimationContextValues
  );
  const { isPageSelected } = useContext(MainContextValues);

  const [currentText, setCurrentText] = useState<TCurrentText>({ text: "", animationTime: 0 });
  const [isTextHidding, setIsTextHidding] = useState<boolean>(false);

  const isWelcomePlayingRef = useRef<boolean>(false); // thats key for setTimeout area

  const stopWelcomeAnimation = () => {
    changeIsWelcomeAnimationPlaying(false);
    isWelcomePlayingRef.current = false;
  };

  const textChanger = (welcomeTextArray: string[]) => {
    let idx = 0;
    return function recur() {
      let text = welcomeTextArray[idx];
      let animationTime = text ? oneCharTime * text.length : 0;

      setTimeout(() => {
        setIsTextHidding(false);

        if (!isWelcomePlayingRef.current) {
          return;
        }

        if (idx >= welcomeTextArray.length) {
          changeIsWelcomeAnimationPlaying(false);
          return;
        }

        setCurrentText({ text, animationTime });
        idx++;

        setTimeout(() => {
          if (!isWelcomePlayingRef.current) {
            return;
          }
          setIsTextHidding(true);
          recur();
        }, animationTime * 1000 + 2000);
      }, 1000);
    };
  };

  useEffect(() => {
    if (isWelcomeAnimationPlaying) {
      isWelcomePlayingRef.current = true;
      setIsTextHidding(true);
      textChanger(welcomeText)();
    }
  }, [isWelcomeAnimationPlaying]);

  const headerAnimation = useMemo(
    () =>
      !isTextHidding && isWelcomeAnimationPlaying
        ? `typing ${currentText.animationTime}s steps(${currentText.text.length}), caret 0.4s step-end infinite alternate`
        : "",
    [currentText, isTextHidding, isWelcomeAnimationPlaying]
  );

  const componentClassNames = {
    header: classNames("py-2", {
      hideElement: isTextHidding,
      "!text-7xl textAnimation": isWelcomeAnimationPlaying,
      "!text-6xl transition-opacity duration-500": !isWelcomeAnimationPlaying,
    }),
    skipSpan:
      "absolute bottom-6 right-6 text-portfolio-white text-xl transition-colors cursor-pointer hover:text-portfolio-purple-light",
  };
  return (
    <div>
      <TextHeader className={componentClassNames.header} style={{ animation: headerAnimation }}>
        {isWelcomeAnimationPlaying ? (
          currentText.text
        ) : (
          <>
            Hello, that's <span className="text-portfolio-white">Web Developer</span> blog
          </>
        )}
      </TextHeader>

      {isWelcomeAnimationPlaying && (
        <span className={componentClassNames.skipSpan} onClick={() => stopWelcomeAnimation()}>
          Skip {">"}
        </span>
      )}
      {!isWelcomeAnimationPlaying && !isPageSelected && (
        <span
          className={componentClassNames.skipSpan}
          onClick={() => changeIsWelcomeAnimationPlaying(true)}
        >
          <FontAwesomeIcon icon={faArrowRotateLeft} title="Replay animation" />
        </span>
      )}
    </div>
  );
};

export default HelloHeader;
