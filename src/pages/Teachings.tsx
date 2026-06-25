import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import yogaIcon from "@/assets/yoga-icon.jpg";
import tantraIcon from "@/assets/tantra-icon.jpg";
import agamaIcon from "@/assets/agama-icon.jpg";

const Teachings = () => {
  const paths = [
    {
      title: "Yoga",
      subtitle: "The Path of Union",
      image: yogaIcon,
      description:
        "Yoga is the ancient science of uniting individual consciousness with universal consciousness. Through asana, pranayama, and meditation, practitioners develop physical health, mental clarity, and spiritual awareness.",
      link: "/teachings/yoga",
    },
    {
      title: "Tantra",
      subtitle: "The Path of Transformation",
      image: tantraIcon,
      description:
        "Tantra is the sacred science of energy transformation. It teaches how to harness and direct the fundamental forces of existence for spiritual awakening, using ritual, mantra, and meditation.",
      link: "/teachings/tantra",
    },
    {
      title: "Agama",
      subtitle: "The Path of Scripture",
      image: agamaIcon,
      description:
        "Agamas are the traditional scriptures containing profound knowledge of ritual, philosophy, and spiritual practice. They provide detailed guidance for worship, temple construction, and the path to liberation.",
      link: "/teachings/agama",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
              The Three Sacred Paths
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Yoga, Tantra, and Agama are three interconnected streams of ancient wisdom. Together,
              they form a complete path to spiritual realization and liberation.
            </p>
          </div>

          <div className="space-y-16">
            {paths.map((path, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img
                      src={path.image}
                      alt={path.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-4xl font-serif font-bold text-foreground mb-2">
                      {path.title}
                    </h2>
                    <p className="text-primary text-lg mb-4 font-semibold">{path.subtitle}</p>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {path.description}
                    </p>
                    <Link to={path.link}>
                      <Button className="group">
                        Explore {path.title}
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 bg-secondary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Join the Study Circle
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The Study Circle is a community of seekers who gather regularly to learn, practice,
              and grow together under the guidance of Swami Paramnand Tirth.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="default">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Teachings;
