const Events = require("../models/eventsmodel"); //import result model

var ObjectID = require("mongodb").ObjectID;

exports.addevents = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const date = req.body.date;
  const location = req.body.location;

  const ev = new Events({
    title: title,
    content: content,
    date: date,
    location: location,
  });

  ev.save()
    .then((res) => {
      // success insert
      res.status(201).json({
        success: true,
        message: "Events added successful",
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
  console.log("Evnets Sucessfully Added");
};

//display single user
exports.showsingle = (req, res) => {
  const id = req.params.id;
  Events.findOne({ _id: id })
    .then(function (data) {
      res.status(200).json(data);
    })

    .catch(function (e) {
      res.status(500).json({ message: e });
    });
};

//show all users
exports.showEvents = (req, res) => {
  Events.find().then(function (data) {
    res.send({ data: data, success: true });
  });
};

//deleteuser
exports.deleteEvent = (req, res) => {
  Events.deleteOne({ _id: req.params.id })
    .then((suc) => res.send({ mesage: "Events deleted successfully" }))
    .catch((err) => res.send({ message: "failed to delete events" }));
};
