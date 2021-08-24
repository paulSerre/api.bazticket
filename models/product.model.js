const sql = require("./db.js");

// constructor
const Product = function(product) {
};

Product.getAll = result => {
    sql.query("SELECT id, post_title \
                FROM wp_posts \
                WHERE post_type='product' \
                ORDER BY post_modified DESC", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Entries: ", res);
        result(null, res);
    });
};

module.exports = Product;