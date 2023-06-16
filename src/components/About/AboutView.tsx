// import Photo from "../../assets/photo.jpg";
import { useOutletContext } from "react-router";
import { TOutletContext } from "../../interfaces";
import PageSection from "../templates/PageSection";
import AboutList from "./AboutList";
import { AboutContextProvider } from "../../contexts/AboutContext";

const AboutView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();

  return (
    <PageSection
      ref={viewBlockRef}
      className="COMP_AboutView w-full"
      header={"About Me"}
    >
      <AboutContextProvider>
        <AboutList />
      </AboutContextProvider>
    </PageSection>
  );
};

export default AboutView;
