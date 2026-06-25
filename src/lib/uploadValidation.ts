const ALLOWED_MIME_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;

const MIME_TO_EXT: Record<string, "jpg" | "png" | "webp"> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

const matchesMagicBytes = (bytes: Uint8Array, mime: string): boolean => {
  if (mime === "image/jpeg") {
    return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  }
  if (mime === "image/png") {
    return (
      bytes[0] === 0x89 &&
      bytes[1] === 0x50 &&
      bytes[2] === 0x4e &&
      bytes[3] === 0x47
    );
  }
  if (mime === "image/webp") {
    return (
      bytes[0] === 0x52 &&
      bytes[1] === 0x49 &&
      bytes[2] === 0x46 &&
      bytes[3] === 0x46 &&
      bytes[8] === 0x57 &&
      bytes[9] === 0x45 &&
      bytes[10] === 0x42 &&
      bytes[11] === 0x50
    );
  }
  return false;
};

export const validateGalleryUpload = async (
  file: File,
): Promise<{ ok: true; extension: "jpg" | "png" | "webp" } | { ok: false; message: string }> => {
  if (!ALLOWED_MIME_TYPES.has(file.type)) {
    return { ok: false, message: "Only JPEG, PNG, and WebP images are allowed." };
  }

  if (file.size <= 0 || file.size > MAX_FILE_SIZE_BYTES) {
    return { ok: false, message: "Each image must be between 1 byte and 5 MB." };
  }

  const header = new Uint8Array(await file.slice(0, 12).arrayBuffer());
  if (!matchesMagicBytes(header, file.type)) {
    return { ok: false, message: "File content does not match an allowed image type." };
  }

  return { ok: true, extension: MIME_TO_EXT[file.type] };
};

export const GALLERY_ACCEPT = "image/jpeg,image/png,image/webp";
