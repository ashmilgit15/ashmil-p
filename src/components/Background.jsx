import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let scrollY = window.scrollY;
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    handleResize();

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dampen mouse movement for fluid motion
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const gridSize = 80;
      const offsetVal = 0.15; // Parallax rate
      const startX = -(scrollY * offsetVal) % gridSize;
      const startY = -(scrollY * offsetVal) % gridSize;

      ctx.lineWidth = 1;
      
      // Draw grid lines
      for (let x = startX; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        // Slate color line with low opacity
        ctx.strokeStyle = '#141419';
        ctx.stroke();
      }

      for (let y = startY; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = '#141419';
        ctx.stroke();
      }

      // Draw subtle intersection cross ticks
      ctx.strokeStyle = '#22222b';
      ctx.lineWidth = 1;
      for (let x = startX; x < canvas.width; x += gridSize) {
        for (let y = startY; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          // Draw horizontal tick segment
          ctx.moveTo(x - 4, y);
          ctx.lineTo(x + 4, y);
          // Draw vertical tick segment
          ctx.moveTo(x, y - 4);
          ctx.lineTo(x, y + 4);
          ctx.stroke();
        }
      }

      // Draw interactive system crosshair reticle when mouse is in viewport
      if (mouse.x > -500) {
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.15)'; // Cobalt Accent
        ctx.lineWidth = 1;

        // Draw major vertical coordinate line
        ctx.beginPath();
        ctx.moveTo(mouse.x, 0);
        ctx.lineTo(mouse.x, canvas.height);
        ctx.stroke();

        // Draw major horizontal coordinate line
        ctx.beginPath();
        ctx.moveTo(0, mouse.y);
        ctx.lineTo(canvas.width, mouse.y);
        ctx.stroke();

        // Draw mechanical target indicators
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.4)';
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
        ctx.stroke();

        // Draw discrete digital coordinate readout
        ctx.fillStyle = '#4b5563'; // Structural grey
        ctx.font = '9px "JetBrains Mono", monospace';
        const coordText = `SYS.LOC: [${Math.round(mouse.x)}px, ${Math.round(mouse.y + scrollY)}px]`;
        ctx.fillText(coordText, mouse.x + 15, mouse.y - 15);
      }

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: '#070709' // Dark Solid Slate Gray instead of flashy blue gradients
      }}
    />
  );
};

export default Background;
