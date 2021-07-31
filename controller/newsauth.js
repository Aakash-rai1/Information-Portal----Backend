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
