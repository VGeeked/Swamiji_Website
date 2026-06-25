import shriChakra from "@/assets/shri-chakra.jpg";
import type { CSSProperties } from "react";

interface ShriChakraIntroProps {
  floatingStyle: CSSProperties;
  visible: boolean;
  progress: number;
}

const ShriChakraIntro = ({ floatingStyle, visible, progress }: ShriChakraIntroProps) => (
  <>
    {visible && (
      <img
        src={shriChakra}
        alt="Shri Chakra — Sri Yantra"
        style={floatingStyle}
        className="object-contain drop-shadow-md"
      />
    )}

    <section
      id="intro"
      className="relative h-[100dvh] min-h-screen w-full bg-background overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-spiritual transition-opacity duration-300"
        style={{ opacity: 1 - progress * 0.5 }}
      />

      <p
        className="absolute left-1/2 -translate-x-1/2 font-serif text-lg md:text-xl text-foreground/70 tracking-wide transition-opacity duration-300"
        style={{
          top: "calc(50% + min(36vw, 11rem))",
          opacity: Math.max(0, 1 - progress * 2.5),
        }}
      >
        Shri Chakra
      </p>

      <a
        href="#top"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-accent/60 hover:text-accent transition-all duration-300"
        style={{ opacity: Math.max(0, 1 - progress * 3) }}
        aria-label="Scroll to explore"
      >
        <span className="eyebrow text-[10px]">Scroll to explore</span>
        <span className="block w-px h-10 bg-accent/30 relative overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-accent/60 animate-[scroll-hint_1.8s_ease-in-out_infinite]" />
        </span>
      </a>
    </section>
  </>
);

export default ShriChakraIntro;
