import { MongoClient } from "mongodb";

// Connection string for MongoDB Atlas
const connectionString =
  "mongodb+srv://admin1:admin1@cluster11.uutxvuv.mongodb.net/?retryWrites=true&w=majority";
const dbName = "your-database-name";

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient && cachedClient.isConnected()) {
    return { client: cachedClient, db: cachedClient.db(dbName) };
  }

  const client = await MongoClient.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = client;

  return { client, db: client.db(dbName) };
}
