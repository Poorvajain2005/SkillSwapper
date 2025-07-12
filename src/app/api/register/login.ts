import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "../../lib/mongodb";  // ✅ Correct: named import
import User from "../../models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDB();  // ✅ Correct usage

  // Example response to check connection
  return res.status(200).json({ message: "Connected to MongoDB" });

  // Your real login logic goes here
}
