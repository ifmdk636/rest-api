import express from "express";
import router from "./routes/users.js";
import middlewareLogReq from "./middleware/logs.js";
import dotenv from "dotenv";

dotenv.config({ path: "../src/config/.env" });

const port = process.env.PORT;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware
// app.use(middlewareLogReq);

// app.use("/users", router);
app.post("/", router);
app.get("/users", router);
app.patch("/:idUser", router);
app.delete("/:idUser", router);

app.listen(port, () => {
  console.log("Server terhubung");
});
