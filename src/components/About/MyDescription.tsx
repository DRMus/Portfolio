import { FC } from "react";
import TextLabel from "../templates/TextLabel";
import TextParagraph from "../templates/TextParagraph";

interface Props {
  label: string;
  paragraph: string;
}

const DescriptionPersonLine: FC<Props> = ({ label, paragraph }) => (
  <div className="flex gap-1.5 items-center">
    <TextLabel className="text-base !m-0 w-16 text-right">{label}</TextLabel>
    <TextParagraph className="text-xl">{paragraph}</TextParagraph>
  </div>
);

const MyDescription = () => {
  return (
    <div className="flex flex-col items-center gap-y-6 w-1/3">
      <div className="img w-[280px] h-[280px] bg-gray-500 rounded-full"></div>
      <div className="w-fit space-y-1">
        <DescriptionPersonLine label="Name:" paragraph="Muslimov Damir" />
        <DescriptionPersonLine label="Age:" paragraph="21" />
        <DescriptionPersonLine label="Location:" paragraph="Russia, Ulyanovsk" />
      </div>
    </div>
  );
};

export default MyDescription;
