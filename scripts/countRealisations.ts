import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://rmahieddine04:Mahieddine-09@cluster0.h7gr9.mongodb.net/myohm";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("myohm");
    const realisations = database.collection("realisations");

    const count = await realisations.countDocuments();
    console.log(`Nombre total de réalisations: ${count}`);

    const allRealisations = await realisations.find({}).toArray();
    console.log('\nListe des réalisations:');
    allRealisations.forEach(real => {
      console.log(`- ${real.title} (${real.city})`);
    });

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
