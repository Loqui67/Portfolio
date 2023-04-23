export const links = {
  fpsLimit: 60,
  particles: {
    color: {
      value: "transparent",
    },
    links: {
      color: {
        value: "#cccccc",
      },
      distance: 150,
      enable: true,
      opacity: 1,
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
  },
  detectRetina: true,
};
