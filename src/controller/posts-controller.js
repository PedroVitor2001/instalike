import { getPosts } from "../models/posts-model.js";

export async function postsList(req, res) {
  const posts = await getPosts();
  res.status(200).json(posts);
}
