const express = require("express");
const studentRoute = require("./student.router");
const router = express.Router();

router.use("/students",studentRoute);

module.exports = router;