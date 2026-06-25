import { supabase } from "@/integrations/supabase/client";
import { validateGalleryUpload } from "@/lib/uploadValidation";

export type GalleryPhoto = {
  id: string;
  storage_path: string;
  title: string | null;
  created_at: string;
  url: string;
};

export const fetchGalleryPhotos = async (limit?: number): Promise<GalleryPhoto[]> => {
  let query = supabase
    .from("gallery_photos")
    .select("id, storage_path, title, created_at")
    .order("created_at", { ascending: false });
  if (limit) query = query.limit(limit);
  const { data, error } = await query;
  if (error || !data) return [];
  const paths = data.map((p) => p.storage_path);
  if (paths.length === 0) return [];
  const { data: signed } = await supabase.storage
    .from("gallery")
    .createSignedUrls(paths, 60 * 60);
  return data.map((p, i) => ({
    ...p,
    url: signed?.[i]?.signedUrl ?? "",
  }));
};

export const uploadGalleryPhoto = async (file: File, title?: string) => {
  const validation = await validateGalleryUpload(file);
  if (!validation.ok) {
    throw new Error(validation.message);
  }

  const path = `${crypto.randomUUID()}.${validation.extension}`;
  const { error: upErr } = await supabase.storage
    .from("gallery")
    .upload(path, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type,
    });
  if (upErr) throw upErr;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { error: dbErr } = await supabase.from("gallery_photos").insert({
    storage_path: path,
    public_url: path,
    title: title?.slice(0, 200) ?? null,
    uploaded_by: user?.id,
  });
  if (dbErr) {
    await supabase.storage.from("gallery").remove([path]);
    throw dbErr;
  }
};

export const deleteGalleryPhoto = async (id: string, storage_path: string) => {
  const { error: storageErr } = await supabase.storage.from("gallery").remove([storage_path]);
  if (storageErr) throw storageErr;

  const { error: dbErr } = await supabase.from("gallery_photos").delete().eq("id", id);
  if (dbErr) throw dbErr;
};
