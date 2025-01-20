require('dotenv').config({ path: '.env.local' });
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadVideo = async () => {
  try {
    const result = await cloudinary.uploader.upload('./public/images/societe-installation-de-panneaux-solaires.mp4', {
      resource_type: "video",
      public_id: "societe-installation-de-panneaux-solaires",
      chunk_size: 6000000,
      eager: [
        { quality: "auto", format: "mp4" }
      ]
    });
    console.log('Success! Video uploaded:', result.secure_url);
  } catch (error) {
    console.error('Upload failed:', error);
  }
};

uploadVideo();
