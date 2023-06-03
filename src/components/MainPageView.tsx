import { RefObject, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import HomeView from "./Home/HomeView";
import styles from "./MainPageView.module.scss";
import { MainContextValues } from "../contexts/MainContext";
import { scrollEvents } from "../utils/scrollEvents";
import classNames from "classnames";
import { Outlet, useLocation, useNavigationType, Location, useNavigate } from "react-router-dom";
import FooterMenu from "./MainFragments/Footer/FooterMenu";
import HeaderView from "./MainFragments/Header/HeaderView";
import { LOCATION_STATES } from "../utils/constants";

function initialConditionIsHomePage(location: Location, navigationType: string): boolean {
  return location.pathname !== "/" && location.state === "byNavBar" && navigationType === "POP"
    ? false
    : true;
}

const MainPageView = () => {
  const {
    isPageSelected,
    contentBlockOldHeight,
    isPageChanging,
    changeIsScrollAnimationPlaying,
    setContentBlockOldHeight,
  } = useContext(MainContextValues);

  const location = useLocation();
  const navigate = useNavigate();
  const navigationType = useNavigationType();

  const [isHomePageVisiable, setIsHomePageVisiable] = useState<boolean>(
    initialConditionIsHomePage(location, navigationType)
  );
  const [isPageDone, setIsPageDone] = useState<boolean>(true);

  const isScrollingToHomePageKey = useRef<boolean>(false);
  const viewBlockRef = useRef<HTMLElement>(null);
  const homeBlockRef = useRef<HTMLElement>(null);
  const mainBlockRef = useRef<HTMLElement>(null);
  const contentBlockRef = useRef<HTMLDivElement>(null);

  const scrolltoElement = (refElement: RefObject<HTMLElement>, callbackAfter: () => void) => {
    if (!refElement.current) {
      return;
    }

    location.state = "";

    refElement.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    let { disableScroll, enableScroll } = scrollEvents();

    setIsPageDone(false);
    changeIsScrollAnimationPlaying(true);
    disableScroll();
    setTimeout(() => {
      callbackAfter();
      changeIsScrollAnimationPlaying(false);
      setIsPageDone(true);
      enableScroll();
    }, 700);
  };

  const scrollToHomePage = () => {
    if (!mainBlockRef.current || !contentBlockRef.current || !contentBlockOldHeight.current) {
      throw new Error(
        `some block didn't find: \nmainBlockRef - ${mainBlockRef}\ncontentBlockRef - ${contentBlockRef}\ncontentBlockOldHeight - ${contentBlockOldHeight}`
      );
    }

    let oldHeight = contentBlockOldHeight.current;
    let newHeight = contentBlockRef.current.clientHeight;
    let scrollTop = mainBlockRef.current.scrollTop;

    let requiredScrollPosition = scrollTop + (newHeight - oldHeight);

    mainBlockRef.current.scrollTo(0, requiredScrollPosition);

    const callbackAfter = () => {
      isScrollingToHomePageKey.current = false;
      navigate("/");
    };

    scrolltoElement(homeBlockRef, callbackAfter);
  };

  const showHomePage = () => {
    isScrollingToHomePageKey.current = true;
    setIsHomePageVisiable(true);
  };

  const isHomePageCondition = (location: Location, navigationType: string) => {
    if (location.pathname === "/" && location.state !== LOCATION_STATES.BY_NAV_BAR) {
      setIsHomePageVisiable(true);
      return;
    }

    if (location.pathname !== "/" && location.state !== LOCATION_STATES.BY_NAV_BAR) {
      setIsHomePageVisiable(false);
      return;
    }

    if (
      location.pathname !== "/" &&
      location.state === LOCATION_STATES.BY_NAV_BAR &&
      navigationType === "POP"
    ) {
      setIsHomePageVisiable(false);
      return;
    }
  };

  useEffect(() => {
    isHomePageCondition(location, navigationType);

    if (location.state === LOCATION_STATES.BY_NAV_BAR) {
      const callbackAfter = () => {
        setIsHomePageVisiable(false);
      };
      scrolltoElement(viewBlockRef, callbackAfter);
    }
  }, [viewBlockRef, location]);

  useEffect(() => {
    if (isScrollingToHomePageKey.current) {
      scrollToHomePage();
    }
  }, [isHomePageVisiable]);

  useLayoutEffect(() => {
    if (!isPageChanging && isPageSelected && !isHomePageVisiable) {
      setContentBlockOldHeight(contentBlockRef);
      return;
    }

    if (!isScrollingToHomePageKey.current) {
      setContentBlockOldHeight(undefined);
      return;
    }
  }, [isPageChanging, isPageSelected, isHomePageVisiable]);

  const componentClassNames = {
    main: classNames("relative scroll-config w-full h-full ", {
      "overflow-hidden": !isPageDone,
      "overflow-auto": isPageDone,
    }),
    content: "content h-fit w-full",
    bgGradient: classNames(
      "transition-opacity duration-[400ms]",
      { "opacity-0": !isPageDone, "opacity-1": isPageDone },
      styles.gradientBackground
    ),
    contentSection: "w-full h-full",
  };

  

  return (
    <>
      {!isHomePageVisiable && <HeaderView goHome={showHomePage} />}
      <main className={componentClassNames.main} ref={mainBlockRef}>
        <div className={componentClassNames.bgGradient}></div>
        <div className={componentClassNames.content} ref={contentBlockRef}>
          <section className={componentClassNames.contentSection}>
            {isHomePageVisiable && <HomeView ref={homeBlockRef} />}
            {isPageSelected && <Outlet context={[viewBlockRef]} />}
          </section>
        </div>
        {isPageChanging && <div className={styles.gradientSlider}></div>}
      </main>
      {!isHomePageVisiable && <FooterMenu />}
    </>
  );
};

export default MainPageView;
