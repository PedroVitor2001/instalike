import dbConnection from "../config/dbConfig.js";

const connection = await dbConnection(process.env.DB_CONNECTION);

export async function getPosts() {
  const db = connection.db("insta-likes");
  const collection = db.collection("posts");
  return collection.find().toArray();
}
