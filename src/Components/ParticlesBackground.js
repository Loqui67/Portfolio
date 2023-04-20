import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { defaultOptions } from "../data/particlesBackgroundConfig";

const ParticlesBackground = () => {
  const containerRef = React.useRef(null);

  const particlesLoaded = useCallback(async (container) => {
    containerRef.current = container;
    containerRef.current.plugins.get("emitters").array[0].play();
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
    await engine.addPreset("custom", defaultOptions);
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
