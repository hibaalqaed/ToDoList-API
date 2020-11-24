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

exports.updateStatus = (req, res) => {
  const { dataId } = req.params;
  const foundData = data.find((data) => data.id === +dataId);
  if (foundData) {
    for (const key in req.body) foundData[key] = req.body[key]; //sets the object with all the changes
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Data not found." });
  }
};

exports.updatePriority = (req, res) => {
  const { dataId } = req.params;
  const foundData = data.find((data) => data.id === +dataId);
  if (foundData) {
    for (const key in req.body) foundData[key] = req.body[key];
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Data not found." });
  }
};
