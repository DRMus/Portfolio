import { FC, HTMLAttributes, useEffect, useMemo, useContext, useRef, useState } from "react";

import classNames from "classnames";
import TextHeader from "../templates/TextHeader";
import { ProjectContextValues } from "../../contexts/ProjectContext";

interface Props extends HTMLAttributes<HTMLDivElement> {
  header: string;
  video?: string;
  loadImage?: string;
}

const ProjectSection: FC<Props> = ({ children, className, video, loadImage, header, ...props }) => {
  const { addVideoVisibilityCallback, getProjectKey } = useContext(ProjectContextValues);

  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const projectKey = useMemo<number>(() => getProjectKey(), []);

  const changeVideoVisibility = (state: boolean) => {
    if (!videoRef.current || !videoRef.current.src.includes(".mp4")) {
      return;
    }
    videoRef.current.click();

    if (state) {
      videoRef.current.paused && videoRef.current.play();
    } else {
      !videoRef.current.paused && videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const onVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    addVideoVisibilityCallback(changeVideoVisibility);
  }, []);

  const componentClassNames = {
    section: classNames(
      "group project-animate transition-all duration-[400ms] w-full py-24 flex flex-col",
      "max-xl:py-20",
      "max-lg:py-16",
      "max-md:py-12",
      className
    ),
    header: classNames(
      "mb-6",
      "lg:max-xl:text-3xl",
      "max-lg:text-center max-lg:text-5xl",
      "max-md:text-4xl",
      "max-sm:text-2xl"
    ),
    description: classNames("flex justify-between gap-x-6 items-center", "max-lg:flex-col-reverse"),
    descriptionText: classNames(
      "w-[28rem]",
      "max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:w-[70%]",
      "max-md:w-[80%]",
      "max-sm:w-[90%]"
    ),
    previewSection: classNames(
      "img relative w-[650px] min-h-[328px]",
      "lg:max-xl:w-[500px] lg:max-xl:min-h-[278px]",
      "max-lg:w-[530px] max-lg:min-h-[128px] max-lg:my-10",
      "max-md:w-[450px] max-md:min-h-[128px]",
      "max-sm:w-[300px] max-sm:min-h-[128px] max-sm:my-4"
    ),
    image: classNames("w-full h-full rounded-lg", {
      "object-fill": !isVideoLoaded,
      "object-contain": isVideoLoaded,
    }),
  };
  return (
    <div data-projectscrollanimate={projectKey} className={componentClassNames.section} {...props}>
      <TextHeader className={componentClassNames.header}>{header}</TextHeader>
      <div className={componentClassNames.description}>
        <div className={componentClassNames.descriptionText}>{children}</div>
        <div className={componentClassNames.previewSection}>
          <video
            ref={videoRef}
            src={video}
            className={componentClassNames.image}
            autoPlay
            muted
            loop
            poster={loadImage}
            onLoadedData={onVideoLoaded}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
