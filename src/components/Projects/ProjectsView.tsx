import { useOutletContext } from "react-router";
import { TOutletContext } from "../../interfaces";
import PageSection from "../templates/PageSection";

const ProjectsView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();
  
  return (
    <PageSection
      ref={viewBlockRef}
      className="COMP_ProjectsView w-full flex justify-between items-center"
    >
      <div className="text space-y-2">
        <h1 className="text-portfolio-purple font-bold text-4xl">Projects</h1>
        
      </div>
    </PageSection>
  );
};

export default ProjectsView;
