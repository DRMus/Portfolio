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
      }, 350);
    }, 1050);
  };

  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (props.type === "clipboard" && props.title) {
      event.preventDefault();
      copyToClipBoard(props.title);
    }
  };

  const componentClassNames = {
    a: classNames("flex select-text gap-4 items-center h-full w-full px-4 py-2", {
      "hideElement opacity-0": isAnimationRising && isCopiedViewVisible && props.type === "clipboard",
      "showElement opacity-1": !isAnimationRising && isCopiedViewVisible && props.type === "clipboard",
    }),
    icon: classNames("transition-colors duration-[350ms] text-gray-500", props.iconClassName),
    paragraph: classNames(
      "transition-colors duration-[350ms] text-gray-500 grow text-center !font-bold",
      props.iconClassName
    ),
    copiedHeader: classNames("absolute top-0 left-0 right-0 bottom-0 flex grid place-items-center select-none", {
      "hideElement opacity-0": !isAnimationRising && props.type === "clipboard",
      "showElement opacity-1": isAnimationRising && props.type === "clipboard",
    })
  };
  return (
    <BluredBlock className={classNames("relative", props.className)} hoverSize="1x" hoverLight="3x">
      <a
        href={props.href || "#"}
        className={componentClassNames.a}
        target="_blank"
        onClick={onClick}
      >
        {children ? (
          children
        ) : (
          <>
            <FontAwesomeIcon
              icon={props.icon || faXmark}
              size="3x"
              className={componentClassNames.icon}
            />
            <TextParagraph deleteColor className={componentClassNames.paragraph}>
              {props.title ? props.title : props.href}
            </TextParagraph>
          </>
        )}
      </a>
      {props.type === "clipboard" && isCopiedViewVisible && (
        <div className={componentClassNames.copiedHeader}>
          <TextHeader deleteColor className={componentClassNames.icon + " text-3xl"}>
            Copied!
          </TextHeader>
        </div>
      )}
    </BluredBlock>
  );
};

export default ContactBlock