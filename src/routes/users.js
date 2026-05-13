import express from "express";

import userController from "../controller/users.js";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.json({
//     message: "Get data success",
//   });
// });

// Create - POST
router.post("/", userController.createNewUser);

// Read - GET
router.get("/users", userController.getAllUsers);

// Update - PATCH
router.patch("/:idUser", userController.udpateUser);

// Delete - DELETE
router.delete("/:idUser", userController.deleteUser);

export default router;
