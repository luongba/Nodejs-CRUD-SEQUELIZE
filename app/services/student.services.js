const { Student } = require("../model");

const getStudent = async () => {
  const students = await Student.findAll();
  if (students) {
    return students;
  } else {
    return false;
  }
};
const findStudentById = async (id) => {
  const student = await Student.findOne({
    where: {
      id,
    },
  });
  if (student) {
    return student;
  }
  return false;
};

const create = async (data) => {
  const newStudent = await Student.create(data);
  return newStudent;
};

const update = async (data, id) => {
  const student = await Student.update(data, {
    where: {
      id,
    },
  });
  if (student) {
    return true;
  } else {
    return false;
  }
};

const deleteSt = async (id) => {
  const student = await Student.destroy({
    where: {
      id,
    },
  });
  if (student) {
    return true;
  } else {
    return false;
  }
};
module.exports = {
  getStudent,
  findStudentById,
  create,
  update,
  deleteSt,
};
