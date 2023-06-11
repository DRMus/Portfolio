import { createContext, useContext, useEffect, useMemo, useState } from "react";
import SkillCircle from "./SkillCircle";
import { AboutContextValues } from "../../contexts/AboutContext";
import { TObserverCallback } from "../../interfaces";

interface SkillCircleContext {
  isComponentInter: boolean;
}

export const SkillCircleContextValues = createContext<SkillCircleContext>({
  isComponentInter: false,
});

const SkillsGroup = () => {
  const { getSectionKey, addSectionCallBack } = useContext(AboutContextValues);

  const [isComponentInter, setIsComponentInter] = useState<boolean>(false);
  const sectionKey: number = useMemo(() => getSectionKey(), []);

  const sectionCallback: TObserverCallback = (state: boolean, intersectionRatio?: number) => {
    if (state && intersectionRatio && intersectionRatio > 0.2) {
      setIsComponentInter(true);
    }
  };

  useEffect(() => {
    addSectionCallBack(sectionCallback);
  }, []);

  const value: SkillCircleContext = {
    isComponentInter,
  };
  return (
    <div data-aboutsection={sectionKey} className="flex flex-wrap gap-y-8 justify-around">
      <SkillCircleContextValues.Provider value={value}>
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
      </SkillCircleContextValues.Provider>
    </div>
  );
};

export default SkillsGroup;
