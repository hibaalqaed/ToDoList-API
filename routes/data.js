const express = require("express");
const router = express.Router();
const { dataList } = require("../controllers/dataController");

//Data List
router.get("/", dataList);

module.exports = router;
