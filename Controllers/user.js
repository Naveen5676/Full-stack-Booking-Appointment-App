const Appointmentdata = require("../Models/Appointmentdata");

exports.postAddData = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phoneno = req.body.phoneno;
  Appointmentdata.create({
    name: name,
    email: email,
    phoneno: phoneno,
  })
    .then((result) => {
      console.log("added data to database");
      res.status(201).json(result);
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Appointmentdata.findAll()
    .then((product) => {
      console.log("sent Products as response");
      res.json(product);
    })
    .catch((err) => console.log(err));
};

exports.postProductsdelete = (req, res, next) => {
  const prodid = req.params.prodid;
  console.log('they id from client',prodid)
  Appointmentdata.findByPk(prodid)
    .then((product) => {
      return product.destroy();
    })
    .then((result)=>{
      console.log('deleted successfully')
      res.status(201)
    })
    .catch((res) => console.log(res));
};
