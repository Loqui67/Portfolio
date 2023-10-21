import React, { useEffect, useRef, useState, useCallback } from "react";
import styled from "styled-components";
import "./style.css";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(45deg, #ffb6c1, #ff69b4);
  background-size: 400% 400%;
  animation: gradientAnimation 20s ease infinite;
  overflow: hidden;
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .teddys {
    background: url("./Images/teddys.png");
    width: 100%;
    height: 100%;
  }
`;

const Sign = styled.div`
  background: #ffebcd; /* Couleur de fond douce */
  border: 2px solid #cd9977; /* Bordure */
  width: 20rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px; /* Taille de la police ajustée */
  text-align: center;
  font-family: "cursive", sans-serif; /* Police d'écriture cursive */
  font-weight: bold; /* Texte en gras */
  color: #a0522d; /* Couleur du texte */
  border-radius: 10px; /* Coins arrondis */
  z-index: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width: 768px) {
    width: 80%;
    font-size: 12px;
  }
  button {
    background: #ffebcd; /* Couleur de fond douce */
    border: 2px solid #cd9977; /* Bordure */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px; /* Taille de la police ajustée */
    text-align: center;
    font-family: "cursive", sans-serif; /* Police d'écriture cursive */
    font-weight: bold; /* Texte en gras */
    color: #a0522d; /* Couleur du texte */
    border-radius: 10px; /* Coins arrondis */
    padding: 10px;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

function WtfAmIDoing() {
  const rightPupilRef = useRef(null);
  const leftPupilRef = useRef(null);
  const [pupilsPosition, setPupilsPosition] = useState({ x: 0, y: 0 });
  const [nounoursGonfle, setNounoursGonfle] = useState(0);

  const toggleNounoursGonfle = () => {
    setNounoursGonfle((nounoursGonfle) => {
      const lvl = (nounoursGonfle + 1) % 7;
      if (lvl === 6) {
        setTimeout(() => {
          setNounoursGonfle(0);
        }, 2000);
      }
      return lvl;
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const eyeX =
        rightPupilRef.current.getBoundingClientRect().left +
        rightPupilRef.current.offsetWidth / 2;
      const eyeY =
        rightPupilRef.current.getBoundingClientRect().top +
        rightPupilRef.current.offsetHeight / 2;
      const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);

      const maxPupilMove = 5;

      const pupilMoveX = Math.cos(angle) * maxPupilMove;
      const pupilMoveY = Math.sin(angle) * maxPupilMove;

      setPupilsPosition({ x: pupilMoveX, y: pupilMoveY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const containerRef = React.useRef(null);

  const particlesLoaded = useCallback(async (container) => {
    containerRef.current = container;
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Page>
      <Particles
        id="particules-js"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          preset: "stars",
          background: {
            opacity: 0,
          },
        }}
      />
      <div
        className="teddys"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="teddy"
          style={{
            transform: `scale(${
              1 + (nounoursGonfle === 6 ? 5 : nounoursGonfle) / 4
            })`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <div className="right-ear"></div>
          <div className="left-ear"></div>
          <div className="head">
            <div className="right-eye">
              <div className="white-eye">
                <div
                  className="pupil"
                  ref={rightPupilRef}
                  style={{
                    transform: `translate(${pupilsPosition.x}px, ${pupilsPosition.y}px)`,
                  }}
                ></div>
              </div>
            </div>
            <div className="left-eye">
              <div className="white-eye">
                <div
                  className="pupil"
                  ref={leftPupilRef}
                  style={{
                    transform: `translate(${pupilsPosition.x}px, ${pupilsPosition.y}px)`,
                  }}
                ></div>
              </div>
            </div>
            <div className="mouth-area">
              <div className="right-cheek"></div>
              <div className="left-cheek"></div>
              <div className="nose">
                <div className="nose-inner"></div>
              </div>
            </div>
          </div>
          <div className="body"></div>
          <div className="right-arm">
            <div className="arm-inner"></div>
            <div className="paw"></div>
          </div>
          <div className="left-arm">
            <div className="arm-inner"></div>
            <div className="paw"></div>
          </div>
          <div className="right-leg">
            <div className="foot"></div>
          </div>
          <div className="left-leg">
            <div className="foot"></div>
          </div>
          <Sign>
            Je t'envoie ce petit nounours pour me faire pardonner{" "}
            <span
              style={{
                transform: `scale(${
                  nounoursGonfle === 6 ? 100 : 1
                }) translateY(${nounoursGonfle === 6 ? -5 : 0}px)`,
                transition: "transform 1.5s ease",
              }}
            >
              😘
            </span>
            <button onClick={toggleNounoursGonfle}>
              {nounoursGonfle === 0
                ? "C'est quoi ce truc ?"
                : nounoursGonfle === 1
                ? "Bah ça alors !"
                : nounoursGonfle === 2
                ? "Il gonfle encore !"
                : nounoursGonfle === 3
                ? "Il est énorme !"
                : nounoursGonfle === 4
                ? "Il est encore plus énorme !"
                : nounoursGonfle === 5
                ? "Mais il va exploser le pauvre !"
                : 'Il a explosé ! "BOUM"'}
            </button>
          </Sign>
        </div>
      </div>
    </Page>
  );
}

export default WtfAmIDoing;
