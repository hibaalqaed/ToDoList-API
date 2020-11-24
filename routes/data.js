const express = require("express");
const router = express.Router();
const {
  dataList,
  createData,
  deleteData,
} = require("../controllers/dataController");

//Data List
router.get("/", dataList);

//Data Create
router.post("/", createData);

//Data Delete
router.delete("/:dataId", deleteData);

module.exports = router;
