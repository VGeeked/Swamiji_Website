import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const newsletters = [
    {
      title: "Monthly Wisdom - November 2025",
      date: "November 1, 2025",
      description:
        "This month's newsletter features teachings on the nature of consciousness, upcoming events, and guided practices for deepening your meditation.",
    },
    {
      title: "Monthly Wisdom - October 2025",
      date: "October 1, 2025",
      description:
        "Explore the sacred festival of Navaratri, learn about the nine forms of the Divine Mother, and discover practices for awakening inner Shakti.",
    },
    {
      title: "Monthly Wisdom - September 2025",
      date: "September 1, 2025",
      description:
        "Special edition on the importance of Guru-disciple relationship, featuring stories from the tradition and practical guidance for spiritual practice.",
    },
    {
      title: "Monthly Wisdom - August 2025",
      date: "August 1, 2025",
      description:
        "Understanding the chakra system through the lens of tantra, with specific practices for each energy center and their spiritual significance.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
              Newsletter
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay connected with monthly updates, teachings, and announcements from
              Swami Paranand Tirth Ji Maharaj and the Yog Tantra Agama community.
            </p>
          </div>

          <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12 text-center mb-16">
            <Mail className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Receive monthly wisdom, event announcements, and spiritual guidance directly in your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              Past Newsletters
            </h2>
            {newsletters.map((newsletter, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                        {newsletter.title}
                      </h3>
                      <p className="text-sm text-primary mb-3">{newsletter.date}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {newsletter.description}
                      </p>
                    </div>
                    <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                      Read Newsletter
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Newsletter;
