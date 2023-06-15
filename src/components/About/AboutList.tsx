import { useContext, useEffect } from "react";
import SkillsGroup from "./SkillsGroup";
import { intersectionObserver } from "../../utils/intersectionObserver";
import { AboutContextValues } from "../../contexts/AboutContext";
import MyDescription from "./MyDescription";

const AboutList = () => {
  const { onEntryObserver } = useContext(AboutContextValues);

  useEffect(() => {
    const observer = intersectionObserver("aboutsection", onEntryObserver);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="space-y-24">
      <div className="flex items-between gap-4">
        <MyDescription />
        <SkillsGroup />
      </div>
      {/* <SkillsGroup /> */}
    </div>
  );
};

export default AboutList;
