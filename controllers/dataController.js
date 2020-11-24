let data = require("../data");

//Data List
exports.dataList = (req, res) => {
  res.json(data);
};

exports.createData = (req, res) => {
  const id = data[data.length - 1].id + 1;
  const newData = { id, ...req.body };
  data.push(newData);
  res.json(newData);
};

exports.deleteData = (req, res) => {
  const dataId = req.params.dataId;
  const foundData = data.find((data) => data.id === +dataId);
  if (foundData) {
    data = data.filter((data) => data.id !== +dataId);
    res.status(204).end();
  } else {
    res.status(404).json({ massage: "task not found" });
  }
};
