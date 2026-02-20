const express = require("express");
const db = require("./db");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home page
app.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error(err);
      return res.send("Database error");
    }
    res.render("index", { users: results });
  });
});

// Add page
app.get("/add", (req, res) => {
  res.render("add");
});

// Insert user
app.post("/add", (req, res) => {
  const { name, email } = req.body;

  db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err) => {
      if (err) {
        console.error(err);
        return res.send("Insert error");
      }
      res.redirect("/");
    }
  );
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});