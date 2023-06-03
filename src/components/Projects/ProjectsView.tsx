import { useOutletContext } from "react-router";
import { TOutletContext } from "../../interfaces";
import PageSection from "../templates/PageSection";

import ProjectsList from "./ProjectsList";
import TextHeader from "../templates/TextHeader";

const ProjectsView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();

  return (
    <PageSection
      ref={viewBlockRef}
      className="COMP_ProjectsView w-full"
    >
      {/* <TextHeader className="text-4xl">Projects</TextHeader> */}
      
        <ProjectsList/>
      
    </PageSection>
  );
};

export default ProjectsView;
