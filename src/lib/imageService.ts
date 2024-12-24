import fs from 'fs';
import path from 'path';

const PUBLIC_IMAGES_DIR = path.join(process.cwd(), 'public', 'uploads');

// Assurez-vous que le dossier uploads existe
if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
  fs.mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true });
}

export const imageService = {
  async uploadImage(file: File): Promise<string> {
    try {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
      const filepath = path.join(PUBLIC_IMAGES_DIR, filename);
      
      await fs.promises.writeFile(filepath, buffer);
      
      // Retourne le chemin relatif pour l'accès public
      return `/uploads/${filename}`;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw new Error('Failed to upload image');
    }
  },

  async deleteImage(filepath: string): Promise<void> {
    try {
      const fullPath = path.join(process.cwd(), 'public', filepath);
      if (fs.existsSync(fullPath)) {
        await fs.promises.unlink(fullPath);
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      throw new Error('Failed to delete image');
    }
  },

  getImageUrl(filepath: string): string {
    return filepath; // Le chemin est déjà relatif à /public
  }
};
