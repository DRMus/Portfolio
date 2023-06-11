import { FC, ReactNode, createContext, useMemo, useRef } from "react";
import { TObserverAction, TObserverCallback } from "../interfaces";
import { keyGenerator } from "../utils/keyGenerator";

interface Props {
  children: ReactNode;
}

interface ProjectContext {
  addObserverAction: TObserverAction;
  addVideoVisibilityCallback: (callback: TObserverCallback) => void;
  getProjectKey: () => number;
}

export const ProjectContextValues = createContext<ProjectContext>({
  addObserverAction: function (): void {
    throw new Error("Function not implemented.");
  },
  addVideoVisibilityCallback: function (): void {
    throw new Error("Function not implemented.");
  },
  getProjectKey: function (): number {
    throw new Error("Function not implemented.");
  },
});

export const ProjectContextProvider: FC<Props> = ({ children }) => {
  const projectKeyGenerator = useMemo(() => keyGenerator(), []);

  const gifVisibilityCallBacks = useRef<TObserverCallback[]>([]);

  const addObserverAction: TObserverAction = (
    element: HTMLElement,
    changes: IntersectionObserverEntry,
    elementIndex: number
  ) => {
    element.style.opacity = `${changes.intersectionRatio}`;
    element.style.filter = `blur(${5 - changes.intersectionRatio * 5}px)`;

    try {
      gifVisibilityCallBacks.current[elementIndex](
        changes.isIntersecting,
        changes.intersectionRatio
      );
    } catch (e) {
      console.error(e);
    }
  };

  const getProjectKey = () => projectKeyGenerator.next().value;

  const addVideoVisibilityCallback = (callback: TObserverCallback) => {
    gifVisibilityCallBacks.current.push(callback);
  };

  const value: ProjectContext = {
    addObserverAction,
    addVideoVisibilityCallback,
    getProjectKey,
  };
  return <ProjectContextValues.Provider value={value}>{children}</ProjectContextValues.Provider>;
};
