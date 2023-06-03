import classNames from "classnames";
import { FC, ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

const ImageIcon: FC<Props> = ({ className, src, alt, ...props }) => {
  return (
    <img
      className={classNames("h-[32px] w-[32px]", className)}
      src={src}
      alt={alt ? alt : src}
      {...props}
    />
  );
};

export default ImageIcon;
