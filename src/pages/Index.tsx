import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShriChakraIntro from "@/components/ShriChakraIntro";
import { useShriChakraScroll } from "@/hooks/useShriChakraScroll";
import { FileText } from "lucide-react";
import swamiji from "@/assets/swamiji-hero.jpg";
import { fetchGalleryPhotos, type GalleryPhoto } from "@/lib/gallery";
import { newsletterIssues } from "@/lib/newsletters";

const articles = [
  {
    title: "The Path of Self-Realization",
    date: "November 10, 2025",
    category: "Philosophy",
    excerpt:
      "Understanding the journey from the limited self to the infinite consciousness — removing the veils that obscure our true nature.",
  },
  {
    title: "Sacred Practices for Daily Life",
    date: "November 5, 2025",
    category: "Practice",
    excerpt:
      "Simple yet profound techniques to bring spirituality into your everyday routine and deepen your connection with the divine.",
  },
  {
    title: "The Power of Mantra",
    date: "October 28, 2025",
    category: "Tantra",
    excerpt:
      "Exploring how sacred sounds transform consciousness and purify the mind — vibrational keys to dormant spiritual potential.",
  },
];

const Index = () => {
  const location = useLocation();
  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhoto[]>([]);
  const chakraSlotRef = useRef<HTMLDivElement>(null);
  const { progress, floatingStyle, isCollapsed } = useShriChakraScroll(chakraSlotRef, true);

  useEffect(() => {
    fetchGalleryPhotos(6).then(setGalleryPhotos);
  }, []);

  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header chakraSlotRef={chakraSlotRef} homeScrollProgress={progress} />

      <ShriChakraIntro
        floatingStyle={floatingStyle}
        visible={!isCollapsed}
        progress={progress}
      />

      <span id="top" />

      {/* HERO */}
      <section className="container mx-auto max-w-7xl px-6 py-12 lg:py-16 scroll-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="flex flex-col items-center order-1 lg:order-1">
            <div className="relative w-full max-w-[18rem]">
              <div className="aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={swamiji}
                  alt="Swami Paranand Tirth Ji Maharaj"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 left-4 bg-primary text-primary-foreground px-3 py-1 eyebrow text-[10px]">
                Featured Discourse
              </div>
            </div>
            <div className="mt-5 text-center">
              <p className="font-serif text-xl md:text-2xl text-foreground leading-tight">
                Swami Paranand Tirthji Maharaj
              </p>
              <div className="w-10 h-px bg-accent/30 mx-auto mt-3" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="eyebrow text-accent/70 block mb-4">From the Ashram</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-4 text-foreground">
              The Alchemy of Silence: Navigating the{" "}
              <span className="italic">Inner Tirth</span>
            </h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-accent/30" />
              <span className="eyebrow text-accent/60">By the Editorial Circle</span>
            </div>
            <p className="text-base leading-relaxed text-foreground/80 mb-5 font-serif">
              In the profound stillness of the Yog Tantra Agama, silence is not the
              mere absence of sound, but the presence of the absolute. Swami Paranand
              Tirthji Maharaj explores the ancient pathways to internal liberation
              through the lens of the Shastras.
            </p>
            <a
              href="#magazine"
              className="inline-flex items-center gap-3 eyebrow text-accent group"
            >
              Continue Reading
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-secondary/40 border-y border-accent/10 scroll-mt-32">
        <div className="container mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <span className="eyebrow text-accent/70 block mb-3">About Swamiji</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 max-w-3xl leading-tight">
            A life devoted to Yoga, Tantra and the Agamic tradition.
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <p className="font-serif text-base md:text-lg leading-relaxed text-foreground/80">
              Swami Paranand Tirthji Maharaj is a revered spiritual master who has devoted
              his life to the study, practice, and transmission of the ancient sciences of
              Yoga, Tantra, and Agama. His journey began under the guidance of enlightened
              masters and matured through decades of Himalayan sadhana.
            </p>
            <p className="font-serif text-base md:text-lg leading-relaxed text-foreground/80">
              His mission is to preserve and transmit these teachings in their purest form —
              illuminating the path for countless seekers worldwide through scripture,
              meditation, and the living relationship of guru and disciple.
              <Link to="/about" className="block mt-6 eyebrow text-primary">
                Read his full story →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* MAGAZINE */}
      <section id="magazine" className="scroll-mt-32">
        <div className="container mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="eyebrow text-accent/70 block mb-3">Magazine</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                Recent reflections & teachings
              </h2>
            </div>
            <Link to="/magazine" className="eyebrow text-primary">
              All articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((a) => (
              <article key={a.title} className="border-t border-accent/20 pt-5">
                <div className="flex items-center gap-3 eyebrow text-accent/60 mb-3">
                  <span>{a.category}</span>
                  <span>·</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3 leading-snug">
                  {a.title}
                </h3>
                <p className="font-serif text-base text-foreground/75 leading-relaxed">
                  {a.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        id="newsletter"
        className="bg-secondary/40 border-y border-accent/10 scroll-mt-32"
      >
        <div className="container mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="eyebrow text-accent/70 block mb-3">Newsletter</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                Monthly wisdom, delivered with care
              </h2>
            </div>
            <Link to="/newsletter" className="eyebrow text-primary">
              All newsletters →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {newsletterIssues.slice(0, 3).map((issue) => (
              <a
                key={issue.number}
                href={issue.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background border border-accent/20 p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-300"
              >
                <FileText className="w-8 h-8 text-primary shrink-0" />
                <h3 className="font-serif text-lg text-foreground leading-snug flex-1">
                  {issue.title}
                </h3>
                <span className="eyebrow text-primary inline-flex items-center gap-2">
                  Read Newsletter
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground p-8 lg:p-10 text-center">
            <p className="font-serif text-xl md:text-2xl mb-3 leading-tight">
              Receive monthly wisdom in your inbox
            </p>
            <p className="font-serif opacity-90 mb-6 max-w-2xl mx-auto">
              Teachings, event announcements and spiritual guidance from Swamiji
              and the Yog Tantra Agama community.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background/40"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-background text-primary eyebrow hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="scroll-mt-32">
        <div className="container mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="eyebrow text-accent/70 block mb-3">Gallery</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                A visual journey
              </h2>
            </div>
            <Link to="/gallery" className="eyebrow text-primary">
              Full gallery →
            </Link>
          </div>
          {galleryPhotos.length === 0 ? (
            <p className="text-center text-muted-foreground py-12 font-serif italic">
              No photos yet.
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryPhotos.map((p) => (
                <div key={p.id} className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={p.url}
                    alt={p.title ?? "Gallery photo"}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-secondary/40 border-t border-accent/10 scroll-mt-32"
      >
        <div className="container mx-auto max-w-4xl px-6 py-16 lg:py-20 text-center">
          <span className="eyebrow text-accent/70 block mb-3">Contact Us</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
            Begin a conversation.
          </h2>
          <p className="font-serif text-lg text-foreground/75 mb-8">
            We welcome your questions, inquiries about teachings and interest in
            joining a study circle near you.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground eyebrow hover:opacity-90 transition-opacity"
          >
            Send a message
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
