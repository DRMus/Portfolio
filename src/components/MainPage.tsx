import { MainContextProvider } from "../contexts/MainContext";
import { WelcomeAnimationContextProvider } from "../contexts/WelcomeAnimationContext";
import MainPageView from "./MainPageView";
const MainPage = () => {
  return (
    <MainContextProvider>
      <WelcomeAnimationContextProvider>
        <MainPageView />
      </WelcomeAnimationContextProvider>
    </MainContextProvider>
  );
};

export default MainPage;
