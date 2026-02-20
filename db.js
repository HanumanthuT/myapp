const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "testdb01.c1oiemy84zfq.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Sanju_11233",  // Replace with your MySQL password
  database: "testdb01"
});

connection.connect((err) => {
  if (err) console.error("MySQL connection error:", err);
  else console.log("Connected to MySQL");
});

module.exports = connection;