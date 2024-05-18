import React, { useEffect, useRef } from 'react';
import "../styles/Star.css"

const Star = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const dots = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2,
      alpha: Math.random(),
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.alpha})`;
        ctx.fill();
        dot.x += dot.dx;
        dot.y += dot.dy;
        if (dot.x < 0 || dot.x > width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > height) dot.dy *= -1;
      });
      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default Star;
