import multer from "multer";
import express from "express";
import cors from "cors";
import {
  createNewPost,
  postsList,
  uploadNewImage,
  updateNewPost,
} from "../controller/posts-controller.js";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200,
};

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
  app.use(cors(corsOptions));
  app.get("/posts", postsList);
  app.post("/posts", createNewPost);
  app.post("/upload", upload.single("image"), uploadNewImage);
  app.put("/upload/:id", updateNewPost);
};

export default routes;
