const express = require("express");
const { logFeature } = require("../middleware/log-feature");
const { checkEmty, checkClass } = require("../middleware/validations/student.validation")
const studentRoute = express.Router();
const {
  getAllStudent,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller");
studentRoute.get("/", logFeature, getAllStudent);

studentRoute.get("/:id", getStudentById);

studentRoute.post("/",checkEmty, checkClass, createStudent);
studentRoute.put("/:id", updateStudent);

studentRoute.delete("/:id", deleteStudent);

module.exports = studentRoute;
