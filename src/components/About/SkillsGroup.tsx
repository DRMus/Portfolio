import SkillCircle from "./SkillCircle";

const SkillsGroup = () => {
  return (
    <div className="skillCircles flex flex-wrap gap-y-8 justify-around">
      <SkillCircle
        name="React"
        percent={60}
        gradientColorStart="#287588"
        gradientColorStop="#61dbfb"
      />
      <SkillCircle
        name="JavaScript"
        percent={60}
        gradientColorStart="#836d00"
        gradientColorStop="#ffd500"
      />
      <SkillCircle
        name="C#"
        percent={25}
        gradientColorStart="#7e22ce"
        gradientColorStop="#A456E7"
      />
      <SkillCircle
        name="Node.Js"
        percent={100}
        gradientColorStart="#56861b"
        gradientColorStop="#83cd29"
      />
      <SkillCircle
        name="HTML"
        percent={100}
        gradientColorStart="#883715"
        gradientColorStop="#f16529"
      />
      <SkillCircle
        name="CSS"
        percent={100}
        gradientColorStart="#0070ba"
        gradientColorStop="#29a8e0"
      />
    </div>
  );
};

export default SkillsGroup;
