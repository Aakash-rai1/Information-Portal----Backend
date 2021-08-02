const express = require("express"); //third party package
const cors = require("cors"); //third party package
require("dotenv").config(); //for env variables
const app = express();
require("colors");

require("./database/database");

const userAuth = require("./routes/userroute");
const adminAuth = require("./routes/adminroute");
const resultAuth = require("./routes/resultroute");
const newsAuth = require("./routes/newsroute");
const eventsAuth = require("./routes/eventsroute");

app.use(express.json());
app.use(cors());
app.use(userAuth);
app.use(adminAuth);
app.use(resultAuth);
app.use(newsAuth);
app.use(eventsAuth);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on Port : ${port}`.blue.bold);
});
