const express = require("express");
const router = express.Router();
const { dataList, creatData } = require("../controllers/dataController");

//Data List
router.get("/", dataList);

router.post("/", creatData);

module.exports = router;
