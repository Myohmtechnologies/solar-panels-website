import { NextResponse } from 'next/server';
import { uploadToCloudinary } from '@/utils/cloudinary';

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

    // Upload vers Cloudinary
    const imageUrl = await uploadToCloudinary(buffer, folder);

    return NextResponse.json({ path: imageUrl });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
