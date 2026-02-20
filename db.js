const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "testdb01.c1oiemy84zfq.ap-south-1.rds.amazonaws.com",
  user: "admin", //usernameof db
  password: "Sanju__1234567890",  // Replace with your MySQL password
  database: "testdb01"
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

module.exports = connection;