const News = require("../models/newsmodel"); //import result model

var ObjectID = require("mongodb").ObjectID;

exports.addnews = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  const newNews = new News({
    title: title,
    content: content,
  });

  newNews
    .save()
    .then((res) => {
      // success insert
      res.status(201).json({
        success: true,
        message: "News added successful",
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
  console.log("News Sucessfully Added");
};

//display single user
exports.showsingle = (req, res) => {
  const id = req.params.id;
  News.findOne({ _id: id })
    .then(function (data) {
      res.status(200).json(data);
    })

    .catch(function (e) {
      res.status(500).json({ message: e });
    });
};

//show all users
exports.showNews = (req, res) => {
  News.find().then(function (data) {
    res.send({ data: data, success: true });
  });
};
