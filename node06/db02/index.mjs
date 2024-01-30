import mysql from "mysql2";

const db = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "Padmin",
  password: "12345",
  database: "nodejs",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

// db.query("SELECT * FROM `sort` WHERE `id` = 3", (error, results) => {
//   console.log(results);
// });

db.execute("SELECT * FROM `sort` WHERE `id` = ?", [6], (error, results) => {
  console.log(results);
});
