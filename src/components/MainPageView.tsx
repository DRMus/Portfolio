import { RefObject, createRef, useContext, useEffect, useState } from "react";
import HomeView from "./Home/HomeView";
import styles from "./MainPageView.module.scss";
import { MainContextValues } from "../contexts/MainContext";
import { scrollEvents } from "../utils/scrollEvents";
import classNames from "classnames";
import { Outlet, useLocation, useNavigationType, Location } from "react-router-dom";
import FooterMenu from "./MainFragments/Footer/FooterMenu";
import HeaderView from "./MainFragments/Header/HeaderView";

const MainPageView = () => {
  const { isPageSelected } = useContext(MainContextValues);
  const location = useLocation();
  const navigationType = useNavigationType();

  const [isHomePageVisiable, setIsHomePageVisiable] = useState<boolean>(
    location.pathname !== "/" && location.state === "byNavBar" && navigationType === "POP"
      ? false
      : true
  );

  const viewBlockRef = createRef<HTMLElement>();

  const scrolltoElement = (refElement: RefObject<HTMLElement>) => {
    if (!refElement.current) {
      return;
    }

    refElement.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    let { disableScroll, enableScroll } = scrollEvents();

    disableScroll();
    setTimeout(() => {
      setIsHomePageVisiable(false);
      enableScroll();
    }, 700);
  };

  const isHomePageCondition = (location: Location, navigationType: string) => {
    if (location.pathname === "/" && location.state !== "byNavBar") {
      setIsHomePageVisiable(true);
      return;
    }

    if (location.pathname !== "/" && location.state !== "byNavBar") {
      setIsHomePageVisiable(false);
      return;
    }

    if (location.pathname !== "/" && location.state === "byNavBar" && navigationType === "POP") {
      setIsHomePageVisiable(false);
      return;
    }
  };

  useEffect(() => {
    isHomePageCondition(location, navigationType);

    if (location.state === "byNavBar") {
      scrolltoElement(viewBlockRef);
    }
  }, [viewBlockRef, location]);

  return (
    <>
      {!isHomePageVisiable && <HeaderView />}
      <main className={classNames("relative scroll-config w-full h-full overflow-auto")}>
        <div className={styles.gradientBackground}></div>
        <section className="w-full h-full">
          {isHomePageVisiable && <HomeView />}
          {isPageSelected && <Outlet context={[viewBlockRef]} />}
        </section>
      </main>
      {!isHomePageVisiable && <FooterMenu />}
    </>
  );
};

export default MainPageView;
