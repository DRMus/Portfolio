import { FC, ReactNode, createContext, useMemo, useRef } from "react";
import { keyGenerator } from "../utils/keyGenerator";
import { TObserverAction, TObserverCallback } from "../interfaces";

interface Props {
  children: ReactNode;
}

interface AboutContext {
  onEntryObserver: TObserverAction;
  addSectionCallBack: (callback: TObserverCallback) => void;
  getSectionKey: () => number;
}

export const AboutContextValues = createContext<AboutContext>({
  getSectionKey: function (): number {
    throw new Error("Function not implemented.");
  },
  onEntryObserver: function (): void {
    throw new Error("Function not implemented.");
  },
  addSectionCallBack: function (): void {
    throw new Error("Function not implemented.");
  }
});

export const AboutContextProvider: FC<Props> = ({ children }) => {
  const sectionKeyGenerator = useMemo(() => keyGenerator(), []);

  const sectionCallbacks = useRef<TObserverCallback[]>([]);

  const getSectionKey = (): number => sectionKeyGenerator.next().value;

  const onEntryObserver: TObserverAction = (
    element: HTMLElement,
    changes: IntersectionObserverEntry,
    elementIndex: number
  ) => {
    // element.style.opacity = `${changes.intersectionRatio}`;
    // element.style.filter = `blur(${5 - changes.intersectionRatio * 5}px)`;
    try {
      sectionCallbacks.current[elementIndex](changes.isIntersecting, changes.intersectionRatio);
    } catch (e) {
      console.error(e);
    }
  };

  const addSectionCallBack = (callback: TObserverCallback) => {
    sectionCallbacks.current.push(callback);
  };

  const value: AboutContext = {
    onEntryObserver,
    addSectionCallBack,
    getSectionKey,
  };
  return <AboutContextValues.Provider value={value}>{children}</AboutContextValues.Provider>;
};
