const students = [
  {
    id: 1,
    name: "Ba",
    age: "22",
    numberClass: "12",
  },
  {
    id: 2,
    name: "Chi",
    age: "22",
    numberClass: "11",
  },
  {
    id: 3,
    name: "BaChi",
    age: "24",
    numberClass: "10",
  },
];

const getStudent = () => {
  if (students) {
    return students;
  } else {
    return false;
  }
};
const findStudentById = (id) => {
  let student = students.find((item) => item.id == id);
  if (student) {
    return student;
  }
  return false;
};

const create = (data) => {
  let studentData = [
    ...students,
    {
      id: Math.random(),
      name: data.name,
      age: data.age,
      numberClass: data.numberClass,
    },
  ];
  return studentData;
};

const update = (data, id) => {
  let index = students.findIndex((item) => item.id == id);
  if (index != -1) {
    students[index] = {
      id: id,
      name: data.name,
      age: data.age,
      numberClass: data.numberClass,
    };
    return students;
  } else {
    return false;
  }
};

const deleteSt = (id) => {
    let index = students.findIndex((item) => item.id == id);
    if (index != -1) {
      students.splice(index, 1);
      return students
    } else {
      return false;
    }
}
module.exports = {
  getStudent,
  findStudentById,
  create,
  update,
  deleteSt
};
