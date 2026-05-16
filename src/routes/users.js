import express from "express";

import userController from "../controller/users.js";

const router = express.Router();

// Create - POST
router.post("/", userController.createNewUser);

// Read - GET
router.get("/users", userController.getAllUsers);

// Update - PATCH
router.patch("/:idUser", userController.updateUser);

// Delete - DELETE
router.delete("/:idUser", userController.deleteUser);

export default router;
