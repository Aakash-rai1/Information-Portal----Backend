const News = require("../models/newsmodel"); //import result model

var ObjectID = require("mongodb").ObjectID;

exports.addnews = (req, res) => {
  // const title = req.body.title;
  // const content = req.body.content;
  // const image = req.file.filename,
  // const newNews = new News({
  //   title: title,
  //   content: content,
  // });
  req.files.map(function (items) {
    const postdata = {
      image: items.filename,
      content: req.body.content,
      title: req.body.title,
    };
    const Post = new News(postdata);

    Post.save()
      .then((result) => {
        res
          .status(200)
          .json({ success: true, message: "News added successfully" });
      })
      .catch((err) => {
        res.status(500).json({ success: false, message: "Failed" });
      });
  });
};

exports.Uploadnewsimage = (req, res) => {
  req.files.map(function (items) {
    const User = {
      image: items.filename,
    };
    News.findOneAndUpdate({ _id: ObjectID(req.params._id) }, User).then(
      function () {
        res
          .status(200)
          .send()
          .catch(function (e) {
            res.status(400).send();
          });
      }
    );
  });
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

//deleteuser
exports.deleteNews = (req, res) => {
  News.deleteOne({ _id: req.params.id })
    .then((suc) => res.send({ mesage: "Admin deleted successfully" }))
    .catch((err) => res.send({ message: "failed to delete admin" }));
};
