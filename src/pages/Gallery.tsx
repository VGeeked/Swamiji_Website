import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchGalleryPhotos, type GalleryPhoto } from "@/lib/gallery";

const Gallery = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);

  useEffect(() => {
    fetchGalleryPhotos().then(setPhotos);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-6">Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A visual journey through the sacred traditions of Yoga, Tantra, and Agama.
            </p>
          </div>

          {photos.length === 0 ? (
            <p className="text-center text-muted-foreground py-20 font-serif italic">
              No photos yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((p) => (
                <div key={p.id} className="group relative overflow-hidden bg-secondary">
                  <div className="aspect-square">
                    <img
                      src={p.url}
                      alt={p.title ?? "Gallery photo"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
