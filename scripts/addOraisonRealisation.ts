import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://rmahieddine04:Mahieddine-09@cluster0.h7gr9.mongodb.net/myohm";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("myohm");
    const realisations = database.collection("realisations");

    const result = await realisations.insertOne({
      title: "Installation solaire à Oraison",
      description: "Installation de panneaux solaires photovoltaïques à Oraison. Une solution sur mesure pour optimiser la production d'énergie solaire.",
      mainImage: "installation-de-panneaux-solaire-oraison.avif",
      secondaryImage: "installation-de-panneaux-solaires-oraison-2.avif",
      date: new Date("2024-02-20"),
      region: "Provence-Alpes-Côte d'Azur",
      city: "Oraison",
      type: "Panneaux Solaires",
      year: 2024,
      specifications: {
        puissance: 5.6,
        pannels: 14,
        surface: 28,
        orientation: "Sud",
        economie: 750
      },
      createdAt: new Date(),
      updatedAt: new Date()
    });

    console.log(`Réalisation d'Oraison ajoutée avec l'ID: ${result.insertedId}`);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
