import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://rmahieddine04:Mahieddine-09@cluster0.h7gr9.mongodb.net/myohm";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("myohm");
    const realisations = database.collection("realisations");

    const result = await realisations.insertMany([
      {
        title: "Installation de panneaux solaires à Vinon-sur-Verdon",
        description: "Installation complète de panneaux solaires photovoltaïques pour une maison individuelle à Vinon-sur-Verdon. Système optimisé pour une production maximale.",
        mainImage: "installation-panneaux-solaires-vinon-sur-verdon.avif",
        secondaryImage: "installation-de-panneaux-solaires-vinon-sur-verdon-2.avif",
        date: new Date("2024-02-01"),
        region: "Provence-Alpes-Côte d'Azur",
        city: "Vinon-sur-Verdon",
        type: "Panneaux Solaires",
        year: 2024,
        specifications: {
          puissance: 6,
          pannels: 15,
          surface: 30,
          orientation: "Sud",
          economie: 800
        }
      },
      {
        title: "Installation solaire à Chaudon-Norante",
        description: "Réalisation d'une installation solaire performante à Chaudon-Norante. Installation adaptée aux besoins spécifiques du client.",
        mainImage: "installation-de-panneaux-solaires-chaudon-norante-1.avif",
        secondaryImage: "installation-de-panneaux-solaires-chaudon-norante-2.avif",
        date: new Date("2024-01-15"),
        region: "Provence-Alpes-Côte d'Azur",
        city: "Chaudon-Norante",
        type: "Panneaux Solaires",
        year: 2024,
        specifications: {
          puissance: 4.8,
          pannels: 12,
          surface: 24,
          orientation: "Sud-Est",
          economie: 650
        }
      },
      {
        title: "Installation photovoltaïque à Manosque",
        description: "Installation de panneaux solaires sur mesure à Manosque. Solution énergétique durable et économique.",
        mainImage: "installation-de-panneaux-solaires-manosque-1.avif",
        secondaryImage: "installation-de-panneaux-solaires-manosque-2.avif",
        date: new Date("2024-01-30"),
        region: "Provence-Alpes-Côte d'Azur",
        city: "Manosque",
        type: "Panneaux Solaires",
        year: 2024,
        specifications: {
          puissance: 5.2,
          pannels: 13,
          surface: 26,
          orientation: "Sud-Ouest",
          economie: 700
        }
      },
      {
        title: "Installation solaire à Nice",
        description: "Installation de panneaux solaires à Nice. Système haute performance avec optimisation de l'espace disponible.",
        mainImage: "installation-de-panneaux-solaires-nice.avif",
        secondaryImage: "installation-panneaux-solaires-nice-2.avif",
        date: new Date("2024-02-10"),
        region: "Provence-Alpes-Côte d'Azur",
        city: "Nice",
        type: "Panneaux Solaires",
        year: 2024,
        specifications: {
          puissance: 7.2,
          pannels: 18,
          surface: 36,
          orientation: "Sud",
          economie: 950
        }
      },
      {
        title: "Installation solaire à Aix-en-Provence",
        description: "Installation complète de panneaux solaires à Aix-en-Provence. Solution personnalisée pour une efficacité maximale.",
        mainImage: "installation-panneaux-solaires-aix-en-provence.avif",
        secondaryImage: "installation-panneaux-solaires-aix-en-provence-2.avif",
        date: new Date("2024-02-15"),
        region: "Provence-Alpes-Côte d'Azur",
        city: "Aix-en-Provence",
        type: "Panneaux Solaires",
        year: 2024,
        specifications: {
          puissance: 6.4,
          pannels: 16,
          surface: 32,
          orientation: "Sud",
          economie: 850
        }
      }
    ]);

    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
