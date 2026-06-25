import Header from "@/components/Header";
import Footer from "@/components/Footer";
import yogaIcon from "@/assets/yoga-icon.jpg";

const Yoga = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img src={yogaIcon} alt="Yoga" className="w-full h-auto object-cover" />
          </div>

          <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
            Yoga: The Path of Union
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Yoga is far more than physical exercise. It is a comprehensive spiritual science that has
              been practiced for thousands of years in the pursuit of union with the divine.
            </p>

            <div className="bg-secondary rounded-xl p-8 my-8">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                The Eight Limbs of Yoga
              </h2>
              <p className="text-muted-foreground mb-4">
                As outlined by the sage Patanjali, the path of yoga consists of eight progressive stages:
              </p>
              <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                <li>
                  <strong className="text-foreground">Yama</strong> - Ethical restraints and moral disciplines
                </li>
                <li>
                  <strong className="text-foreground">Niyama</strong> - Personal observances and self-discipline
                </li>
                <li>
                  <strong className="text-foreground">Asana</strong> - Physical postures for body purification
                </li>
                <li>
                  <strong className="text-foreground">Pranayama</strong> - Breath control and energy regulation
                </li>
                <li>
                  <strong className="text-foreground">Pratyahara</strong> - Withdrawal of senses from external objects
                </li>
                <li>
                  <strong className="text-foreground">Dharana</strong> - Concentration and focused attention
                </li>
                <li>
                  <strong className="text-foreground">Dhyana</strong> - Meditation and contemplation
                </li>
                <li>
                  <strong className="text-foreground">Samadhi</strong> - Liberation and union with the absolute
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Beyond the Physical
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While asana (physical postures) is the aspect of yoga most familiar to the modern world,
              Swamiji teaches that true yoga encompasses all dimensions of human existence. The physical
              practice prepares the body and mind for deeper spiritual work.
            </p>

            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              The Goal of Yoga
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The ultimate aim of yoga is kaivalya or moksha - liberation from the cycle of birth and
              death. Through dedicated practice, the yogi realizes their true nature as pure consciousness,
              beyond all limitations and suffering.
            </p>

            <div className="bg-primary text-primary-foreground rounded-xl p-8 my-8">
              <blockquote className="text-xl font-serif italic">
                "Yoga is not about touching your toes. It is about what you learn on the way down."
              </blockquote>
              <p className="mt-4">— Traditional Wisdom</p>
            </div>

            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Practice in the Modern World
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Swamiji emphasizes that yoga is not an escape from the world but a means to live in it with
              greater awareness, compassion, and effectiveness. Regular practice brings clarity of mind,
              emotional balance, and a deep sense of inner peace that pervades all aspects of life.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Yoga;
