import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato curioso",
    imagem: "https://placekitten.com/200/300",
  },
  {
    id: 3,
    descricao: "Gatinho dormindo",
    imagem: "https://placekitten.com/300/200",
  },
];

const app = express();
app.use(express.json());

function searchPostById(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.listen(3000, () => {
  console.log("Servidor ligado...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
  const index = searchPostById(req.params.id);
  res.status(200).json(posts[index]);
});
