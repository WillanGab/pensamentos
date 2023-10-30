const express = require("express");

const UsersControllers = require("../controllers/UsersController")

const router = express.Router();

router.post("/users", UsersController.createUser);

router.get("/users", UsersController.findAllUsers);

router.get("/users/:id", UsersController.findUser);

router.patch("/users/:id", UsersController.uptadeUser);

router.delete("/users/:id", UsersController.deleteUser);

router.post("/thought", ThoughtController.createThought);

module.exports = router;