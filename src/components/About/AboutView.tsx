import Photo from "../../assets/photo.jpg";
import { useOutletContext } from "react-router";
import { TOutletContext } from "../../interfaces";
import PageSection from "../templates/PageSection";

const AboutView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();
  
  return (
    <PageSection
      ref={viewBlockRef}
      className="COMP_AboutView h-portfolio-block w-full flex justify-between items-center"
    >
      <div className="text space-y-2">
        <h1 className="text-portfolio-purple font-bold text-4xl">About Me</h1>
        <div className="text-2xl text-portfolio-white font-medium">
          <p>Muslimov Damir</p>
          <p>21 y/o</p>
          <p>Ulyanovsk, Russia</p>
        </div>
      </div>
      {/* <div>
        <img src={Photo} alt="MyPhoto" className="object-cover w-72 h-72 rounded-full" />
      </div> */}
    </PageSection>
  );
};

export default AboutView;
