const { Sequelize } = require("sequelize");
const {createStudentModel} = require("./student.model")
const { DB, HOST, PASSWORD, dialect, USER } = require("../configs/db.config");
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect,
});

const Student = createStudentModel(sequelize)

module.exports = { sequelize, Student };
