import { MongoClient } from 'mongodb';
import { clientPromise } from '@/lib/mongodb';

async function generateSlug(title: string): Promise<string> {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

async function updateRealisationSlugs() {
  const client = await clientPromise as MongoClient;
  const db = client.db('myohm');
  const collection = db.collection('realisations');

  const realisations = await collection.find({ slug: { $exists: false } }).toArray();
  console.log(`Found ${realisations.length} realisations without slugs`);

  for (const realisation of realisations) {
    let slug = await generateSlug(realisation.title);
    
    // Vérifier si le slug existe déjà
    let finalSlug = slug;
    let counter = 1;
    while (await collection.findOne({ slug: finalSlug, _id: { $ne: realisation._id } })) {
      finalSlug = `${slug}-${counter}`;
      counter++;
    }

    await collection.updateOne(
      { _id: realisation._id },
      { $set: { slug: finalSlug } }
    );
    console.log(`Updated realisation ${realisation.title} with slug: ${finalSlug}`);
  }

  console.log('Finished updating slugs');
  process.exit(0);
}

updateRealisationSlugs().catch(console.error);
