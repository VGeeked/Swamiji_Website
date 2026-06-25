import Header from "@/components/Header";
import Footer from "@/components/Footer";
import tantraIcon from "@/assets/tantra-icon.jpg";

const Tantra = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img src={tantraIcon} alt="Tantra" className="w-full h-auto object-cover" />
          </div>

          <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
            Tantra: The Path of Transformation
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tantra is one of the most misunderstood spiritual traditions. Far from popular misconceptions,
              authentic tantra is a profound science of consciousness transformation and spiritual awakening.
            </p>

            <div className="bg-secondary rounded-xl p-8 my-8">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Understanding Tantra
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The word "tantra" comes from the Sanskrit roots "tan" (to expand) and "tra" (tool or instrument).
                Tantra is thus the tool for expanding consciousness beyond ordinary limitations. It embraces all
                of existence as expressions of the divine and uses every experience as a means of spiritual growth.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              The Tantric Worldview
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unlike paths that see the world as an obstacle to spirituality, tantra recognizes the inherent
              sacredness of all creation. It teaches that:
            </p>
            <ul className="space-y-3 text-muted-foreground list-disc list-inside ml-4">
              <li>The entire universe is a manifestation of divine consciousness</li>
              <li>Spirit and matter are not separate but different expressions of the same reality</li>
              <li>The body is a temple, not an obstacle to spiritual realization</li>
              <li>Energy (Shakti) and consciousness (Shiva) are eternally united</li>
            </ul>

            <h2 className="text-3xl font-serif font-bold text-foreground mb-4 mt-8">
              Key Practices
            </h2>
            <div className="bg-muted rounded-xl p-8 my-6">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Mantra</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sacred sound formulas that invoke specific energies and states of consciousness. Through
                repetition, mantras purify the mind and awaken dormant spiritual potential.
              </p>

              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Yantra</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Geometric diagrams representing cosmic forces. Meditation on yantras helps the practitioner
                internalize universal patterns and principles.
              </p>

              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Kundalini</h3>
              <p className="text-muted-foreground leading-relaxed">
                The awakening and ascent of the primordial spiritual energy that lies dormant at the base
                of the spine. This is one of tantra's most powerful transformative practices.
              </p>
            </div>

            <div className="bg-accent text-accent-foreground rounded-xl p-8 my-8">
              <blockquote className="text-xl font-serif italic">
                "Tantra is not about renouncing the world but about recognizing the divine in every atom of existence."
              </blockquote>
              <p className="mt-4">— Swami Paranand Tirth Ji Maharaj</p>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              The Guru-Disciple Relationship
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              In tantra, the relationship between guru and disciple is considered essential. The guru has
              walked the path and can guide the student safely through the powerful transformations that
              tantric practice initiates. Swamiji emphasizes that genuine tantra must be learned from a
              qualified master in an authentic lineage.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tantra;
