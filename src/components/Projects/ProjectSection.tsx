import { FC, HTMLAttributes } from "react";

import classNames from "classnames";
import TextHeader from "../templates/TextHeader";

interface Props extends HTMLAttributes<HTMLDivElement> {
  header: string;
  image?: string;
}

const ProjectSection: FC<Props> = ({ children, className, image, header, ...props }) => {
  return (
    <div
      className={classNames(
        "group w-full py-24 flex flex-col",
        className
      )}
      {...props}
    >
      <TextHeader className="mb-6">{header}</TextHeader>
      <div className="flex justify-between items-center">
        <div className="w-[28rem]">{children}</div>
        <div className="img relative">
          <img src={image} alt={image} className="w-[650px] h-fit object-contain rounded-lg" />
          <div className="absolute top-0 bottom-0 right-0 left-0 transition-opacity duration-300 backdrop-blur-[1px] rounded-lg backdrop-grayscale bg-portfolio-purple-dark/30 group-hover:opacity-0"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
