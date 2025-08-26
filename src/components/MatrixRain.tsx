import { useEffect, useRef, useState } from 'react';

interface MatrixRainProps {
  className?: string;
}

export const MatrixRain = ({ className = '' }: MatrixRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentOpacity, setCurrentOpacity] = useState(0.9);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to cover the viewport (use 100vw/100vh)
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    setTimeout(resizeCanvas, 100);

    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const isHeroVisible = heroRect.top < window.innerHeight && heroRect.bottom > 0;
        setCurrentOpacity(isHeroVisible ? 0.9 : 0.5);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    const themeObserver = new MutationObserver(() => {});
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?~`';
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = new Array(columns).fill(0);
    let speeds: number[] = new Array(columns).fill(0).map(() => Math.random() * 3 + 1);

    const draw = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDarkMode
        ? 'rgba(15, 23, 42, 0.05)'
        : 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Courier New', monospace`;
      ctx.textAlign = 'center';

      // Recalculate columns if canvas size changed
      const newColumns = Math.floor(canvas.width / fontSize);
      if (newColumns !== columns) {
        columns = newColumns;
        drops = new Array(columns).fill(0);
        speeds = new Array(columns).fill(0).map(() => Math.random() * 3 + 1);
      }

      for (let i = 0; i < drops.length; i++) {
        const character = characters[Math.floor(Math.random() * characters.length)];
        const fadePosition = drops[i] / canvas.height;
        const opacity = Math.max(0.1, 1 - fadePosition * 0.8);
        const hue = Math.random() > 0.8 ? 270 : 217;
        const lightness = Math.random() > 0.9 ? 70 : 60;

        ctx.fillStyle = isDarkMode
          ? `hsla(${hue}, 91%, ${lightness}%, ${opacity})`
          : `hsla(${hue}, 91%, ${lightness - 30}%, ${opacity * 1.2})`;

        ctx.fillText(character, i * fontSize + fontSize / 2, drops[i] * fontSize);

        drops[i] += speeds[i];
        if (drops[i] * fontSize > canvas.height) {
          drops[i] = -Math.random() * 100;
          speeds[i] = Math.random() * 3 + 1;
        }
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-screen h-screen pointer-events-none transition-opacity duration-1000 ${className}`}
      style={{
        background: 'transparent',
        zIndex: 0,
        opacity: currentOpacity,
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};
