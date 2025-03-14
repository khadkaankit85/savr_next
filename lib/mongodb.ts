import mongoose from "mongoose";

const { MONGODB_URI } = process.env;
if (!MONGODB_URI) throw new Error("no database uri found in .env:)");

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToMango() {
  if (cached.conn) {
    return cached.conn; //if connection exists, return that
  }
  if (!cached.promise) {
    //create a connection if it doesn't exist
    cached.promise = mongoose.connect(MONGODB_URI!).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise; // cache the connection
  return cached.conn;
}
export default connectToMango;
