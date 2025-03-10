import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

// Fonction pour sauvegarder le fichier localement
async function saveFileLocally(buffer: Buffer, filename: string, folder: string): Promise<string> {
  // Créer le chemin du dossier de destination
  const uploadDir = path.join(process.cwd(), 'public', 'uploads', folder);
  
  // Vérifier si le dossier existe, sinon le créer
  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true });
  }
  
  // Générer un nom de fichier unique avec timestamp
  const uniqueFilename = `${Date.now()}-${filename}`;
  const filePath = path.join(uploadDir, uniqueFilename);
  
  // Écrire le fichier
  await writeFile(filePath, buffer);
  
  // Retourner le chemin relatif pour l'accès via URL
  return `/uploads/${folder}/${uniqueFilename}`;
}

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file = data.get('file') as File;
    const folder = data.get('folder') as string || 'blog';
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Convertir le fichier en buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sauvegarder le fichier localement
    const filePath = await saveFileLocally(buffer, file.name, folder);
    console.log('File saved locally at:', filePath);

    return NextResponse.json({ path: filePath });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
