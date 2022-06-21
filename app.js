const express = require("express");

//Routers
const { registrationRouter } = require("./routes/registration.routes");

const { db } = require("./utils/database.util");

//Init express data
const app = express();

app.use(express.json());

//Endpoints
app.use("/api/v1/registrations", registrationRouter);

db.authenticate()
  .then(() => console.log("Db authenticate"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("Db sync"))
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log("Express app runing");
});
