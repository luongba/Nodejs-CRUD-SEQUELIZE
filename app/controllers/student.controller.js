const {
  getStudent,
  findStudentById,
  create,
  update,
  deleteSt
} = require("../services/student.services");
const getAllStudent = async (req, res) => {
  const students = await getStudent();
  if (students) {
    res.status(200).send(students);
  } else {
    res.status(404).send("Not Found !");
  }
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  let student = await findStudentById(id);
  if (student) {
    res.status(200).send(student);
  }
  res.status(404).send("Not Found !");
};

const createStudent = async (req, res) => {
  let data = req.body;
  let students = await create(data);
  res.status(201).send(students);
};

const updateStudent = async (req, res) => {
  let { id } = req.params;
  let data = req.body;
  let students = await update(data, id);
  if (students) {
    res.status(201).send("Cập nhật student thành công!");
  } else {
    res.status(404).send("Không tìm thấy ID!");
  }
};

const deleteStudent = async (req, res) => {
  let { id } = req.params;
  let student = await deleteSt(id)
  if (student) {
    res.status(201).send("Xóa student thành công");
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
