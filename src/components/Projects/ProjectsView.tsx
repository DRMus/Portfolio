import { useOutletContext } from "react-router";
import { TOutletContext } from "../../interfaces";
import PageSection from "../templates/PageSection";

import ProjectsList from "./ProjectsList";
import { ProjectContextProvider } from "../../contexts/ProjectContext";

const ProjectsView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();

  return (
    <ProjectContextProvider>
      <PageSection ref={viewBlockRef} className="COMP_ProjectsView w-full" header={"Projects"}>
        <ProjectsList />
      </PageSection>
    </ProjectContextProvider>
  );
};

export default ProjectsView;
