import { useOutletContext } from "react-router";
import { faGithub, faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { TOutletContext } from "../../interfaces";
import ContactBlock from "./ContactBlock";
import PageSection from "../templates/PageSection";

import "./ContactsView.scss";

const ContactsView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();

  return (
    <PageSection ref={viewBlockRef} className="COMP_ContactsView w-full h-full flex items-center">
      <div className="flex flex-col items-center w-full">
        <div className="space-y-4 w-1/2">
          <ContactBlock
            icon={faVk}
            className="vk-icon-bg"
            iconClassName="group-hover:text-portfolio-vk"
            href="https://vk.com/flying_pig73/"
          />
          <ContactBlock
            icon={faTelegram}
            className="telegram-icon-bg"
            iconClassName="group-hover:text-portfolio-telegram"
          />
          <ContactBlock
            icon={faGithub}
            className="hover:bg-slate-200/20 hover:border-slate-200/50"
            iconClassName="group-hover:text-slate-200"
            href="https://github.com/DRMus/"
            title="DRMus"
          />
          <ContactBlock
            type="clipboard"
            icon={faEnvelope}
            className="hover:bg-yellow-500/20 hover:border-yellow-500/50"
            iconClassName="group-hover:text-yellow-500"
            title="ditrom7306@mail.ru"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default ContactsView;
