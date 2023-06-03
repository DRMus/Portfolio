import { useOutletContext } from "react-router";
import { TOutletContext } from "../../interfaces";
import PageSection from "../templates/PageSection";
import TextHeader from "../templates/TextHeader";

const ContactsView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();
  
  return (
    <PageSection
      ref={viewBlockRef}
      className="COMP_ContactsView w-full"
    >
      <div className="text space-y-2">
        <TextHeader>Contacts</TextHeader>
        
      </div>
    </PageSection>
  );
};

export default ContactsView;
