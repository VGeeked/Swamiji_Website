import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import {
  fetchGalleryPhotos,
  uploadGalleryPhoto,
  deleteGalleryPhoto,
  type GalleryPhoto,
} from "@/lib/gallery";
import { GALLERY_ACCEPT } from "@/lib/uploadValidation";
import { Upload, Trash2, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Gallery = () => {
  const { isAdmin, loading, session } = useAuth();
  const { toast } = useToast();
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [uploading, setUploading] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const load = async () => setPhotos(await fetchGalleryPhotos());
  useEffect(() => {
    load();
  }, []);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0 || !isAdmin) return;
    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        await uploadGalleryPhoto(file);
      }
      toast({ title: "Uploaded", description: `${files.length} photo(s) added.` });
      await load();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Upload failed.";
      toast({ title: "Upload failed", description: message, variant: "destructive" });
    } finally {
      setUploading(false);
      if (fileInput.current) fileInput.current.value = "";
    }
  };

  const handleDelete = async (p: GalleryPhoto) => {
    if (!isAdmin || !confirm("Delete this photo?")) return;
    try {
      await deleteGalleryPhoto(p.id, p.storage_path);
      await load();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Delete failed.";
      toast({ title: "Delete failed", description: message, variant: "destructive" });
    }
  };

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

          {loading ? (
            <p className="text-center text-muted-foreground py-8 font-serif italic">Loading...</p>
          ) : isAdmin ? (
            <div className="mb-10 flex flex-wrap items-center justify-center gap-3 border border-accent/20 bg-secondary/50 p-4">
              <span className="eyebrow text-accent/70 mr-2">Admin</span>
              <input
                ref={fileInput}
                type="file"
                accept={GALLERY_ACCEPT}
                multiple
                onChange={(e) => handleFiles(e.target.files)}
                className="hidden"
              />
              <button
                onClick={() => fileInput.current?.click()}
                disabled={uploading}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground eyebrow text-xs hover:opacity-90 disabled:opacity-50"
              >
                <Upload size={14} /> {uploading ? "Uploading..." : "Upload Photo(s)"}
              </button>
              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  toast({ title: "Signed out" });
                }}
                className="inline-flex items-center gap-2 px-4 py-2 border border-accent/30 eyebrow text-xs hover:bg-accent/10"
              >
                <LogOut size={14} /> Sign out
              </button>
            </div>
          ) : session ? null : (
            <p className="text-center text-muted-foreground mb-10">
              <Link to="/auth" className="text-primary underline hover:text-primary/90">
                Sign in
              </Link>{" "}
              to manage gallery photos.
            </p>
          )}

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
                  {!loading && isAdmin && (
                    <button
                      onClick={() => handleDelete(p)}
                      className="absolute top-3 right-3 p-2 bg-background/90 text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Delete photo"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
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
