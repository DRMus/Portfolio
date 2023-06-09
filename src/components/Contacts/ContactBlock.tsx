import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { ReactNode, FC, useState, useRef } from "react";
import BluredBlock from "../templates/BluredBlock";
import TextHeader from "../templates/TextHeader";
import TextParagraph from "../templates/TextParagraph";

import "./ContactsView.scss";

interface ContactBlockProps {
  type?: "clipboard";
  children?: ReactNode;
  icon?: IconProp;
  iconClassName?: string;
  className?: string;
  href?: string;
  title?: string;
}

const ContactBlock: FC<ContactBlockProps> = ({ children, ...props }) => {
  const [isCopiedViewVisible, setIsCopiedViewVisible] = useState<boolean>(false);
  const [isAnimationRising, setIsAnimationRising] = useState<boolean>(false);

  const [isClipBoard, _] = useState(props.type === "clipboard");

  const copyViewTimeout = useRef<[number, number]>([-1, -1]);

  const copyToClipBoard = (text: string) => {
    if (copyViewTimeout.current[0] !== -1 || copyViewTimeout.current[1] !== -1) {
      clearTimeout(copyViewTimeout.current[0]);
      clearTimeout(copyViewTimeout.current[1]);
    }

    navigator.clipboard.writeText(text);
    setIsCopiedViewVisible(true);
    setIsAnimationRising(true);

    copyViewTimeout.current[0] = setTimeout(() => {
      setIsAnimationRising(false);
      copyViewTimeout.current[0] = -1;
      copyViewTimeout.current[1] = setTimeout(() => {
        setIsCopiedViewVisible(false);
        copyViewTimeout.current[1] = -1;
      }, 250);
    }, 1050);
  };

  const onClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (isClipBoard && props.title) {
      event.preventDefault();
      copyToClipBoard(props.title);
    }
  };

  const componentClassNames = {
    a: classNames("flex select-text gap-4 items-center h-full w-full px-4 py-2", "max-md:p-6", {
      "hideElement opacity-0": isAnimationRising && isCopiedViewVisible && isClipBoard,
      "showElement opacity-1": !isAnimationRising && isCopiedViewVisible && isClipBoard,
    }),
    icon: classNames(
      "transition-colors duration-[350ms] text-gray-500 text-5xl",
      "max-md:text-7xl max-md:w-full",
      "max-sm:text-6xl",
      props.iconClassName
    ),
    paragraph: classNames(
      "transition-colors duration-[350ms] text-gray-500 grow text-center !font-bold",
      "max-lg:text-xl",
      "max-md:hidden",
      props.iconClassName
    ),
    copiedHeader: classNames(
      "absolute top-0 left-0 right-0 bottom-0 flex grid place-items-center text-center select-none",
      {
        "hideElement opacity-0": !isAnimationRising && isClipBoard,
        "showElement opacity-1": isAnimationRising && isClipBoard,
      }
    ),
  };
  return (
    <BluredBlock
      className={classNames("relative", "max-md:w-auto", props.className)}
      hoverSize="2x"
      hoverLight="2x"
      onClick={onClick}
    >
      <a href={props.href || "#"} className={componentClassNames.a} target="_blank">
        {children ? (
          children
        ) : (
          <>
            <FontAwesomeIcon icon={props.icon || faXmark} className={componentClassNames.icon} />
            <TextParagraph deleteColor className={componentClassNames.paragraph}>
              {props.title ? props.title : props.href}
            </TextParagraph>
          </>
        )}
      </a>
      {isClipBoard && isCopiedViewVisible && (
        <div className={componentClassNames.copiedHeader}>
          <TextHeader deleteStyles className={componentClassNames.icon + " !text-xl"}>
            Copied!
          </TextHeader>
        </div>
      )}
    </BluredBlock>
  );
};

export default ContactBlock;
