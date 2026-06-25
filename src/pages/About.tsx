import Header from "@/components/Header";
import Footer from "@/components/Footer";
import swamiji from "@/assets/swamiji-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-8 text-center">
            About Swami Paranand Tirth Ji Maharaj
          </h1>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={swamiji}
              alt="Swami Paranand Tirth Ji Maharaj"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-secondary rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                The Teacher's Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Swami Paranand Tirth Ji Maharaj is a revered spiritual master who has devoted his life to the study,
                practice, and teaching of the ancient traditions of Yoga, Tantra, and Agama. Born into a
                family deeply rooted in spiritual practice, Swamiji's journey began at an early age under
                the guidance of enlightened masters.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through decades of rigorous sadhana (spiritual practice), deep scriptural study, and
                meditation in the Himalayan solitude, Swamiji attained profound realizations that now
                illuminate the path for countless seekers worldwide.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Mission & Vision</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Swamiji's mission is to preserve and transmit the authentic teachings of Yog Tantra Agama
              in their purest form. He believes that these ancient sciences hold the key to addressing
              modern humanity's deepest questions about existence, consciousness, and liberation.
            </p>

            <div className="bg-muted rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Core Teachings</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span>The integration of body, mind, and spirit through yogic practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span>The transformation of consciousness through tantric methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span>The study and application of ancient Agamic scriptures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span>The cultivation of devotion and surrender as paths to the divine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span>The practice of meditation and self-inquiry for self-realization</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              The Study Circle Movement
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Under Swamiji's guidance, the Yog Tantra Agama Study Circle has emerged as a global
              community of sincere seekers. These study circles meet regularly to explore sacred texts,
              practice traditional techniques, and support each other on the spiritual path. What began
              as small gatherings has now grown into a worldwide movement of spiritual awakening.
            </p>

            <div className="bg-accent text-accent-foreground rounded-xl p-8 text-center">
              <p className="text-xl font-serif italic">
                "The journey to the Self is not a journey of distance but of depth. Every seeker carries
                within them the light they seek. The teacher merely holds up a mirror."
              </p>
              <p className="mt-4 font-semibold">— Swami Paranand Tirth Ji Maharaj</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
