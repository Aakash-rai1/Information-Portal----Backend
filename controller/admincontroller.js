const Admin = require("../models/adminmodel"); //import user model
const bcrypt = require("bcryptjs"); //for  encrypting password
const jwt = require("jsonwebtoken");
// const router = express.Router();
var ObjectID = require("mongodb").ObjectID;

//signup

//signup
exports.signup = (req, res) => {
  console.log("here");

  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const password = req.body.password;

  Admin.findOne({ email }).exec((err, user) => {
    if (user) {
      console.log("Admin Already Exists.");
      return res.status(400).json({ message: "Admin Already Exists." });
    }
  });

  bcrypt.hash(password, 10, function (err, hash) {
    console.log(hash);
    const me = new Admin({
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
          message: "Registered successful",
        });
        console.log("success");
      })
      .catch(function (err) {
        res.status(500).json({
          success: false,
          message: err,
        });
      });
    console.log("Admin Sucessfully Registered");
  });
};

//login
exports.login = async (req, res) => {
  try {
    const Admins = await Admin.checkCrediantialsDb(
      req.body.email,
      req.body.password
    );

    const token = await Admins.generateAuthToken();

    res.status(200).json({
      success: true,
      message: "Admin logged in Successfully",
      token: token,
      id: Admins._id,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Incorrect Credentials",
    });
  }
};

// logout
exports.logout = (req, res) => {
  Admin.findById(req.user._id, function (err, userdata) {
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

// check user loin status
exports.checklogin = (req, res) => {
  res.send(req.user);
};

// updateadmin
exports.updateAdmin = (req, res) => {
  const fname = req.body.fname;
  console.log(name);
  Admin.updateOne({ _id: ObjectID(req.params._id) }, { fname: fname })
    .then(function () {
      res
        .status(200)
        .json({ success: true, message: "Admin  Updated Successfully!" });
    })
    .catch(function (e) {
      res.status(400).json({ success: false, error: "Something went wrong" });
    });
};

//display single user
exports.showsingle = (req, res) => {
  const id = req.params.id;
  Admin.findOne({ _id: id })
    .then(function (data) {
      res.status(200).json(data);
    })

    .catch(function (e) {
      res.status(500).json({ message: e });
    });
};

//show all users
exports.showUsers = (req, res) => {
  Admin.find().then(function (data) {
    res.send({ data: data, success: true });
  });
};

//deleteuser
exports.deleteUser = (req, res) => {
  Admin.deleteOne({ _id: req.params.id })
    .then((suc) => res.send({ mesage: "Admin deleted successfully" }))
    .catch((err) => res.send({ message: "failed to delete admin" }));
};
