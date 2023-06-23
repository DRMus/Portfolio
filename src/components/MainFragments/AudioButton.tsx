import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { useAudio } from "../../utils/useAudio";
import { WelcomeAnimationContextValues } from "../../contexts/WelcomeAnimationContext";

import backgroundAmbientSfx from "../../assets/background-ambient.mp3";
import HoverIsland from "../templates/HoverIsland";

interface Props {
  classname?: string;
  size?: SizeProp;
}

const AudioButton: FC<Props> = (props) => {
  const { isWelcomeAnimationPlaying } = useContext(WelcomeAnimationContextValues);

  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const backgroundAmbient = useAudio(backgroundAmbientSfx, true);

  const volumeIconRef = useRef<HTMLDivElement>(null);
  const isMutedFromLocalStorage = useRef<boolean>(false);

  const soundStop = () => {
    backgroundAmbient.stop();

    setIsMuted(true);
  };

  const soundPause = () => {
    backgroundAmbient.pause();
    setIsMuted(true);
  };

  const soundPlay = () => {
    // cause browser policy don't allow playing sound without user actions,
    // we will play audio after user click on something.

    if (isMutedFromLocalStorage.current) {
      return;
    }

    const tryToPlay = (ev: MouseEvent | Event) => {
      if (
        !volumeIconRef.current ||
        volumeIconRef.current.contains(ev.target as Node) ||
        !ev.isTrusted
      ) {
        return;
      }
      volumeIconRef.current.click();
      window.removeEventListener("click", tryToPlay);
      window.removeEventListener("touch", tryToPlay);
    };

    backgroundAmbient.play().catch(() => {
      window.addEventListener("click", tryToPlay);
      window.addEventListener("touch", tryToPlay);
    });
    setIsMuted(backgroundAmbient.audio.paused);
  };

  useEffect(() => {
    if (isTouched) {
      return;
    }

    isWelcomeAnimationPlaying ? soundStop() : soundPlay();
  }, [isWelcomeAnimationPlaying]);

  useEffect(() => {
    if (import.meta.env.DEV) {
      let muted = localStorage.getItem("AUDIO_MUTED");
      if (muted === "true") {
        isMutedFromLocalStorage.current = true;
        setIsMuted(true);
      }
    }
  }, []);
  return (
    <HoverIsland
      ref={volumeIconRef}
      className={classNames("p-2 rounded-full cursor-pointer z-20", props.classname)}
      onClick={() => {
        !isTouched && setIsTouched(true);
        isMuted ? soundPlay() : soundPause();
      }}
    >
      <FontAwesomeIcon
        icon={isMuted ? faVolumeMute : faVolumeHigh}
        className="text-portfolio-white/40 transition-colors duration-300 lg:group-hover:text-portfolio-purple"
        size={props.size}
      />
    </HoverIsland>
  );
};

export default AudioButton;
