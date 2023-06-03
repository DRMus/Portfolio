import Photo from "../../assets/photo.jpg";
import { useOutletContext } from "react-router";
import { TOutletContext } from "../../interfaces";
import PageSection from "../templates/PageSection";
import TextHeader from "../templates/TextHeader";

const AboutView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();
  
  return (
    <PageSection
      ref={viewBlockRef}
      className="COMP_AboutView w-full"
    >
      <div className="text space-y-2">
        <TextHeader>About Me</TextHeader>
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
