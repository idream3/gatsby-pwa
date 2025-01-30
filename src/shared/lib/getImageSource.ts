import { type ExtendedFile } from "../graphql/sdk";
import { env } from "~/shared/env";

export const uploadsFolder = env.NEXT_PUBLIC_UPLOADS_FOLDER;

export const getImageSrc = (
  file: ExtendedFile | string,
  fallback = "/no-image.jpg",
): string =>
  file
    ? typeof file === "string"
      ? file
      : `https://storage.googleapis.com/${uploadsFolder}/${file?.directory}/${file?.fileName}`
    : fallback;
