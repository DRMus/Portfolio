import classNames from "classnames";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const ProjectIconsList: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={classNames("flex gap-4", className)} {...props}>
      {children}
    </div>
  );
};

export default ProjectIconsList;
