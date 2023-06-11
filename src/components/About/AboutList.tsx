import { useContext, useEffect } from "react";
import SkillsGroup from "./SkillsGroup";
import { intersectionObserver } from "../../utils/intersectionObserver";
import { AboutContextValues } from "../../contexts/AboutContext";

const AboutList = () => {
  const { onEntryObserver } = useContext(AboutContextValues);

  useEffect(() => {
    const observer = intersectionObserver("aboutsection", onEntryObserver);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div>
      <SkillsGroup />
    </div>
  );
};

export default AboutList;
