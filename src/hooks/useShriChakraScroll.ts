import { useEffect, useState, type CSSProperties, type RefObject } from "react";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const getScrollDistance = () => window.innerHeight * 0.82;

const getStartSize = () => Math.min(window.innerWidth * 0.72, 360);

export function useShriChakraScroll(
  targetRef: RefObject<HTMLElement | null>,
  enabled: boolean,
) {
  const [progress, setProgress] = useState(enabled ? 0 : 1);
  const [floatingStyle, setFloatingStyle] = useState<CSSProperties>({ opacity: 0 });

  useEffect(() => {
    if (!enabled) {
      setProgress(1);
      return;
    }

    const update = () => {
      const raw = Math.min(window.scrollY / getScrollDistance(), 1);
      const p = easeOutCubic(raw);
      setProgress(p);

      const target = targetRef.current;
      if (!target || p >= 0.995) {
        setFloatingStyle({ opacity: 0, pointerEvents: "none" });
        return;
      }

      const targetRect = target.getBoundingClientRect();
      const startSize = getStartSize();
      const endSize = targetRect.width || 44;
      const size = startSize + (endSize - startSize) * p;

      const startX = window.innerWidth / 2;
      const startY = window.innerHeight / 2;
      const endX = targetRect.left + targetRect.width / 2;
      const endY = targetRect.top + targetRect.height / 2;

      setFloatingStyle({
        position: "fixed",
        left: startX + (endX - startX) * p,
        top: startY + (endY - startY) * p,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        zIndex: 60,
        pointerEvents: "none",
        opacity: 1,
        willChange: "left, top, width, height",
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [enabled, targetRef]);

  return {
    progress,
    floatingStyle,
    isCollapsed: progress >= 0.995,
  };
}
