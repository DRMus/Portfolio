import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface MainContext {
  isPageSelected:boolean;
  showSelectedPage: (state: boolean) => void;
}

export const MainContextValues = createContext<MainContext>({
  isPageSelected: false,
  showSelectedPage: function (): void {
    throw new Error("Function not implemented.");
  }
})

export const MainContextProvider: FC<Props> = ({children}) => {
  const [isPageSelected, setIsPageSelected] = useState<boolean>(false);

  const location = useLocation()

  const showSelectedPage = (state: boolean) => {
    setIsPageSelected(state);
  }

  useEffect(() => {
    if (location.pathname !== "/") {
      showSelectedPage(true);
    } else {
      showSelectedPage(false)
    }
  }, [location])
  const value = {
    isPageSelected,
    showSelectedPage
  }
  return (
    <MainContextValues.Provider value={value}>
      {children}
    </MainContextValues.Provider>
  )
}