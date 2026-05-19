import express from "express";

import userController from "../controller/users.js";

const router = express.Router();

// Create - POST
router.post("/users", userController.createNewUser);

// Read - GET
router.get("/users", userController.getAllUsers);

// Read - GET By Id
router.get("/users/:idUser", userController.getUserById);

// Update - PATCH
router.patch("/:idUser", userController.updateUser);

// Delete - DELETE
router.delete("/:idUser", userController.deleteUser);

export default router;
