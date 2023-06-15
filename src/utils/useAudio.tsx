import { useEffect, useState } from "react";

export function useAudio(path: string, loop: boolean = false, volume: number = 0.3) {
  const [audio, setAudio] = useState<HTMLAudioElement>(new Audio());

  const createAudio = () => {
    let audio = new Audio(path);
    audio.volume = volume;
    audio.currentTime = 0;
    audio.loop = loop;
    return audio;
  };

  useEffect(() => {
    setAudio(createAudio());
    return () => audio.remove();
  }, [path]);

  return {
    audio: audio,
    stop: function () {
      audio.pause();
      audio.currentTime = 0;
    },
    pause: function () {
      audio.pause();
    },
    play: function () {
      return audio.play();
    },
    volume: function (value: number) {
      audio.volume = value;
    },
  };
}
