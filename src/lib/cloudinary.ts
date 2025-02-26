import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getCloudinaryUrl = (publicId: string, options = {}) => {
  return cloudinary.url(publicId, {
    secure: true,
    quality: 'auto',
    format: 'auto',
    ...options,
  });
};

export default cloudinary;
