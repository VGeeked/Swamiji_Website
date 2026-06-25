import Header from "@/components/Header";
import Footer from "@/components/Footer";
import agamaIcon from "@/assets/agama-icon.jpg";

const Agama = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img src={agamaIcon} alt="Agama" className="w-full h-auto object-cover" />
          </div>

          <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
            Agama: The Path of Scripture
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Agamas are ancient scriptural texts that form the foundation of temple worship and
              ritualistic practices in the Indian spiritual tradition. They contain profound teachings
              on philosophy, yoga, ritual, and the path to liberation.
            </p>

            <div className="bg-secondary rounded-xl p-8 my-8">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                What are the Agamas?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The word "Agama" means "that which has come down." These texts are considered revealed
                knowledge, passed down through enlightened sages. They complement the Vedas and provide
                practical guidance for spiritual practice and worship.
              </p>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Three Major Traditions
            </h2>
            <div className="space-y-6">
              <div className="bg-muted rounded-xl p-6">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Shaiva Agamas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Associated with Lord Shiva, these texts focus on the worship of Shiva and the path of
                  liberation through Shaivite practices. They include 28 main texts covering philosophy,
                  yoga, and ritual.
                </p>
              </div>

              <div className="bg-muted rounded-xl p-6">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Vaishnava Agamas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Centered on Lord Vishnu and his incarnations, particularly Krishna. These texts emphasize
                  devotion (bhakti) as the primary path to divine union.
                </p>
              </div>

              <div className="bg-muted rounded-xl p-6">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Shakta Agamas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Focus on the worship of the Divine Mother (Shakti) in her various forms. These include
                  powerful tantric practices and ritual systems.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mb-4 mt-8">
              Four Parts of Agamic Knowledge
            </h2>
            <p className="text-muted-foreground mb-4">Each Agama typically contains four main sections:</p>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside ml-4">
              <li>
                <strong className="text-foreground">Jnana Pada</strong> - Philosophical knowledge and metaphysics
              </li>
              <li>
                <strong className="text-foreground">Yoga Pada</strong> - Yogic practices and meditation techniques
              </li>
              <li>
                <strong className="text-foreground">Kriya Pada</strong> - Ritual practices and temple construction
              </li>
              <li>
                <strong className="text-foreground">Charya Pada</strong> - Daily conduct and worship guidelines
              </li>
            </ol>

            <div className="bg-primary text-primary-foreground rounded-xl p-8 my-8">
              <blockquote className="text-xl font-serif italic">
                "The Agamas are not mere books but living transmissions of divine wisdom, meant to be
                practiced and realized, not just studied intellectually."
              </blockquote>
              <p className="mt-4">— Swami Paramnand Tirth</p>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Temple Science
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              One unique aspect of Agamic literature is its detailed instructions on temple architecture
              and ritual. Every aspect of temple construction, from site selection to the installation of
              deities, is precisely described. These guidelines ensure that temples function as powerful
              centers of spiritual energy.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mb-4 mt-8">
              Living the Agamic Path
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Swamiji teaches that the Agamas provide a complete system for spiritual life that integrates
              worship, philosophy, and practice. They show us how to sanctify every aspect of existence and
              recognize the divine presence in all things. Through proper understanding and application of
              Agamic principles, the seeker progresses steadily toward liberation.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Agama;
