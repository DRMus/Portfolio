import classNames from "classnames";
import { FC, ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  fullSize?: boolean;
}

const ImageIcon: FC<Props> = ({ className, src, alt, fullSize, ...props }) => {
  return (
    <img
      className={classNames(
        { "h-[32px] w-[32px]": !fullSize, "h-full w-full": fullSize },
        className
      )}
      src={src}
      alt={alt ? alt : src}
      {...props}
    />
  );
};

export default ImageIcon;
