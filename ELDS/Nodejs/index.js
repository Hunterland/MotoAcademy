const express = require("express");

const app = express();

app.use(express.json());

const checkLogin = () => (req, res, next) => {
  const logado = req.headers.authorization == "Bearer tokenValido";
  if (logado) {
    next();
  } else {
    res.status(401).json({ message: "Porfavor verifique suas credenciais" });
  }
};

let users = [
  { id: 1, name: "Euclides" },
  { id: 2, name: "Filipe" },
];

app.get("/usuarios", checkLogin, (req, res) => {
  res.status(200).json(users);
});

app.post("/usuarios", (req, res) => {
  const name = req.body.name;
  const id = users.length + 1;
  const newUser = { id, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// http://localhost:3000/usaruios/1

app.put("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const userIndex = users.findIndex((user) => user.id == id);
  if (userIndex != -1) {
    users[userIndex].name = name;
    res.json(users[userIndex]);
  } else {
    res.status(400).json({ message: "Usuário não encontrado" });
  }
});

app.delete("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((user) => user.id !== id);
  res.sendStatus(204);
});

app.post("/login", (req, res) => {
  const { name, email, senha } = req.body;
  const user = users.find(
    (user) => user.email === email && user.senha == senha
  );
  if (senha) {
    res.json({ message: "Login bem sucedido!", token: "token inválido!" });
  } else {
    res.json({ message: "credenciais inválidas!" });
  }
});

app.listen(3000);
