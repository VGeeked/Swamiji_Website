import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "The Path of Self-Realization",
      date: "November 10, 2025",
      author: "Swami Paramnand Tirth",
      excerpt:
        "Understanding the journey from the limited self to the infinite consciousness. The path of self-realization is not about becoming something new, but about removing the veils that obscure our true nature.",
      category: "Philosophy",
    },
    {
      title: "Sacred Practices for Daily Life",
      date: "November 5, 2025",
      author: "Swami Paramnand Tirth",
      excerpt:
        "Simple yet profound techniques to bring spirituality into your everyday routine. Learn how to transform ordinary activities into sacred practices that deepen your connection with the divine.",
      category: "Practice",
    },
    {
      title: "The Power of Mantra",
      date: "October 28, 2025",
      author: "Swami Paramnand Tirth",
      excerpt:
        "Exploring how sacred sounds transform consciousness and purify the mind. Mantras are not mere words but vibrational keys that unlock dormant spiritual potential within us.",
      category: "Tantra",
    },
    {
      title: "Understanding the Chakra System",
      date: "October 20, 2025",
      author: "Swami Paramnand Tirth",
      excerpt:
        "A comprehensive guide to the energy centers within the body and how to awaken them through yoga and meditation. Each chakra represents a different dimension of consciousness.",
      category: "Yoga",
    },
    {
      title: "The Role of the Guru",
      date: "October 12, 2025",
      author: "Swami Paramnand Tirth",
      excerpt:
        "Examining the sacred relationship between teacher and student on the spiritual path. The guru is not just an instructor but a living embodiment of the truth we seek to realize.",
      category: "Philosophy",
    },
    {
      title: "Meditation: Beyond Technique",
      date: "October 5, 2025",
      author: "Swami Paramnand Tirth",
      excerpt:
        "True meditation is not a practice but a state of being. Discover how to move beyond mechanical techniques to authentic spiritual experience and inner silence.",
      category: "Practice",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
              Blog & Magazine
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, teachings, and reflections on the spiritual path from Swami Paranand Tirth Ji Maharaj
              and the Yog Tantra Agama community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-primary mb-3">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span className="bg-primary/10 px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                  <p className="text-sm text-muted-foreground italic">By {article.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-secondary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Receive the latest teachings, articles, and updates directly in your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
