// use the path of your model
const Register = require("../models/usermodel");
const mongoose = require("mongoose");
// use the new name of the database
const url = "mongodb://127.0.0.1:27017/Informationportal";
beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
});
afterAll(async () => {
  await mongoose.connection.close();
});
describe("Register Schema test anything", () => {
  it("Add User testing anything", () => {
    const user = {
      fname: "dummy",
      lname: "name",
      email: "fddffsssaddd@gmail.com",
      password: "dummy",
      image: "noimg",
    };

    return Register.create(user).then((pro_ret) => {
      expect(pro_ret.fname).toEqual("dummy");
    });
  });

  // it("to test the update", async () => {
  //   return Register.findOneAndUpdate(
  //     { _id: Object("6157f733ed39e2369c0c65f8") },
  //     { $set: { fname: "dummy name" } }
  //   ).then((pp) => {
  //     expect(pp.fname).toEqual("dummy name");
  //   });
  // });
  // the code below is for delete testing
  it("to test the delete user is working or not", async () => {
    const status = await Register.deleteOne({
      _id: "6157f7334818bb3938be6b79",
    });
    expect(status.ok).toBe(1);
  });
});
