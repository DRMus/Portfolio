import { useOutletContext } from "react-router";
import { TOutletContext } from "../../interfaces";
import PageSection from "../templates/PageSection";

const ContactsView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();
  
  return (
    <PageSection
      ref={viewBlockRef}
      className="COMP_ContactsView w-full flex justify-between items-center"
    >
      <div className="text space-y-2">
        <h1 className="text-portfolio-purple font-bold text-4xl">Contacts</h1>
        
      </div>
    </PageSection>
  );
};

export default ContactsView;
