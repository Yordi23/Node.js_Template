const express = require("express");
const NAController = require("../controllers/NAController.js");
const router = express.Router();

router
  .route("/")
  .get(NAController.getAll)
  .post(NAController.create);

router
  .route("/:id")
  .get(NAController.get)
  .patch(NAController.update)
  .delete(NAController.delete);

module.exports = router;
