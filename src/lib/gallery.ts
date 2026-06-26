export type GalleryPhoto = {
  id: string;
  storage_path: string;
  title: string | null;
  created_at: string;
  url: string;
};

// Static gallery. Drop image files (jpg/png/webp/gif) into src/assets/gallery/
// and they appear automatically — no backend required. Files are shown in
// filename order, so prefix with numbers (01-..., 02-...) to control ordering.
const modules = import.meta.glob(
  "../assets/gallery/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}",
  { eager: true, import: "default" }
) as Record<string, string>;

const photos: GalleryPhoto[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, url], i) => {
    const filename = path.split("/").pop() ?? `photo-${i}`;
    return {
      id: String(i),
      storage_path: path,
      title: filename.replace(/\.[^.]+$/, ""),
      created_at: "",
      url,
    };
  });

export const fetchGalleryPhotos = async (limit?: number): Promise<GalleryPhoto[]> =>
  typeof limit === "number" ? photos.slice(0, limit) : photos;
