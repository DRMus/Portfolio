import { FC, HTMLAttributes, useEffect, useMemo, useState, useContext, useRef } from "react";

import classNames from "classnames";
import TextHeader from "../templates/TextHeader";
import { ProjectContextValues } from "../../contexts/ProjectContext";

interface Props extends HTMLAttributes<HTMLDivElement> {
  header: string;
  video?: string;
  loadImage?: string;
}

const ProjectSection: FC<Props> = ({ children, className, video, loadImage, header, ...props }) => {
  const { addGifVisibilityCallback, getProjectKey } = useContext(ProjectContextValues);

  const [projectVideo, setProjectVideo] = useState<string>("");

  const videoRef = useRef<HTMLVideoElement>(null);

  const projectKey = useMemo<number>(() => getProjectKey(), []);
  const worker = useMemo(
    () => new Worker(new URL("../../utils/blobToBase64Worker.ts", import.meta.url)),
    []
  );

  const changeGifVisibility = (state: boolean) => {
    if (!projectVideo) {
      return;
    }

    if (!videoRef.current) {
      throw new Error("videoRef.current is undefined");
    }
    videoRef.current.click();

    if (state) {
      videoRef.current.play();
    } else {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  const getGifImage = (image: string) => {
    fetch(image || "")
      .then((res) => res.blob())
      .then((res) => {
        if (window.Worker) {
          worker.onmessage = (message) => {
            setProjectVideo(message.data);
            worker.terminate();
          };

          worker.postMessage(res);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    addGifVisibilityCallback(changeGifVisibility);
    if (video) {
      getGifImage(video);
    }
  }, [worker]);
  return (
    <div
      data-projectscrollanimate={projectKey}
      className={classNames(
        "group project-animate transition-all w-full py-24 flex flex-col",
        className
      )}
      {...props}
    >
      <TextHeader className="mb-6">{header}</TextHeader>
      <div className="flex justify-between items-center">
        <div className="w-[28rem]">{children}</div>
        <div className="img relative w-[650px] min-h-[328px]">
          {projectVideo ? (
            <video
              ref={videoRef}
              src={projectVideo}
              className=" w-full h-full object-contain rounded-lg"
              autoPlay
              muted
            />
          ) : (
            <img src={loadImage} className=" w-full h-full object-contain rounded-lg" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
