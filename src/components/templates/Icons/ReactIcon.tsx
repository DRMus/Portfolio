import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { IFAIconProps } from "../../../interfaces";

interface Props extends IFAIconProps {}

const ReactIcon: FC<Props> = ({ style, ...props }) => {
  return <FontAwesomeIcon icon={faReact} style={{ color: "#61dbfb" } || style} {...props} />;
};

export default ReactIcon;
