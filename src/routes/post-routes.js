import express from "express";
import { createNewPost, postsList } from "../controller/posts-controller.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", postsList);
  app.post("/posts", createNewPost);
};

export default routes;
