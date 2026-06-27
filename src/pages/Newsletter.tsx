import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, FileText } from "lucide-react";
import { newsletterIssues as issues } from "@/lib/newsletters";

const Newsletter = () => {
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
            {issues.map((issue) => (
              <Card
                key={issue.number}
                className="hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <FileText className="w-8 h-8 text-primary shrink-0" />
                      <h3 className="text-xl lg:text-2xl font-serif font-bold text-foreground">
                        {issue.title}
                      </h3>
                    </div>
                    <a
                      href={issue.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap text-center"
                    >
                      Read Newsletter
                    </a>
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
