const Results = require("../models/results"); //import result model

var ObjectID = require("mongodb").ObjectID;

// Add Result
exports.addresult = (req, res) => {
  const {
    user_id,
    english,
    nepali,
    math,
    opt_math,
    account,
    social,
    science,
    health_population,
  } = req.body;

  const totalScore =
    +english +
    +nepali +
    +math +
    +opt_math +
    +account +
    +social +
    +science +
    +health_population;
  console.log(totalScore);

  const newResult = new Results({
    user_id,
    english,
    nepali,
    math,
    opt_math,
    account,
    social,
    science,
    health_population,
    total: totalScore,
  });

  newResult
    .save()
    .then((result) => {
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
};

exports.findResultByUserId = async (req, res) => {
  Results.find({ user_id: req.params.user_id })
    .populate("user_id", "-tokens -password")
    .then(function (result) {
      console.log(result);
      res.status(200).json({ success: true, message: result });
    })
    .catch(function (e) {
      console.log(e);
      res.status(404).json({ message: "Something went Wrong!!" });
    });
};

//deleteuser
exports.deleteResult = (req, res) => {
  Results.deleteOne({ _id: req.params.id })
    .then((suc) => res.send({ mesage: "Result deleted successfully" }))
    .catch((err) => res.send({ message: "failed to delete result" }));
};
