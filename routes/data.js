const express = require("express");
const router = express.Router();
const {
  dataList,
  creatData,
  deleteData,
} = require("../controllers/dataController");

//Data List
router.get("/", dataList);

router.post("/", creatData);
router.delete("/:dataId", deleteData);

module.exports = router;
