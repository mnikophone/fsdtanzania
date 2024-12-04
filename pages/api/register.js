import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("users"); // Replace with your database name

    // Example: Fetch a collection
    const collection = await db.collection("myCollection").find({}).toArray(); // Replace with your collection name

    res
      .status(200)
      .json({ success: true, message: "user Registered succesful" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
