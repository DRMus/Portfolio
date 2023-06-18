import { useContext, useEffect } from "react";
import SkillsGroup from "./SkillsGroup";
import { intersectionObserver } from "../../utils/intersectionObserver";
import { AboutContextValues } from "../../contexts/AboutContext";
import MyDescription from "./MyDescription";
import classNames from "classnames";

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
      <div
        className={classNames(
          "flex items-between gap-x-4",
          "md:max-lg:flex-col md:max-lg:gap-y-12 md:max-lg:items-center",
          "sm:max-md:flex-col sm:max-md:gap-y-16 sm:max-md:items-center",
        )}
      >
        <MyDescription />
        <SkillsGroup />
      </div>
    </div>
  );
};

export default AboutList;
