import { useOutletContext } from "react-router";
import { TOutletContext } from "../../interfaces";
import PageSection from "../templates/PageSection";

import ProjectsList from "./ProjectsList";

const ProjectsView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();

  return (
    <PageSection ref={viewBlockRef} className="COMP_ProjectsView w-full" header={"Projects"}>
      <ProjectsList />
    </PageSection>
  );
};

export default ProjectsView;
