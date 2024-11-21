import multer from "multer";
import express from "express";
import {
  createNewPost,
  postsList,
  uploadNewImage,
} from "../controller/posts-controller.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", postsList);
  app.post("/posts", createNewPost);
  app.post("/upload", upload.single("image"), uploadNewImage);
};

export default routes;
