module.exports = app => {
    const product = require("../controllers/product.controller.js");
  
    // Retrieve all products
    app.get("/products", product.findAll);

};