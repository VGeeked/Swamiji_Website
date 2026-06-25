import { useEffect, useState, type RefObject } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import shriChakra from "@/assets/shri-chakra.jpg";

const navLinks = [
  { to: "/", hash: "#intro", label: "Home" },
  { to: "/", hash: "#about", label: "About Swamiji" },
  { to: "/", hash: "#magazine", label: "Magazine" },
  { to: "/", hash: "#newsletter", label: "Newsletter" },
  { to: "/", hash: "#gallery", label: "Gallery" },
  { to: "/", hash: "#contact", label: "Contact Us" },
];

interface HeaderProps {
  chakraSlotRef?: RefObject<HTMLDivElement | null>;
  homeScrollProgress?: number;
}

const Header = ({ chakraSlotRef, homeScrollProgress }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeHash, setActiveHash] = useState<string>("#intro");

  const isHome = location.pathname === "/";
  const progress = isHome ? (homeScrollProgress ?? 0) : 1;
  const showNavChakra = !isHome || progress >= 0.995;
  const showNavContent = !isHome || progress >= 0.35;

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ["intro", "top", "about", "magazine", "newsletter", "gallery", "contact"];
    const handler = () => {
      let current = "#intro";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140) current = `#${id}`;
      }
      setActiveHash(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [location.pathname, isHome]);

  const isActive = (hash: string) =>
    location.pathname === "/" && activeHash === hash;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300"
      style={{
        backgroundColor: `hsl(39 47% 98% / ${isHome ? Math.min(progress * 1.4, 0.95) : 0.95})`,
        borderColor: `hsl(0 67% 29% / ${isHome ? Math.min(progress * 0.8, 0.1) : 0.1})`,
        backdropFilter: progress > 0.2 || !isHome ? "blur(8px)" : "none",
      }}
    >
      <div className="container mx-auto px-6 py-4 md:py-6">
        <div className="flex items-center justify-between md:justify-center">
          <Link
            to="/#intro"
            className="flex items-center gap-2.5 md:gap-3 transition-opacity duration-300"
            style={{ opacity: showNavContent ? 1 : 0 }}
          >
            <div
              ref={chakraSlotRef}
              className="w-9 h-9 md:w-11 md:h-11 shrink-0 flex items-center justify-center"
              aria-hidden={!showNavChakra}
            >
              {showNavChakra && (
                <img
                  src={shriChakra}
                  alt=""
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            <span className="font-serif text-2xl md:text-4xl lg:text-5xl text-foreground tracking-tight leading-none">
              Yog Tantra Agama
            </span>
          </Link>

          <button
            aria-label="Toggle navigation"
            className="p-2 text-accent md:hidden transition-opacity duration-300"
            style={{ opacity: showNavContent ? 1 : 0 }}
            onClick={() => setIsOpen((o) => !o)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav
          className="hidden md:flex flex-wrap justify-center gap-x-8 gap-y-2 mt-4 text-[11px] uppercase tracking-[0.25em] font-medium transition-opacity duration-300"
          style={{ opacity: showNavContent ? 1 : 0 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={`${link.to}${link.hash}`}
              className={`border-b transition-colors pb-1 ${
                isActive(link.hash)
                  ? "text-primary border-primary"
                  : "text-accent/70 border-transparent hover:text-primary hover:border-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {isOpen && showNavContent && (
          <nav className="md:hidden mt-6 flex flex-col gap-3 border-t border-accent/10 pt-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={`${link.to}${link.hash}`}
                onClick={() => setIsOpen(false)}
                className={`text-[11px] uppercase tracking-[0.25em] py-1 ${
                  isActive(link.hash) ? "text-primary" : "text-accent/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
