import { FC, HTMLAttributes, useEffect, useMemo, useState } from "react";

import classNames from "classnames";
import TextHeader from "../templates/TextHeader";

interface Props extends HTMLAttributes<HTMLDivElement> {
  header: string;
  image?: string;
  loadImage?: string;
}

const ProjectSection: FC<Props> = ({ children, className, image, loadImage, header, ...props }) => {
  const [projectImage, setProjectImage] = useState<string>("");
  const worker = useMemo(
    () => new Worker(new URL("../../utils/blobToBase64Worker.ts", import.meta.url)),
    []
  );

  const getGifImage = (image: string) => {
    fetch(image || "")
      .then((res) => res.blob())
      .then((res) => {
        if (window.Worker) {
          worker.postMessage(res);

          worker.onmessage = (message) => {
            setProjectImage(message.data);
          };
        }
      });
  };

  useEffect(() => {
    if (image) {
      getGifImage(image);
    }
  }, [worker]);
  return (
    <div className={classNames("group w-full py-24 flex flex-col", className)} {...props}>
      <TextHeader className="mb-6">{header}</TextHeader>
      <div className="flex justify-between items-center">
        <div className="w-[28rem]">{children}</div>
        <div className="img relative w-[650px] h-[328px]">
          <img
            src={projectImage ? projectImage : loadImage}
            alt={image}
            className=" w-full h-full object-contain rounded-lg"
          />
          <div className="absolute top-0 bottom-0 right-0 left-0 transition-opacity duration-300 backdrop-blur-[1px] rounded-lg backdrop-grayscale bg-portfolio-purple-dark/30 group-hover:opacity-0"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
