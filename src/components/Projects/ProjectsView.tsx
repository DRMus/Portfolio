import { useOutletContext } from "react-router";
import { TOutletContext } from "../../interfaces";
import PageSection from "../templates/PageSection";

import ProjectsList from "./ProjectsList";
import TextHeader from "../templates/TextHeader";

const ProjectsView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();

  return (
    <PageSection ref={viewBlockRef} className="COMP_ProjectsView w-full">
      <div className="mb-8">
        <TextHeader className="text-5xl ">Projects</TextHeader>
      </div>

      <ProjectsList />
    </PageSection>
  );
};

export default ProjectsView;
