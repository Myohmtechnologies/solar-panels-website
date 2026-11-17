import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

// Do not open MongoDB (or create a rejected promise when env vars are absent)
// while Next.js is collecting route data during `next build`. Connect only
// when a request actually awaits the client.
let mongoClientPromise: Promise<MongoClient> | undefined;

function getMongoClientPromise(): Promise<MongoClient> {
  if (mongoClientPromise) return mongoClientPromise;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return Promise.reject(new Error('MONGODB_URI is not defined'));
  }

  if (process.env.NODE_ENV === 'development') {
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      globalWithMongo._mongoClientPromise = new MongoClient(uri).connect();
    }
    mongoClientPromise = globalWithMongo._mongoClientPromise;
  } else {
    mongoClientPromise = new MongoClient(uri).connect();
  }

  return mongoClientPromise;
}

// Keep the existing `await clientPromise` API while deferring connection
// setup until the promise is consumed by a request handler.
const clientPromise = {
  then: <TResult1 = MongoClient, TResult2 = never>(
    onfulfilled?: ((value: MongoClient) => TResult1 | PromiseLike<TResult1>) | null,
    onrejected?: ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | null,
  ) => getMongoClientPromise().then(onfulfilled, onrejected),
  catch: <TResult = never>(
    onrejected?: ((reason: unknown) => TResult | PromiseLike<TResult>) | null,
  ) => getMongoClientPromise().catch(onrejected),
  finally: (onfinally?: (() => void) | null) => getMongoClientPromise().finally(onfinally),
} as Promise<MongoClient>;

async function dbConnect() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI is not defined');
  }
  await mongoose.connect(uri);
  return mongoose.connection;
}

export { clientPromise, dbConnect };
export default clientPromise;
