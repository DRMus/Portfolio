import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IFAIconProps } from "../../../interfaces";
import { FC } from "react";

interface Props extends IFAIconProps {}

const NodeJsIcon: FC<Props> = ({ style, ...props }) => {
  return <FontAwesomeIcon icon={faNodeJs} style={{ color: "#83cd29" } || style} {...props} />;
};

export default NodeJsIcon;
