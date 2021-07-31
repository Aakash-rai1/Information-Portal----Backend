const User = require("../models/usermodel"); //import user model
const bcrypt = require("bcryptjs"); //for  encrypting password
const jwt = require("jsonwebtoken");
// const router = express.Router();
var ObjectID = require("mongodb").ObjectID;

//signup
exports.signup = (req, res) => {
  console.log("here");

  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).exec((err, user) => {
    if (user) {
      console.log("user Already Exists.");
      return res.status(400).json({ message: "User Already Exists." });
    }
  });

  bcrypt.hash(password, 10, function (err, hash) {
    console.log(hash);
    const me = new User({
      fname: fname,
      lname: lname,
      email: email,
      password: hash,
    });
    me.save()
      .then(function (result) {
        // success insert
        res.status(201).json({
          success: true,
          message: "Registered success",
        });
        console.log("success");
      })
      .catch(function (err) {
        res.status(500).json({
          success: false,
          message: err,
        });
      });
    console.log("Sucessfully Registered");
  });
};

//login
exports.login = async (req, res) => {
  try {
    const Users = await User.checkCrediantialsDb(
      req.body.email,
      req.body.password
    );

    const token = await Users.generateAuthToken();

    res.status(200).json({
      success: true,
      message: "User logged in",
      token: token,
      id: Users._id,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Incorrect Credentials",
    });
  }
};

//display single user
exports.showsingle = (req, res) => {
  const id = req.params.id;
  User.findOne({ _id: id })
    .then(function (data) {
      res.status(200).json(data);
    })

    .catch(function (e) {
      res.status(500).json({ message: e });
    });
};

//show all users
exports.showUsers = (req, res) => {
  User.find().then(function (data) {
    res.send({ data: data, success: true });
  });
};

// logout
exports.logout = (req, res) => {
  User.findById(req.user._id, function (err, userdata) {
    console.log(req.token);
    var deletetoken = { token: req.token };
    var delete1 = userdata.tokens.splice(
      userdata.tokens.indexOf(deletetoken),
      1
    );
    userdata.tokens = userdata.tokens.pull(delete1[0]._id);
    console.log(userdata.tokens);
    userdata.save((err, data) => {
      if (err)
        return res.send({
          success: false,
          message: err.message,
        });
    });
    return res.send({
      success: true,
      message: "Logged Out",
    });
  });
};

//function for Login Function
exports.checklogin = async (req, res) => {
  res.send(req.user);
};

// updateuser
exports.updateUser = (req, res) => {
  User.updateOne({ _id: ObjectID(req.params._id) }, req.body)
    .then(function () {
      res
        .status(200)
        .json({ success: true, message: "User  Updated Successfully!" });
    })
    .catch(function (e) {
      res.status(400).json({ success: false, error: "Something went wrong" });
    });
};

//deleteuser
exports.deleteUser = (req, res) => {
  console.log(req.body, req.params.id);
  User.deleteOne({ _id: req.params.id })
    .then((suc) => res.send({ mesage: "User deleted successfully" }))
    .catch((err) => res.send({ message: "failed to delete admin" }));
};
