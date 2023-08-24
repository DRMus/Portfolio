import SkillCircle from "./SkillCircle";
import TextHeader from "../templates/TextHeader";
import classNames from "classnames";

const SkillsGroup = () => {
  return (
    <div className="flex flex-col items-center">
      <TextHeader className={classNames("mb-16", "lg:hidden")}>Skills</TextHeader>
      <div className="flex flex-wrap gap-y-12 justify-around">
        <SkillCircle
          name="HTML"
          percent={80}
          gradientColorStart="#883715"
          gradientColorStop="#f16529"
        />
        <SkillCircle
          name="CSS"
          percent={70}
          gradientColorStart="#0070ba"
          gradientColorStop="#29a8e0"
        />
        <SkillCircle
          name="JS / TS"
          percent={50}
          gradientColorStart="#0070ba"
          gradientColorStop="#ffd500"
          gradientText
        />
        <SkillCircle
          name="React"
          percent={40}
          gradientColorStart="#287588"
          gradientColorStop="#61dbfb"
        />

        <SkillCircle
          name="C#"
          percent={15}
          gradientColorStart="#7e22ce"
          gradientColorStop="#A456E7"
        />
        <SkillCircle
          name="Node.Js"
          percent={15}
          gradientColorStart="#56861b"
          gradientColorStop="#83cd29"
        />
      </div>
    </div>
  );
};

export default SkillsGroup;
