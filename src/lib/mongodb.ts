import mongoose from "mongoose";

export const connectToDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("✅ Already connected");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is missing");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("✅ Connected to MongoDB");
};
