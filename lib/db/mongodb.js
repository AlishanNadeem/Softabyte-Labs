import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const db_name = process.env.MONGODB_DB_NAME || "softabyte_labs";

/**
 * Reusable MongoDB connection for App Router / serverless.
 * Caches the client on globalThis in development to avoid
 * exhausting connections during hot reload.
 *
 * Connects only when called at request time — never at build time.
 */
let client_promise;

function create_client_promise() {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  const client = new MongoClient(uri, {
    maxPoolSize: 10,
  });

  return client.connect();
}

export async function get_mongo_client() {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (process.env.NODE_ENV === "development") {
    if (!globalThis._softabyte_mongo_client_promise) {
      globalThis._softabyte_mongo_client_promise = create_client_promise();
    }
    return globalThis._softabyte_mongo_client_promise;
  }

  if (!client_promise) {
    client_promise = create_client_promise();
  }

  return client_promise;
}

export async function get_database() {
  const client = await get_mongo_client();
  return client.db(db_name);
}

export async function get_collection(collection_name) {
  const database = await get_database();
  return database.collection(collection_name);
}

export function is_mongodb_configured() {
  return Boolean(uri);
}
