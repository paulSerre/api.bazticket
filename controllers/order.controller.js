const Order = require("../models/order.model.js");

exports.findAll = (_, res) => {
       Order.getAll((err, data) => {
           if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving order."
            });
            else {
                res.send(data);
            }
       })
}

exports.findOne = (req, res) => {
    Order.findById(req.params.orderId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Order with id ${req.params.orderId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Order with id " + req.params.orderId
          });
        }
      } else res.send(data);
    });
  };