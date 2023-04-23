import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { links } from "../../data/particlesBackgroundConfig";

const ParticlesBackground = () => {
  const containerRef = React.useRef(null);

  const particlesLoaded = useCallback(async (container) => {
    containerRef.current = container;
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
    await engine.addPreset("custom", links);
  }, []);

  return (
    <Particles
      id="particules-js"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        preset: "custom",
      }}
    />
  );
};

export default ParticlesBackground;
