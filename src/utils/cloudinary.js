const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const audioUrl = (path) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_mp3/${path}`;
