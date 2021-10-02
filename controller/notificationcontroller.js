const Notification = require("../models/notification"); //import result model
var ObjectID = require("mongodb").ObjectID;

// Add notification
exports.addNotification = (req, res) => {
  const { title, content } = req.body;
  const ntf = new Notification({ title, content });
  ntf
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Notification added successfully",
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

// get all notification
exports.getAllNotification = (req, res) => {
  Notification.find()
    .then((result) => {
      res.status(200).json({ success: true, result: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false, err: err });
    });
};

// delete  notification by id

exports.deleteNotification = (req, res) => {
  // Notification.deleteOne({ _id: req.params.id })
  //   .then(() => {
  //     res.status(200).json({ success: true, message: "Notification Deleted" });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json({ success: false, err: err });
  //   });

  console.log("here");
  Notification.deleteOne({ _id: req.params.id })
    .then((suc) => res.send({ mesage: "Notication deleted successfully" }))
    .catch((err) => res.send({ message: "failed to delete Notication" }));
};
