module.exports = app => {

    const orders = require("../controllers/wordpress.controller.js");
    
    // Retrieve all orders
    app.get("/orders", orders.findAll);

      // Retrieve a single Customer with customerId
    app.get("/orders/:orderId", orders.findOne);

};