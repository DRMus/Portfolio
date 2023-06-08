// import Photo from "../../assets/photo.jpg";
import { useOutletContext } from "react-router";
import { TObserverAction, TOutletContext } from "../../interfaces";
import PageSection from "../templates/PageSection";
import SkillsGroup from "./SkillsGroup";

const AboutView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();

  const observerAction: TObserverAction = (element: any, changes: IntersectionObserverEntry, elementIndex: number) => {
    
  }
  

  return (
    <PageSection
      ref={viewBlockRef}
      className="COMP_AboutView w-full h-[2000px]"
      header={"About Me"}
    >
      <SkillsGroup />
    </PageSection>
  );
};

export default AboutView;
