const Results = require("../models/results"); //import result model

var ObjectID = require("mongodb").ObjectID;

exports.addresult = (req, res) => {
  const module = req.body.module;
  const module_id = req.body.module_id;
  const marks_obtained = req.body.marks_obtained;
  const total = req.body.total;

  const newResult = new Results({
    module: module,
    module_id: module_id,
    marks_obtained: marks_obtained,
    total: total,
  });

  newResult
    .save()
    .then((res) => {
      // success insert
      res.status(201).json({
        success: true,
        message: "Result added successful",
      });
      console.log("success");
    })
    .catch((err) => {
      console.log("here");
      res.status(500).json({
        success: true,
        message: err,
      });
    });
  console.log("Result Sucessfully Added");
};
