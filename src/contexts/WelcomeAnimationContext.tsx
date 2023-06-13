import { FC, ReactNode, createContext } from "react";

interface Props {
  children: ReactNode;
}

interface WelcomeAnimationContext {

}

export const WelcomeAnimationContextValues = createContext<WelcomeAnimationContext>({});


export const WelcomeAnimationContextProvider: FC<Props> = ({children}) => {
  const value: WelcomeAnimationContext = {

  }
  return (
    <WelcomeAnimationContextValues.Provider value={value}>
      {children}
    </WelcomeAnimationContextValues.Provider>
  )
}