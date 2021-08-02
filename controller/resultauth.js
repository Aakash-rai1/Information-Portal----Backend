const Results = require("../models/results"); //import result model

var ObjectID = require("mongodb").ObjectID;

exports.addresult = (req, res) => {
  const module = req.body.module;
  // const module_id = req.body.module_id;
  const marks_obtained = req.body.marks_obtained;
  const total = req.body.total;
  const user_id = ObjectID(req.body.user_id);

  const newResult = new Results({
    module: module,
    // module_id: module_id,
    marks_obtained: marks_obtained,
    user_id: user_id,
    total: total,
  });

  newResult
    .save()
    .then((result) => {
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

exports.findResultByUserId = async (req, res) => {
  Results.find({ user_id: req.params.user_id })
    .populate("user_id")
    .then(function (result) {
      console.log(result);
      res.status(200).json({ success: true, message: result });
    })
    .catch(function (e) {
      console.log(e);
      res.status(404).json({ message: "Something went Wrong!!" });
    });
};
