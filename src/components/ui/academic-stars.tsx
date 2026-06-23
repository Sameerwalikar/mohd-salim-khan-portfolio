"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

/* ─── Stars Background ─── */

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
}

interface AcademicStarsBackgroundProps {
  starDensity?: number;
  className?: string;
}

export function AcademicStarsBackground({
  starDensity = 0.00015,
  className,
}: AcademicStarsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);

  const generateStars = useCallback(
    (width: number, height: number): Star[] => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);
      return Array.from({ length: numStars }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.4 + 0.1,
        twinkleSpeed: Math.random() > 0.6 ? Math.random() * 0.02 + 0.005 : null,
      }));
    },
    [starDensity]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      starsRef.current = generateStars(canvas.offsetWidth, canvas.offsetHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    let time = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      time += 1;

      for (const star of starsRef.current) {
        let opacity = star.opacity;
        if (!reducedMotion && star.twinkleSpeed) {
          opacity = star.opacity + Math.sin(time * star.twinkleSpeed) * 0.15;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 106, ${Math.max(0, Math.min(1, opacity))})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [generateStars]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
}

/* ─── Shooting Stars ─── */

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface AcademicShootingStarsProps {
  minDelay?: number;
  maxDelay?: number;
  className?: string;
}

export function AcademicShootingStars({
  minDelay = 4000,
  maxDelay = 9000,
  className,
}: AcademicShootingStarsProps) {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const createStar = (): ShootingStar => ({
      id: Date.now() + Math.random(),
      x: Math.random() * (svgRef.current?.clientWidth || 800),
      y: Math.random() * (svgRef.current?.clientHeight || 400) * 0.5,
      angle: 215 + Math.random() * 20,
      scale: 0.6 + Math.random() * 0.4,
      speed: 12 + Math.random() * 8,
      distance: 150 + Math.random() * 100,
    });

    let timeout: NodeJS.Timeout;

    const scheduleNext = () => {
      const delay = minDelay + Math.random() * (maxDelay - minDelay);
      timeout = setTimeout(() => {
        const star = createStar();
        setStars((prev) => [...prev, star]);
        setTimeout(() => {
          setStars((prev) => prev.filter((s) => s.id !== star.id));
        }, 2000);
        scheduleNext();
      }, delay);
    };

    scheduleNext();
    return () => clearTimeout(timeout);
  }, [minDelay, maxDelay]);

  return (
    <svg ref={svgRef} className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}>
      {stars.map((star) => {
        const endX = star.x + star.distance * Math.cos((star.angle * Math.PI) / 180);
        const endY = star.y + star.distance * Math.sin((star.angle * Math.PI) / 180);
        return (
          <line
            key={star.id}
            x1={star.x}
            y1={star.y}
            x2={endX}
            y2={endY}
            stroke="url(#gold-shooting-gradient)"
            strokeWidth={star.scale}
            strokeLinecap="round"
            className="animate-[shooting-star_1.5s_ease-out_forwards]"
          />
        );
      })}
      <defs>
        <linearGradient id="gold-shooting-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(201,168,106,0)" />
          <stop offset="50%" stopColor="rgba(201,168,106,0.3)" />
          <stop offset="100%" stopColor="rgba(201,168,106,0.8)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
