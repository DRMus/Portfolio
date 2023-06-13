import { FC, ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface WelcomeAnimationContext {
  isWelcomeAnimationPlaying: boolean;
  changeIsWelcomeAnimationPlaying: (state: boolean) => void;
}

export const WelcomeAnimationContextValues = createContext<WelcomeAnimationContext>({
  isWelcomeAnimationPlaying: false,
  changeIsWelcomeAnimationPlaying: function (): void {
    throw new Error("Function not implemented.");
  }
});


export const WelcomeAnimationContextProvider: FC<Props> = ({children}) => {
  const [isWelcomeAnimationPlaying, setIsWelcomeAnimationPlaying] = useState<boolean>(false);

  const changeIsWelcomeAnimationPlaying = (state: boolean) => {
    setIsWelcomeAnimationPlaying(state);
  }
  const value: WelcomeAnimationContext = {
    isWelcomeAnimationPlaying,
    changeIsWelcomeAnimationPlaying
  }
  return (
    <WelcomeAnimationContextValues.Provider value={value}>
      {children}
    </WelcomeAnimationContextValues.Provider>
  )
}