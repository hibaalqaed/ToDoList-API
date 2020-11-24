const express = require("express");
const router = express.Router();
const {
  dataList,
  createData,
  deleteData,
  updateStatus,
  updatePriority,
} = require("../controllers/dataController");

//Data List
router.get("/", dataList);

//Data Create
router.post("/", createData);

//Data Delete
router.delete("/:dataId", deleteData);

//Update Status
router.put("/:dataId", updateStatus);

//Update Priority
router.put("/:dataId", updatePriority);

module.exports = router;
