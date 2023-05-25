// @ts-nocheck
import { MongoClient } from 'mongodb';
import { MONGO_URI } from '$env/static/private';

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  console.log('Connecting to MongoDB...');
  const client = new MongoClient(MONGO_URI, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    cachedDb = client.db("hello-freiche-prod");
    return cachedDb;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default async function () {
  return await connectToDatabase();
}
