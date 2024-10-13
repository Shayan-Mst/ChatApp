// back/db.js
import { MongoClient } from 'mongodb'; // Use ES module syntax

// Connection URL and Database Name
const url = 'mongodb://localhost:27017';
const dbName = 'chatAppDB';

const client = new MongoClient(url);

export async function connectToMongoDB() {
  try {
    // Connect the client to the MongoDB server
    await client.connect();
    console.log('Connected successfully to MongoDB');

    // Get the database object
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
