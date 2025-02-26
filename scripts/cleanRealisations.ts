import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://rmahieddine04:Mahieddine-09@cluster0.h7gr9.mongodb.net/myohm";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("myohm");
    const realisations = database.collection("realisations");

    // 1. D'abord, voyons combien de documents nous avons
    const count = await realisations.countDocuments();
    console.log(`Nombre total de réalisations: ${count}`);

    // 2. Trouvons les doublons basés sur le titre et la ville
    const duplicates = await realisations.aggregate([
      {
        $group: {
          _id: { title: "$title", city: "$city" },
          count: { $sum: 1 },
          ids: { $push: "$_id" }
        }
      },
      {
        $match: {
          count: { $gt: 1 }
        }
      }
    ]).toArray();

    console.log("\nDoublons trouvés:");
    console.log(JSON.stringify(duplicates, null, 2));

    // 3. Supprimons les doublons en gardant seulement la version la plus récente
    for (const duplicate of duplicates) {
      const ids = duplicate.ids;
      // Gardons le dernier document (le plus récent) et supprimons les autres
      const toDelete = ids.slice(0, -1);
      if (toDelete.length > 0) {
        const result = await realisations.deleteMany({
          _id: { $in: toDelete }
        });
        console.log(`Supprimé ${result.deletedCount} document(s) en double pour ${duplicate._id.title} à ${duplicate._id.city}`);
      }
    }

    // 4. Vérifions le nouveau compte
    const newCount = await realisations.countDocuments();
    console.log(`\nNouveau nombre total de réalisations: ${newCount}`);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
