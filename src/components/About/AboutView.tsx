// import Photo from "../../assets/photo.jpg";
import { useOutletContext } from "react-router";
import { TOutletContext } from "../../interfaces";
import PageSection from "../templates/PageSection";
import TextParagraph from "../templates/TextParagraph";
import SkillCircle from "./SkillCircle";


const AboutView = () => {
  const [viewBlockRef] = useOutletContext<TOutletContext>();



  return (
    <PageSection
      ref={viewBlockRef}
      className="COMP_AboutView w-full h-[2000px]"
      header={"About Me"}
    >
      <div className="">
        {/* <TextParagraph>Muslimov Damir</TextParagraph>
        <TextParagraph>21 y/o</TextParagraph>
        <TextParagraph>Russia, Ulyanovsk</TextParagraph> */}
        <SkillCircle index={1} percent={70} gradientColorStart="#2f8ca3" gradientColorStop="#61dbfb"/>
        <SkillCircle index={2} percent={100} gradientColorStart="#836d00" gradientColorStop="#ffd500"/>
      </div>



      {/* <div>
        <img src={Photo} alt="MyPhoto" className="object-cover w-72 h-72 rounded-full" />
      </div> */}
    </PageSection>
  );
};

export default AboutView;
