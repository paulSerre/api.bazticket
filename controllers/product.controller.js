const Product = require("../models/product.model.js");

exports.findAll = (_, res) => {
    Product.getAll((err, data) => {
      if (err)
          res.status(500).send({
              message:
                  err.message || "Some error occurred while retrieving entry."
              });
      else res.send(data);
  });
};

