import express from "express";
import { postsList } from "../controller/posts-controller.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", postsList);
};

export default routes;
