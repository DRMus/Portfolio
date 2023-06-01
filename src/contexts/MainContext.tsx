import { FC, ReactNode, RefObject, createContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface MainContext {
  isPageSelected: boolean;
  isScrollAnimationPlaying: boolean;
  isPageChanging: boolean;
  contentBlockOldHeight: RefObject<number>;
  showSelectedPage: (state: boolean) => void;
  changeIsScrollAnimationPlaying: (state: boolean) => void;
  changeIsPageChanging: (state: boolean) => void;
  setContentBlockOldHeight: (ref: RefObject<HTMLDivElement> | undefined) => void;
}

export const MainContextValues = createContext<MainContext>({
  isPageSelected: false,
  isScrollAnimationPlaying: false,
  isPageChanging: false,
  contentBlockOldHeight: { current: -1 },
  showSelectedPage: function (): void {
    throw new Error("Function not implemented.");
  },
  setContentBlockOldHeight: function () {
    throw new Error("Function not implemented.");
  },
  changeIsScrollAnimationPlaying: function (): void {
    throw new Error("Function not implemented.");
  },
  changeIsPageChanging: function (): void {
    throw new Error("Function not implemented.");
  }
});

export const MainContextProvider: FC<Props> = ({ children }) => {
  const [isPageSelected, setIsPageSelected] = useState<boolean>(false);
  const [isScrollAnimationPlaying, setIsScrollAnimationPlaying] = useState<boolean>(false);
  const [isPageChanging, setIsPageChanging] = useState<boolean>(false);

  const contentBlockOldHeight = useRef<number>(-1);

  const location = useLocation();

  const showSelectedPage = (state: boolean) => {
    setIsPageSelected(state);
  };

  const changeIsScrollAnimationPlaying = (state: boolean) => {
    setIsScrollAnimationPlaying(state);
  };

  const changeIsPageChanging = (state: boolean) => {
    setIsPageChanging(state)
  }

  const setContentBlockOldHeight = (ref: RefObject<HTMLDivElement> | undefined) => {
    if (!ref) {
      contentBlockOldHeight.current = -1;
      return;
    }
    if (!ref.current) {
      return;
    }
    contentBlockOldHeight.current = ref.current.clientHeight;
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      showSelectedPage(true);
    } else {
      showSelectedPage(false);
    }
  }, [location]);

  const value: MainContext = {
    isPageSelected,
    isScrollAnimationPlaying,
    isPageChanging,
    contentBlockOldHeight,
    showSelectedPage,
    changeIsScrollAnimationPlaying,
    changeIsPageChanging,
    setContentBlockOldHeight,
  };

  return <MainContextValues.Provider value={value}>{children}</MainContextValues.Provider>;
};
