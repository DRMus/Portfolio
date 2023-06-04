import { useOutletContext } from "react-router";
import { TOutletContext } from "../../interfaces";
import PageSection from "../templates/PageSection";
import BluredBlock from "../templates/BluredBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import { FC, ReactNode } from "react";

import "./ContactsView.scss";

interface ContactBlockProps {
  children?: ReactNode;
}

const ContactBlock: FC<ContactBlockProps> = ({ children }) => {
  return (
    <BluredBlock className="!w-fit vk-icon-bg" hoverSize="1x">
      <div className="h-full w-full p-8">{children}</div>
    </BluredBlock>
  );
};

const ContactsView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();

  return (
    <PageSection ref={viewBlockRef} className="COMP_ContactsView w-full" header={"Contacts"}>
      <div className="flex justify-evenly gap-4 w-full">
        <ContactBlock>
          <FontAwesomeIcon
            icon={faVk}
            size="5x"
            className="transition-colors duration-[350ms] text-gray-600 group-hover:text-portfolio-vk"
          />
        </ContactBlock>
        <ContactBlock>
          <FontAwesomeIcon
            icon={faVk}
            size="5x"
            className="transition-colors duration-[350ms] text-gray-600 group-hover:text-portfolio-vk"
          />
        </ContactBlock>
        <ContactBlock>
          <FontAwesomeIcon
            icon={faVk}
            size="5x"
            className="transition-colors duration-[350ms] text-gray-600 group-hover:text-portfolio-vk"
          />
        </ContactBlock>
        <ContactBlock>
          <FontAwesomeIcon
            icon={faVk}
            size="5x"
            className="transition-colors duration-[350ms] text-gray-600 group-hover:text-portfolio-vk"
          />
        </ContactBlock>
        <ContactBlock>
          <FontAwesomeIcon
            icon={faVk}
            size="5x"
            className="transition-colors duration-[350ms] text-gray-600 group-hover:text-portfolio-vk"
          />
        </ContactBlock>
      </div>
    </PageSection>
  );
};

export default ContactsView;
