import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
const uri = process.env.MONGODB_URI;

let clientPromise: Promise<MongoClient>;

if (!uri) {
  clientPromise = Promise.reject(new Error('Please define the MONGODB_URI environment variable inside .env.local'));
  clientPromise.catch(() => {});
} else {
  const options = {};
  let client: MongoClient;

  if (process.env.NODE_ENV === 'development') {
    if (!(global as any)._mongoClientPromise) {
      client = new MongoClient(uri, options);
      (global as any)._mongoClientPromise = client.connect();
    }
    clientPromise = (global as any)._mongoClientPromise;
  } else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
}

async function dbConnect() {
  if (!uri) {
    throw new Error('MONGODB_URI is not defined');
  }
  await mongoose.connect(uri);
  return mongoose.connection;
}

export { clientPromise, dbConnect };
export default clientPromise;
