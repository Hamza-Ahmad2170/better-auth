import { betterAuth } from "better-auth";

import { mongodbAdapter } from "better-auth/adapters/mongodb";
import connectToMongo from "./db";

export async function createAuth() {
  const db = checkUndefined(await connectToMongo());

  const auth = betterAuth({
    database: mongodbAdapter(db),
    emailAndPassword: {
      enabled: true,
    },
    trustedOrigins: ["http://localhost:5173"],
  });
  return auth;
}

function checkUndefined(db: any) {
  if (db === undefined) {
    throw new Error("MongoDB not connected");
  }
  return db;
}
