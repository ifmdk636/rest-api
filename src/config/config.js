import mysql2 from "mysql2/promise"; // <-- Add /promise here
import dotenv from "dotenv";
dotenv.config();

const db_password = process.env.DB_PASSWORD;
const db = process.env.DB;
const db_port = process.env.PORT_DB;

// Create the promise-based pool
const con = mysql2.createPool({
  host: "localhost",
  user: "root",
  database: "rest-api",
  password: db_password,
  port: db_port,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default con;
