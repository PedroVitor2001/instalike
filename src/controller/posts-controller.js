import fs from "fs";
import gerarDescricaoComGemini from "../services/gemini-service.js";
import { createPost, getPosts, updatePost } from "../models/posts-model.js";

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
//PUT
export async function updateNewPost(req, res) {
  const id = req.params.id;
  const urlImg = `http://localhost:3000/${id}.png`;
  try {
    const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
    const description = await gerarDescricaoComGemini(imgBuffer);
    const post = {
      imgUrl: urlImg,
      description: description,
      alt: req.body.alt,
    };
    const createdPost = await updatePost(id, post);
    res.status(200).json(createdPost);
  } catch (err) {
    console.error("Error when creating post", err.message);
    res.status(500).json({ "erro?": "Requisition failed" });
  }
}

export async function uploadNewImage(req, res) {
  const newImage = {
    description: "",
    imgUrl: req.file.originalname,
    alt: "",
  };
  try {
    const createdPost = await createPost(newImage);
    const updatedImg = `uploads/${createdPost.insertedId}.png`;
    fs.renameSync(req.file.path, updatedImg);
    res.status(200).json(createdPost);
  } catch (err) {
    console.error("Error when creating post", err.message);
    res.status(500).json({ "erro?": "Requisition failed" });
  }
}
