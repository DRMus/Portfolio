import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { IFAIconProps } from "../../../interfaces";

interface Props extends IFAIconProps {}

const JSIcon: FC<Props> = ({ style, ...props }) => {
  return <FontAwesomeIcon icon={faJsSquare} style={{ color: "#ffd500" } || style} {...props} />;
};

export default JSIcon;
