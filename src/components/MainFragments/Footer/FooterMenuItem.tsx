import classNames from "classnames";
import { FC, HTMLAttributes, useContext, useState } from "react";
import { useNavigate, To, useLocation } from "react-router-dom";
import { MainContextValues } from "../../../contexts/MainContext";

interface Props extends HTMLAttributes<HTMLDivElement> {
  to: To;
}

const FooterMenuItem: FC<Props> = ({ to, children, className, onClick, ...props }) => {
  const { isPageChanging, mainBlockRef, changeIsPageChanging } = useContext(MainContextValues);

  const location = useLocation();
  const navigate = useNavigate();

  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handlerMouseClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (location.pathname.includes(to.toString()) || isPageChanging) {
      return;
    }

    setIsSelected(true);
    changeIsPageChanging(true);
    setTimeout(() => {
      navigate(to);
      mainBlockRef.current?.scrollTo(0, 0);
    }, 500);
    setTimeout(() => {
      changeIsPageChanging(false);
      setIsSelected(false);
    }, 1000);
    onClick && onClick(event);
  };
  return (
    <div
      className={classNames(
        "font-bold text-portfolio-white/30 text-2xl transition-all duration-300 cursor-pointer select-none",
        "group-hover:text-portfolio-white/70 hover:!text-portfolio-purple hover:!scale-[1.2]",
        {
          "!text-portfolio-purple/60": location.pathname.includes(to.toString()) || isSelected,
        },
        className
      )}
      onClick={handlerMouseClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default FooterMenuItem;
