const WooCommerce = require("./wordpressapi.js")

// constructor
const Order = function(orders) {
  
};


Order.getAll = result => {
    WooCommerce.get("orders", {
        per_page: 100,
    })
    .then((response) => {
        result(null, response.data);
    })
    .catch((error) => {            
        console.log("error: ", error);
        result(null, error);
        return;
    })
}

Order.findById = (orderId, result) => {
    WooCommerce.get("orders/"+orderId)
        .then((response) => {
            console.log("Found order : ", response);
            result(null, response.data);
            return;
        })
        .catch((error) => {
            console.log(error.response);
            error.response.status === 404 ? result({ kind: "not_found" }, null) : result(error, null);;
            return;
        })
};

module.exports = Order;