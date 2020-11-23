let data = require("../data");

//Data List
exports.dataList = (req, res) => {
  res.json(data);
};

exports.creatData = (req, res) => {
  const id = data[data.length - 1].id + 1;
  const newData = { id, ...req.body };
  data.push(newData);
  res.json(newData);
};
