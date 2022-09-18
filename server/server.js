const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const usersRoutes = require("./app/routes/users");
const labsRoutes = require("./app/routes/labs");
const appointmentsRoute = require("./app/routes/appointments");
var bodyParser = require("body-parser");
// const bodyParser = require("body-parser");
var cors = require("cors");
app.use(cors({ origin: true, credentials: true }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("hello from server");
});
app.use("/", function (error, req, res, next) {
  if (error instanceof SyntaxError) {
    //Handle SyntaxError here.
    return res.status(500).send({ data: "Invalid data" });
  } else {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  }
});
// users middleware
app.use("/users", usersRoutes);
//labs middleware
app.use("/labs", labsRoutes);
//appointments middleware
app.use("/appointments", appointmentsRoute);

server.listen(3001, () => {
  console.log("yey , your server is runing on port 3001");
});
