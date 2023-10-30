const express = require("express");

const ThoughtsControllers = require("../controllers/ThoughtsController")

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsControllers.dashboard);

router.get("/thoughts-create", ThoughtController.registerThought);

router.post("/thoughts/create", ThoughtsControllers.createThought);

router.get("/thoughts/edit/:id", ThoughtController.showPageEditThought);
router.post("/thoughts/uptade/:id", ThoughtsControllers.uptadeThought);

router.delete("/thoughts/remove/:id", ThoughtController.deleteThought);

module.exports = router;