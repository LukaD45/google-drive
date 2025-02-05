import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: unknown) => {
  return JSON.parse(JSON.stringify(value));
};

export const getFileType = (fileName: string) => {
  const extension = fileName.split(".").pop();
  let type = "";

  switch (extension) {
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "webp":
      type = "image";
      break;
    case "mp4":
    case "mov":
    case "avi":
    case "mkv":
      type = "video";
      break;
    case "mp3":
    case "wav":
      type = "audio";
      break;
    case "pdf":
    case "doc":
    case "docx":
      type = "document";
      break;
    default:
      type = "other";
      break;
  }

  return { type, extension };
};
