const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const audioUrl = (path) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${path}`;

export const imageUrl = (publicId) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${publicId}`;