const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.post("/auth/signin", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  console.log(users);
  const user = users.find(
    (user) => user.email === email && password === password
  );
  console.log(user);
  if (user) {
    return res.status(200).json({
      email: user.email,
      bio: user.bio,
      accessToken: "2423423hgjf",
    });
  }
  res.status(403).json({
    message: "Wrong password!",
  });
});
app.post("/auth/signup", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.status(200).json({
    email: req.body.email,
    bio: req.body.bio,
    accessToken: "2423423hgjf",
  });
});

const users = [];
