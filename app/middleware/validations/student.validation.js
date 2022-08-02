const checkEmty = (req, res, next) => {
  let { name, age, numberClass } = req.body;
  if(name && age && numberClass) {
    next()
  }else {
    res.status(500).send("Không được bỏ trống !")
  }
};

const checkClass = (req, res, next) => {
    let { numberClass } = req.body;
    if(numberClass < 1 || numberClass > 12){
        res.status(500).send("Lớp phải nằm trong khoảng 1 - 12")
    }else {
        next()
    }
}
module.exports = {
    checkEmty,
    checkClass
}