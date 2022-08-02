const {
  getStudent,
  findStudentById,
  create,
  update,
  deleteSt
} = require("../services/student.services");
const getAllStudent = (req, res) => {
  const students = getStudent();
  if (students) {
    res.status(200).send(students);
  } else {
    res.status(404).send("Not Found !");
  }
};

const getStudentById = (req, res) => {
  const { id } = req.params;
  let student = findStudentById(id);
  if (student) {
    res.status(200).send(student);
  }
  res.status(404).send("Not Found !");
};

const createStudent = (req, res) => {
  let data = req.body;
  let students = create(data);
  res.status(201).send(students);
};

const updateStudent = (req, res) => {
  let { id } = req.params;
  let data = req.body;
  let students = update(data, id);
  if (students) {
    res.status(201).send(students);
  } else {
    res.status(404).send("Không tìm thấy ID!");
  }
};

const deleteStudent = (req, res) => {
  let { id } = req.params;
  let student = deleteSt(id)
  if (student) {
    res.status(201).send(students);
  } else {
    res.status(404).send("Không tìm thấy ID!");
  }
};

module.exports = {
  getAllStudent,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
