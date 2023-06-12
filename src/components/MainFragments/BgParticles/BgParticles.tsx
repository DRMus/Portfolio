import { useCallback, useContext} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { RecursivePartial, IOptions, Engine, Container } from "tsparticles-engine";

import "./BgParticles.scss";
import { MainContextValues } from "../../../contexts/MainContext";

const options: RecursivePartial<IOptions> = {
  fullScreen: {
    enable: false,
  },
  fpsLimit: 60,
  particles: {
    groups: {
      z5000: {
        number: {
          value: 70,
        },
        zIndex: {
          value: 5000,
        },
      },
      z7500: {
        number: {
          value: 30,
        },
        zIndex: {
          value: 75,
        },
      },
      z2500: {
        number: {
          value: 50,
        },
        zIndex: {
          value: 25,
        },
      },
      z1000: {
        number: {
          value: 40,
        },
        zIndex: {
          value: 10,
        },
      },
    },
    number: {
      value: 300,
      density: {
        enable: false,
        value_area: 800,
      },
    },
    color: {
      value: "#adadad",
      animation: {
        enable: false,
        speed: 20,
        sync: true,
      },
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: false,
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2.5,
    },
    move: {
      angle: {
        value: 50,
        offset: 0,
      },
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: true,
      outModes: {
        default: "out",
      },
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    zIndex: {
      value: 5,
      opacityRate: 0.5,
    },
  },
  detectRetina: true,
  background: {
    color: "#0d0d0d",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};

const BgParticles= () => {
  const {  } = useContext(MainContextValues);
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
    
  }, []);

  return (
    <div style={{ height: `100%`, width: "100%", position: "fixed", zIndex: "-1" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </div>
  );
};

export default BgParticles;
