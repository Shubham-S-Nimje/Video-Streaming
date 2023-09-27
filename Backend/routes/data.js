const express = require("express");
const router = express.Router();

const dataController = require("../controllers/data");

router.get("/fetch-all", dataController.fetchAll);

router.post("/text-data", dataController.uploadTextdata);

module.exports = router;
