import { FC } from "react";
import TextLabel from "../templates/TextLabel";
import TextParagraph from "../templates/TextParagraph";
import { calculateAge } from "../../utils/getYearsDifference";

import Photo from "../../assets/photo.jpg"

interface Props {
  label: string;
  paragraph: string;
}

const DescriptionPersonLine: FC<Props> = ({ label, paragraph }) => (
  <div className="flex gap-2 items-center">
    <TextLabel className="text-lg !m-0 w-20 text-right">{label}</TextLabel>
    <TextParagraph className="text-xl">{paragraph}</TextParagraph>
  </div>
);

const MyDescription = () => {
  return (
    <div className="flex flex-col items-center gap-y-6 w-1/3">
      <div className="img w-[280px] h-[280px] rounded-full border-4 border-portfolio-purple overflow-hidden shadow-portfolio-purple">
        <img src={Photo} alt="" className="object-contain"/>
      </div>
      <div className="w-fit space-y-1.5">
        <DescriptionPersonLine label="Name:" paragraph="Muslimov Damir" />
        <DescriptionPersonLine label="Age:" paragraph={calculateAge("06.17.2002").toString()} />
        <DescriptionPersonLine label="Location:" paragraph="Russia, Ulyanovsk" />
      </div>
    </div>
  );
};

export default MyDescription;
