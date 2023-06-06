import Photo from "../../assets/photo.jpg";
import { useOutletContext } from "react-router";
import { TOutletContext } from "../../interfaces";
import PageSection from "../templates/PageSection";
import TextParagraph from "../templates/TextParagraph";

const AboutView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();

  return (
    <PageSection
      ref={viewBlockRef}
      className="COMP_AboutView w-full h-[2000px]"
      header={"About Me"}
    >
      <div className="">
        <TextParagraph>Muslimov Damir</TextParagraph>
        <TextParagraph>21 y/o</TextParagraph>
        <TextParagraph>Russia, Ulyanovsk</TextParagraph>
      </div>

      {/* <div>
        <img src={Photo} alt="MyPhoto" className="object-cover w-72 h-72 rounded-full" />
      </div> */}
    </PageSection>
  );
};

export default AboutView;
