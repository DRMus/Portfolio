import { FC, ReactNode, createContext, useRef } from "react";
import { TObserverAction } from "../interfaces";

type TGifCallback = (state: boolean) => void;

interface Props {
  children: ReactNode;
}

interface ProjectContext {
  addObserverAction: TObserverAction;
  addGifVisibilityCallback: (callback: TGifCallback) => void;
}

export const ProjectContextValues = createContext<ProjectContext>({
  addObserverAction: function (): void {
    throw new Error("Function not implemented.");
  },
  addGifVisibilityCallback: function (): void {
    throw new Error("Function not implemented.");
  },
});

export const ProjectContextProvider: FC<Props> = ({ children }) => {
  const gifVisibilityCallBacks = useRef<TGifCallback[]>([]);

  const addObserverAction: TObserverAction = (
    element: HTMLElement,
    changes: IntersectionObserverEntry,
    elementIndex: number
  ) => {
    element.style.opacity = `${changes.intersectionRatio}`;
    element.style.filter = `blur(${5 - changes.intersectionRatio * 5}px)`;
    try {
      gifVisibilityCallBacks.current[elementIndex](changes.isIntersecting);
    } catch {
      console.error(elementIndex);
    }
  };

  const addGifVisibilityCallback = (callback: TGifCallback) => {
    gifVisibilityCallBacks.current.push(callback);
  };

  const value: ProjectContext = {
    addObserverAction,
    addGifVisibilityCallback,
  };
  return <ProjectContextValues.Provider value={value}>{children}</ProjectContextValues.Provider>;
};
