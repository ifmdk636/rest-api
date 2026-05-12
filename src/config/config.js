import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const db_password = process.env.DB_PASSWORD;
const db = process.env.DB;

let con = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: db_password,
  database: db,
});

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected");
// });

export default con;
