const mongoose = require("mongoose"); //third party to connect mongodb

mongoose
  .connect(process.env.DATABASEURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database connected Successfully!!`.yellow.bold);
  })
  .catch((err) => console.log(`Database Connection error: `.red.bold, err));
