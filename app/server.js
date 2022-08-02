const express = require("express");
const {sequelize} = require("./model");

sequelize.sync({alter: true})


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
