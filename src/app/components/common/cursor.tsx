'use client';

import { useEffect, useRef } from 'react';

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.3;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.3;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed top-5 left-5 z-50 w-3 h-3 -ml-1 -mt-1"
    >
      <div className="w-full h-full bg-yellow-500 rounded-full opacity-80" />
    </div>
  );
}