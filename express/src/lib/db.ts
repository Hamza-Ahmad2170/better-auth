import mongoose from "mongoose";

export default async function connectToMongo() {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
    return mongoose.connection.db;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      console.log("error: ", error.message);
      console.log("Failed to connect to MongoDB");
    }
    process.exit(1);
    // return undefined;
  }
}
