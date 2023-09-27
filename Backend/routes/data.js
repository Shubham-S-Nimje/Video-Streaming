const express = require("express");
const router = express.Router();

const dataController = require("../controllers/data");

router.get("/fetch-all", dataController.fetchAll);

router.post("/text-data", dataController.uploadTextdata);

router.put("/edit-text/:id", dataController.editText);

router.delete("/delete-data/:id", dataController.deleteText);

module.exports = router;
