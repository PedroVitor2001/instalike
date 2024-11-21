import { createPost, getPosts } from "../models/posts-model.js";

//GET
export async function postsList(req, res) {
  const posts = await getPosts();
  res.status(200).json(posts);
}

//POST
export async function createNewPost(req, res) {
  const newPost = req.body;
  try {
    const createdPost = await createPost(newPost);
    res.status(200).json(createdPost);
  } catch (err) {
    console.error("Error when creating post", err.message);
    res.status(500).json({ "erro?": "Requisition failed" });
  }
}
