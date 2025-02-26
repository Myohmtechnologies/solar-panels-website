import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://rmahieddine04:Mahieddine-09@cluster0.h7gr9.mongodb.net/myohm";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("myohm");
    const realisations = database.collection("realisations");

    // Trouver toutes les réalisations d'Oraison
    const oraisonRealisations = await realisations.find({
      city: "Oraison"
    }).toArray();

    console.log(`Trouvé ${oraisonRealisations.length} réalisations pour Oraison`);

    // Garder la plus récente et supprimer les autres
    if (oraisonRealisations.length > 1) {
      // Trier par date de création décroissante
      oraisonRealisations.sort((a, b) => {
        const dateA = new Date(a.createdAt || 0);
        const dateB = new Date(b.createdAt || 0);
        return dateB.getTime() - dateA.getTime();
      });

      // Garder le premier (le plus récent) et supprimer les autres
      const toDelete = oraisonRealisations.slice(1).map(r => r._id);
      
      const result = await realisations.deleteMany({
        _id: { $in: toDelete }
      });

      console.log(`Supprimé ${result.deletedCount} réalisation(s) en double pour Oraison`);
    }

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
