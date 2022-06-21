const express = require("express");

//Controllers
const {
  getAllRecords,
  getRegistrationById,
  createRegistration,
  updateRegistration,
  deleteRegistration,
} = require("../controllers/registration.controller");

const registrationRouter = express.Router();

registrationRouter.get("/", getAllRecords);

registrationRouter.get("/:id", getRegistrationById);

registrationRouter.post("/", createRegistration);

registrationRouter.patch("/:id", updateRegistration);

registrationRouter.delete("/:id", deleteRegistration);

module.exports = { registrationRouter };
