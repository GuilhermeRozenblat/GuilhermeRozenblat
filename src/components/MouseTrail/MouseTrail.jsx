// MouseTrail.js
import React, { useEffect, useRef } from "react";

function MouseTrail({ color }) {
  const circleRefs = useRef([]);
  const coords = useRef({ x: 0, y: 0 });

  // Tamanho do círculo
  const CIRCLE_SIZE = 11;
  // Metade do tamanho para centralizar o círculo no mouse
  const halfSize = CIRCLE_SIZE / 2; // 5.5px

  useEffect(() => {
    // Configurar estilo inicial para cada círculo
    circleRefs.current.forEach((circle) => {
      if (circle) {
        circle.x = 0;
        circle.y = 0;
        circle.style.border = `1px solid ${color}`;
        circle.style.borderRadius = "50%";
        circle.style.backgroundColor = "transparent";
        circle.style.position = "fixed";
        circle.style.pointerEvents = "none"; // não interfere com cliques
        circle.style.width = `${CIRCLE_SIZE}px`;
        circle.style.height = `${CIRCLE_SIZE}px`;
        circle.style.zIndex = "9999";
        circle.style.transform = "scale(1)";
      }
    });
  }, [color]);

  // Atualiza coords quando o mouse se move
  useEffect(() => {
    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animação de rastro
  useEffect(() => {
    function animateCircles() {
      let x = coords.current.x;
      let y = coords.current.y;

      circleRefs.current.forEach((circle, index) => {
        if (circle) {
          // Centraliza o círculo exatamente onde está o mouse
          circle.style.left = `${x - halfSize}px`;
          circle.style.top = `${y - halfSize}px`;

          // Controla a escala de cada círculo para criar o efeito de rastro
          const scaleValue = (circleRefs.current.length - index) / 1;
          circle.style.transform = `scale(${scaleValue})`;

          // Guarda as posições
          circle.x = x;
          circle.y = y;

          // Interpolação para criar o efeito "rastro"
          const nextCircle = circleRefs.current[index + 1] || circleRefs.current[0];
          x += (nextCircle.x - x) * 0.95;
          y += (nextCircle.y - y) * 0.95;
        }
      });
      requestAnimationFrame(animateCircles);
    }
    animateCircles();
  }, []);

  const numCircles = 3;
  const circlesArray = Array.from({ length: numCircles }, (_, i) => i);

  return (
    <>
      {circlesArray.map((_, index) => (
        <div key={index} ref={(el) => (circleRefs.current[index] = el)} />
      ))}
    </>
  );
}

export default MouseTrail;
