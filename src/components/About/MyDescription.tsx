import { FC } from "react";
import TextLabel from "../templates/TextLabel";
import TextParagraph from "../templates/TextParagraph";
import { calculateAge } from "../../utils/getYearsDifference";

import Photo from "../../assets/photo.jpg";
import classNames from "classnames";

interface Props {
  label: string;
  paragraph: string;
}

const DescriptionPersonLine: FC<Props> = ({ label, paragraph }) => {
  const componentClassNames = {
    lineBlock: classNames(
      "flex items-center gap-2",
      "md:max-lg:flex-col md:max-lg:items-start md:max-lg:gap-0",
      "sm:max-md:flex-col sm:max-md:items-start sm:max-md:gap-0"
    ),
    label: classNames(
      "!m-0 w-20 text-right",
      "md:max-lg:w-auto md:max-lg:text-base",
      "sm:max-md:w-auto sm:max-md:text-base",
      "max-sm:w-auto max-sm:text-sm"
    ),
    paragraph: classNames("text-xl", "md:max-lg:text-2xl", "sm:max-md:text-xl", "max-sm:text-lg"),
  };
  return (
    <div className={componentClassNames.lineBlock}>
      <TextLabel className={componentClassNames.label}>{label}</TextLabel>
      <TextParagraph className={componentClassNames.paragraph}>{paragraph}</TextParagraph>
    </div>
  );
};

const MyDescription = () => {
  const componentClassNames = {
    infoBlock: classNames(
      "flex flex-col items-center gap-y-6 w-1/3",
      "md:max-lg:flex-row md:max-lg:w-full md:max-lg:px-5 md:max-lg:gap-x-10",
      "sm:max-md:flex-row sm:max-md:w-full sm:max-md:px-5 sm:max-md:gap-x-10 sm:max-md:justify-around",
      "max-sm:flex-col max-sm:w-full max-sm:px-5 max-sm:gap-x-10 max-sm:justify-center"
    ),
    image: classNames(
      "img w-[280px] h-[280px] rounded-full border-4 border-portfolio-purple overflow-hidden shadow-portfolio-purple",
      "md:max-lg:w-[250px] md:max-lg:h-[250px]",
      "sm:max-md:w-[250px] sm:max-md:h-[250px]",
      "max-sm:w-[250px] max-sm:h-[250px]"
    ),
    personInfoList: classNames(
      "w-fit space-y-1.5",
      "md:max-lg:flex md:max-lg:flex-col md:max-lg:gap-y-4",
      "sm:max-md:flex sm:max-md:flex-col sm:max-md:gap-y-4"
    ),
  };
  return (
    <div className={componentClassNames.infoBlock}>
      <div className={componentClassNames.image}>
        <img src={Photo} alt="" className="object-contain" />
      </div>
      <div className={componentClassNames.personInfoList}>
        <DescriptionPersonLine label="Name:" paragraph="Muslimov Damir" />
        <DescriptionPersonLine label="Age:" paragraph={calculateAge("06.17.2002").toString()} />
        <DescriptionPersonLine label="Location:" paragraph="Russia, Ulyanovsk" />
      </div>
    </div>
  );
};

export default MyDescription;
