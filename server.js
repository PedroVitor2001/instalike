import express from "express";
import routes from "./src/routes/post-routes.js";

const app = express();
routes(app);

app.listen(3000, () => {
  console.log("Servidor ligado...");
});
