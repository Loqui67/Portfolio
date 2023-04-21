import { colorPalette } from "./colorPalette";

export const defaultOptions = {
  fpsLimit: 120,
  background: {
    color: "transparent",
  },
  particles: {
    color: {
      value: ["#03dac6", "#fac561"],
    },
    links: {
      enable: true,
      blink: false,
      color: {
        value: "random",
        gradient: ["#03dac6", "#fac561"],
      },
      consent: false,
      distance: 150,
    },

    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 100,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 1,
    },
  },
  detectRetina: true,
};

export const links = {
  fpsLimit: 60,
  particles: {
    color: {
      value: "#000000",
    },
    links: {
      color: {
        value: "#000000",
      },
      distance: 100,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      speed: 2,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

export const multicolor = {
  fpsLimit: 120,
  background: {
    color: "transparent",
  },
  particles: {
    color: {
      value: colorPalette,
    },
    links: {
      enable: true,
      distance: 150,
      opacity: 0.2,
      width: 1,
      color: "random",
      blink: false,
      consent: false,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 40,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
