import { useContext, useEffect, useMemo, useRef, useState } from "react";
import TextHeader from "../templates/TextHeader";

import "./HelloHeader.scss";
import "./HomeView.scss";
import classNames from "classnames";
import { WelcomeAnimationContextValues } from "../../contexts/WelcomeAnimationContext";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainContextValues } from "../../contexts/MainContext";
import HoverIsland from "../templates/HoverIsland";

type TCurrentText = {
  text: string;
  animationTime: number;
};

const welcomeText = ["Hello", "My name is Damir", "That's my portfolio", "Enjoy!"];
const oneCharTime = 0.1;

const HelloHeader = () => {
  const { isWelcomeAnimationPlaying, changeIsWelcomeAnimationPlaying } = useContext(
    WelcomeAnimationContextValues
  );
  const { isPageSelected } = useContext(MainContextValues);

  const [currentText, setCurrentText] = useState<TCurrentText>({ text: "", animationTime: 0 });
  const [isTextHidding, setIsTextHidding] = useState<boolean>(false);

  const isWelcomePlayingRef = useRef<boolean>(false); // thats key for setTimeout area

  const stopWelcomeAnimation = () => {
    setCurrentText({ text: "", animationTime: 0 });
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
          stopWelcomeAnimation();
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
        ? `typing ${currentText.animationTime}s steps(${currentText.text.length}), caret 0.5s step-end infinite alternate`
        : "",
    [currentText, isTextHidding, isWelcomeAnimationPlaying]
  );

  const componentClassNames = {
    header: classNames(
      "py-2",
      "md:max-lg:text-5xl",
      "sm:max-md:text-center max-md:tracking-normal",
      "xs:max-sm:text-center xs:max-sm:text-5xl",
      "max-xs:text-center max-xs:text-4xl",
      {
        hideElement: isTextHidding,
        "text-7xl textAnimation": isWelcomeAnimationPlaying,
        "text-6xl transition-opacity duration-500": !isWelcomeAnimationPlaying,
      }
    ),
    headerAnimate: classNames("max-sm:text-3xl max-sm:!py-1"),
    headerSpan: classNames(
      "text-portfolio-white",
      "sm:max-md:block sm:max-md:my-1.5",
      "max-sm:block max-sm:my-1.5"
    ),
    skipSpan: classNames(
      "fixed bottom-6 right-6 text-portfolio-white text-xl transition-colors cursor-pointer lg:hover:text-portfolio-purple-light"
    ),
    replaySpan:
      "fixed bottom-4 right-4 p-2 rounded-full text-portfolio-white/30 transition-colors cursor-pointer lg:hover:text-portfolio-purple",
  };

  return (
    <div>
      {isWelcomeAnimationPlaying ? (
        <TextHeader
          key={"animation"}
          className={componentClassNames.header + " " + componentClassNames.headerAnimate}
          style={{ animation: headerAnimation }}
        >
          {currentText.text}
        </TextHeader>
      ) : (
        <TextHeader
          key={"static"}
          className={componentClassNames.header + " showNavBarForMobile"}
          style={{ animation: headerAnimation }}
        >
          Hi, that's <span className={componentClassNames.headerSpan}>Web Developer</span> blog
        </TextHeader>
      )}

      {isWelcomeAnimationPlaying && (
        <span className={componentClassNames.skipSpan} onClick={() => stopWelcomeAnimation()}>
          Skip {">"}
        </span>
      )}
      {!isWelcomeAnimationPlaying && !isPageSelected && (
        <HoverIsland
          className={componentClassNames.replaySpan}
          onClick={() => changeIsWelcomeAnimationPlaying(true)}
        >
          <FontAwesomeIcon icon={faArrowRotateLeft} title="Replay animation" size="xl" />
        </HoverIsland>
      )}
    </div>
  );
};

export default HelloHeader;
