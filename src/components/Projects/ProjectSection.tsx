import { FC, HTMLAttributes } from "react";

import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  image?: string;
}

const ProjectSection: FC<Props> = ({ children, className, image, ...props }) => {
  return (
    <div className={classNames("group w-full py-32 flex justify-between items-center", className)} {...props}>
      <div className="w-[28rem]">{children}</div>
      <div className="img relative">
        <img src={image} alt={image} className="w-[650px] h-fit object-fit" />
        <div className="absolute top-0 bottom-0 right-0 left-0 transition-opacity duration-200 backdrop-blur-[1px] backdrop-grayscale group-hover:opacity-0"></div>
      </div>
    </div>
  );
};

export default ProjectSection;
