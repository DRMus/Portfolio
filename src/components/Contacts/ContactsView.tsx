import { useOutletContext } from "react-router";
import { faGithub, faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { TOutletContext } from "../../interfaces";
import ContactBlock from "./ContactBlock";
import PageSection from "../templates/PageSection";

import "./ContactsView.scss";
import classNames from "classnames";

const ContactsView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();

  return (
    <PageSection ref={viewBlockRef} className="COMP_ContactsView w-full h-full flex items-center max-md:pt-[100px]">
      <div className="flex flex-col items-center w-full">
        <div
          className={classNames(
            "space-y-4 w-1/2",
            "max-md:flex max-md:justify-center max-md:items-center max-md:flex-wrap max-md:space-y-0 max-md:w-full max-md:gap-6",
          )}
        >
          <ContactBlock
            icon={faVk}
            className="vk-icon-bg"
            iconClassName="lg:group-hover:text-portfolio-vk max-md:text-portfolio-vk"
            href="https://vk.com/flying_pig73/"
          />
          <ContactBlock
            icon={faTelegram}
            className="telegram-icon-bg"
            iconClassName="lg:group-hover:text-portfolio-telegram max-md:text-portfolio-telegram"
            href="https://t.me/Smochello/"
            title="@Smochello"
          />
          <ContactBlock
            icon={faGithub}
            className="lg:hover:bg-slate-200/20 lg:hover:border-slate-200/50 github-icon-bg max-md:bg-slate-200/20 max-md:border-slate-200/50"
            iconClassName="lg:group-hover:text-slate-200 max-md:text-slate-200"
            href="https://github.com/DRMus/"
            title="DRMus"
          />
          <ContactBlock
            type="clipboard"
            icon={faEnvelope}
            className="lg:hover:bg-yellow-500/20 lg:hover:border-yellow-500/50 email-icon-bg max-md:bg-yellow-500/20 max-md:border-yellow-500/50"
            iconClassName="lg:group-hover:text-yellow-500 max-md:text-yellow-500"
            title="damirmus.jobs@gmail.com"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default ContactsView;
