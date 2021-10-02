const express = require("express"); //third party package
const cors = require("cors");
const path = require("path");
const bodyparser = require("body-parser");

//third party package
require("dotenv").config(); //for env variables
const app = express();
const publicdirectory = path.join(__dirname, "public");
app.use(express.static(publicdirectory));

require("colors");

require("./database/database");

const userAuth = require("./routes/userroute");
const adminAuth = require("./routes/adminroute");
const resultAuth = require("./routes/resultroute");
const newsAuth = require("./routes/newsroute");
const eventsAuth = require("./routes/eventsroute");
const notification = require("./routes/notificationroute");

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.use(userAuth);
app.use(adminAuth);
app.use(resultAuth);
app.use(newsAuth);
app.use(eventsAuth);
app.use(notification);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on Port : ${port}`.blue.bold);
});
