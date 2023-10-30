const express = require("express");

const UsersController = require("./controllers/UsersController");
const Thought = require("./models/Thought");
const User = require("./models/User");

const router = express.Router();

router.post("/users/:id", UsersController.createUser);
router.get("/users/:id", UsersController.findAllUsers);
router.get("/users/:id", UsersController.findUser);
router.patch("/users/:id", UsersController.uptadeUser);
router.delete("/users/:id", UsersController.deleteUser);

router.post("/thought", ThoughtController.createThought);

module.exports = router;