/**
 * Utilitaire pour convertir une image en base64
 */

/**
 * Convertit une URL d'image en base64
 * @param url URL de l'image à convertir
 * @returns Promise avec la chaîne base64 de l'image
 */
export const imageUrlToBase64 = async (url: string): Promise<string> => {
  try {
    // Récupérer l'image
    const response = await fetch(url);
    const blob = await response.blob();
    
    // Convertir le blob en base64
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Échec de la conversion en base64'));
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Erreur lors de la conversion de l\'image en base64:', error);
    throw error;
  }
};
