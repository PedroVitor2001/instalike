import "dotenv/config";
import { ObjectId } from "mongodb";
import dbConnection from "../config/dbConfig.js";

const connection = await dbConnection(process.env.DB_CONNECTION);

//GET
export async function getPosts() {
  const db = connection.db("insta-likes");
  const collection = db.collection("posts");
  return collection.find().toArray();
}
//POST
export async function createPost(newPost) {
  const db = connection.db("insta-likes");
  const collection = db.collection("posts");
  return collection.insertOne(newPost);
}
//PUT
export async function updatePost(id, newPost) {
  const db = connection.db("insta-likes");
  const collection = db.collection("posts");
  const objectId = ObjectId.createFromHexString(id);
  return collection.updateOne(
    { _id: new ObjectId(objectId) },
    { $set: newPost }
  );
}
