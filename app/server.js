const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("task_management", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

const Task = sequelize.define("Task", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

//ĐÒng bộ model

// const syncModel = async () => {
//   await Task.sync({force: true}) //xóa bản cũ và tạo bản mới
//   // Task.sync({alter: true}) //Sửa bảng cũ thành bảng mới
//   console.log("Đã đồng bộ model Task");
// }

// syncModel()
//Tao task
// c1
const createTask = async (name, status) => {
  //   const newTask = Task.build({
  //     name,
  //     status
  //   });
  //   await newTask.save()

  //c2
  const newTask = await Task.create({
    name,
    status,
  });
};

// createTask("Hoc Laravel", "FINISH")


//Lay task
const getAllTask = async  () => {
  const taskList = await Task.findAll();
  console.log(JSON.stringify(taskList, null, 2));
}

// getAllTask()

//Lay task theo id

const getTaskById = async (id) => {
  const task = await Task.findOne({
    where: {
      id
    }
  })
  console.log(JSON.stringify(task, null, 2));
}

// getTaskById(1)

//update task

const updateTaskById = async (data, id) => {
  const task = Task.update(data, {
    where: {
      id
    }
  })
}

// updateTaskById({name: "Hoc Vuejs", status: "PENDING"}, 1)

//Xoa Task

const deleteTaskById = async (id) => {
  const task = Task.destroy({
    where: {
      id
    }
  })
}

deleteTaskById(3)

const checkConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Kết nối thành công!");
  } catch (err) {
    console.log("Kết nối thất bại");
  }
};
checkConnect();
const path = require("path");
const app = express();
const port = 3000;
const router = require("./routers/root.route");
app.use(express.json());
const pathPublic = path.join(__dirname, "/public");
app.use(express.static(pathPublic));

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
